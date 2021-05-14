var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    strings:['Hi', 'my name is Kate.']
    autoStart: true,
    loop: true
});

typewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
