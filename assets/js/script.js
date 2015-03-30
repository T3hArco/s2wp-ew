(function($) {
    var backgrounds = [ "assets/img/jeans.png", "assets/img/blue.png", "assets/img/metal.png", "assets/img/squares.png", "assets/img/triangle.png" ];
    var currentBackground = Math.floor((Math.random() * backgrounds.length - 1)); // Random getal tussen 0 en 4, de size v/d array

    $.fn.changeBackground = function() {
        currentBackground++;
        if(currentBackground > 4)
            currentBackground = 0;

        $(this).fadeOut(500, function() {
            $(this).css({"background-image" : "url('" + backgrounds[currentBackground] + "')"})
        });
        $(this).fadeIn(500);
        return this;
    };

    $.fn.loadLesson = function(id) {
        /*$.getJSON("assets/json/data.json", function(data) {*/
        $.getJSON("https://gist.githubusercontent.com/T3hArco/0ff2d4283b0adcb9606e/raw/505fee925f720cdc9b66ec6f7194674d0b0d7f47/gistfile1.json", function(data) {
            alert(JSON.stringify(data[id]['name']));
        })
            .fail(function() {
                console.error("[ERROR] JSON request failed for loadLesson()");
            })
            .success(function() {
                console.log("[INFO] Loaded loadLesson(" + id + ")");
            });
    };
})(jQuery);

$(document).ready(function() {
    var loop = setInterval(function() {
        $("#background").changeBackground();
    }, 15000);

    $(".choice .button").click(function() {
        var difficulty = $(this).attr('class').split(/\s+/)[1];
        if(difficulty != "beginner" || difficulty != "intermediate" || difficulty != "expert")
            localStorage.difficulty = difficulty;
    });
});