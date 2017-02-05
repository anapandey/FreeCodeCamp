var getQuote=document.getElementById('quote');
getQuote.innerHTML=getRandomQuote();
var getButton=document.getElementById('clickButton');
var getWall=document.getElementById('wall');
var getImg=document.getElementById('twit');

function postTwit(){
    window.open("https://twitter.com/intent/tweet?text="+getQuote.innerHTML);
}

function displayQuote(){
    getQuote.innerHTML=getRandomQuote();
    var colors=['#779D7B','#9DA4B9','#475788','#7C3D35','#366135','#79785A','#50806D','#6F8251','#5B425F','#9E4262','#EE8665'];
    var randC =Math.floor(Math.random()*colors.length);
    getQuote.style.color=colors[randC];
    getButton.style.backgroundColor=colors[randC];
    getWall.style.backgroundColor=colors[randC];
    getImg.style.backgroundColor=colors[randC];
   
}
function getRandomQuote(){
    var quoteList=['The day is what you make it! So why not make it a great one? - Steve Schulte',
                   'Write it on your heart that every day is the best day in the year.- Ralph Waldo Emerson',
                   'Being miserable is a habit; being happy is a habit; and the choice is yours.- Tom Hopkins',
                   'Things turn out best for the people who make the best of the way things turn out.- John Wooden',
                   'Creativity is intelligence having fun. — Albert Einstein',
                   'Optimism is the one quality more associated with success and happiness than any other. — Brian Tracy',
                   'Always keep your eyes open. Keep watching. Because whatever you see can inspire you. — Grace Coddington',
                   'I destroy my enemies when I make them my friends. — Abraham Lincoln',
                   'It wasn’t raining when Noah built the ark. — Howard Ruff',
                   'Don’t live the same year 75 times and call it a life. — Robin Sharma'];

    var randInt=Math.floor(Math.random()*quoteList.length);
    return quoteList[randInt];
}
                    

    
         
                  
     
                   