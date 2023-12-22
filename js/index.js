Allprojects = []

function showProjectSmallDet(){
  console.log(Allprojects)
  console.log(Allprojects.length)
  Allprojects.forEach(project => {
    document.getElementById("my-projects").innerHTML += `
    <div id="project-detail">
      <img src='data:image/png;base64, ${project["image"]}' width='120px' height='120px'>
      <p>Name ${ "  "+project["name"]}</p>
      <p>Type ${ "  "+project["type"]}</p>
    </div>
    `
    
  });
}

function projectInfo(projects){
  var screenWidth = window.innerWidth;
  console.log(screenWidth)
  if (screenWidth > 720){
    if (document.getElementById("each-project").style.width == "200px"){
      document.getElementById("each-project").style.width = "550px";
      document.getElementById("each-project").style.height = "450px";

      document.getElementById("each-project").innerHTML =
      `<div id='project-data'>
        <div id="short-side">
            <img src="${projects.project_cover}" alt="${projects.name}" width="120px" height="150px">
            <p>name: <h4>${projects.name}</h4></p>
            <p>Type: <p>${projects.type}</p></p>
        </div>
        <div id="descript">
            <h4>Description</h4><br>
            <p>${projects.project_description}</p>
            <a href="#/Projects" onclick="projectInfo()">Less</a>
        </div>
      </div>`;
      console.log(projects.type)

      document.getElementById("project-data").style.display = "flex";
      document.getElementById("short-side").style.flex = 1;
      document.getElementById("descript").style.flex = 1;
      document.getElementById("project-data").style.zIndex = 1;


    }
    else{
      document.getElementById("each-project").style.width = "200px";
      document.getElementById("each-project").innerHTML =
      `<div id='project-data'>
        <img src="${projects.project_cover}" alt="${projects.name}" width="120px" height="150px">
        <p>name: <h4>${projects.project_name}</h4></p>
        <p>Type: <p>${projects.project_type}</p></p>
        <a href="#/Projects" onclick="projectInfo()">More</a>
      </div>`;
    }
  }
  else if (screenWidth <= 720){
    if (document.getElementById("each-project").style.height == "350px"){
      document.getElementById("each-project").style.height = "500px";
      document.getElementById("each-project").innerHTML =
      `<div id='project-data'>
        <img src="${projects.project_cover}" alt="${projects.name}" width="120px" height="150px">
        <p>name: <h4>${projects.project_name}</h4></p>
        <p>Type: <p>${projects.project_type}</p></p>
        <h4>Description</h4><br>
        <p>${projects.project_description}</p>
        <a href="#/Projects" onclick="projectInfo()">Less</a>
      </div>`;
    }
    else{
      document.getElementById("each-project").style.height = "350px";
      document.getElementById("each-project").innerHTML =
      `<div id='project-data'>
        <img src="${projects.project_cover}" alt="${projects.name}" width="120px" height="150px">
        <p>name: <h4>${projects.project_name}</h4></p>
        <p>Type: <p>${projects.project_type}</p></p>
        <a href="#/Projects" onclick="projectInfo()">More</a>
      </div>`;
    }
  }
}

fetch('http://localhost:8080/allApps')
  .then(response => {
    if (!response.ok) {
      document.getElementById("word").innerHTML = '<p>Something went Wrong</p>';
    }
    return response.json();
  })
  .then(data => {
    console.log('Data received:', data);
    Allprojects = data;

//     Try putting this HTML snippet into your served document:
// <img id="ItemPreview" src="">
// Then, on JavaScript side, you can dynamically modify image's src attribute with so-called
// Data URL (https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIS).
// document.getElementById("ItemPreview").src = "data:image/png;base64," +
// yourByteArrayAsBase64;
// Alternatively, using jQuery:
// $('#ItemPreview').attr('src', 'data:image/png;base64,${yourByteArrayAsBase64}`);
// This assumes that your image is stored in PNG format, which is quite popular. If you use
// some other image format (e.g. JPEG), modify the MIME type (
// Answer Sheet: 1/2
    // data.forEach(image => {
      
      // var img = new Image();
      // img.src = 
      // document.body.appendChild(img);
    // }
    // )
    // console.log(data[0]["name"])
    // console.log(data[0]["type"])
    // console.log(data[0]["testLink"])
    // console.log(data[0]["gitHub"])
    // console.log(data[0]["description"])
    // // console.log(data[0]["id"])
    // console.log(data[0]["uuid"])
    // console.log(data[0]["image"])
    // console.log("../img/code.jpg")
    // console.log(data[0]["imageList"].length)

    // var blob = new Blob([data[0]["image"]]);
    // var imageUrl = URL.createObjectURL(blob);
    // var imageElement = new Image();
    // imageElement.src = imageUrl;
    // const uint8Array = new Uint8Array(data[0]["image"]);
    // const blob = new Blob([uint8Array], { type: 'image/jpeg' });
    // const imageUrl = URL.createObjectURL(blob);
    // const imageElement = document.createElement('img');
    // imageElement.src = imageUrl;
    // document.body.appendChild(imageElement);


    // document.getElementById("my-projects").innerHTML = imageElement

    // document.body.appendChild(imageElement);

    // var byteArray = Uint8Array.from(atob(data[0]["image"]), c => c.charCodeAt(0));
    // var blob = new Blob(byteArray, { type: 'image/jpg' })
    // var imageUrl = URL.createObjectURL(blob);
    // var image = new Image();
    // image.src = imageUrl;
    // document.getElementById("my-projects").innerHTML = `<img src='${imageUrl}' width='120px' height='120px'>`
    // console.log(imageUrl.type)
    // console.log(imageUrl.type())
  //   data.forEach(user => 
  //     projectInfo(user))

  })
  // })
  .catch(error => {
    console.error('Fetch error:', error);
  });





function getProjects() {
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
  };


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
      getProjects();
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
      showProjectSmallDet();
      // document.getElementById("my-projects").innerHTML = `hello server`;
      // document.getElementById("my-projects").innerHTML = `<img src='data:image/png;base64, ${Allprojects[1]["image"]}' width='120px' height='120px'>`;
      console.warn(Allprojects);
      // ShowProjects();
    });

  router.addUriListener();

  router.navigateTo('/');
});


function navigatorWidth(){
    document.getElementById("navig").style.width = "60%";
    console.log("clicked");
}
// end::router[]
