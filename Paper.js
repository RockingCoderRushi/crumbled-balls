class Paper{
    costructor(x,y,radius){
    var options={
    isStatic:false
    restitution:0.3
    friction:0.5
    }
    this.x = x
    this.y = y
    this.radius = radius
    this.body = Bodies.circle(this.x,this.y,this.radius,options)
}
display(){
    elipse()
}
}
