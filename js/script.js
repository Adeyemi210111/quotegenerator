let btn = document.getElementById('btn');
btn.addEventListener('click', generatequote);
let pquote = document.getElementById('quote');
let citequote = document.getElementById('cite');
let randomQuote = [

    {

        quote: "'All our dreams can come true, if we have the courage to pursue them.'",

        author: "Walt Disney",

    },

    {

        quote: "'The secret of getting ahead is getting started.'",

        author: "Mark Twain",

    },

    {

        quote: "'I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.'",

        author: "Michael Jordan",

    },

    {

        quote: "'Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.'",

        author: "Mary Kay Ash",

    },

    {

        quote: "'The best time to plant a tree was 20 years ago. The second best time is now.'",

        author: "Chinese Proverb",

    },

    {

        quote: "'Only the paranoid survive.'",

        author: "Andy Grove",

    },

    {

        quote: "'It’s hard to beat a person who never gives up.'",

        author: "Babe Ruth",

    },

    {

        quote: "'I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.'",

        author: "Leah Busque",

    },

    {

        quote: "'If people are doubting how far you can go, go so far that you can’t hear them anymore.'",

        author: "Michele Ruiz",

    },

    {

        quote: "'We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.'",

        author: "Arianna Huffington",

    },

    {

        quote: "'Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.'",

        author: "Joss Whedon",

    },

    {

        quote: "'You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth.'",

        author: "William W. Purkey",

    },

    {

        quote: "'Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.'",

        author: "Neil Gaiman",

    },

    {

        quote: "'Everything you can imagine is real.'",

        author: "Pablo Picasso",

    },

    {

        quote: "'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'",

        author: "Helen Keller",

    },

    {

        quote: "'Do one thing every day that scares you.'",

        author: "Eleanor Roosevelt",

    },

    {

        quote: "'It’s no use going back to yesterday, because I was a different person then.'",

        author: "Lewis Carroll",

    },

    {

        quote: "'Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.'",

        author: "Socrates",

    },

    {

        quote: "'Do what you feel in your heart to be right – for you’ll be criticized anyway.'",

        author: "Eleanor Roosevelt",

    },

    {

        quote: "'Happiness is not something ready made. It comes from your own actions.'",

        author: "Dalai Lama XIV",

    },

    {

        quote: "'Whatever you are, be a good one.'",

        author: "Abraham Lincoln",

    },

    {

        quote: "'The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.'",

        author: "Unknown",

    },

    {

        quote: "'If we have the attitude that it’s going to be a great day it usually is.'",

        author: "Catherine Pulsifier",

    },

    {

        quote: "'You can either experience the pain of discipline or the pain of regret. The choice is yours.'",

        author: "Unknown",

    },

    {

        quote: "'Impossible is just an opinion.'",

        author: "Paulo Coelho",

    },

    {

        quote: "'Your passion is waiting for your courage to catch up.'",

        author: "Isabelle Lafleche",

    },

    {

        quote: "'Magic is believing in yourself. If you can make that happen, you can make anything happen.'",

        author: "Johann Wolfgang Von Goethe",

    },

    {

        quote: "'If something is important enough, even if the odds are stacked against you, you should still do it.'",

        author: "Elon Musk",

    },

    {

        quote: "'Hold the vision, trust the process.'",

        author: "Unknown",

    },

    {

        quote: "'Don’t be afraid to give up the good to go for the great.'",

        author: "John D. Rockefeller",

    },

];
// console.log(randomQuote[0].quote);
function generatequote(){
    let num = Math.floor(Math.random() * randomQuote.length);
    // console.log(randomQuote[num].quote);
    // console.log(randomQuote[num].authour);
    pquote.innerHTML = randomQuote[num].quote;
    citequote.innerHTML = randomQuote[num].author;
}