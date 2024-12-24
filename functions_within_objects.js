function item (sellingPrice, itemPrice){
    this.sellingPrice = sellingPrice;
    this.itemPrice = itemPrice;
    
    Object.defineProperty(this, 'discount',{
        get: function(){
            return (this.itemPrice - this.sellingPrice)/this.itemPrice*100;
        },
        set: function(perc){
            this.sellingPrice = (this.itemPrice - perc)/100 * this.itemPrice;
        },
        configurable: true,
        enumerable: true
    })
}

var banana = new item(25, 70);
alert(banana.discount);