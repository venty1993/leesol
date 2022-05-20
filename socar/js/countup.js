const place = document.querySelector('.count-up');
const goal = 7000;

for ( let i = 0 ; i <= goal ; i ++) {
    setTimeout(() => {
        place.innerText = i;
    }, i/10);
}