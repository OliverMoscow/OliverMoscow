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
    full: "audio/Watching Jupiter.mp3",
    abbreviated: "audio/Watching Jupiter(short).mp3",
  },
];

var audioSource = document.getElementById("audio-template").innerHTML,
  audioTemplate = Handlebars.compile(audioSource);

var musicSource = document.getElementById("music-template").innerHTML,
  musicTemplate = Handlebars.compile(musicSource);

var content = document.getElementById("content");

var demo = true;

$("#terminal").terminal(
  {
    START: function () {
      this.echo(
        () =>
          `\nHello there, \n\nWelcome to my personal portfolio. In order to continue please type one of the following commands \n` +
          help.innerHTML +
          `\n** This website is best viewed on desktop. If a command returns nothing press enter again.\n\n`
      );
      hideContent();
    },
    HELP: function () {
      this.echo(help.innerHTML);
    },
    MUSIC: function () {
      this.echo(music.innerHTML);
      hideContent();
      renderSongs();
    },
    CODE: function () {
      this.echo(coding.innerHTML);
    },
    CONTACT: function () {
      this.echo("email: Omoscow15@gmail.com");
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
  }
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
  content.innerHTML = musicTemplate({ content: musicItems });
  $("#terminal").height("80%");
  $("#music-demo-btn").click(() => renderSongs());
  $("#music-full-btn").click(() => renderSongs());
  toggleDemo()
}

function hideContent() {
  content.innerHTML = "";
  $("#terminal").height("100%");
  $("#content").height("0%");
}
