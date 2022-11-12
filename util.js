"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tm = __importStar(require("@teachablemachine/image"));
const MY_URL = "https://teachablemachine.withgoogle.com/models/oBLKoXAhG/";
const constraints = {
    video: true
};
function onUrlSubmitted() {
    const urlNode = document.getElementById('url');
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
function isValidUrl(url) {
    try {
        new URL(url);
    }
    catch (error) {
        return false;
    }
    return true;
}
function requestVideoPermission() {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. URL을 입력해야 함
        try {
            let userMedia = yield navigator.mediaDevices.getUserMedia(constraints);
        }
        catch (e) {
            if (e instanceof DOMException && e.name === 'NotAllowedError') {
                console.log('User denied access to camera');
            }
            console.log(e);
            console.log("I'm in catch block");
        }
        const model = yield tm.load("", "");
    });
}
//# sourceMappingURL=util.js.map