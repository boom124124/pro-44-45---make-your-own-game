var body
var hair
var clothes
var expression
var hairAcc
var earAcc
var faceAcc
var backgroundOptions
var backgroundSet
var eyeColor
var neckAcc


function preload() {
  test1 = loadAnimation("img1.png");
  test2 = loadAnimation("img2.png");
  test3 = loadAnimation("img3.png");
}

function setup() {
  createCanvas(1000, 700);

  sideOptions = createSprite(825, 350, 350, 900);
  sideOptions.shapeColor = "#FFFACD"

  //background changing stuff
  backgroundOptions = createInput("").attribute("placeholder", "#Enter Hex Here");
  backgroundOptions.position(750, 20)
  callBackground = createImg("enter_button.png")
  callBackground.position(795, 50);
  callBackground.size(40, 25);
  callBackground.mouseClicked(backgroundChange)

  // skin color changing stuff

  //green skin button
  bodyGreenButton = createButton("green skin");
  bodyGreenButton.position(650, 90);
  bodyGreenButton.mouseClicked(bodyColorChange_green);

  //purple skin button
  bodyPurpleButton = createButton("purple skin");
  bodyPurpleButton.position(760,90);
  bodyPurpleButton.mouseClicked(bodyColorChange_purple);

  //purple skin button
  bodySeafoamButton = createButton("seafoam skin");
  bodySeafoamButton.position(870,90);
  bodySeafoamButton.mouseClicked(bodyColorChange_seafoam);

  body = createSprite(300, 500);
  body.addAnimation("test1", test1);
  body.addAnimation("test2", test2);
  body.addAnimation("test3", test3)

  //preview for green skin
  greenPreview = createSprite(744,100);
  greenPreview.addAnimation("test1", test1);
  greenPreview.scale = .20;

  //preview for purple skin
  purplePreview = createSprite(855,100);
  purplePreview.addAnimation("test2", test2);
  purplePreview.scale = .20;

  //preview for seafoam skin
  seafoamPreview = createSprite(978,100);
  seafoamPreview.addAnimation("test3", test3);
  seafoamPreview.scale = .20;

  // second row
  
  
  //hair type and color stuff
  hair = createSprite(300, 200);


  clothes = createSprite(300, 600);


  expression = createSprite(300, 450);


  hairAcc = createSprite(300, 800);


  earAcc = createSprite(300, 750);


  faceAcc = createSprite(300, 700);


  eyeColor = createSprite(300, 950);

  neckAcc = createSprite(300, 870)
}

function draw() {
  background("#D0FFD4");



  drawSprites();
}

function backgroundChange() {
  background('"' + backgroundOptions.value() + '"');
  location.reload()
}

function bodyColorChange_green() {
  body.changeAnimation("test1", test1);
}

function bodyColorChange_purple() {
  body.changeAnimation("test2", test2);
}

function bodyColorChange_seafoam() {
  body.changeAnimation("test3", test3);
}