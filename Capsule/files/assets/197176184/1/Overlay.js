var Overlay = pc.createScript('overlay');
Overlay.attributes.add('coinCounterText',{type:'entity'});
Overlay.prototype.initialize = function() {
    this.coinCount=0;
             this.app.on('Overlay:CoinCount',this.setCoinCount,this);
};
Overlay.prototype.setCoinCount = function() {
    this.coinCount++;
this.coinCountText.element.text=this.coinCount;

};