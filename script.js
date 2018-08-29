window.onload = function() {
    var srcMain; //source of main photo
    var color = "black"; //color of current item, default=black

    hideUnvailible(color); //hiding unavailible sizes on main (default) photo

    $(".color-item").bind('click', function(e) { //changing main photo after click on color thumb
        color = $(this).attr("data-color");
        srcMain = "img/item" + color + ".jpg"; //getting src of main photo, based on "clicked" colour
        $(".main-photo").attr("src", srcMain);
        $(".color-list").children().attr("class", "color-item"); //nullifying border on thumbs
        $(this, ".color-item").addClass("color-active"); //border on active thumb 
        hideUnvailible(color);
        return (color);
    });

    function hideUnvailible(color) { //hiding unavailible sizes 
        $("button").removeClass("disabled"); //nullifying disabled buttons
        if (color == "red" || color == "green" || color == "blue") {
            $("button[data-size='m']").addClass("disabled");
            $("button[data-size='xs']").addClass("disabled");
            $("button[data-size='xxl']").addClass("disabled");
        }
        if (color == "black" || color == "pink" || color == "white") {
            $("button[data-size='l']").addClass("disabled");
            $("button[data-size='xxxl']").addClass("disabled");
        }
    }

    $(".size-list button").bind('click', function(e) { //showing input for quantity of shirts
        $(this, "button").addClass("active");
        $(".quantity-block").removeClass("invisible"); //only after click on sizes

    });

    $(".quantity-block").validate({
        rules: {
            quantityinput: {
                required: true,
                number: true,
                min: 1,
                max: 50
            },
            messages: {
                quantityinput: {
                    required: "Введите количество от 1 до 50",
                    number: "Введите цифру от 1 до 50",
                    min: "Введите количество от 1 до 50",
                    max: "Введите количество от 1 до 50"

                }
            }
        }
    });



}

