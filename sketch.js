
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var background1, backgroundIMG
var  bananaImg, ground1, banana1, apple1, paper1
var dung1, egg1, can1, tool1, tyre1, screw1, bag1
var gb1, gb2, gb3
var bb1, bb2, bb3
var grounds1, grounds2, grounds3, grounds4, grounds5
var grounds6, grounds7, grounds8, grounds9, grounds10
var done, doneIMG
var happyGif, happyGifIMG
var happy2Gif, happy2GifIMG
var happy3Gif, happy3GifIMG
var happy4Gif, happy4GifIMG
var happy5Gif, happy5GifIMG
var background2, background2IMG
var t1, t1IMG
var t2, t2IMG
var t3, t3IMG
var t4, t4IMG
var t5, t5IMG
var awesome, awesomeIMG
var background3, background3IMG
var background4, background4IMG
var background5, background5IMG
var background6, background6IMG
var background7, background7IMG
var gameState
var thankyou, thankyouIMG
var background8, help, worker, background8IMG, helpIMG, workerIMG
var larrow, larrowIMG, uarrow, uarrowIMG, text_1
var green_dustbin, green_dustbinIMG, blue_dustbin, blue_dustbinIMG

function preload()
{
	backgroundIMG=loadImage("__p__.jpg")
	doneIMG=loadImage("ok-icon-15.jpg")
	happyGifIMG=loadImage("0e3ee551876e1ad2a39f89e4adf9168a.gif")
	happy2GifIMG=loadImage("6e02795268003bb04915790aa1302f4e.gif")
	happy3GifIMG=loadImage("giphy.gif")
	happy4GifIMG=loadImage("giphy1.gif")
	happy5GifIMG=loadImage("source.gif")
	background2IMG=loadImage("IdealisticApprehensiveKilldeer-small.gif")
	t1IMG=loadImage("image_processing20200511-13221-tpzu97.png")
	t2IMG=loadImage("unnamed (4).png")
	t3IMG=loadImage("Paul-01-512.png")
	t4IMG=loadImage("Chocolate_PNG_Clipart_Picture.png")
	t5IMG=loadImage("12303-victory-hand.png")
	awesomeIMG=loadImage("pzg4Vl3.png")
	background3IMG=loadImage("39wF.gif")
	background4IMG=loadImage("1175377686ba-awesome-colorful-fireworks-animated-gif-image-s.gif")
	background5IMG=loadImage("tenor.gif")
	background6IMG=loadImage("33a62ad0176c463c516e748bf721c359.gif")
	background7IMG=loadImage("MetallicThisBlackbear-max-1mb.gif")
	thankyouIMG=loadImage("Thank-You-gif-Free.gif")
	background8IMG=loadImage("103531818-waste-plastic-background-background-blurred-garbage-plastic-bottle-paper-many-background-texture-bin.jpg")
	helpIMG=loadImage("source1.gif")
	workerIMG=loadImage("unnamed.png")
	larrowIMG=loadImage("ae186d8c6bacb4c6dd7fedc65076d1a8.gif")
	uarrowIMG=loadImage("giphy (1).gif")
	green_dustbinIMG=loadImage("green.png")
	blue_dustbinIMG=loadImage("blue.png")
}

