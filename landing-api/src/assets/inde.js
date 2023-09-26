"use strict";
const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsQBsZJltmLzlsJNG7HevBg&part=snippet%2Cid&order=date&maxResults=10';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '664539e83cmsh05e0a07745d4402p17176cjsn594137d31577',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
const callVideos = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};
(async () => {
    try {
        const vidios = await callVideos(url, options);
        console.log(vidios);
        let vie = `
        <div id="super-main" class="d-flex flex-row"> 
        ${vidios.items.map((vidio) => `
        <div class="card my-4 py-4 " style="width: 18rem;">
            <img src="${vidio.snippet.thumbnails.high.url}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${vidio.snippet.title}</h5>
            <p class="card-text">${vidio.snippet.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        `)} 
        </div>
        `;
        const container = document.getElementById('big-cards-container');
        if (container) {
            container.innerHTML = vie;
        }
    }
    catch (error) {
        console.error(error);
        window.alert(error);
    }
})();
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
