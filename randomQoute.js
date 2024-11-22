document.addEventListener('DOMContentLoaded', function() {
  const quoteContainer = document.querySelector('.quote');

  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "I fart in my shorts *daily* and nobody says a *damn* thing. - John, the Fart Guy",
    "I'm in danger. - Ralph Wiggum"
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteContainer.textContent = quote;
});
