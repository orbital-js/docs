//@ts-check
fetch('https://api.github.com/repos/orbital-js/orbital/contributors')
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log(res);
        var contributors = document.querySelector('.contributors');
        if (contributors) {
            // Starting from 1 because we already gave Kamil credit
            for (var i = 0; i < res.length; i++) {
                if (['wbhob', 'MonsieurMan'].indexOf(res[i].login) < 0) {
                    contributors.innerHTML += '<a href="' + res[i].html_url + '">' + res[i].login + '</a> ';
                }
            }
        }
    })
