function triangle(a,b){
    this.a = a;
    this.b = b;
    
    Object.defineProperty(this,"c",{
    get: function(){
        return Math.sqrt(a*a+b*b);
    },
    set: function(hypo){
        this.c = hypo;
    },
    configurable:true,
    enumerable:true
    })
}

myTriangle = new triangle(5,12);
alert(myTriangle.c);
