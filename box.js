class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
      this.width = width;
      this.height = height;
      //this.Visibility=255;

    }

    /*score(){
      if(this.Visibility< 0 && this.Visibility>-105){
        score++ ;
      }
    }*/





    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
     rotate(angle);
     fill("lightblue")
      rectMode(CENTER);
      rect(0,0,this.width,this.height);

      pop();
      /*if(this.body.speed < 3){
        
       }
       
       else{
         World.remove(world, this.body);
        // push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         //pop();
       }
      }
    
      score(){
        if (this.Visiblity < 0 && this.Visiblity > -1005){
          score++;
        }

      pop();
    }*/

    

  }
}