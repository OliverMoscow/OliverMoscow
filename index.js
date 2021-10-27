var songs = [
  {
    title: "Dont Just Stand There",
    artist: "Oliver Moscow",
    credits: [
      { role: "Vocals", name: "Oliver Moscow" },
      { role: "Rhythm Guitar", name: "Oliver Moscow" },
      { role: "Lead Guitar", name: "Caleb Batchelor" },
      { role: "Bass", name: "Jonah Batchelor" },
      { role: "Drums", name: "Ethan Ginsberg" },
      { role: "Producer", name: "Victor Kasian" },
    ],
    description: `This was my first real punk song. It is super fun to play. My favorite part is the intro. The lyrics are 
    quite different than the rest of my music.`,
    genres: "Rock, Punk",
    full: "audio/Dont Just Stand There.mp3",
    abbreviated: "audio/Dont Just Stand There(short).mp3",
  },
  {
    title: "In My Thoughts",
    artist: "Oliver Moscow",
    credits: [
      { role: "Vocals", name: "Oliver Moscow" },
      { role: "Strings", name: "Oliver Moscow (midi)" },
      { role: "Piano", name: "Oliver Moscow" },
      { role: "Bass", name: "Oliver Moscow" },
      { role: "Producer", name: "Victor Kasian" },
    ],
    description: `I wrote this song on piano and it took a long time. In total the song features 5 key changes. Its is the most 
    technical song Ive writen but is also easy to listen to. My favoite part is the tempo change at the end. 
    I am currently working with a perfessional producer to get the song finished nd ready to be distributed.`,
    genres: "R&B, Pop, Orchestral",
    full: "audio/In My Thoughts.mp3",
    abbreviated: "audio/In My Thoughts(short).mp3",
  },
  {
    title: "Watching Jupiter",
    artist: "Oliver Moscow",
    credits: [
      { role: "Vocals", name: "Oliver Moscow" },
      { role: "Rythm Guitar", name: "Oliver Moscow" },
      { role: "Bass", name: "Dan Zahal" },
      { role: "Drums", name: "Will Stutman" },
      { role: "Producer", name: "Victor Kasian" },
    ],
    description: `The unique part of this song is its long instrumental which comes right after the first verse. This was my first expirience
     recording and producing a song and I learned a lot. This song has come a long way and has taken a lot of time and effort.`,
    full: "audio/Watching Jupiter.mp3",
    abbreviated: "audio/Watching Jupiter(short).mp3",
  },
];

var apps = [
  {
    title: "Listnr",
    created: "2018",
    src: "videos/Listnr Demo.mp4",
    description: `An app that alows teenagers to share stories.
    This was the first app I built and it went through many stages of development. 
    My friend Theo helped me with the backend. I handeled all of the UI, audio playback, and audio recording.
    This app tought me a lot about datastructures and front end design. I built it in xcode with the Firbase Database.`,
  },
  {
    title: "OPUS",
    created: "2019",
    src: "videos/Opus video.mov",
    description: `This app was originaly intended as an invoice maker for my landscaping buisness. 
    However, sophmore year, me and a few friends desided to submit a project for The Diamond Chalenge. 
    OPUS serves as a platform for teenagers to easily find jobs, both freelance and for hire. 
    I built the app myself using apples new design interface, SwiftUI. SwiftUI allowed me to create some very complex UI elements.
    Unfortunatly, being a very new platform, It didn't have much support, was very buggy, and there werent many online recorces.`,
  },
  {
    title: "GirlGo!",
    created: "2019",
    src: "videos/GoGirl.mp4",
    description: `I agreed to help build this app because I really liked the idea: a taxi app that makes ridesharing safe for women. 
    Both the drivers and riders are women. I built this app with xcode and mapkit. The most interesting part was modeling Ubers algerithm
    for calculating cost. I continue to provide mentoring for the GirlGo! team. I made sure that my code was easy to read and provided thorough 
    documentation so that it could easily be expanded.`,
  },
  {
    title: "FEITH APP",
    created: "2020",
    src: "videos/FEITH APP.mp4",
    description: `I built this app working for FEITH SYSTEMS AND SERVICES. It allows users to easily acces their documents on mobile. 
    In the proccess of building this app I learned about HTTP and how to use APIs.`,
  },
  {
    title: "FEITH CATEGORIZER",
    created: "2020",
    src: "videos/FEITH CATEGORIZER.mov",
    description: `I website for FEITH SYSTEMS AND SERVICES. It selects a random uncategorized document then
    uses Natural Language Processing, TF - IDF, in order to find simular uncategorized documents which can then be categorized. 
    The web app automaticaly recomends a category based on simular categorized documents. You can see TF - IDF working in the text
     tab of the document viewer. The higlighted words are words that the program found significant.`,
  },
  {
    title: "The Conch",
    created: "2020",
    src: "videos/Conch Demo.mov",
    description: `This is my most recent app that I am working on. It connects with spotifys api and alows users to make free radio
    stations which sync audio playback and interject with livestreamed audio from MUX. It is currently a work in progress. This project
    has tought me a lot about http authentication, webrtc, hls, and websockets. I look forward to finishing it in the future.`,
  },
];

