$(document).ready(function() {
    move_this();
    clickMove();
    changeStyle();
    arrowChange();
});

//set default position
var positionIndex = 0;


//moving slider by arrows
function move_this(){
    //counting number of boxes
    box_number = 0;
    $('.inBox').each(function(){
        box_number++;
    });
    //define width for one box
    one_box_size=$('.scrollbox').width();
    //setting width for main box
    $('.inBox').css('width', one_box_size+'px');
    //setting width of all boxes
    $('.scrollbox_in').css('width', (one_box_size*box_number)+'px');

    $('.arrow').on('click', function() {
        if($(this).data('type')== 'left') {
            positionIndex--;
            if(positionIndex<0)
            {positionIndex = box_number-1;}
            move = one_box_size*positionIndex;
            $('.scrollbox_in').animate({
                'left': '-'+move+'px'
            }, 500);
        } else {
            positionIndex++;
            if(positionIndex>=(box_number)){positionIndex = 0;}
            move = one_box_size*positionIndex;
            $('.scrollbox_in').animate({
                'left': '-'+move+'px'
            },500);
        }
    });
}

//moving slider by thumbnails
function clickMove() {
    $('.inBox_small').on('click', function() {
        chosenBox = $(this).data('type');
        if(positionIndex < chosenBox - 1 ) {
            move = one_box_size*(chosenBox-1);
            $('.scrollbox_in').animate({
                'left': '-'+move+'px'
            },500);
        } else if (positionIndex > chosenBox - 1 ) {
            move = one_box_size*(chosenBox-1);
            $('.scrollbox_in').animate({
                'left': '-'+move+'px'
            },500);
        };
        positionIndex = chosenBox-1;  
    });
}

//listener click event on thumbnails
function changeStyle() {
    $('.inBox_small').on('click', function() {
        $('.inBox_small').removeClass('active');
        $(this).addClass('active');
    });
}

//listener click event on arrow
function arrowChange() {
    $('.arrow').on('click', function() {
        $('.inBox_small').removeClass('active');
        $('.inBox_small').each(function() {
            if($(this).data("type") == positionIndex+1 ){
            $(this).addClass('active');
        };
        });
    })
}