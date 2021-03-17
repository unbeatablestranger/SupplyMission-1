const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopter, packageSprite,packageIMG;
var lstick, lstickSpr, rstick, rstickSpr, bstick, bstickSpr; 
var package,ground,lGround,rGround,upGround;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	
    package = new pack(width/2, 200, 25, 25);

	

    packageSprite=createSprite(30, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.3;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.8,

	bstick = Bodies.rectangle(400,620,220,15,{isStatic: true});
	World.add(world, bstick);

	bstickSpr = createSprite(400,640,220,15);
	bstickSpr.shapeColor = "red";

	rstick = Bodies.rectangle(520,600,15,100,{isStatic: true});
	World.add(world, rstick);
	 
	rstickSpr = createSprite(520,600,15,100);
	rstickSpr.shapeColor = "red";

	lstick = Bodies.rectangle(280,600,15,100,{isStatic: true});
	World.add(world,lstick);

	lstick = createSprite(280,600,15,100);
	lstick.shapeColor = "red";

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic: true});
 	World.add(world, ground);

	 lGround = Bodies.rectangle(10,height/2,20,height,{isStatic: true});
	 World.add(world,lGround);

	 rGround = Bodies.rectangle(790,height/2,20,height,{isStatic: true});
	 World.add(world,rGround);

	 upGround =  Bodies.rectangle(width/2,10,width,20,{isStatic: true});

	Engine.run(engine);

	
  
}


function draw() 
{
  rectMode(CENTER);	
  background(0);

  Engine.update(engine);

  packageSprite.x = package.body.position.x;
  packageSprite.y = package.body.position.y;
	
  if(keyDown("right_arrow"))
  {
	helicopter.x = helicopter.x+10;
	translation = {x:10, y:0};
	Matter.Body.translate(package.body, translation);
  }

  if(keyDown("left_arrow"))
  {
	helicopter.x = helicopter.x-10;
	translation = {x:-10, y:0};
	Matter.Body.translate(package.body,translation);  
  }

   

   if(keyWentDown("down_arrow"))
	{
        Matter.Body.setStatic(package.body, false);
	}

	if(package.body.position.y === 200)
   {
		package.body.position.x = helicopter.x;
		package.body.position.y = helicopter.y;    
   }

   if(helicopter.x>800)
   {
	   helicopter.x=790;
   }

   if(helicopter.x<0)
   {
	   helicopter.x=10;
   }
  


  drawSprites();
  

 
}


	


   

    
	
	



