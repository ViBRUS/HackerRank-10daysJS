class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
    Rectangle.prototype.area=function(){
        const w=this.w;
        const h=this.h;
        return w*h;
    }
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
    constructor(a){
        super(a,a);
    };
}
