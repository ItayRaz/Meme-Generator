'use strict'

let gCanvas;
let gCtx;

function initEditor() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderImg()
    setTimeout(() => {
        renderCanvas()
    }, 20);
}

function renderImg() {
    let elImg = document.querySelector('.image');
    let meme = loadFromStorage('meme');
    let image = findImg(meme.selectedImgId);
    console.log(image);
    
    let imgHTML =
        `<img id="image-${image.id}" src="${image.url}" width="420" height="420">`
    elImg.innerHTML = imgHTML;
}

function renderCanvas() {
    let img = document.querySelector("img");
// console.log(img);

    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    gCtx.fillStyle = getMeme().txts[0].color;
    gCtx.strokeStyle = 'black';
    gCtx.font = "50px Impact";
    gCtx.fillText(getMeme().txts[0].line, 30, 60);
}