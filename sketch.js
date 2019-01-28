var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var constraints = {
    audio: false,
    video: {

      facingMode: "user",
      frameRate: 10
    }
  };
  capture = createCapture(constraints);
  capture.elt.setAttribute('playsinline', '');
  capture.hide();
}
function draw() {
  background(40);
  image(capture, 0, 0, windowWidth, windowHeight);
  //filter(INVERT);
}