var caberet = {
  title: "Imposibly Ignorant",
  created: "2020",
  src: "videos/Caberet.mp4",
  description: `This is an original song. I wrote the guitar part and lyrics at the same time. This is one of my softer songs which 
    showcases my range as a writer. This performance was a great expirience because it showed me that everything that can go wrong will;
    My distortion pedal didn't work; I didn't like the sound of the amp; and my guitar was out of toon; however, I kept my composure and I'm 
    proud of the work ive done.`,
  
};

var audioSource = document.getElementById("audio-template").innerHTML,
  audioTemplate = Handlebars.compile(audioSource);

var musicSource = document.getElementById("music-template").innerHTML,
  musicTemplate = Handlebars.compile(musicSource);

var projectSource = document.getElementById("project-template").innerHTML,
  projectTemplate = Handlebars.compile(projectSource);

var codeSource = document.getElementById("code-template").innerHTML,
  codeTemplate = Handlebars.compile(codeSource);

var content = document.getElementById("content");

var demo = true;

var start = `\nHello there, \n\nMy name is Oliver Moscow. Welcome to my personal portfolio. Please enjoy :) \n\n
In order to continue please type one of the following commands: \n
  [[;rgba(255,255,255,0.99);]MUSIC]: access my music portfolio\n
  [[;rgba(255,255,255,0.99);]CODE]: access my code portfolio\n
  [[;rgba(255,255,255,0.99);]CONTACT]: see my contact information\n\n
\n**IMPORTANT**\n
  - This website is NOT optomized for mobile devices.
  - Maximize window for optimal viewing.
  - If a command returns nothing press enter again.
  - Zoom in and out with (command +/-) or windows (control +/-)
  - All content displayed on this webpage is subject to copyright.
  - Type [[;rgba(255,255,255,0.99);]START] anytime to see these instructions again.\n\n`;

$("#terminal").terminal(
  {
    START: function () {
      this.echo(() => start);
      hideContent();
    },
    start: function () {
      this.echo(() => start);
      hideContent();
    },
    MUSIC: function () {
      this.echo(music.innerHTML);
      hideContent();
      renderSongs();
    },
    music: function () {
      this.echo(music.innerHTML);
      hideContent();
      renderSongs();
    },
    CODE: function () {
      this.echo(coding.innerHTML);
      hideContent();
      renderProjects();
    },
    code: function () {
      this.echo(coding.innerHTML);
      hideContent();
      renderProjects();
    },
    CONTACT: function () {
      this.echo("email: Omoscow15@gmail.com");
      hideContent();
    },
    contact: function () {
      this.echo("email: Omoscow15@gmail.com");
      hideContent();
    },
  },
  {
    greetings: false,
    onInit() {
      this.echo(
        () =>
          greetings.innerHTML +
          `\n Welcome to my Website type [[;rgba(255,255,255,0.99);]START] to get started.\n`
      );
    },
  },
  function start() {}
);
function toggleDemo() {
  if (demo) {
    $("#music-demo-btn").css("color", "rgb(129, 129, 129)");
    $("#music-full-btn").css("color", "rgb(255, 255, 255)");
  } else {
    $("#music-full-btn").css("color", "rgb(129, 129, 129)");
    $("#music-demo-btn").css("color", "rgb(255, 255, 255)");
  }
  demo = !demo;
}

function renderSongs() {
  var musicItems = songs.map((x) => {
    x["src"] = demo ? x.full : x.abbreviated;
    return audioTemplate(x);
  });
  content.innerHTML = musicTemplate({ content: musicItems, caberet: caberet });
  $("#terminal").height("80%");
  $("#music-demo-btn").click(() => renderSongs());
  $("#music-full-btn").click(() => renderSongs());
  toggleDemo();
}

function renderProjects() {
  var projects = apps.map((x) => projectTemplate(x));
  content.innerHTML = codeTemplate({ content: projects });
  $("#terminal").height("80%");
}

function hideContent() {
  content.innerHTML = "";
  $("#terminal").height("100%");
  $("#content").height("0%");
}
