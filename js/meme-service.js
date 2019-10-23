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
            align: 'center',
            color: 'white',
            posX: 200,
            posY: 60
        },
        {
            line: '',
            size: 50,
            align: 'center',
            color: 'white',
            posX: 200,
            posY: 400
        },
        {
            line: '',
            size: 50,
            align: 'center',
            color: 'white',
            posX: 200,
            posY: 225
        },
    ]
}

function createImgs() {
    let imgs = []
    for (var i = 1; i < 26; i++){
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

function changeMemeFontSize(size) {
    gMeme.txts[gCurrTxt].size = size;
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
    txt === '+' ? gMeme.txts[gCurrTxt].posX += 8 : gMeme.txts[gCurrTxt].posX -= 8;
}

function changeTxtPosY(txt) {
    txt === '+' ? gMeme.txts[gCurrTxt].posY -= 8 : gMeme.txts[gCurrTxt].posY += 8;
}

function changeStartPos(btn) {
    gCurrTxt++;
    switch (gCurrTxt) {
        case 1:
            btn.innerText = 'Bottom'
            
            break;

        case 2:
            btn.innerText = 'Middle'
            
            break;
        case 3:
            btn.innerText = 'Top'
            gCurrTxt = 0
            break;
    
        default:
            break;
    }
}