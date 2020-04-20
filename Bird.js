//create the chlid class for bird
class Bird extends BaseClass 
{

  //create the constructor function
  constructor(x,y)
  {
    super(x,y,50,50);
    this.image = loadImage("bird2.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

//create the display function
  display() 
  {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200)
    {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++)
    {
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
