function headeropacityH(){
 var headOpacity = document.getElementById('HeaderBase');
 headOpacity.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}

function headeropacityL(){
  var headOpacity = document.getElementById('HeaderBase');
  headOpacity.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
}

function toggleDropdown() {
  var Dropdown = document.getElementById("DropdownVisibility");

  if(Dropdown.classList.contains("show") == true){
    Dropdown.classList.add('notshow');
    setTimeout(function(){Dropdown.classList.remove('show','notshow'); }, 500);
  }
  else{
    Dropdown.classList.add('show');
  }
}

function forceCloseDropdown(){
  var Dropdown = document.getElementById("DropdownVisibility");

  if(Dropdown.classList.contains("show") == true){
    Dropdown.classList.add('notshow');
    setTimeout(function(){Dropdown.classList.remove('show','notshow'); }, 500);
  }

  var ShAll = document.getElementsByClassName('TextBox');
  var Sh1 = document.getElementById('TextBox1');
  var BackImg = document.getElementById('HomeBackground');
  
  for (var i=0;i<ShAll.length;i+=1){
    ShAll[i].style.display = 'none';
  }

  if(Sh1.style.display !== "flex"){
    Sh1.style.display = 'flex';
    Sh1.style.animation = 'appear';
    Sh1.style.animationDuration = '1s';
    BackImg.style.backgroundImage = "url(/IR-ARView/img/Categories/CategoryWearables.jpg)";
  }
}

function showSh1() {

  var ShAll = document.getElementsByClassName('TextBox');
  var Sh1 = document.getElementById('TextBox1');
  var BackImg = document.getElementById('HomeBackground');
  
  for (var i=0;i<ShAll.length;i+=1){
    ShAll[i].style.display = 'none';
  }

  if(Sh1.style.display !== "flex"){
    Sh1.style.display = 'flex';
    Sh1.style.animation = 'appear';
    Sh1.style.animationDuration = '1s';
    BackImg.style.backgroundImage = "url(../img/Categories/CategoryWearables.jpg)";
  }
}

function showSh2(){

  var ShAll = document.getElementsByClassName('TextBox');
  var Sh1 = document.getElementById('TextBox2');
  var BackImg = document.getElementById('HomeBackground');
  
  for (var i=0;i<ShAll.length;i+=1){
    ShAll[i].style.display = 'none';
  }

  Sh1.style.display = 'flex';
  Sh1.style.animation = 'appear';
  Sh1.style.animationDuration = '1s';
  Sh1.style.animationTimingFunction = 'ease-in-out';
  BackImg.style.backgroundImage = "url(../img/Categories/Test.jpg)";
}

function showSh3(){

  var ShAll = document.getElementsByClassName('TextBox');
  var Sh1 = document.getElementById('TextBox3');
  var BackImg = document.getElementById('HomeBackground');
  
  for (var i=0;i<ShAll.length;i+=1){
    ShAll[i].style.display = 'none';
  }

  Sh1.style.display = 'flex';
  Sh1.style.animation = 'appear';
  Sh1.style.animationDuration = '1s';
  Sh1.style.animationTimingFunction = 'ease-in-out';
  BackImg.style.backgroundImage = "url(../img/Categories/CategoryMetals.jpg)";
}

function showSh4(){

  var ShAll = document.getElementsByClassName('TextBox');
  var Sh1 = document.getElementById('TextBox4');
  var BackImg = document.getElementById('HomeBackground');
  
  for (var i=0;i<ShAll.length;i+=1){
    ShAll[i].style.display = 'none';
  }

  Sh1.style.display = 'flex';
  Sh1.style.animation = 'appear';
  Sh1.style.animationDuration = '1s';
  Sh1.style.animationTimingFunction = 'ease-in-out';
  BackImg.style.backgroundImage = "url(../img/OurLocation.jpg)";
}

function Rotate1() {
  var Rot = document.getElementById("Rot1").style.transform = "rotateY(180deg)";
}

function RotateR1() {
  var Rot = document.getElementById("Rot1").style.transform = "rotateY(0deg)";
}

function Rotate2() {
  var Rot = document.getElementById("Rot2").style.transform = "rotateY(180deg)";
}

function RotateR2() {
  var Rot = document.getElementById("Rot2").style.transform = "rotateY(0deg)";
}

function Rotate3() {
  var Rot = document.getElementById("Rot3").style.transform = "rotateY(180deg)";
}

function RotateR3() {
  var Rot = document.getElementById("Rot3").style.transform = "rotateY(0deg)";
}

function CircleProgress1(){
  var Cp1 = document.getElementById('MiddleLineProgress');

  Cp1.style.width = '25%';
}

function CircleProgress2(){
  var Cp1 = document.getElementById('MiddleLineProgress');

  Cp1.style.width = '50%';
}

function CircleProgress3(){
  var Cp1 = document.getElementById('MiddleLineProgress');

  Cp1.style.width = '75%';
}

function CircleProgress4(){
  var Cp1 = document.getElementById('MiddleLineProgress');

  Cp1.style.width = '100%';
}

function showPB1() {

  var PBAll = document.getElementsByClassName('PB');
  var Pb1 = document.getElementById('PB1');
  
  for (var i=0;i<PBAll.length;i+=1){
    PBAll[i].style.display = 'none';
  }

  if(Pb1.style.display !== "flex"){
    Pb1.style.display = 'flex';
    Pb1.style.animation = 'appear';
    Pb1.style.animationDuration = '1.5s';
  }
}

function showPB2() {

  var PBAll = document.getElementsByClassName('PB');
  var Pb1 = document.getElementById('PB2');
  
  for (var i=0;i<PBAll.length;i+=1){
    PBAll[i].style.display = 'none';
  }

  if(Pb1.style.display !== "flex"){
    Pb1.style.display = 'flex';
    Pb1.style.animation = 'appear';
    Pb1.style.animationDuration = '1.5s';
  }
}

function showPB3() {

  var PBAll = document.getElementsByClassName('PB');
  var Pb1 = document.getElementById('PB3');
  
  for (var i=0;i<PBAll.length;i+=1){
    PBAll[i].style.display = 'none';
  }

  if(Pb1.style.display !== "flex"){
    Pb1.style.display = 'flex';
    Pb1.style.animation = 'appear';
    Pb1.style.animationDuration = '1.5s';
  }
}

function showPB4() {

  var PBAll = document.getElementsByClassName('PB');
  var Pb1 = document.getElementById('PB4');
  
  for (var i=0;i<PBAll.length;i+=1){
    PBAll[i].style.display = 'none';
  }

  if(Pb1.style.display !== "flex"){
    Pb1.style.display = 'flex';
    Pb1.style.animation = 'appear';
    Pb1.style.animationDuration = '1.5s';
  }
}

function ShowTextE(){
  var St = document.getElementById('CTB1');

  if(St.style.opacity === '0'){
    St.style.opacity = '1';
  }
  else{
    St.style.opacity = '0';
  }
}

function ShowTextF(){
  var St = document.getElementById('CTB2');

  if(St.style.opacity === '0'){
    St.style.opacity = '1';
  }
  else{
    St.style.opacity = '0';
  }
}

function ShowTextW(){
  var St = document.getElementById('CTB3');

  if(St.style.opacity === '0'){
    St.style.opacity = '1';
  }
  else{
    St.style.opacity = '0';
  }
}

function ScrollTo(id){
  sll = document.getElementById(id);
  sll.scrollIntoView({
      behavior: "smooth"
  }); 
  }
