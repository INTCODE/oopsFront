var filters_btn = $('#filters_toggle');
var filters_elem_array = [$('.filters'),$('#filters_mask')];

$(filters_btn).click(function(){
    $(filters_elem_array).toggleClass('showed');
    $('body').toggleClass('freeze');
});
$(".search-box button").click(function(){
    $(filters_elem_array).toggleClass('showed');
    $('body').toggleClass('freeze');
});
$('#filters_mask').click(function(){
    $(filters_elem_array).toggleClass('showed');
    $('body').toggleClass('freeze');
});

$('#create_test_btn').click(function(){
    $(".add-new-component").addClass("hide");
    $('.add-new-test').addClass('visible');
})
$('#new_test_cancel').click(function(){
    $(".add-new-component").removeClass("hide");
    $('.add-new-test').removeClass('visible');
})

// MOBILE EMPLOYERS ADD
function openMenuHandler(){
    $("#dragula_choose_box").toggleClass('showed');
    $('body').toggleClass('freeze');
}
function addUserHandler(){
    $(this).prependTo("#dragula_left");
    $(this).click(removeUserHandler);
    $('.empty-slot').remove();
    if($("#dragula_left").children().length<10){
        var missing_empty = 10 - $("#dragula_left").children().length;
        for(i=0;i<missing_empty;i++){
            $(emptySlot).appendTo("#dragula_left");
            $('.empty-slot').off();
            $('#dragula_left .empty-slot').click(openMenuHandler);
        }
    }
}
function removeUserHandler(){
    $(this).prependTo("#dragula_right");
    $(this).off();
    $('#dragula_right .recommended-user').click(addUserHandler);
    if($("#dragula_left").children().length<10){
        var missing_empty = 10 - $("#dragula_left").children().length;
        for(i=0;i<missing_empty;i++){
            $(emptySlot).appendTo("#dragula_left");
            $('.empty-slot').off();
            $('#dragula_left .empty-slot').click(openMenuHandler);
        }
    }
}
$('#dragula_choose_cancel').on('click',function(){
    $("#dragula_choose_box").toggleClass('showed');
    $('body').toggleClass('freeze');
});
if($(document).width()<991){
    $('#dragula_left .empty-slot').click(openMenuHandler);
    $('#dragula_right .recommended-user').click(addUserHandler);

}

// SHOW MORE TEXT
$('#more_text_trigger').click(function(){
    $( this ).parent().siblings(".more").slideToggle("fast");
    $( this ).toggleClass('active');
})

// OPEN MODAL
$('.modal-toggler').click(function(){
    var modal = $(this).data('toggle');
    $(modal).toggleClass('visible');
})

// CLOSE MODAL
$('.modal-dismiss').click(function(){
    var modal = $(this).closest('.modal');
    $(modal).toggleClass('visible');
})

//RESET MODAL