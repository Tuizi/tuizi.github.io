import CardLoader from 'card-loader';

class App {
    constructor(testsUrl) {
        this.cardLoader = new CardLoader(testsUrl);
    }

    init() {

    }
}

var app = new App('tests/index.json');
app.init();