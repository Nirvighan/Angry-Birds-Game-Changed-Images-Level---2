//create the child class for the pig
class Pig extends BaseClass 
{
  //create the constructor function
  constructor(x, y)
  {
    super(x,y,50,50);
    this.image = loadImage("pig2.png");
    this.Visiblity = 255;
  }

//create the display fucntion
 display()
 {
   //console.log(this.body.speed);
   if(this.body.speed < 3)
   {
    super.display();
   }
   else
   {
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

//create the score
  score()
  {
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};