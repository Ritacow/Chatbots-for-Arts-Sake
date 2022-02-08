let data; //variable for json data
let input; //variable for input field
let sendBttn; //variable for send button
let div = "";
let answer = ""; //variable for the answer from the chatbot





let font_tamagochi;


//load the JSON file
function preload() {
  data = loadJSON("chatbots.json");
  font_tamagochi = loadFont('assets/tamagotchi.ttf');
}


function setup() {
  
  createCanvas(windowWidth, windowHeight);
   background_img = loadImage('assets/tamagochi.jpg');
  //input field
  input = createInput("");
  input.size(width / 2, 40);
  input.position(width / 4, height / 4);
  //button to send input
  
  
  sendBttn = createButton("send");
  sendBttn.size(100, 30);
  sendBttn.position(width / 4, height / 4 + input.height + 10);
  sendBttn.mousePressed(answerMe); //callback to let the chatbot respond
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  console.log(data);
}

function draw() {
  
  //cursor(HAND);s
    image(background_img, windowWidth/2, 30 , background_img.width/2.5,              background_img.height/2.5);
  
  //imageMode(CENTER);
  text("CHAT",205,530);
  text("ON",140,520);
   text("OFF",270,520);
  
  
  textFont(font_tamagochi);
  textSize(15);
  textAlign(CENTER);



  text(answer,  10, 30);
  
  
}


function turnOn(){
  console.log("You Pressed the On Button");
  screenOnRec.hide();
}
  

function answerMe() {
  //prepare the input string for analysis
  let inputStr = input.value();
  inputStr = inputStr.toLowerCase();

  //loop through the answers array and match responses to triggers
  loop1: for (let i = 0; i < data.brain.length; i++) {
    loop2: for (let j = 0; j < data.brain[i].triggers.length; j++) {
      if (inputStr.indexOf(data.brain[i].triggers[j]) !== -1) {
        answer = random(data.brain[i].responses);
        break loop1;
      } else {
        answer = random(data.catchall);
        
        
        
      }
    }
  }
}
