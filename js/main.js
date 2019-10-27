'use strict'

function init() {
    renderImgs();
}


function onMemes() {
    document.querySelector('.image-container').classList.add('hide');
    renderSavedMemes ();
    document.querySelector('.saved-memes-container').classList.remove('hide');
}


function renderImgs() {
    let elImgContainer = document.querySelector('.image-container');
    let images = getImgs();
    if (images.length === 0) return elImgContainer.innerText = 'No Images Found, Try Happy/Cute/Funny'
    let imgHTML = images.map((image) => {
        return `<img id="image-${image.id}" src="${image.url}" width="420" height="420" onclick="changeCurrImg(${image.id})">`
    })
    elImgContainer.innerHTML = imgHTML.join('');
}

function renderSavedMemes () {
    let savedMemesContainer = document.querySelector('.saved-memes-container');
    let memes = getSavedMemes();
    if (memes.length === 0) return savedMemesContainer.innerText = "No Saved Memes";
    let memesHTML = memes.map((meme) => {
        return `<img src="${meme}">`
    })
    savedMemesContainer.innerHTML = memesHTML.join('');
}

function changeCurrImg(id) {
    changeMemeImg(id);
    saveToStorage('meme', getMeme());
    window.location.assign('./editor.html')
}

function onHamburger() {
    let elMainMenu = document.querySelector('.main-menu');
    elMainMenu.classList.toggle('hide-hamburger');
}

function onSrearch() {
    event.preventDefault();
    let keyWord = document.querySelector('.search').value.toLowerCase();
    updateImageToShow(keyWord);
    renderImgs();
}