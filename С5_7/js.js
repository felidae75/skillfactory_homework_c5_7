const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

if (localStorage.lastJson) {
    const json = JSON.parse(localStorage.getItem('lastJson'));
    displayResult(json);
}

btnNode.addEventListener('click', async () => {
    const page = document.querySelector('.input1').value;
    const limit = document.querySelector('.input2').value;
    // console.log('test')
    if (page > 0 && page <= 10 && limit > 0 && limit <= 10) {
        localStorage.setItem('page', page);
        localStorage.setItem('limit', limit);
        // console.log('test1')
        const json = await useRequest(page, limit);
        localStorage.setItem('lastJson', JSON.stringify(json));
        console.log(localStorage.getItem('lastJson'))
        displayResult(json);
    } else {
        displayFail(page, page);
    }
});


function displayFail (page, limit) {
    if ((page <= 0 || page > 10) && (limit <= 0 || limit > 10)) {
        resultNode.innerHTML = `Страница и лимит вне диапазона от 1 до 10`;
    } else if (page <= 0 || page > 10){
        resultNode.innerHTML = `Страница вне диапазона от 1 до 10`;
    } else {
        resultNode.innerHTML = `Лимит вне диапазона от 1 до 10`;
    }
}

function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
      <div class="card">
        <img class="card_image" src="${item.download_url}" alt="image">
        <p>${item.author}</p>
      </div>`;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

function useRequest(page, limit) {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then(response => {response.json();
            // console.log(1)
        })
        .catch(() => {
            console.log('fail');
            resultNode.innerHTML = 'Неизвестная ошибка';
        })
}



// const requestURL = "https://picsum.photos/v2/list";
//
// const xhr = new XMLHttpRequest()
// xhr.open('GET', requestURL)
// xhr.responseType = 'json';
// xhr.onload = () => {
//     console.log(xhr.response)
// }
// xhr.send()