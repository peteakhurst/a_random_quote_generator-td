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
 Array of quotes
***/

let quotes = [
  {
  quote: "It's supposed to be hard. If it wasn't hard, everyone would do it. The hard is what makes it great.",
  source: "A League of Their Own",
  citation: "Jimmy Dugan",
  year: 1997,
  tags: ["sport", "comedy", "baseball"]
  },
  {
    quote: "There's no crying in baseball!!",
    source: "A League of Their Own",
    citation: "Jimmy Dugan",
    year: 1997,
    tags: ["sport", "comedy", "baseball"]
  },
  {
    quote: "If you build it, he will come.",
    source: "A Field of Dreams",
    citation: "Shoeless Joe Jackson",
    year: 1989,
    tags: ["sport", "comedy", "baseball"]
  },
  {
    quote: "You're killin me smalls!",
    source: "The Sandlot",
    citation: "Hamilton 'Ham' Porter",
    year: 1993,
    tags: ["sport", "comedy", "baseball"]
  },
  {
    quote: "Maybe tomorrow we'll all wear 42",
    source: "42",
    citation: "Ralp Branca",
    year: 2013,
    tags: ["sport", "comedy", "baseball"]
  }
];

console.log(quotes);



/***
 Get random quote function to choose between the 5 quotes to pass to the print quote function
***/

function getRandomQuote() {

  let randomQuoteIndex = Math.floor(Math.random() * quotes.length); // gets my random quote index from the quotes object literal
  return quotes[randomQuoteIndex];
}

console.log(getRandomQuote());




/***
 Print quote function to print the randomQuote
***/

function printQuote() {

  let randomQuote = getRandomQuote();
  let HTML = " "; 

  
  HTML += "<p class='quote'> " + randomQuote.quote + "</p>";
  HTML += "<p class='source'> " + randomQuote.source;
  

  if(randomQuote.citation){
    HTML += "<span class='citation'> " + randomQuote.citation + "</span>";
  }

  if(randomQuote.year){
    HTML += "<span class='year'> " + randomQuote.year + "</span></p>";
  }

  if(randomQuote.tags) {
    HTML += "<p>Tags: <span class='tags'> " + randomQuote.tags.join(" | ") +"</span>"; 
  }

  console.log(HTML);

  var div = document.getElementById('quote-box');
  div.innerHTML = HTML;
  
  var red = randomBackgroundColor();
  var green = randomBackgroundColor();
  var blue = randomBackgroundColor();

  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  
  document.body.style.backgroundColor = rgbColor;

}

printQuote();

// set interval 
setInterval(function() { 
  printQuote(); 
}, 5000);








// Create random background color function 

function randomBackgroundColor() {
  return Math.floor(Math.random() * 256);
}

/***
  Button to printQuote when clicked 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
