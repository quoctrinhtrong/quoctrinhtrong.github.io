interface People {
    name:string;
    say():void;
    eat():void;
}

interface Bird {
    fly(): void;
}

class Boy {
    playGame() {
        console.log('Boy play game')
    }
}

class Superman extends Boy implements People, Bird {
    name: string;
    constructor(name: string) {
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

let objSuperman:Superman = new Superman('Quoc');

objSuperman.say();
objSuperman.fly();
objSuperman.playGame();