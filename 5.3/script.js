const limit = document.querySelector('.limit');
const resultNode = document.querySelector('#result');
const btnNode = document.querySelector('.j-btn');

function useRequest(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	
	xhr.onload = function() {
	  if (xhr.status != 200) {
		console.log('Статус ответа: ', xhr.status);
	  } 
    else {
		const result = JSON.parse(xhr.response);
		
		if (callback) {
		  callback(result);
		}
	  }
	  
	};	
	
	xhr.onerror = function() {
	  console.log('Ошибка! Статус ответа: ', xhr.status);
	};
	
	xhr.send();
  }; 
	
function displayResult(apiData) {
	let pics = '';

	if( ! Number(limit.value) || Number(limit.value)  > 10 || Number(limit.value) < 1 ) {
		resultNode.innerHTML = 'Число вне диапазона от 1 до 10';
	}else {
        apiData.forEach(item => {
			const picBlock = `
			  <div class="pic">
				<img src="${item.download_url}" class="pic-image" />
				<p>${item.author}</p>
			  </div>
			`;

			pics += picBlock;
		  });
		  resultNode.innerHTML = pics;
	}
  }
  
  btnNode.addEventListener('click', () => {
	useRequest(`https://picsum.photos/v2/list/?limit=${parseInt(limit.value)}`, displayResult);
  });