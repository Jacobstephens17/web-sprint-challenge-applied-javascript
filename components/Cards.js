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

    card.classList.add = ('card');
    headline.classList.add = ('headline');
    author.classList.add = ('author');
    imgContainer.classList.add = ('img-container');
    
    headline.textContent = obj.data.articles.javascript.headline;
    author.textContent = obj.data.articles.bootstrap;
    imgContainer.src = '';
    imgUrl.textContent = 
    authorName.textContent = ''

    card.appendChild('headline');
    headline.appendChild('author');
    headline.appendChild('imgContainer');
    headline.appendChild('imgUrl');
    headline.appendChild('')


    card.addEventListener('click', function(event){
        console.log(click.headline)
    })
    cardEntry.appendChild(card);
}

axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        const allData = res.data.articles;
        console.log(allData)



        const javaScript = res.data.articles.javascript;
        console.log(javaScript);

        const indivJavaItems = javaScript.forEach((item) => {
            console.log('JavaScript IDS', item.id);
            console.log('JavaScript headlines', item.headline);
            console.log('JavaScript authorPhoto', item.authorPhoto);
            console.log('JavaScript authorName', item.authorName);
        });



        const bootstrap = res.data.articles.bootstrap;
        console.log(bootstrap);

        const indivbootStrapItems = bootstrap.forEach((item) => {
            console.log('Bootstrap IDS', item.id);
            console.log('Bootstrap headlines', item.headline);
            console.log('Bootstrap authorPhoto', item.authorPhoto);
            console.log('Bootstrap authorName', item.authorName);
        });



        const technology = res.data.articles.technology;
        console.log(technology);

        const indivTechItems = technology.forEach((item) => {
            console.log('Technology IDS', item.id);
            console.log('Technology headlines', item.headline);
            console.log('Technology authorPhoto', item.authorPhoto);
            console.log('Technology authorName', item.authorName);
        });



        const jquery = res.data.articles.jquery;
        console.log(jquery);

        const indivjQueryItems = jquery.forEach((item) => {
            console.log('jQuery IDS', item.id);
            console.log('jQuery headlines', item.headline);
            console.log('jQuery authorPhoto', item.authorPhoto);
            console.log('jQuery authorName', item.authorName);
        });


        const node = res.data.articles.node;
        console.log(node);

        const indivNodeItems = node.forEach((item) => {
            console.log('Node IDS', item.id);
            console.log('Node headlines', item.headline);
            console.log('Node authorPhoto', item.authorPhoto);
            console.log('Node authorName', item.authorName);
        });
        
        javaScript.addEventListener
        
    }) 