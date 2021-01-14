//immediate invoked function expression


const button = document.querySelector('.btn-outline-primary')
const actualQuote = document.querySelector('.text-muted')
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
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];

 
    const randomNumber = Math.floor(Math.random()*6); 

    sayQuote = quotes[randomNumber];

    actualQuote.textContent = sayQuote.quote;
    actualAuthor.textContent = sayQuote.author;





  

}








