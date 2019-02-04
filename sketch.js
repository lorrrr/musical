//lorrrr.github.io/piano


var video;
var cwidth = 48;
var cheight = 13 * 5;
var pw = 14.5;
var ph = pw * 5;
var font;

function preload() {
  
 font = loadFont("assets/CircularBook.otf");
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
  stroke(183, 39, 38);
  strokeWeight(3);
  fill(183, 39, 38);
  rect(0, 0, pw*14+pw/2-3, ph-pw+4);
  noStroke();
  fill(190);
  textFont(font);
  textSize(58);
  textAlign(LEFT);
  text("A NEW",0,ph-pw-8);
  
  /* row2 */
  stroke(183, 39, 38);
  strokeWeight(3);
  fill(183, 39, 38);
  rect(0, ph-1.5, pw*19+pw/2-3, ph-pw+4);
  fill(190);
  strokeWeight(0);
  text("MUSICAL",0,2*ph-pw-8);
  
  
  /* row w-3 the */
  stroke(183, 39, 38);
  strokeWeight(3);
  fill(183, 39, 38);
  rect(0, ph*10-1.5, pw*8+pw/2-3, ph-pw+4);
  fill(190);
  strokeWeight(0);
  text("THE",0,11*ph-pw-8);
  
  
  /* row w-2 imitation */
  stroke(183, 39, 38);
  strokeWeight(3);
  fill(183, 39, 38);
  rect(0, ph*11-1.5, pw*22+pw/2-3, ph-pw+4);
  fill(190);
  strokeWeight(0);
  text("IMITATION",0,12*ph-pw-8);
  
  
  /* row w-1 game */
  stroke(183, 39, 38);
  strokeWeight(3);
  fill(183, 39, 38);
  rect(0, ph*12-1.5, pw*13+pw/2-3, ph-pw+4);
  fill(190);
  strokeWeight(0);
  text("GAME",0,13*ph-pw-8);
  
  
  /*right small text*/
  
  stroke(183, 39, 38);
  strokeWeight(3);
  textSize(24);
  textAlign(RIGHT);
  fill(183, 39, 38);
  rect((cwidth-6)*pw, ph*6-1.5, pw*6+pw/2-3, ph-pw+4);
  fill(190);
   strokeWeight(0);
  text("Based On",cwidth*pw,7*ph-pw-ph/3*2+2);
  text("Alan Turing:",cwidth*pw,7*ph-pw-ph/3+4);
  text("The Enigma",cwidth*pw,7*ph-pw);
  
  
  
  
}