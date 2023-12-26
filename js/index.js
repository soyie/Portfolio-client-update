Allprojects = []

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
}

getProjects();

function showProjectSmallDet(){
  console.log(Allprojects)
  console.log(Allprojects.length)
  Allprojects.forEach(project => {
    document.getElementById("my-projects").innerHTML += `
    <div id="project-detail">
      <img src='data:image/png;base64, ${project["image"]}' width='120px' height='120px'>
      <p>Name: ${ "  "+project["name"]}</p>
      <p>Type: ${ "  "+project["type"]}</p>
      <p>Github: ${ "  "+project["gitHub"]}</p>
      <p>Link: ${ "  "+project["testLink"]}</p>
      <a href="#/Projects/${project["uuid"]}">More</a>
    </div>
    `
  });
}

function findOneProject(uuid){
  Allprojects.forEach(project => {
   if (project.uuid == uuid){
    console.log(project)
    
   }
  });
}

function projectInfo(){
  var screenWidth = window.innerWidth;
  console.log(screenWidth)
  if (screenWidth > 720){
    if (document.getElementById("project-detail").style.width == "200px"){
      document.getElementById("project-detail").style.width = "550px";
      document.getElementById("project-detail").style.height = "450px";

      console.log(projects.type)

      document.getElementById("project-data").style.display = "flex";
      document.getElementById("short-side").style.flex = 1;
      document.getElementById("descript").style.flex = 1;
      document.getElementById("project-data").style.zIndex = 1;


    }
    else{
      document.getElementById("project-detail").style.width = "200px";
    }
  }
  else if (screenWidth <= 720){
    if (document.getElementById("project-detail").style.height == "350px"){
      document.getElementById("project-detail").style.height = "500px";
    }
    else{
      document.getElementById("project-detail").style.height = "350px";
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

  })
  // })
  .catch(error => {
    console.error('Fetch error:', error);
  });


  function ChooseProject(choiceIndex){
    console.log(choiceIndex)
  }





function SendMessage(){
  alert("Button pressed")
}
function showSkills(skillsSet){
  showMeSkill = document.getElementById("ShowSkill");
  console.log("pressed");
  console.log(document.getElementById("ShowSkill").style.display)

  switch (skillsSet){
    case "Tools":
      document.getElementById("ShowSkill").innerHTML = `
        <div id="all-skills">
          <h1>Tech tools</h1>
          <h4>Docker</h4>
          <p>I use Docker, to quickly deploy and scale applications into any environment and know my code will run</p>
          <h4>Linux</h4>
          <p>Linux is the environment I use to do all my developments normally I use PopOS and Ubuntu</p>
          <h4>Git</h4>
          <p>Git is a DevOps tool I use it for source code management. It is a version control system used to handle small to very large projects efficiently. <br>I use it to track changes in the source code, it enables me to work with other developers on non-linear development</p>
          <h4>GitHub</h4>
          <p>I use GitHub for hosting code that allows for version control and collaboration</p>
          <h4>GitLab</h4>
          <p>It is a complete DevOps platform that That i use to perform all the tasks in a project from project planning and source code management to monitoring and security.</p>
          <h4>Azure Basics</h4>
          <p>Application development. Build, manage, and continuously deliver cloud apps—with any platform or language..</p>

          <button onclick="closeTools()" id="close-button">Close</button>
        </div>
        `
      document.getElementById("ShowSkill").style.display = "inline-block"
      break
    case 'WebDev':
      document.getElementById("ShowSkill").innerHTML = `
        <div id="all-skills">
          <h1>Web Development</h1>
          <h4>Frontend</h4>
          <p>The frontend of a web application, or client-side, encompasses the user interface (UI) and user experience (UX). Developed with HTML, CSS, and JavaScript,<br> it creates the visual and interactive aspects users engage with. Frontend frameworks, API integration, and cross-browser<br> compatibility enhance development, ensuring a responsive and appealing user experience.</p>
          <h4>Libraries and Frameworks</h4>
          <p>Libraries are collections of pre-written code for specific tasks, offering reusable functions in software development.<br> Frameworks are comprehensive structures providing a foundation and predefined rules for application development. They include libraries, guiding developers with conventions, <br>streamlining the process, and ensuring consistency in building software applications.</p>
          <h4>Backend</h4>
          <p>Refers to the server-side of a web application or software, handling data storage, retrieval, and business logic. <br>It interacts with databases, processes requests, and manages server-side operations. Technologies like server-side programming languages,<br> databases, and server environments are used to build and maintain the backend of an application.</p>
          <button onclick="closeTools()" id="close-button">Close</button>
        </div>
        `
      document.getElementById("ShowSkill").style.display = "inline-block"
      break
    case 'MobileDev':
      document.getElementById("ShowSkill").innerHTML = `
        <div id="all-skills">
          <h1>Mobile Development</h1>
          <h4>Flutter</h4>
          <p>I use Flutter for most of my mobile development because its faster and easy to mentain and to test.</p>
          <h4>React Native</h4>
          <p>I fell inlove with react native because i loved ReactJs and its much easy to beautify Javascript So Native was the best way for mobile development.</p>
          <button onclick="closeTools()" id="close-button">Close</button>
        </div>
        `
      document.getElementById("ShowSkill").style.display = "inline-block"
      break
    case 'SysInt':
      document.getElementById("ShowSkill").innerHTML = `
        <div id="all-skills">
          <h1>Systems intergration</h1>
          <h4>ActiveMQ</h4>
          <p>ActiveMQ is a simplified messaging service I can send messages between servers faster and its much easy for me to use it when sending messages especially between java servers and also python servers but mostly i love it when connecting java and python servers</p>
          <button onclick="closeTools()" id="close-button">Close</button>
        </div>
        `
      document.getElementById("ShowSkill").style.display = "inline-block"
      break
    case 'QualAssur':
      document.getElementById("ShowSkill").innerHTML = `
        <div id="all-skills">
          <h1>Quality Assurance</h1>
          <h4>PyTest</h4>
          <p>I use it for simple unittesting some complex functional testing </p>
          <h4>JUnit</h4>
          <p>This is an amazing java framework for unittesting and intergration testing It's particularly valuable for testing the interactions between different Java components within a system.</p>
          <h4>PyUnit</h4>
          <p>Its an amazing alternative for Pytest and its amazing for testing Python Application.</p>
          <h4>Selenium</h4>
          <p>Its an amazing tool for testing web development for different web browsers and it is an automated script to test all web based services.</p>
          <button onclick="closeTools()" id="close-button">Close</button>
        </div>
        `
      document.getElementById("ShowSkill").style.display = "inline-block"
      break
    case 'Langs':
      document.getElementById("ShowSkill").innerHTML = `
        <div id="all-skills">
          <h1>Programming Languages</h1>
          <h4>Java</h4>
          <p>I Use java for backend development, Systems Intergration, Quality assurance and sometimes I do android development.</p>
          <h4>Javascript</h4>
          <p>this is a very Important language for web development but i also do Mobile development using React-Native and also server side using NodeJS.</p>
          <h4>Dart</h4>
          <p>This is the language that gives me peace when we talk about Mobile development epecially cross platform.</p>
          <h4>Python</h4>
          <p>I use Python for Data science and at the same time i use Python for my Machine learning but im still learning Machine learning.</p>
          <button onclick="closeTools()" id="close-button">Close</button>
        </div>
        `
      document.getElementById("ShowSkill").style.display = "inline-block"
      break
  }
}

function closeTools(){
  showMeSkill = document.getElementById("ShowSkill");
  console.log("closed");
  showMeSkill.style.display = "none"
}

window.addEventListener('load', () => {
  const app = $('#app');

  const defaultTemplate = Handlebars.compile($('#app').html());
  const aboutTemplate = Handlebars.compile($('#about-template').html());
  const skillsTemplate = Handlebars.compile($('#skills-template').html());
  const contactTemplate = Handlebars.compile($('#contact-template').html());
  const projectTemplate = Handlebars.compile($('#projects-template').html());
  const projectInfoTemplate = Handlebars.compile($('#projects-info-template').html());

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
      showProjectSmallDet();
    });

    router.add('/Projects', async () => {
      html = projectTemplate();
      app.html(html);
      showProjectSmallDet();
    });

    router.add('/Projects/{uuid}', async () => {
      html = projectInfoTemplate();
      app.html(html);
      console.log(window.location.hash.split("/")[2]);
      findOneProject(window.location.hash.split("/")[2])
    });

  router.addUriListener();

  router.navigateTo('/');
});


function navigatorWidth(){
    document.getElementById("navig").style.width = "60%";
    console.log("clicked");
}
// end::router[]
