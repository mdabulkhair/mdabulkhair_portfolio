let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.appendChild(span);
    })
});


let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].computedStyleMap.opacity = "1";

let changeText = ()=> {
    let currentWord = words[currentWordIndex];
    let  nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];


    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80
        );
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter in";
    },340 + i * 80);
});
currentWordIndex = currentWordIndex === maxWordIndex ? 0 :currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)



window.addEventListener('scroll', function() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 300) {
      scrollButton.classList.add('show');
    } else {
      scrollButton.classList.remove('show');
    }
  });
  
  document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // You can perform form submission logic here
    // For example, you can collect form data and send it to a server using AJAX
    // Once the form is submitted, you can display a success message or clear the form fields
    this.reset();
  });




  
  
  
