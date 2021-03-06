class SceneOver extends Phaser.Scene {
    constructor(){
        super('SceneOver')
    }
    preload()
    {
        //load images or sounds

        this.load.image('title',"images/title.png");
        this.load.image("button1", "images/ui/buttons/1/1.png");
    }
    create()
    {
        //background iamge and also the grid for testing
        this.backImage=this.add.image(game.config.width/2, game.config.height/2,"titleBack");
        this.alignGrid=new AlignGrid({rows:11,cols:11,scene:this});
        //this.alignGrid.showNumbers();

        var title=this.add.image(0,0,'title');
        Align.scaleToGameW(title,.8);
        this.alignGrid.placeAtIndex(38,title);

        var btnStart=new FlatButton({scene:this,key:'button1',text:'Play Again!',event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        emitter.on('start_game',this.startGame,this);
    }

    startGame()
    {
        this.scene.start('SceneMain');
    }
    update() {}
}