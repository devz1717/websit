
console.log('Interactive functionality can go here.');

function animateNumberCounting(id, start, end, duration) {
    let element = document.getElementById(id);
    let startTime = null;

    
    function countStep(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = timestamp - startTime;
        let currentNumber = Math.min(start + (end - start) * (progress / duration), end);
        
        element.innerHTML = "IDR " + currentNumber.toLocaleString(); 
        if (progress < duration) {
            requestAnimationFrame(countStep);
        } else {
            element.innerHTML = "IDR " + end.toLocaleString();
        }
    }

    requestAnimationFrame(countStep);
}

animateNumberCounting('jackpot-amount', 0, 1111191233992, 5000);

const audio = document.getElementById('background-music');
audio.volume = 1.0;  

