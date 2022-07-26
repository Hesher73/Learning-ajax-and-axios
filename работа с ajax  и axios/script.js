const sendRequestButt = document.querySelector('#ajax-btn');
const pageNumber = document.querySelector('#input-page-number');

sendRequestButt.addEventListener('click', () => {
    const promise = getImagesAxios(pageNumber.value);
    promise
        .then(onDataReceived);
});

function onDataReceived(array){
    array.forEach(element => {
        const img = document.createElement('img');
        img.src = element.thumbnail;
        document.getElementById('result-1').appendChild(img);
    });
}