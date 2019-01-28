var capture;
var cwidth = 60;
var cheight = 55;

function setup() {
  createCanvas(764,1024);
  var constraints = {
    audio: false,
    video: {

      facingMode: "user",
      frameRate: 10
    }
  };
  capture = createCapture(constraints);
  capture.elt.setAttribute('playsinline', '');
  capture.size(60,55);
  capture.hide();
  var threshold = 50;
  strokeWeight(2);
  
}
function draw() {
  capture.loadPixels();
  for (var y = 0; y < cheight; y++) {
    for (var x = 0; x < cwidth; x+=10) {
      var index = (x+y+cwidth)*4;
      var r = capture.pixels[index+0];
      var g = capture.pixels[index+1];
      var b = capture.pixels[index+2];
      var bright = (r+g+b)/3;
      
      line(y,x,y,x+6);
      
      
      if (bright >= threshold) {
        
      }
      
    }
  }
  
}