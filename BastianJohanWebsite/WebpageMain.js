let init = 10;
let array = [];
let arrayd = [];
let scaler = [];
var x = innerHeight;

let arraysize = (innerWidth*.86)/20;

let fillOp = 100;

function setup(){
  for(let i = 0; i < arraysize; i++){
    array.push(30);
    arrayd.push(0);
  }
  for(let i = 0; i < arraysize; i++){
    if(i < arraysize/2){
      scaler.push(i/(arraysize/2)/2 + 0.5);
    } else {
      scaler.push((arraysize-i)/(arraysize/2)/2 + 0.5);
    }
  }
}

function draw(){
  arraysize = innerWidth/20;
  clear();
  let x = about.offsetWidth;
  let y = about.offsetHeight;
  canvas = createCanvas(x, y + 50);
  canvas.position(0, navbar.offsetHeight);

  noStroke();
  if(frameCount % 5 === 0){
    for(let i = 0; i < arraysize; i++){
      let r = random(-10, 10);
      if(array[i] + r > 0 && array[i] + r < 50){
        arrayd[i] = r;
        array[i] += arrayd[i]/5;
        fBar(x, y, i, array, arraysize, scaler);
      } else {
        fBar(x, y, i, array, arraysize, scaler);
      }
    }
  } else {
    for(let i = 0; i < arraysize; i++){
      if(array[i] + arrayd[i] > 0 && array[i] + arrayd[i] < 50){
        array[i] += arrayd[i]/5;
        fBar(x, y, i, array, arraysize, scaler);
      } else{
        fBar(x, y, i, array, arraysize, scaler);
      }
    }
  }

  let currentDistance = 255-abs(mouseY - about.offsetHeight)/about.offsetHeight*255;
  if(currentDistance > 0){
    if(frameCount % 3 === 0){
      fillOp = avg(currentDistance);
    }
  } else {
    if(frameCount % 3 === 0){
      fillOp = avg(0);
    }
  }
}

function fBar(x, y, i, a, aS, s){
  fill(188, 158, 134, fillOp);
  rect(x/aS*i + (x/aS / 8) + innerWidth*.07, y, x/aS / 2, -a[i] * s[i], 0, 0, 4, 4);
  fill(219, 203, 190, fillOp*0.6);
  rect(x/aS*i + (x/aS / 8) + innerWidth*.07, y, x/aS / 2, a[i] * s[i], 0, 0, 4, 4);
}

let valuesArr = [];
function avg(value){
      if(valuesArr.length < 10){
        valuesArr.unshift(value);
      } else {
        valuesArr.unshift(value);
        valuesArr.pop();
      }
    let valuesSum = 0;
    for(let i = 0; i < valuesArr.length; i++){
      valuesSum += valuesArr[i];
    }
    return valuesSum / valuesArr.length;
}

var opopasdf;
// var x = innerHeight;

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    opopasdf = 255;
    x = innerHeight;
    setTimeout(function() { 
        window.location.href = href
    }, 500)
  }
  
document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
    opopasdf = 0;
})