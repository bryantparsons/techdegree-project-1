/*
The following code will display
five quotes when the "show anoter quote" button is pressed.
*/

// These are the five qutes that will be displayed when the quote button is pressed.
var quotes = [
  {
    quote: "A problem is a chance for you to do your best.", 
    source: "Duke Ellington"
  },
  {
    quote: "We must accept finite disappointment, but never lose infinite hope.",
    source: "Martin Luther King Jr",
    citation: "From 'In My Own Words,' a collection of King's sermons, speeches and writings.",
    year: 2002
  },
  {
    quote: "The road to success is always under constuction.",
    source: "Lily Tomlin"
  },
  {
    quote: "I am the way and the truth and the life.",
    source: "Jesus Christ",
    citation: "John 14:6"
  },
  {
    quote: "Positive thinking must be followed by positive doing.",
    source: "John C. Maxwell"
  }

];

// This function generates a random quote from the quote array.
function getRandomQuote() {
  quoteNum = Math.floor(Math.random() * quotes.length);
  return quotes[quoteNum];
}

/* This function prints the random html that is generated from "getRandomQuote" function, 
and changes the background color
*/

function printQuote() {
  theQuote = getRandomQuote();
  quoteProp = '<p class="quote">' + theQuote.quote + '</p>' +
  '<p class="source">' + theQuote.source;
    if (theQuote.citation) {
      quoteProp += '<span class="citation">' + theQuote.citation + '</span>';
} 
    if (theQuote.year) {
      quoteProp += '<span class="year">' + theQuote.year + '</span>'; 
    }
  quoteProp += '</p>';

  var quoteBoxDiv = document.getElementById('quote-box');
  quoteBoxDiv.innerHTML = quoteProp;

var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);

document.body.style.backgroundColor = 'rgb('+ r + ',' + g + ',' + b +')'; 
}


// Creates button functionality
document.getElementById('load-quote').addEventListener("click", printQuote, false);
