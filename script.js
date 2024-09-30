// Example JavaScript to fetch news from NewsAPI
const apiKey = '6412250c36044b8a93f683f52b92727d';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function getNews() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    articles.forEach(article => {
        const newsItem = `
        <div class="news-item">
            <img src="${article.urlToImage}" alt="news image" class="news-image">
            <div class="news-content">
                <h2 class="news-title">${article.title}</h2>
                <p class="news-description">${article.description}</p>
                <a href="${article.url}" target="_blank" class="news-link">Read more</a>
            </div>
        </div>`;
        newsContainer.innerHTML += newsItem;
    });
}

getNews();
