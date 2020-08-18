const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;


var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12;
var polygon,polygonImg;
var slingshot;
var score=0;

function preload(){
  polygonImg=loadImage("polygon.png");

}






function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;

    Engine.run(engine);

  ground=new Ground(400,height,800,20);
  //level one
  box1= new Box(330,250,30,50);
  box2= new Box(360,380,30,50);
  box3= new Box(390,380,30,50);
  box4= new Box(420,380,30,50);
  box5=new Box(455,380,30,50);

  //level two
  box6= new Box(360,360,30,40);
  box7= new Box(390,360,30,40);
  box8= new Box(425,360,30,40);

  //level three
  box9= new Box(390,340,30,40);
  box10=new Box(430,340,30,40);

  //top

  box11= new Box(410,195,30,40);

  //polygon
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot=new SlingShot(this.polygon,{x:100,y:200});



}

function draw() {
  background(0);  


textSize(35);
fill("white");
text("score:"+score,600,40);





Engine.update(engine);
  
  

  box1.display();
  console.log(box2);
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  slingshot.display();

  ground.display();
 // polygon.display();

 imageMode(CENTER);
image(polygonImg,polygon.position.x,polygon.position.y,20,30);



  

}

function keyPressed(){
  if(keyCode===32){
    slinshot.attach(polygon);
  }
}


function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  //gameState = "launched";


}


async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
    
  }
  else{
    
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}

