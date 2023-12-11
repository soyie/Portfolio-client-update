// function lookupWord() {
//     const form = document.getElementById("lookup-form");
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const data = new FormData(event.target);
//         const word = data.get("lookup");

//         const options = {
//             method: 'GET',
//         };

//         document.getElementById('results').innerHTML = `<p>Searching for <em>${word}'</em>...</p>`;

//         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, options)
//             .then(response => response.json())
//             .then(data => {
//                 data = {
//                     word: data[0].word,
//                     phonetic: data[0].phonetic,
//                     partOfSpeech: data[0].meanings[0].partOfSpeech,
//                     definitions: data[0].meanings[0].definitions,
//                     pronunciation: data[0].phonetics[0].audio,
//                     partOfSpeechVerb: data[0].meanings[1].partOfSpeech,
//                     definitionsVerb: data[0].meanings[1].definitions
//                 };
//                 const template = document.getElementById('results-template').innerText;
//                 const compiledFunction = Handlebars.compile(template);
//                 document.getElementById('results').innerHTML = compiledFunction(data);
// //                console.log(data.pronunciation)
// //                console.log(data.example)


//             });
//     });;
// }

// function antonymWord() {
//     const form = document.getElementById("lookup-form");
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const data = new FormData(event.target);
//         const word = data.get("lookup");

//         const options = {
//             method: 'GET',
//         };

//         document.getElementById('results').innerHTML = `<p>Searching for <em>${word}'</em>...</p>`;

//         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, options)
//             .then(response => response.json())
//             .then(data => {
//                 data = {
//                     word: data[0].word,
//                     antonym: data[0].meanings[1].antonyms
//                 };
//                 const template = document.getElementById('antonym-template').innerText;
//                 const compiledFunction = Handlebars.compile(template);
//                 document.getElementById('results').innerHTML = compiledFunction(data);
//                 console.log(data.antonym)


//             });
//     });;
// }


// function synonymWord() {
//     const form = document.getElementById("lookup-form");
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const data = new FormData(event.target);
//         const word = data.get("lookup");

//         const options = {
//             method: 'GET',
//         };

//         document.getElementById('results').innerHTML = `<p>Searching for <em>${word}'</em>...</p>`;

//         fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`, options)
//             .then(response => response.json())
//             .then(data => {
//                 data = {
//                     word: data[0].word,
//                     synonyms: data[0].meanings[0].synonyms
//                 };
//                 const template = document.getElementById('synonym-template').innerText;
//                 const compiledFunction = Handlebars.compile(template);
//                 document.getElementById('results').innerHTML = compiledFunction(data);
//                 console.log(data.synonyms)


//             });
//     });;
// }




// tag::router[]

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

  
window.addEventListener('load', () => {
  const app = $('#app');

  const defaultTemplate = Handlebars.compile($('#app').html());
  const aboutTemplate = Handlebars.compile($('#about-template').html());
  const skillsTemplate = Handlebars.compile($('#skills-template').html());
  // const antonymTemplate = Handlebars.compile($('#antonym-template').html());

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

  // router.add('/antonym', async () => {
  //     html = dictionaryTemplate();
  //     app.html(html);
  //     antonymWord();
  //   });


  router.addUriListener();

  $('a').on('click', (event) => {
    event.preventDefault();
    const target = $(event.target);
    const href = target.attr('href');
    const path = href.substring(href.lastIndexOf('/'));
    router.navigateTo(path);
  });

  router.navigateTo('/');
});
// end::router[]
