const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

btnNode.addEventListener('click',
    async () => {
        const inputWidth = document.querySelector('.input1').value;
        const inputHeight = document.querySelector('.input2').value;
        // const url = 'https://picsum.photos/' + inputWidth + `/` + inputHeight
        if ((inputWidth >= 100 && inputWidth <= 300) && (inputHeight >= 100 && inputHeight <= 300)) {
            const url = await useRequest(inputWidth, inputHeight)
            resultNode.innerHTML = `<img src='${url}' alt='img'>`;
            // console.log(resultNode)
        } else {
            resultNode.innerHTML = `Неверный ввод. Вы ввели ${inputWidth} и ${inputHeight}`;
            // console.log('fail');
        }
    })


function useRequest(inputWidth, inputHeight) {
    fetch('https://picsum.photos/' + inputWidth + '/' + inputHeight)
        .then(response => {response.blob()
        // console.log(1)
        })
        .then(blob => {URL.createObjectURL(blob)
        // console.log(2)
        })
        .catch(() => {
            console.log('failRes')
            resultNode.innerHTML = `Неизвестная ошибка`
                })
        }



