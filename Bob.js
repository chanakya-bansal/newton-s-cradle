class Bob {
 constructor(x,y){
 var options = {
     'restitution': 1.25,
     'friction' : 1,
     'density': 1.2
 }
 this.body=Bodies.circle(x,y,30,options)
 World.add(world,this.body)

 }

 display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill ("black")
    ellipse(0, 0, 30);
    pop();
  }



}