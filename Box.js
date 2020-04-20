//create the child class for the box
class Box extends BaseClass 
{
  //load the image in the constructor function
  constructor(x, y, width, height)
  {
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");
  }

};
