//create the class for the ground
class Ground 
{
  //create the constructor function
    constructor(x,y,width,height) 
    {
      var options = 
      {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    //create the display function
    display()
    {
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
