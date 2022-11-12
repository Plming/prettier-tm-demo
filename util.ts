import * as tm from '@teachablemachine/image';

const MY_URL = "https://teachablemachine.withgoogle.com/models/oBLKoXAhG/";

const constraints: MediaStreamConstraints = {
    video: true
};

function onUrlSubmitted() {
    const urlNode = document.getElementById('url') as HTMLInputElement;
    const url = urlNode.value;

    // check if url form is valid
    if (!isValidUrl(url)) {
        alert('Please enter a valid URL');
        return;
    }

    console.log(url);
    console.log(new URL('model.json', url).href);

    tm.load(new URL('model.json', url).href, new URL('metadata.json', url).href)
        .then(model => {
            console.log(model);
        });
}

function isValidUrl(url: string): boolean {
    try {
        new URL(url);
    }
    catch (error) {
        return false;
    }

    return true;
}

async function requestVideoPermission() {
    // 1. URL을 입력해야 함



    try {
        let userMedia = await navigator.mediaDevices.getUserMedia(constraints);
    }
    catch (e) {
        if (e instanceof DOMException && e.name === 'NotAllowedError') {
            console.log('User denied access to camera');
        }
        console.log(e);
        console.log("I'm in catch block");
    }

    const model = await tm.load("", "");
}

