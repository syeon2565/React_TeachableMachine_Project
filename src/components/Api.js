/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';

const URL = "https://teachablemachine.withgoogle.com/models/Bx2-itLur/";
let model, webcam, ctx, labelContainer, maxPredictions, labelContainer2;


const Api = () => {
    const [audio] = useState(new Audio('audio.mp3'));

    useEffect(() => {
        async function turtle() {
            const modelURL = URL + "model.json";
            const metadataURL = URL + "metadata.json";

            model = await tmPose.load(modelURL, metadataURL);
            maxPredictions = model.getTotalClasses();

            // Convenience function to setup a webcam
            const size = 500;
            const flip = true; // whether to flip the webcam
            webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
            await webcam.setup(); // request access to the webcam
            await webcam.play();
            window.requestAnimationFrame(loop);

            // append/get elements to the DOM
            const canvas = document.getElementById("canvas");
            canvas.width = size; canvas.height = size;
            ctx = canvas.getContext("2d");
            labelContainer = document.getElementById("label-container");
            labelContainer2 = document.getElementById("label-container2");
            for (let i = 0; i < maxPredictions; i++) { // and class labels
                labelContainer.appendChild(document.createElement("div"));
                labelContainer2.appendChild(document.createElement("div"));
            }
        }
        async function loop(timestamp) {
            webcam.update(); // update the webcam frame
            await predict();
            window.requestAnimationFrame(loop);
        }

        async function predict() {
            // Prediction #1: run input through posenet
            // estimatePose can take in an image, video or canvas html element
            const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
            // Prediction 2: run input through teachable machine classification model
            const prediction = await model.predict(posenetOutput);
            for (let i = 0; i < maxPredictions; i++) {
                const classPrediction =
                    prediction[i].className + ": " + prediction[i].probability.toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction;
            }

            if (prediction[1].probability.toFixed(2) >= 0.50) {
                labelContainer2.childNodes[1].innerHTML = "거북목 위험하므로 주의해주세요";
                audio.play();

            } else {
                labelContainer2.childNodes[1].innerHTML = "올바른 자세를 유지하고 계시네요.<br/> 지금 자세유지에 노력하세요!";
                audio.pause();
            }

            // finally draw the poses
            drawPose(pose);
        }

        function drawPose(pose) {
            if (webcam.canvas) {
                ctx.drawImage(webcam.canvas, 0, 0);
                // draw the keypoints and skeleton
                if (pose) {
                    const minPartConfidence = 0.5;
                    tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
                    tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
                }
            }
        }
        turtle();
    }, [audio])


    return (
        <div className="body">
            <div><canvas id="canvas"></canvas></div>
            <div id="label-container" className="test"></div>
            <div id="label-container2" className="test text"></div>
        </div>
    )
};
export default Api;