$(function () {
    $("#tabs").tabs();
    var img;
    
    $("#btn-pg").click(function() {
        $('#pickguard').removeAttr('src');
    });

    $("#btn-br").click(function() {
        $('#bridge').removeAttr('src');
    });

    $("#btn-pu").click(function() {
        $('#puB, #puM, #puN').removeAttr('src');
    });

    $("#btn-jack").click(function() {
        $('#jack').removeAttr('src');
    });
    $("#btn-neck").click(function() {
        $('#neck').removeAttr('src');
    });
    $("#btn-str").click(function() {
        $('#string').removeAttr('src');
    });

    $("#tabs img").draggable({
        revert: true,
        revertDuration: 0,
        zIndex: 100,
        helper: 'clone'
        // snap: "#dvDest",
        // snapMode: "inner"
    });

    $("#dvDest").droppable({
        drop: function (event, ui) {
            var dropped = ui.draggable;
            var droppedOn = this;
            img = $(dropped).attr('src');
            img = img.replace('/thumbs/', '/');

            if($(dropped).hasClass('pickguards')){
                $("#pickguard").attr('src', img);
            }
            if($(dropped).hasClass('bridges')){
                $("#bridge").attr('src', img);
            }
            if($(dropped).hasClass('jacks')){
                $("#jack").attr('src', img);
            }
            if($(dropped).hasClass('pickupsBr')){
                $("#puB").attr('src', img);
            }
            if($(dropped).hasClass('pickupsMd')){
                $("#puM").attr('src', img);
            }
            if($(dropped).hasClass('pickupsNk')){
                $("#puN").attr('src', img);
            }
            if($(dropped).hasClass('necks')){
                $("#neck").attr('src', img);
            }
            if($(dropped).hasClass('strings')){
                $("#string").attr('src', img);
            }
            //return to original thumbnail place instead of actually getting dropped
            return !event;
        }
    });
})(jQuery);