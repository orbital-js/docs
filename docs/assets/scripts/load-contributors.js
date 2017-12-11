//@ts-check
fetch('https://api.github.com/repos/nestjs/nest/contributors')
    .then(res => {
        return res.json();
    })
    .then(res => {
        console.log(res);
        var contributors = document.querySelector('.contributors');
        if (contributors) {
            // Starting from 1 because we already gave Kamil credit
            for (var i = 1; i < res.length; i++) {

                contributors.innerHTML += '<a href="' + res[i].html_url + '">' + res[i].login + '</a>&nbsp;&nbsp;';
            }
        }
    })
