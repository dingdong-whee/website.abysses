

function RandomHREF() {
        randnum = Math.floor(Math.random() * 7) + 1;
        return "4_random-fun/" + randnum + "/index.html";
    }

$(document).ready(function($) {

    $("#random-fun").on('click', function(e) {
        e.originalEvent.currentTarget.href = RandomHREF();
    });

});