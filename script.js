var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
  });

typewriter.typeString('Hi, my name is Kate!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am a skilled Shopify Developer...')
    .pauseFor(2500)
    .deleteAll()
    .typeString('with a passion for adventure & <strong>BIG</strong> ideas!')
    .pauseFor(2500)
    .start();
