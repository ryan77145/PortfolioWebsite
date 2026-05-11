//Hamburger Menu JS
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navlinks')[0]
const title = document.getElementsByClassName('title')[0]


toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
    title.classList.toggle('active')
})

//Contact Form JS

const contactForm = document.getElementById('contact');
const banner = document.getElementsByClassName('formsubmittedbanner')[0];

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  
  const response = await fetch('https://ryanshill.com/api/contact', {
    method: 'POST',
    body: new URLSearchParams(formData)
  });

  if (response.ok) {
    banner.classList.toggle('active')
  }
});

const close = document.getElementsByClassName('closebtn')[0];

close.addEventListener('click', () => {
    banner.classList.toggle('active')
})


