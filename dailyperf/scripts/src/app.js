var cardTemplate = doT.template(
    '{{~it :card :index}}' +
    '<li class="card">' +
    '<a href="tests/{{=card.url}}" title="{{=card.title}}">' +
        '<article>' +
            '<header>' +
                '<h1>{{=card.title}}</h1>' +
            '</header>' +
        '</article>' +
    '</a>' +
    '</li>' +
    '{{~}}'
);

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        var cardContainer = document.querySelector('#card-container');

        fetch('tests/index.json').then(function (response) {
            response.json().then(function (data) {
                cardContainer.innerHTML = cardTemplate(data);
            });
        })
    }
};