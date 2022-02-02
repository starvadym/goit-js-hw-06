const refRange = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

refRange.addEventListener('input', () => {
    console.log(refRange.value);
    refText.style.fontSize = refRange.value + 'px';

})