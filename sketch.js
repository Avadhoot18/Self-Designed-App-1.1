var form;
var name,email;
var ppr = "paper1";
var paper1,paper2,paper3,paper4;
var image1

function setup() {
  createCanvas(displayWidth-30,displayHeight-20);
  form = new Form();
  //ppr = new Paper(paper1);
}

function preload(){
  image1 = loadImage("Thanksgivingimage.png");
}
function select(){
  if(ppr==="paper1"){
      text("https://www.google.com",displayWidth/2-30,displayHeight/2);
  }
  else if(ppr==="paper2"){
      text("https://www.google.com",displayWidth/2-30,displayHeight/2);
  }
  else if(ppr==="paper3"){
      text("https://www.google.com",displayWidth/2-30,displayHeight/2);
  }
  else if(ppr==="paper4"){
      text("https://www.google.com",displayWidth/2-30,displayHeight/2);
  }
}
function draw() {
  background(255,255,255);  
  form.display();
  image(image1,displayWidth-50,0,100,100);
  select();
  drawSprites();
}


function getSelectedCheckboxValues(paper){
  constCheckboxes = document.querySelectorAll('input[name="${name}"]:checked');
  let Values=[];
  checkboxes.forEach((checkbox)=>{
      Values.push(checkbox.value);
  })
  return Values;
}
//const btn=document.querySelector('#btn');
//btn.addEventListener('click',(event)=>{
//  alert(getSelectedCheckboxValues('paper'))
//});