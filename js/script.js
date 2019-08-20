/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


// QUOTES FROM BASEBALL MOVIES 

// It's supposed to be hard. If it wasn't hard, everyone would do it. The hard is what makes it great. - Jimmy Dugan - A League of Their Own
// There's no crying in baseball!! - Jimmy Dugan - A League of Their Own 
// If you build it, he will come. - Shoeless Joe Jackson - Field of Dreams 
// You're killin' me Smalls! - Hamilton "Ham" Porter - The Sandlot Kids 
// Maybe tomorrow we’ll all wear 42 - Ralph Branca - 42 
 
 


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
  quote: "It's supposed to be hard. If it wasn't hard, everyone would do it. The hard is what makes it great.",
  source: "A League of Their Own",
  citation: "Jimmy Dugan",
  year: 1997,
  },
  {
    quote: "There's no crying in baseball!!",
    source: "A League of Their Own",
    citation: "Jimmy Dugan",
    year: 1997
  },
  {
    quote: "If you build it, he will come.",
    source: "A Field of Dreams",
    citation: "Shoeless Joe Jackson",
    year: 1989
  },
  {
    quote: "You're killin me smalls!",
    source: "The Sandlot",
    citation: "Hamilton 'Ham' Porter",
    year: 1993
  },
  {
    quote: "Maybe tomorrow we'll all wear 42",
    source: "42",
    citation: "Ralp Branca",
    year: 2013
  }
];

console.log(quotes);



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {

  let randomQuoteIndex = Math.floor(Math.random() * quotes.length); // gets my random quote index from the quotes object literal
  return quotes[randomQuoteIndex];
}

console.log(getRandomQuote());




/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote variable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {

  let randomQuote = getRandomQuote();
  let HTML = " "; 

  
  HTML += "<p class='quote'> " + randomQuote.quote;
  HTML += "<p class='source'> " + randomQuote.source;
  

  if(randomQuote.citation){
    HTML += "<span class='citation'> " + randomQuote.citation + "</span>";
  }

  if(randomQuote.year){
    HTML += "<span class='year'> " + randomQuote.year + "</span></p>";
  }

  console.log(HTML);

  var div = document.getElementById('quote-box');
  div.innerHTML = HTML;
}

printQuote();







/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.