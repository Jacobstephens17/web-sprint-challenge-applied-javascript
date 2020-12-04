// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


//Importing Axios
import axios from 'axios';
//Defining results of axios pull
const topicData = axios.get('https://lambda-times-api.herokuapp.com/topics');
//Defining an entry point to append results to later
const entryTabs = document.querySelector('.topics')
//Making a axios pull with a then statement to find each individual tab name
axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then((res) => {
        const tops = res.data.topics;
        tops.forEach((item) => {
            const newTab = tabs(item);
        });  
    })
//Tab maker function
function tabs (obj){
    //Instantiating Element
    const tab = document.createElement('div');
    //Setting Class Name
    tab.className = 'tab';
    //Setting Text Content
    tab.textContent = obj;
    //Apending results to entry point 
    entryTabs.appendChild(tab)
};

