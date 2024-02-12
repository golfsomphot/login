import { menu } from './route.js';


$(document).ready(function () {

    $("#navbar").append(menu);
    $("#button").click(()=>{
        window.location.href = '../index.html';
    });
});





