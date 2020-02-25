// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');



axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {
        let apiData = response.data.articles;
        let bootstrapArr = apiData.bootstrap;
        let javascriptArr = apiData.javascript;
        let technologyArr = apiData.technology;
        let jqueryArr = apiData.jquery;
        let nodeArr = apiData.node;

        function cardDisplay(arr) {
            arr.forEach((item) => {
                cardContainer.appendChild(cardCreator(item));
            });
        }

        cardDisplay(bootstrapArr);
        cardDisplay(javascriptArr);
        cardDisplay(technologyArr);
        cardDisplay(jqueryArr);
        cardDisplay(nodeArr);
    });




function cardCreator(tab) {
    const card = document.createElement('div');
    card.classList.add('card');

    const headLine = document.createElement('div');
    headLine.classList.add('headline');
    headLine.textContent = tab.headline;
    card.appendChild(headLine);

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');


    const img = document.createElement('img');
    img.src = tab.authorPhoto;
    imgContainer.appendChild(img);

    const name = document.createElement('span');
    name.textContent = `By ${tab.authorName}`;
    author.appendChild(imgContainer);
    author.appendChild(name);

    card.appendChild(author);

    return card;
}