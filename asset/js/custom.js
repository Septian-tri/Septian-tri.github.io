$(window).on('load', function () {

    $(".gambarDesainGrafis").each(function () {

        $(this).on('mouseover', function () {

            $(this).imageZoom({ zoom: 200 });

        })

    });

});

// nice select
$(document).ready(function () {
    $('select').niceSelect();
});
