'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [
    { id: 1, url: './meme-imgs/meme1.jpg', keywords: ['happy'] },
    { id: 2, url: './meme-imgs/9.jpg', keywords: ['happy'] },
];
var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            size: 20,
            align: 'left',
            color: 'white'
        }
    ]
}

function getImgs() {
    return gImgs;
}

function getMeme() {
    return gMeme;
}

function changeMemeTxt(txt) {
    gMeme.txts[0].line = txt;
}

function findImg (id) {
    var image = gImgs.find((img) => {
        return img.id === id;
    })
    return image;
}

function changeMemeImg(id) {
    gMeme.selectedImgId = id;
}