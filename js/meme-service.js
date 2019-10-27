'use strict'

let gIsDraggingTxt = false;
let gCurrDraggedTxt;
let gCurrTxt = 0;
let gNextId = 0;
var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = createImgs();
let gImgToShow;
let gSavedMemes;
var gMeme = {
    selectedImgId: 1,
    selectedTxtIdx: 0,
    txts: [
        {
            line: '',
            size: 30,
            font: 'Impact',
            align: 'center',
            color: 'white',
            stroke: 'black',
            posX: 150,
            posY: 70
        },
        {
            line: '',
            size: 30,
            font: 'Impact',
            align: 'center',
            color: 'white',
            stroke: 'black',
            posX: 200,
            posY: 300
        },
        {
            line: '',
            size: 30,
            font: 'Impact',
            align: 'center',
            color: 'white',
            stroke: 'black',
            posX: 200,
            posY: 185
        },
    ]
}

function createImgs() {
    let imgs = []
    for (var i = 1; i < 9; i++) {
        imgs.push({ id: i, url: `./meme-imgs/${i}.jpg`, keyword: 'happy' })
    }
    for (var i = 9; i < 17; i++) {
        imgs.push({ id: i, url: `./meme-imgs/${i}.jpg`, keyword: 'funny' })
    }
    for (var i = 17; i < 25; i++) {
        imgs.push({ id: i, url: `./meme-imgs/${i}.jpg`, keyword: 'cute' })
    }
    return gImgs = imgs;
}

function updateImageToShow(keyWord) {
    let imgToShow = gImgs.filter((image => {
        return image.keyword.includes(keyWord);
    }))
    console.log(imgToShow);
    
    gImgToShow = imgToShow;
}

function getSavedMemes() {
    let savedMemes = loadFromStorage('memes');
    if (savedMemes) gSavedMemes = savedMemes; 
    else gSavedMemes = [];
    return gSavedMemes;
}

function saveMeme(img) {
    getSavedMemes()
    gSavedMemes.push(img)
    saveToStorage('memes', gSavedMemes);
}

function getImgs() {
    if (!gImgToShow) return gImgs;
    return gImgToShow;;
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
            drawRect(0, gMeme.txts[gCurrTxt].posY - 70)
            timeOut = setTimeout(() => {
                renderCanvas()
            }, 3000);
            break;
        case 2:
            clearTimeout(timeOut);
            renderCanvas()
            drawRect(0, gMeme.txts[gCurrTxt].posY - 70)
            timeOut = setTimeout(() => {
                renderCanvas()
            }, 3000);
            break;
        case 3:
            gCurrTxt = 0
            clearTimeout(timeOut);
            renderCanvas()
            drawRect(0, gMeme.txts[gCurrTxt].posY - 70)
            timeOut = setTimeout(() => {
                renderCanvas()
            }, 3000);
            break;

        default:
            break;
    }
}

function canvasClicked(ev) {
    let clickedTxt = gMeme.txts.find((txt) => {
        return ev.offsetX > txt.posX - 150 &&
               ev.offsetX < txt.posX + 150 &&
               ev.offsetY < txt.posY + 5 &&
               ev.offsetY > txt.posY - 50
    });

console.log(clickedTxt);

    if (clickedTxt) {
        gIsDraggingTxt = true;
        gCurrDraggedTxt = clickedTxt;
    }
    else return;
}

function canvasTouch(ev) {
    let pos = {
        x: ev.touches[0].clientX - ev.touches[0].target.offsetLeft,
        y: ev.touches[0].clientY - ev.touches[0].target.offsetTop
    }
    let clickedTxt = gMeme.txts.find((txt) => {
        return pos.x > txt.posX - 150 &&
            pos.x < txt.posX + 150 &&
            pos.y < txt.posY + 5 &&
            pos.y > txt.posY - 50
    });


    if (clickedTxt) {
        gIsDraggingTxt = true;
        gCurrDraggedTxt = clickedTxt;
    }
    else return;
}

function dragTxt(ev) {
    ev.preventDefault();
    if (gIsDraggingTxt === false) return;
    gCurrDraggedTxt.posX = ev.offsetX;
    gCurrDraggedTxt.posY = ev.offsetY;

    if (ev.type === 'touchmove') {
        gCurrDraggedTxt.posX = ev.touches[0].clientX - ev.touches[0].target.offsetLeft;
        gCurrDraggedTxt.posY = ev.touches[0].clientY - ev.touches[0].target.offsetTop;
    }
}

function toggleIsDragging() {
    gIsDraggingTxt = false;
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
    gMeme.txts[gCurrTxt].posX = 150;
}
function alignRight() {
    gMeme.txts[gCurrTxt].align = 'right'
    gMeme.txts[gCurrTxt].posX = 290;
}

function changeTxtFont(font) {
    gMeme.txts[gCurrTxt].font = font;
}