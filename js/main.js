'use strict'

function init() {
    renderImgs();
}

function renderImgs() {
    let elImgContainer = document.querySelector('.image-container');
    let images = getImgs();
    let imgHTML = images.map((image) => {
        return `<img id="image-${image.id}" src="${image.url}" width="420" height="420" onclick="changeCurrImg(${image.id})">`
    })
    elImgContainer.innerHTML = imgHTML.join('');
}

function changeCurrImg(id) {
    changeMemeImg(id);
    saveToStorage('meme', getMeme());
    window.location.assign('./editor.html')
}

function onHamburger() {
    let elMainMenu = document.querySelector('.main-menu');
    elMainMenu.classList.toggle('hide');
}