let abby = {
  x:0,
  y:0,
  img: null
};

let bg;
let osc1, osc2 

let freq = 220; 
let freqMod = 0;

function preload(){
  abby.img = loadImage('images/abbyleemiller.jpg'); 
  bg = loadImage('images/club.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  if (abby.img) {
    abby.img.resize(120,120)
  }

  osc1 = new p5.Oscillator('square')
  osc2 = new p5.Oscillator('sawtooth')
  
  osc1.start()
  osc2.start()

  osc1.amp(0)
  osc2.amp(0)
} 

function draw() {
  image(bg, 0, 0, width, height);

  abby.x = noise(frameCount/100)*width
  abby.y = noise(frameCount/100+100)*height
  
  image(abby.img, abby.x, abby.y)
  
  freqMod = map(abby.x, 0, width, -15, 15)
  
  osc1.freq(freq)
  osc2.freq(freq + freqMod)

  osc1.amp(0.5, 0.1)
  osc2.amp(0.5, 0.1)
}

function mousePressed() {
  userStartAudio();
}