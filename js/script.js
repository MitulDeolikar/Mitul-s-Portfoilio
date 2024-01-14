
let menuIcon = document.querySelector('.bx-menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


navbar.addEventListener('transitionend', () => {
    if (navbar.classList.contains('active')) {
        navbar.style.transition = 'none'; 
        setTimeout(() => {
            navbar.style.transition = ''; 
        }, 0);
    }
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')
        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });


    
    let header=document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

};


ScrollReveal({
    reset:'true',
    distance:'100px',
    duration:2000,
    delay:100
})
ScrollReveal().reveal('.home-content',{origin:'top'})
ScrollReveal().reveal('.heading',{origin:'top'})
ScrollReveal().reveal('.about-content',{origin:'bottom'})
// ScrollReveal().reveal('.home-img img',{origin:'right'})
// ScrollReveal().reveal('.about-img img',{origin:'left'})
ScrollReveal().reveal('.service-box,.portfolio-box',{origin:'bottom'})
ScrollReveal().reveal('form',{origin:'bottom'})


const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Coding Enthusiast', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 50, 
    backDelay: 500,
    loop: true
});

// Add this within your JavaScript file or script tag

// Check for browser support
if ('speechSynthesis' in window) {
    // Initialize the speech synthesis API
    const synth = window.speechSynthesis;
  
    // Function to read text
    function readText() {
      // Get the text to be read
      const textToRead = document.getElementById('readText').innerText;
  
      // Create a SpeechSynthesisUtterance
      const utterance = new SpeechSynthesisUtterance(textToRead);
  
      // Use default voice (you can customize voices if needed)
      utterance.voice = synth.getVoices()[0];
  
      // Speak the text
      synth.speak(utterance);
    }
  
    // Add a click event listener to the clickable text
    document.getElementById('readText').addEventListener('click', readText);
  } else {
    console.error('Text-to-speech is not supported in this browser.');
  }
  