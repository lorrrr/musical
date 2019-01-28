var capture;
var cwidth = 60;
var cheight = 55;
var pw=6;
var ph=pw*5;


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
  for (var x = 0; x < cwidth; x++) {
    for (var y = 0; y < cwidth; y+=10) {
      var index = (x+y+cwidth)*4;
      var r = capture.pixels[index+0];
      var g = capture.pixels[index+1];
      var b = capture.pixels[index+2];
      var bright = (r+g+b)/3;
      
      noStroke();
      fill(255);
      rect(x*pw,y+ph,pw,ph-pw);
      stroke(0);
      line(x*pw,y*ph,x*pw+pw,y*ph);
      line(x*pw+pw/2,y*ph,x*pw+pw/2,y*ph+ph);
      
      
      if (bright < threshold) {
        noStroke();
        fill(20);
        rect(x*pw+pw/4,y*ph,pw/2,ph/w);

      }
    }
  }
  
}