class Hero {
  constructor(x,y)
	{
		var options = { 
			density: 1, 
			frictionAir: 1
		};
		this.x=x;
		this.y=y;
		this.r=100;
		this.image=loadImage("doctor.png");
		this.body=Bodies.circle(this.x, this.y, 100, options);
		World.add(world, this.body);

	}
	
	display()
	{
			
			var heroPos=this.body.position;		
			push();
			translate(heroPos.x, heroPos.y-100);
			
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r+130);
			pop();
			
	}
}
