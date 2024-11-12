const videoElement = document.getElementById('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        console.error('Error accessing media devices:', error);
    }
}

startButton.addEventListener('click', async () => {
    startButton.hidden = true;
    stopButton.hidden = false;
    try {
        await videoElement.requestPictureInPicture();
    } catch (error) {
        console.error('Error starting Picture in Picture:', error);
        startButton.hidden = false;
        stopButton.hidden = true;
    }
});

stopButton.addEventListener('click', async () => {
    if (document.pictureInPictureElement) {
        try {
            await document.exitPictureInPicture();
        } catch (error) {
            console.error('Error exiting Picture in Picture:', error);
        }
    }
    startButton.hidden = false;
    stopButton.hidden = true;
});

selectMediaStream();
