const result = document.querySelector('#result');
const btn = document.querySelector('.j-btn');


btn.addEventListener('click', () => {
  const width = +document.getElementById('width').value;
  const height = +document.getElementById('height').value;

  if (100 <= width && width <= 300 && 100 <= height && height <= 300) {
    fetch(`https://picsum.photos/${width}/${height}`)
        .then((response) => {
            result.innerHTML = `<img src=${response.url} alt="">`;
        })
        .catch(() => console.log('error'))
} else {
    result.innerText = 'Одно или оба числа вне заданного диапазона!';
}

document.querySelector('#width').value = '';
document.querySelector('#height').value = '';
});