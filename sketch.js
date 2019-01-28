var video;

var cwidth = 60;
var cheight = 55;
var pw=12;
var ph=pw*5;

var vScale = 16;

function setup() {
  createCanvas(764,1024);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cwidth,cheight);
  video.elt.setAttribute('playsinline', '');
   background(183,39,38);
}

function draw() {
  
  translate(20,20);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y+=5) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width))*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];

      var bright = (r+g+b)/3;

      noStroke();
      fill(255);
      rect(x*pw,y*pw,pw,ph-pw);
      stroke(0);
      line(x*pw,y*pw,x*pw+pw,y*pw);
      line(x*pw+pw/2,y*pw,x*pw+pw/2,y*pw+ph-pw);
      
      
      if ((bright >= 120) && (index % 16 !=0) && (index%28 != 0)) {
        noStroke();
        fill(20);
        rect(x*pw+pw/4,y*pw,pw/2,ph/2);

      }

    }
  }
 
}