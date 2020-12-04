// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articleData = axios.get('https://lambda-times-api.herokuapp.com/articles');

const cardEntry = document.querySelector('.cards-container')

function cardMaker(obj){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imgUrl = document.createElement('img');
    const authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    headline.textContent = obj.headline;
    // author.textContent = obj.authorName;
    imgUrl.src = obj.authorPhoto;
    authorName.textContent = obj.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    imgContainer.appendChild(imgUrl);
    author.appendChild(imgContainer);
    author.appendChild(authorName);


    card.addEventListener('click', function(event){
        console.log(headline)
    })
    cardEntry.appendChild(card);
}

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        const allData = res.data.articles;
        console.log(allData)

        const javaScript = res.data.articles.javascript;
        // console.log(javaScript);

        const indivJavaItems = javaScript.forEach((item) => {
            cardMaker(item);

            // console.log('JavaScript ID', item.id);
            // console.log('JavaScript Headline', item.headline);
            // console.log('JavaScript AuthorPhoto', item.authorPhoto);
            // console.log('JavaScript AuthorName', item.authorName);
        });
    
        const bootstrap = res.data.articles.bootstrap;
        // console.log(bootstrap);

        const indivbootStrapItems = bootstrap.forEach((item) => {
            cardMaker(item);
            // console.log('Bootstrap ID', item.id);
            // console.log('Bootstrap Headline', item.headline);
            // console.log('Bootstrap AuthorPhoto', item.authorPhoto);
            // console.log('Bootstrap AuthorName', item.authorName);
        });

        const technology = res.data.articles.technology;
        // console.log(technology);

        const indivTechItems = technology.forEach((item) => {
            cardMaker(item);
            // console.log('Technology ID', item.id);
            // console.log('Technology Headline', item.headline);
            // console.log('Technology AuthorPhoto', item.authorPhoto);
            // console.log('Technology AuthorName', item.authorName);
        });

        const jquery = res.data.articles.jquery;
        // console.log(jquery);

        const indivjQueryItems = jquery.forEach((item) => {
            cardMaker(item);
            // console.log('jQuery ID', item.id);
            // console.log('jQuery Headline', item.headline);
            // console.log('jQuery AuthorPhoto', item.authorPhoto);
            // console.log('jQuery AuthorName', item.authorName);
        });

        const node = res.data.articles.node;
        // console.log(node);

        const indivNodeItems = node.forEach((item) => {
            cardMaker(item);
            // console.log('Node ID', item.id);
            // console.log('Node Headline', item.headline);
            // console.log('Node AuthorPhoto', item.authorPhoto);
            // console.log('Node AuthorName', item.authorName);
        });
        
        javaScript.addEventListener

        
    }) 