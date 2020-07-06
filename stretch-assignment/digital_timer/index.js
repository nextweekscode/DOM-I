const secs = 1;
const miliSecs = secs * 1000;

function countdown() {
    setTimeout('timeGoesUp()', 1000);
}

function timeGoesUp() {
    if (document.getElementbyID) {
        seconds = document.getElementById('secondsOne')
        miliSeconds = document.getElementById('msHundreds')
        
    }
}