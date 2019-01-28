var capture;

function setup() {
  createCanvas(640, 480);
  var constraints = {
    audio: false,
    video: {
      facingMode: "user"
    }
  };
  capture = createCapture(constraints);
}
function draw() {
  image(capture, 0, 0, 640, 480);
   filter(INVERT); 
}
