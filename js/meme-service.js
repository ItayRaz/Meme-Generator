'use strict'

let gTxtStartPos = 0;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: './meme-imgs/20.jpg', keywords: ['happy'] },
    { id: 2, url: './meme-imgs/8.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            size: 50,
            align: 'left',
            color: 'white',
            posX: 30,
            posY: 60
        },
        {
            line: '',
            size: 50,
            align: 'left',
            color: 'white',
            posX: 30,
            posY: 400
        },
        {
            line: '',
            size: 50,
            align: 'left',
            color: 'white',
            posX: 30,
            posY: 225
        },
    ]
}

function getImgs() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function changeMemeTxt(txt) {
    gMeme.txts[gTxtStartPos].line = txt;
}

function changeMemeFontSize(size) {
    gMeme.txts[gTxtStartPos].size = size;
}

function findImg(id) {
    var image = gImgs.find((img) => {
        return img.id === id;
    })
    return image;
}

function getTxtStartPos() {
    return gTxtStartPos;
}

function changeMemeImg(id) {
    gMeme.selectedImgId = id;
}

function changeTxtPosX(txt) {
    txt === '+' ? gMeme.txts[gTxtStartPos].posX += 8 : gMeme.txts[gTxtStartPos].posX -= 8;
}

function changeTxtPosY(txt) {
    txt === '+' ? gMeme.txts[gTxtStartPos].posY -= 8 : gMeme.txts[gTxtStartPos].posY += 8;
}

function changeStartPos(btn) {
    gTxtStartPos++;
    switch (gTxtStartPos) {
        case 1:
            btn.innerText = 'Bottom'
            
            break;

        case 2:
            btn.innerText = 'Middle'
            
            break;
        case 3:
            btn.innerText = 'Top'
            gTxtStartPos = 0
            break;
    
        default:
            break;
    }
}