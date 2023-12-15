var favQuote;
var favArr=[];
function getQuote(){
    var quote = ["Be yourself; everyone else is already taken." ,"So many books, so little time." ,"A room without books is like a body without a soul." ,"You only live once, but if you do it right, once is enough" , "A friend is someone who knows all about you and still loves you."];
    var quote_author =["Oscar Wilde", "Frank Zappa","Marcus Tullius Cicero","Mae West" , "Elbert Hubbard"];
    var num=Math.floor(Math.random() * quote.length);  // number 0-4
    document.getElementById("quote").innerHTML= quote[num];
    document.getElementById("author-name").innerHTML = "―" +quote_author[num];
}

