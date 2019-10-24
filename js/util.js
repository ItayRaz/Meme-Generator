function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
function loadFromStorage(key) {
    var str = localStorage.getItem(key);
    var value = JSON.parse(str)
    return value;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawRect(x, y) {
    gCtx.rect(x, y, 400, 80)
    gCtx.fillStyle = 'rgba(255, 255, 255, 0.4)'
    gCtx.fillRect(x, y, 400, 80)
}

function deleteRect(x, y) {
    gCtx.rect(x, y, 400, 50)
    gCtx.clearRect(x, y, 150, 150);
}