let result = document.querySelector('#result');

if (localStorage) {
    setPictures(JSON.parse(localStorage.getItem('picUrls')));
}

function getUrls (page, limit) {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            let array = [];
            data.forEach(item => array.push(item.download_url));
            return array;
        })
        .then(urls => {
            localStorage.setItem('picUrls', JSON.stringify(urls));
            setPictures(urls);
        })
        .catch(() => console.log('error'));
}

function setPictures(picUrls) {
  let pics = '';

  picUrls.forEach(item => {
      const picBlock = `
      <div class="pic">
          <img src="${item}" class="pic-image" alt=""/>
      </div>
      `;
      pics += picBlock;
  });

  result.innerHTML = pics;
}

function checkParams() {
  const page = +document.querySelector('#page').value;
  const limit = +document.querySelector('#limit').value;

  if (!(1 <= page && page <= 10) && !(1 <= limit && limit <= 10)) {
      result.innerText = 'Номер страницы и лимит вне диапазона от 1 до 10';
  } else if (!(1 <= page && page <= 10)) {
      result.innerText = 'Номер страницы вне диапазона от 1 до 10';
  } else if (!(1 <= limit && limit <= 10)) {
      result.innerText = 'Лимит вне диапазона от 1 до 10';
  } else {
      getUrls(page, limit);
  }
}


