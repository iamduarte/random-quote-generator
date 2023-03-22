// This function gets a random quote from the quotes array and displays it
// It also calls for a repost link for twitter and sets it to the <a> element
let getNewQuote = () => {
    const i = randomIndex();
    const twitterLink = generateTwitterLink(i);
    document.getElementById("text").innerText=quotes[i].quote;
    document.getElementById("author").innerText=quotes[i].author;
    document.getElementById("tweet-quote").setAttribute("href", twitterLink);
    
}

// This function generates a random index number between 0 and the length of the quotes array.
let randomIndex = () => {
    return Math.floor(Math.random()*quotes.length);
}


// This function receives an index and converts the respective quote to a twitter link.
let generateTwitterLink = (index) => {
    let quote = quotes[index].quote;
    let author = quotes[index].author;
    let linkQuote = quote.replace(/ /g, "%20");
    let linkAuthor = "%22%20"+author.replace(/ /g, "%20");
    let twitterLink = "https://twitter.com/intent/tweet?text=%22"+linkQuote+linkAuthor;
    return twitterLink;
}