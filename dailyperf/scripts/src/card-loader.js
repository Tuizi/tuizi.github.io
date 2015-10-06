export default class {
    constructor(url) {
        this.url = url;
    }

    load() {
        fetch(this.url).then((response)=> {
            response.json().then((json => {
                console.log(json);
            }));
        });
    }
}