function setup() {
	createCanvas(1500, 500);

  
	engine = Engine.create();
	world = engine.world;

	gameState="serve"
    
	//Create the Bodies Here.
	thankyou = createSprite(750, 250)
	thankyou.addImage(thankyouIMG)
	thankyou.scale=0.25

	
	
	background2 = createSprite(750, 250)
	background2.addImage(background2IMG)
	background2.scale=3.5
	background2.visible=false;

	

	

	awesome = createSprite(700, 150)
	awesome.addImage(awesomeIMG)
	awesome.scale=1
	//awesome.visible=false;

	t1 = createSprite(350, 350)
	t1.addImage(t1IMG)
	t1.scale=0.15
	t1.visible=false;

	t2 = createSprite(500, 350)
	t2.addImage(t2IMG)
	t2.scale=0.3
	t2.visible=false;

	t3 = createSprite(650, 350)
	t3.addImage(t3IMG)
	t3.scale=0.3
	t3.visible=false;

	t4 = createSprite(800, 350)
	t4.addImage(t4IMG)
	t4.scale=0.03
	t4.visible=false;

	t5 = createSprite(950, 350)
	t5.addImage(t5IMG)
	t5.scale=0.2
	t5.visible=false;

	background1 = createSprite(750, 90)
	background1.addImage(backgroundIMG)
	background1.scale=2.5

	larrow = createSprite(100, 50)
	larrow.addImage(larrowIMG)
	larrow.scale=0.2
	larrow.visible=false;

	uarrow = createSprite(800, 50)
	uarrow.addImage(uarrowIMG)
	uarrow.scale=0.15
	uarrow.visible=false;

	done = createSprite(50, 50)
	done.addImage(doneIMG)
	done.scale=0.1
	done.visible=false;

	green_dustbin = createSprite(1175, 360)
	green_dustbin.addImage(green_dustbinIMG)
	green_dustbin.scale=0.7

	blue_dustbin = createSprite(1395, 360)
	blue_dustbin.addImage(blue_dustbinIMG)
	blue_dustbin.scale=0.7

	background3 = createSprite(750, 250)
	background3.addImage(background3IMG)
	background3.scale=3.8
	background3.visible=false;

	background4 = createSprite(750, 250)
	background4.addImage(background4IMG)
	background4.scale=3.8
	background4.visible=false;

	background5 = createSprite(750, 250)
	background5.addImage(background5IMG)
	background5.scale=7
	background5.visible=false;

	background6 = createSprite(750, 250)
	background6.addImage(background6IMG)
	background6.scale=3.8
	background6.visible=false;

	background7 = createSprite(750, 250)
	background7.addImage(background7IMG)
	background7.scale=5.4
	background7.visible=false;

	happyGif = createSprite(750, 250)
	happyGif.addImage(happyGifIMG)
	happyGif.scale=0.8
	happyGif.visible=false;

	happy2Gif = createSprite(750, 250)
	happy2Gif.addImage(happy2GifIMG)
	happy2Gif.scale=0.5
	happy2Gif.visible=false;
	
	happy3Gif = createSprite(750, 250)
	happy3Gif.addImage(happy3GifIMG)
	happy3Gif.scale=0.8
	happy3Gif.visible=false;
	
	happy4Gif = createSprite(750, 250)
	happy4Gif.addImage(happy4GifIMG)
	happy4Gif.scale=0.8
	happy4Gif.visible=false;
	
	happy5Gif = createSprite(750, 250)
	happy5Gif.addImage(happy5GifIMG)
	happy5Gif.scale=0.3
	happy5Gif.visible=false;

	background8 = createSprite(750, 250)
	background8.addImage(background8IMG)
	background8.scale=1.3
	background8.lifetime=100

	help = createSprite(750, 150)
	help.addImage(helpIMG)
	help.scale=0.1
	help.lifetime=100

	worker = createSprite(750, 350)
	worker.addImage(workerIMG)
	worker.scale=0.5
	worker.lifetime=100
	
	
	
	

	grounds1=new Grounds(90, 200, 60, 20)
	grounds2=new Grounds(120, 420, 60, 20)
	grounds3=new Grounds(290, 470, 60, 20)
	grounds4=new Grounds(600, 270, 60, 20)
	grounds5=new Grounds(660, 470, 60, 20)

	grounds6=new Grounds(240, 230, 60, 20)
	grounds7=new Grounds(430, 420, 60, 20)
	grounds8=new Grounds(800, 470, 60, 20)
	grounds9=new Grounds(750, 200, 60, 20)
	grounds10=new Grounds(920, 420, 60, 20)

	ground1=new Ground(750, 480, width, 20)

	
	
	gb1=new GreenBox(1100, 420, 10, 100)
	gb2=new GreenBox(1175, 460, 170, 10)
	gb3=new GreenBox(1250, 420, 10, 100)

	bb1=new BlueBox(1320, 420, 10, 100)
	bb2=new BlueBox(1405, 460, 170, 10)
	bb3=new BlueBox(1480, 420, 10, 100)

	banana1=new Banana(100, 180)	
	apple1=new Apple(130, 400)
	paper1=new Paper(300, 450)
	dung1=new Dung(610,250)
	egg1=new Egg(670, 450)

	can1=new Can(240, 180)
	tool1=new Tool(430, 400)
	tyre1=new Tyre(800, 180)
	screw1=new Screw(750, 180)
	bag1=new PlasticBag(920, 400)
    
  text_1=0;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  
  background("white");
  
  drawSprites();

  if(frameCount===100){
		gameState="play"
		text_1=1;
  }

if(gameState==="play"){
	if(text_1==1){
		 uarrow.visible=true;
		 fill ("white")
         textSize(45)
         textFont("Modern Love")
		 text("Press up arrow.", 500, 50)
		 textSize(24)
		 text("Biodegradable", 1100, 360)
		 text("Non-biodegradable", 1300, 360)
	}
 


  banana1.display();
  grounds1.display();

  apple1.display();
  paper1.display();
  dung1.display();
  egg1.display();

  grounds2.display();
  grounds3.display();
  grounds4.display();
  grounds5.display();

  grounds6.display();
  grounds7.display();
  grounds8.display();
  grounds9.display();
  grounds10.display();
 
  ground1.display();
  gb1.display();
  gb2.display();
  gb3.display();
  bb1.display();
  bb2.display();
  bb3.display();

  can1.display();
  tool1.display();
  tyre1.display();
  screw1.display();
  bag1.display();

  

}

if(mousePressedOver(done)){
   gameState="over"
   background1.visible=false;
   done.visible=false;
  
}
 
if(gameState==="over"){
   background2.visible=true;
   t1.visible=true;
   t2.visible=true;
   t3.visible=true;
   t4.visible=true;
   t5.visible=true;
   blue_dustbin.visible=false;
   green_dustbin.visible=false;
   fill ("white")
   textSize(45)
   textFont("Modern Love")
   text("Claim your reward!", 500, 250)
   text_1=3;
   larrow.visible=false;
} 

if( mousePressedOver(t1)&&gameState==="over"){
	gameState="over1"
}

if(gameState==="over1"){
	background3.visible=true;
	happyGif.visible=true;
	fill ("white")
	textSize(45)
	textFont("Modern Love")
	text("Great!! The Hug Award goes to you!!", 400, 450)
	background4.destroy();
	background5.destroy();
	background6.destroy();
	background7.destroy();
	happy2Gif.destroy();
	happy3Gif.destroy();
	happy4Gif.destroy();
	happy5Gif.destroy();
	background1.destroy();
	background2.destroy();
	awesome.destroy();
	t1.destroy();
	t2.destroy();
	t3.destroy();
	t4.destroy();
	t5.destroy();

}

if( mousePressedOver(t2)&&gameState==="over"){
	gameState="over2"
}

if(gameState==="over2"){
	background4.visible=true;
	happy2Gif.visible=true;
	fill ("white")
	textSize(45)
	textFont("Modern Love")
	text("Great!! The Clappy Award goes to you!!", 400, 450)
	background3.destroy();
	background5.destroy();
	background6.destroy();
	background7.destroy();
	happyGif.destroy();
	happy3Gif.destroy();
	happy4Gif.destroy();
	happy5Gif.destroy();
	background1.destroy();
	background2.destroy();
	awesome.destroy();
	t1.destroy();
	t2.destroy();
	t3.destroy();
	t4.destroy();
	t5.destroy();
}

if( mousePressedOver(t3)&&gameState==="over"){
	gameState="over3"
}

if(gameState==="over3"){
	background5.visible=true;
	happy4Gif.visible=true;
	fill ("white")
	textSize(45)
	textFont("Modern Love")
	text("Great!! The Angelic Award goes to you!!", 400, 450)
	background3.destroy();
	background4.destroy();
	background6.destroy();
	background7.destroy();
	happyGif.destroy();
	happy3Gif.destroy();
	happy2Gif.destroy();
	happy5Gif.destroy();
	background1.destroy();
	background2.destroy();
	awesome.destroy();
	t1.destroy();
	t2.destroy();
	t3.destroy();
	t4.destroy();
	t5.destroy();
}

if( mousePressedOver(t4)&&gameState==="over"){
	gameState="over4"
}

if(gameState==="over4"){
	background6.visible=true;
	happy5Gif.visible=true;
	fill ("white")
	textSize(45)
	textFont("Modern Love")
	text("Great!! The Chocolate Award goes to you!!", 400, 450)
	background3.destroy();
	background4.destroy();
	background5.destroy();
	background7.destroy();
	happyGif.destroy();
	happy3Gif.destroy();
	happy2Gif.destroy();
	happy4Gif.destroy();
	background1.destroy();
	background2.destroy();
	awesome.destroy();
	t1.destroy();
	t2.destroy();
	t3.destroy();
	t4.destroy();
	t5.destroy();
}

if( mousePressedOver(t5)&&gameState==="over"){
	gameState="over5"
}

if(gameState==="over5"){
	background7.visible=true;
	happy3Gif.visible=true;
	fill ("white")
	textSize(45)
	textFont("Modern Love")
	text("Great!! The Bravery Award goes to you!!", 400, 450)
	background6.destroy();
	happy4Gif.destroy();
	background5.destroy();
	happy5Gif.destroy();
	background4.destroy();
	happy2Gif.destroy();
	background3.destroy();
	happyGif.destroy();
	background1.destroy();
	background2.destroy();
	awesome.destroy();
	t1.destroy();
	t2.destroy();
	t3.destroy();
	t4.destroy();
	t5.destroy();
}

if(text_1===2){
	larrow.visible=true;
	uarrow.visible=false;
	fill ("white")
	textSize(24)
	textFont("Modern Love")
	text("Click here.", 130, 50)
	
}



}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		
	   Matter.Body.applyForce(banana1.body, banana1.body.position, {x:85, y:-85})
	   done.visible=true;
	   text_1=2;
	  
	
	}

	
		
	

	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(apple1.body, apple1.body.position, {x:87, y:-85})
	 
	 }

	 if(keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paper1.body, paper1.body.position, {x:75, y:-85})
	 
	}

	 if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(egg1.body, egg1.body.position, {x:45, y:-95})
	 
	 }


	if(keyCode === UP_ARROW){
		
			Matter.Body.applyForce(dung1.body, dung1.body.position, {x:45, y:-95})
		 
		}
	
	
	if(keyCode === UP_ARROW){
		
			Matter.Body.applyForce(can1.body, can1.body.position, {x:90, y:-85})
		 
		 }
		 

		 if(keyCode === UP_ARROW){
		
			Matter.Body.applyForce(tool1.body, tool1.body.position, {x:90, y:-105})
		 
		}

		 if(keyCode === UP_ARROW){
		
			Matter.Body.applyForce(tyre1.body, tyre1.body.position, {x:50, y:-85})
		 
		 }

		 if(keyCode === UP_ARROW){
		
			Matter.Body.applyForce(screw1.body, screw1.body.position, {x:50, y:-85})
		 
		 }

		 if(keyCode === UP_ARROW){
		
			Matter.Body.applyForce(bag1.body, bag1.body.position, {x:45, y:-85})
		 
		 }


}

