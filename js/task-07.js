const refRange = document.querySelector('#font-size-control');
const refText = document.querySelector('#text');

refRange.addEventListener('input', () => {

    refText.style.fontSize = refRange.value + 'px';

})