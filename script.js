let abby = {
  x:0,
  y:0,
  img: null
};

let osc1, osc2 

let freq = 220; 
let freqMod = 0;

function preload(){
  abby.img = loadImage('images/abbyleemiller.jpg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  abby.img.resize(120,120)
  osc1 = new p5.Oscillator('triangle')
  osc2 = new p5.Oscillator('triangle')
  
  osc1.start()
  osc2.start()


  osc1.amp(0)
  osc2.amp(0)
}


function draw() {
  
background(0,0,0); 

  
  abby.x = noise(frameCount/100)*width
  abby.y = noise(frameCount/100+100)*height
  
  image(abby.img,abby.x,abby.y)
  
  freqMod = map(abby.x, 0,abby.y, -15,15)
  
  osc1.freq(freq)
  osc2.freq(freq + freqMod)
  osc1.amp(0.5)
  osc2.amp(0.5)
 
  }
  