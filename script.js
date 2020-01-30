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

function getRandomQuote() {
  quoteNum = Math.floor(Math.random() * quotes.length) + 1;
  return quotes[quoteNum];
}

function printQuote() {
  theQuote = getRandomQuote();
  quoteProp = <p class="quote"> quotes.quote </p>
  <p class="source"> quotes.source
    if (quotes.citation) {
    <span class="citation"> quotes.citation </span> 
}
    if (quotes.year) {
    <span class="year"> quotes.year </span> 
}
  </p>;
  
  return quoteProp;
}

console.log(printQuote());

