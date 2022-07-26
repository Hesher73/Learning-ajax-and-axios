// function getImagesAjax(pageNumber) {
//
//     const promise = $.ajax({
//         url: `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`,
//         method: 'get'
//     });
//
//     return promise;
// }


function getImagesAxios(pageNumber) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
    return promise.then((response) => {
        return response.data;
    });
}

