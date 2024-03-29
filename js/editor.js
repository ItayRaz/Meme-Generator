'use strict'

let gCanvas;
let gCtx;
let gImg;


function initEditor() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderImg()
    gImg = document.querySelector(".canvas-img");
    resizeCanvas()
    setTimeout(() => {
        renderCanvas()
    }, 20);
}

function renderImg() {
    let elImg = document.querySelector('.image');
    let meme = loadFromStorage('meme');
    let image = findImg(meme.selectedImgId);
    let imgHTML =
        `<img id="image-${image.id}" class="canvas-img " src="${image.url}">`
    elImg.innerHTML = imgHTML;
}

function renderCanvas() {
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    let memeTxt = getMeme().txts;
    memeTxt.map(txt => {
        gCtx.textAlign = txt.align;
        gCtx.fillStyle = txt.color;
        gCtx.strokeStyle = txt.stroke;
        gCtx.lineWidth = 2;
        gCtx.font = `${txt.size}px ${txt.font}`;
        gCtx.fillText(txt.line, txt.posX, txt.posY);
        gCtx.strokeText(txt.line, txt.posX, txt.posY)
    })
}

function resizeCanvas() {
    let imgRatio = gImg.height / gImg.width;
    var elContainer = document.querySelector('.canvas-container');
    gCanvas.width = elContainer.offsetWidth;
    gCanvas.height = gCanvas.width * imgRatio;
    
}


function onChanginTxt(elInput) {
    changeMemeTxt(elInput.value);
    renderCanvas();
}


function onIncreaseFontSize() {
    increaseFontSize()
    renderCanvas();
}

function onDecreaseFontSize() {
    decreaseFontSize()
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
    document.querySelector('.text-input').value = '';
    changeStartPos(elBtn);
}

function onChangeStroke(color) {
    changeTxtStroke(color);
    renderCanvas();
}

function onChangeFill(color) {
    changeTxtFill(color);
    renderCanvas();
}

function onTrash() {
    removeLine();
    renderCanvas();
}

function onAlignLeft() {
    alignLeft()
    renderCanvas();
}

function onAlignCenter() {
    alignCenter();
    renderCanvas();
}

function onAlignRight() {
    alignRight();
    renderCanvas();
}

function onChangeFont(elFont) {
    changeTxtFont(elFont);
    renderCanvas();
}

function onDownload(elLink) {
    var canvas = document.querySelector("#my-canvas");
    var img = canvas.toDataURL("image/png");
    elLink.href = `${img}`;
}

function onCanvasClicked(ev) {
    canvasClicked(ev);
}

function onCanvasTouch(ev) {
    canvasTouch(ev)
}

function onDragTxt(ev) {
    dragTxt(ev);
    renderCanvas();
}

function onSave() {
    var canvas = document.querySelector("#my-canvas");
    var img = canvas.toDataURL("image/png");
    
    saveMeme(img);
}

function onMemesEditor() {
    document.querySelector('.canvas-container').classList.add('hide');
    document.querySelector('.settings-container').classList.add('hide');
    renderSavedMemes ();
    document.querySelector('.saved-memes-container').classList.remove('hide');
}