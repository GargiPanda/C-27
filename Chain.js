class Chain {
    constructor (BodyA, BodyB){
        var options = {bodyA:BodyA, 
        bodyB:BodyB, length:10, stiffness:0.04}
        this.chain = Matter.Constraint.create (options)
        World.add (world, this.chain) 
    }
    display() {
       var pointA = this.chain.bodyA.position
       var pointB = this.chain.bodyB.position
       line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}