const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');


// console.log(input, typeof input, intInput, typeof intInput)

btnNode.addEventListener('click',() => {
    const input = document.querySelector('input').value;
    const intInput = +input
    const url = 'https://picsum.photos/v2/list/?limit=' + input
    if (intInput <= 10 && intInput > 0) {
        useRequest(url, displayResult);
        // console.log(url, useRequest)
    } else if (input) {
        resultNode.innerHTML = `Число вне диапазона: ${intInput}`;
        // console.log(resultNode)
    }
})

// btnNode.addEventListener('click', () => {
//    resultNode.innerHTML = 'test';
// })


function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    // console.log(url, callback)

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log('Статус ответа: ', xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
                // console.log(callback)
                // console.log(result)
            }
        }
    };

    xhr.onerror = function() {
        console.log('Ошибка! Статус ответа: ', xhr.status);
        resultNode.innerHTML = 'Неизвестная ошибка'
    };

    // console.log(xhr)

    xhr.send();
}


function displayResult(apiData) {
    let cards = '';
    // console.log(apiData)

    apiData.forEach(item => a {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}


