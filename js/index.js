fetch('http://localhost:8080/greeting')
  .then(response => {
    if (!response.ok) {
      document.getElementById("word").innerHTML = '<p>Something went Wrong</p>';
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
    data.forEach(user => {
      const userDiv = document.createElement("div");
      document.getElementById("project").innerHTML = '<img src="data:image/png;base64,${user.image}" alt="${user.name}" width="100">'
      console.log(user["image"])

      

    })
    // document.getElementById("project").innerHTML = '<img src="data:image/png;base64,' + data[0]["image"] + '" alt="image">';
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animated-text');
    const wordsToAnimate = ['Software Engineering', 'Cloud Architecture', 'Quality Assurance', 'Azure DevOps Engineer'];
  
    function typeWriter(wordIndex) {
      let charIndex = 0;
      const currentWord = wordsToAnimate[wordIndex];
      const textLength = currentWord.length;
  
      function type() {
        textElement.textContent += currentWord.charAt(charIndex);
        charIndex++;
  
        if (charIndex < textLength) {
          setTimeout(type, 200); // Adjust the typing speed (milliseconds)
        } else {
          setTimeout(function () {
            // Clear the text and move to the next word
            textElement.textContent = '';
            const nextWordIndex = (wordIndex + 1) % wordsToAnimate.length;
            typeWriter(nextWordIndex);
          }, 2000); // Adjust the delay before clearing (milliseconds)
        }
      }
  
      type();
    }
  
    typeWriter(0); // Start with the first word
  });


function SendMessage(){
  alert("Button pressed")
}
  
window.addEventListener('load', () => {
  const app = $('#app');

  const defaultTemplate = Handlebars.compile($('#app').html());
  const aboutTemplate = Handlebars.compile($('#about-template').html());
  const skillsTemplate = Handlebars.compile($('#skills-template').html());
  const contactTemplate = Handlebars.compile($('#contact-template').html());
  const projectTemplate = Handlebars.compile($('#projects-template').html());

  const router = new Router({
    mode:'hash',
    root:'index.html',
    page404: (path) => {
      const html = defaultTemplate();
      app.html(html);
    }
  });

  router.add('/AboutMe', async () => {
    html = aboutTemplate();
    app.html(html);
  });

  router.add('/Skills', async () => {
      html = skillsTemplate();
      app.html(html);
    });

  router.add('/contantact-me', async () => {
      html = contactTemplate();
      app.html(html);
    });

    router.add('/Projects', async () => {
      html = projectTemplate();
      app.html(html);
    });

  router.addUriListener();

  router.navigateTo('/');
});


function navigatorWidth(){
    document.getElementById("navig").style.width = "60%";
    console.log("clicked");
}
// end::router[]
