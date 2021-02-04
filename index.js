let dodger = document.getElementById('dodger');

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0 && left < 360) {
        dodger.style.left = `${left + 1}px`
    }
}

