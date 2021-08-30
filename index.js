$('body').terminal({
    HELP: function () {
        this.echo(help.innerHTML);
    },
    MUSIC: function() {
        this.echo(music.innerHTML)
    },
    CODE: function() {
        this.echo(coding.innerHTML)
    },
    CONTACT: function() {
        this.echo("email: Omoscow15@gmail.com")
    }
}, {
    greetings: false,
    onInit() {
        this.echo(() => greetings.innerHTML +
            `\n Welcome to my Website type [[;rgba(255,255,255,0.99);]HELP] to get started.\n`)
    }
});