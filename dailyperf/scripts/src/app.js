class App {
    constructor(url) {
        this.url = url;
    }

    init() {
        fetch(this.url).then((response)=> {
            response.json().then((json => {
                console.log(json);
            }));
        });
    }
}

var app = new App('tests/index.json');
app.init();