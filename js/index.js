"use strict";
/*
URL_EXAMPLE
https://teachablemachine.withgoogle.com/models/oBLKoXAhG/
*/
const constraints = {
    video: true
};
const urlNode = document.getElementById('url');
urlNode.addEventListener('input', function () {
    if (isValidUrl(urlNode.value)) {
        buttonNode.disabled = false;
        buttonNode.textContent = "제출하기";
    }
    else {
        buttonNode.disabled = true;
        buttonNode.textContent = "유효한 URL이 아닙니다";
    }
});
const buttonNode = document.getElementById('submit');
buttonNode.addEventListener("click", function () {
    const url = urlNode.value;
    console.log(url);
    console.log(new URL('model.json', url).href);
    fetch(new URL('metadata.json', url).href)
        .then(response => response.json())
        .then(metadata => {
        console.log(metadata);
        switch (metadata.packageName) {
            case "@teachablemachine/image":
                window.location.href = `./image.html?url=${url}`;
                break;
            default:
                throw new Error(`Unknown package name: ${metadata.packageName}`);
        }
    });
});
function isValidUrl(url) {
    try {
        new URL(url);
    }
    catch (error) {
        return false;
    }
    return true;
}
