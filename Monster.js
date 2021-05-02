class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=70;
		this.image=loadImage("corona.png");
		this.body=Bodies.circle(this.x, this.y,70, options);
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push();
			translate(santaPos.x, santaPos.y-100);
			//rectMode(CENTER);
			//rect(0, 0, 150, 150);
			//ellipseMode(RADIUS);
			//ellipse(0, 0, this.r, this.r);
			imageMode(CENTER);
			image(this.image, 0,0,150, 150);
			pop()
			
	}
}
