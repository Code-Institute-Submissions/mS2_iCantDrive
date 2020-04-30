class SceneTitle extends Phaser.Scene {
    constructor(){
        super('SceneTitle')
    }
    preload()
    {
        //load images or sounds

        this.load.image('title',"images/title.png");
        this.load.image("button1", "images/ui/buttons/1/1.png");
    }
    create()
    {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        this.alignGrid=new AlignGrid({rows:11,cols:11,scene:this});
        //this.alignGrid.showNumbers();

        this.backImage=this.add.image(game.config.width/2, game.config.height/2,"titleBack");
        this.backImage=this.add.image(game.config.width/2, game.config.height/2,"hint1");
        

        var title=this.add.image(0,0,'title');
        Align.scaleToGameW(title,.8);
        this.alignGrid.placeAtIndex(38,title);

        var hint1=this.add.image('hint1');
        Align.scaleToGameW(hint1,.8);
        this.alignGrid.placeAtIndex(38,hint1);

        var btnStart=new FlatButton({scene:this,key:'button1',text:'start',event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        emitter.on('start_game',this.startGame,this);
    }

    startGame()
    {
        this.scene.start('SceneMain');
    }
    update() {}
}