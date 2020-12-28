
$(document).ready(function () {

    $("article").on("click", function (ev) {
        $(ev.currentTarget).toggleClass("seleccion");
        var rut = ev.currentTarget.id;
        if ($("." + rut).is(":checked")) {
            $("." + rut).prop("checked", false);
        } else {
            $("." + rut).prop("checked", true);
        }
    });

    $("input[type=checkbox]").on("click", function (et) {
        var rut1 = $(et.currentTarget).val();
        $("#" + rut1).toggleClass("seleccion");
    });

});

