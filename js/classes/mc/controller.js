class Controller
{

    //event emitters to  be called in differnt jS scenes
    constructor()
    {
        emitter.on(G.SET_SCORE,this.setScore);
        emitter.on(G.UP_POINTS,this.upPoints);
        emitter.on(G.TOGGLE_SOUND,this.toggleSound);
        emitter.on(G.TOGGLE_MUSIC,this.toggleMusic);

    }

    //Audio functions couldn't get working
    toggleSound(val)
    {
        model.soundOn=val;
    }
    toggleMusic(val)
    {
        model.musicOn=val;
    }

    //Score function
    setScore(score)
    {
        model.score=score;
    }
    upPoints(points)
    {
        var score=model.score;
        score+=points;
        model.score=score;
    }

}
