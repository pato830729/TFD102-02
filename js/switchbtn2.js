var up = true;
var timeout = null;
$(document).ready(function () {

    $(".header_logosize").mousedown(function () {
        clearTimeout(timeout);
        up = false;
        timeout = setTimeout(function () {
            if (!up) {
                window.location.href="index2.html";
            }
        }, 3000);
    });

    $(".header_logosize").mouseup(function () {
        clearTimeout(timeout);
        up = true;
    });
});