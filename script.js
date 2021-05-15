var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
  });

typewriter.typeString('Hi, my name is Kate!')
    .pauseFor(750)
    .deleteAll()
    .typeString('I am a skilled Shopify Developer...')
    .pauseFor(750)
    .deleteAll()
    .typeString('with a passion for adventure & big ideas!')
    .pauseFor(750)
    .start();
