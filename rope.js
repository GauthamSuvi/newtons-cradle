class rope{
	
	constructor(body1, body2, offsetX, offsetY){
		this.offsetX = offsetX
		this.offsetY = offsetY
	
	var options={
		bodyA: body1,
		bodyB: body2,
		pointB: {x:this.offsetX, y:this.offsetY}
	}
		//create rope constraint here
	this.rope = Matter.Constraint.create(options)
	World.add(world,this.rope);

}
    //create display() here 
	display(){
	var pointA = this.rope.bodyA.position;
	var pointB = this.rope.bodyB.position;
	var anchor1x = pointA.x;
	var anchor1y = pointA.y;
	var anchor2x = pointB.x + this.offsetX;
	var anchor2y = pointB.y + this.offsetX;
	//strokeWeight(10);
	stroke(2);
	line(anchor1x,anchor1y,anchor2x, anchor2y);
}
}
