var video;

var cwidth = 48;
var cheight = 13 * 5;
var pw = 14.5;
var ph = pw * 5;

function preload() {
  
 var font = loadFont("assets/CircularBook.otf");
}

function setup() {
  createCanvas(764, 1024);
  pixelDensity(1);
  var constraints = {
    audio: false,
    video: {

      facingMode: "user",
      frameRate: 10
    }

  };
  frameRate(10);
  video = createCapture(constraints);
  video.size(cwidth, cheight);

  video.elt.setAttribute('playsinline', '');
  background(183, 39, 38);
  
}

function draw() {

  translate(33, 46);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y += 5) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];

      var bright = (r + g + b) / 3;

      noStroke();
      fill(255);
      rect(x * pw, y * pw, pw, ph - pw);
      stroke(0);
      strokeWeight(1.5);
      line(x * pw, y * pw, x * pw + pw, y * pw);
      line(x * pw, y * pw + ph - pw, x * pw + pw, y * pw + ph - pw);
      line(x * pw + pw / 2, y * pw, x * pw + pw / 2, y * pw + ph - pw);


      if ((bright >= 130) && (index % 16 !== 0) && (index % 28 !== 0)) {
        noStroke();
        fill(20);
        rect(x * pw + pw / 4, y * pw, pw / 2, ph / 2);
        
      }



    }
  }

  /* row1 */
  noStroke();
  fill(183, 39, 38);
  rect(-2, -2, pw*20, ph-pw+4);
  fill(190);
  textFont(font);
  textSize(30);
  text("A NEW MUSICAL",4,ph-pw+4);
}