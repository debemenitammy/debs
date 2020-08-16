
var quotes = {
  "quotes": [
    {quote: "I love you so much mummy.",
    author: ""},
    {quote: "I can't think of having a better mom than you.",
    author: ""},
    {quote: "You're the best mother I and my siblings could ever ask for.",
    author: ""},
    {quote: "You're thr most cheerful and loving mum I've seen.",
    author: ""},
    {quote: "You've got a beautiful smile.",
    author: ""},
    {quote: "You're a good teacher!",
    author: ""},
    {quote: "I doubt if I'll be in this level I am today if I didn't have such a mom as you." ,
    author: ""},
    {quote: "You're so emotional and you've got such a loving heart.",
    author: ""},
    {quote: "Even Outsiders call you mom.",
    author: ""},
    {quote: "You've made so much impact on my life and the lives of my siblings.",
    author: ""},
    {quote: "You're a good Christian.",
    author: ""},
    {quote: "I love how you take good care of the home.",
    author: ""},
    {quote: "You're really extraordinarily beautiful inside and out Mom.",
    author: ""},
    {quote: "I love you with all my heart and wish you a Happy Birthday from your first Daughter Deborah.",
    author: ""},
  ]
}

function newQuote(){
  var index = Math.floor(Math.random() * quotes.quotes.length);
  var quote = quotes.quotes[index].quote;
  var author = quotes.quotes[index].author == "" ? "Unknown" : quotes.quotes[index].author;
  var url = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+ '"'+ quote +'" ' + author;
  $("#quoteText").html(quote);
}

$(document).ready(function(){
  newQuote();
  $("#newQuote").click(function(){
    var effect = ["blind"];
    var index = Math.floor(Math.random() * effect.length);
    $(".panel").toggle(effect[index], "slow", function(){
      newQuote();
    });
    $(".panel").toggle(effect[index], "slow" );
  });                 
});