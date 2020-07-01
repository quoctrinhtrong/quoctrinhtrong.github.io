class Boy {
    playGame() {
        console.log('Boy play game');
    }
}
class Superman extends Boy {
    constructor(name) {
        super();
        this.name = name;
    }
    say() {
        console.log('Hello superman!');
    }
    eat() {
        console.log('Superman eat rice!');
    }
    fly() {
        console.log('Superman fly!');
    }
}
let objSuperman = new Superman('Quoc');
objSuperman.say();
objSuperman.fly();
objSuperman.playGame();
