// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


//Defining an entry point to append results to later
const headContainer = document.querySelector('.header-container');

//Header Creator Function
function Header() {
    //Instantiating Element
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');
    //Setting Text
    date.textContent = 'MARCH 28, 2020';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98';
    //Setting className
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //Creating Hierarchy
    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);
    //Appending Results to headerContainer defined
    headContainer.appendChild(header);
}

//Invoking header function
Header();
