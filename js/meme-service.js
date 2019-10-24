'use strict'

let gCurrTxt = 0;
let gNextId = 0;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = createImgs();
var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            size: 50,
            font: 'Impact',
            align: 'center',
            color: 'white',
            stroke: 'black',
            posX: 200,
            posY: 60
        },
        {
            line: '',
            size: 50,
            font: 'Impact',
            align: 'center',
            color: 'white',
            stroke: 'black',
            posX: 200,
            posY: 400
        },
        {
            line: '',
            size: 50,
            font: 'Impact',
            align: 'center',
            color: 'white',
            stroke: 'black',
            posX: 200,
            posY: 225
        },
    ]
}

function createImgs() {
    let imgs = []
    for (var i = 1; i < 25; i++) {
        imgs.push({ id: i, url: `./meme-imgs/${i}.jpg`, keywords: ['happy'] })
    }
    return gImgs = imgs;
}

function getImgs() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function changeMemeTxt(txt) {
    gMeme.txts[gCurrTxt].line = txt;
}

function increaseFontSize() {
    gMeme.txts[gCurrTxt].size += 2;
}

function decreaseFontSize() {
    gMeme.txts[gCurrTxt].size -= 2;
}

function findImg(id) {
    var image = gImgs.find((img) => {
        return img.id === id;
    })
    return image;
}

function getTxtStartPos() {
    return gCurrTxt;
}

function changeMemeImg(id) {
    gMeme.selectedImgId = id;
}

function changeTxtPosX(txt) {
    txt === `<img style="transform: rotate(90deg);" src="./ICONS/arrow-up.png" alt="">`
        ? gMeme.txts[gCurrTxt].posX += 8 : gMeme.txts[gCurrTxt].posX -= 8;
}

function changeTxtPosY(txt) {
    txt === '<img src="./ICONS/arrow-down.png" alt="">' ?
        gMeme.txts[gCurrTxt].posY += 8 : gMeme.txts[gCurrTxt].posY -= 8;
}

function changeStartPos(btn) {
    gCurrTxt++;
    let timeOut;
    switch (gCurrTxt) {
        case 1:
            clearTimeout(timeOut);
            renderCanvas()
            drawRect(10, gMeme.txts[gCurrTxt].posY - 70)
            timeOut = setTimeout(() => {
                renderCanvas()
            }, 3000);
            break;
        case 2:
            clearTimeout(timeOut);
            renderCanvas()
            drawRect(10, gMeme.txts[gCurrTxt].posY - 70)
            timeOut = setTimeout(() => {
                renderCanvas()
            }, 3000);
            break;
        case 3:
            gCurrTxt = 0
            clearTimeout(timeOut);
            renderCanvas()
            drawRect(10, gMeme.txts[gCurrTxt].posY - 70)
            timeOut = setTimeout(() => {
                renderCanvas()
            }, 3000);
            break;

        default:
            break;
    }
}

function changeTxtStroke(color) {
    gMeme.txts[gCurrTxt].stroke = color;
}

function changeTxtFill(color) {
    gMeme.txts[gCurrTxt].color = color;
}

function removeLine() {
    gMeme.txts[gCurrTxt].line = ''
}

function alignLeft() {
    gMeme.txts[gCurrTxt].align = 'left'
    gMeme.txts[gCurrTxt].posX = 10;
}
function alignCenter() {
    gMeme.txts[gCurrTxt].align = 'center'
    gMeme.txts[gCurrTxt].posX = 200;
}
function alignRight() {
    gMeme.txts[gCurrTxt].align = 'right'
    gMeme.txts[gCurrTxt].posX = 400;
}

function changeTxtFont(font) {
    gMeme.txts[gCurrTxt].font = font;
}