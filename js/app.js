//immediate invoked function expression


const button = document.querySelector('.btn-outline-primary')
const actualQuote = document.getElementById('quote')
const actualAuthor = document.querySelector('.author')

const randomNumber = Math.floor(Math.random()*6); 

button.addEventListener('click', printQuote)

function printQuote() {

  const quotes = [
    {
      quote:
        "Your anger gives you great power. But if you let it, it will destroy you.",
      author: " Ra’s al Ghul"
    },
    {
      quote:
        "You either die as a hero or live long enough to see yourself become the villain.",
      author: "Harvey Dent"
    },
    {
      quote:
        "If you are good at something, never do it for free.",
      author: "Joker "
    },
    {
      quote: "Madness is like gravity. All it takes is a little push.",
      author: "Joker"
    },
    {
      quote:
        "Sometimes the truth isn’t good enough. Sometimes people deserve more. Sometimes people deserve to have their faith rewarded. ",
      author: "Batman"
    },
    {
      quote:
        "I believe whatever doesn’t kill you, simply makes you stranger.",
      author: " Joker"
    },
    {
      quote:
        "A hero can be anyone. Even a man doing something as simple and reassuring as putting a coat around a young boy's shoulders to let him know that the world hadn't ended.",
      author: " Batman"
    }




  ];

 
    const randomNumber = Math.floor(Math.random()*quotes.length); 

    sayQuote = quotes[randomNumber];

    actualQuote.textContent = sayQuote.quote;
    actualAuthor.textContent = sayQuote.author;





  

}








