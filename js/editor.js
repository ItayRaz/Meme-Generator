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
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
    let memeTxt = getMeme().txts;
    memeTxt.map(txt => {
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.strokeStyle = 'black';
        gCtx.font = `${txt.size}px Impact`;
        gCtx.fillText(txt.line, txt.posX, txt.posY);
    })
}

function onChangeFontSize(elInput) {
    changeMemeFontSize(elInput.value)
    renderCanvas();
}

function onChangePosX(elBtn) {
    changeTxtPosX(elBtn.innerHTML);
    renderCanvas();
}

function onChangePosY(elBtn) {
    changeTxtPosY(elBtn.innerHTML);
    renderCanvas();
}

function onChangeStartPos(elBtn) {
    changeStartPos(elBtn);
    // renderCanvas();
}