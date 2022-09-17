$(window).on('load', function () {

    var filterAktif = '.website';

    $('.filters_menu li').click(function () {
        
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');
        var data = $(this).attr('data-filter');

        $(this.dataset['filter']).each(function () {

            this.className = this.className.replace('hdn', '');

        });

        filterAktif = data;
        return iso();

    });

    const iso = (function isoF() {

        $(".wr").isotope({
            itemSelector: ".isoc",
            filter: filterAktif,
            masonry: {
                columnWidth: ".isoc"
            }
        });

        return isoF;
    }());


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
