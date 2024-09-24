var CoinManager = pc.createScript('coinManager');

CoinManager.attributes.add('coinEntity',{type:'entity'});
CoinManager.attributes.add('count',{type:'number',default : 10});

CoinManager.prototype.initialize = function() {
this.coinEntity.enable=false;


for(var i=0;i<this.count;i++)
{
    var posX=Math.random()*10 - Math.random()*10;
    var posY=1;
    var posZ=0;

    var coin= this.coinEntity.clone();
        coin.enable=true;
coin.setPosition(posX,posY,posZ);

    this.entity.addChild(coin);
}


};



