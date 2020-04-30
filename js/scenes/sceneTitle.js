class SceneTitle extends Phaser.Scene {
    constructor(){
        super('SceneTitle')
    }
    preload()
    {
        //load images

        this.load.image('title',"images/title.png");
        this.load.image("button1", "images/ui/buttons/1/1.png");
    }
    create()
    {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        this.alignGrid=new AlignGrid({rows:11,cols:11,scene:this});
        //this.alignGrid.showNumbers();

        //loads title images
        this.backImage=this.add.image(game.config.width/2, game.config.height/2,"titleBack");
        this.backImage=this.add.image(game.config.width/2, game.config.height/2,"hint1");
        

        //scales title iamges to scren size
        var title=this.add.image(0,0,'title');
        Align.scaleToGameW(title,.8);
        this.alignGrid.placeAtIndex(38,title);

        var hint1=this.add.image('hint1');
        Align.scaleToGameW(hint1,.2);
        this.alignGrid.placeAtIndex(38,hint1);

        //the start button
        var btnStart=new FlatButton({scene:this,key:'button1',text:'start',event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        //starts the game
        emitter.on('start_game',this.startGame,this);
    }

    startGame()
    //loads into scene main
    {
        this.scene.start('SceneMain');
    }
    update() {}
}