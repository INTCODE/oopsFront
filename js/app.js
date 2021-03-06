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
    var slots_num = $("#dragula_left").data('slots');
    if($("#dragula_left").children().length<slots_num){
        var missing_empty = slots_num - $("#dragula_left").children().length;
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
    var slots_num = $("#dragula_left").data('slots');
    if($("#dragula_left").children().length<slots_num){
        var missing_empty = slots_num - $("#dragula_left").children().length;
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
    $(modal+' .modal-mask').toggleClass('visible');
    $('body').addClass('freeze');
})

// CLOSE MODAL
$('.modal-dismiss').click(function(){
    var modal = $(this).closest('.modal');
    $(modal).toggleClass('visible');
    $(modal.prevObject[0]).toggleClass('visible');
    $('body').removeClass('freeze');
})
// SIDEBAR MODAL
$('.sidebar-dissmis').click(function(){
    $('#hr_sidebar').toggleClass('visible');
    $('#hr_sidebar .modal-mask').toggleClass('visible');
    $('body').removeClass('freeze');
})

//RESET MODAL
$('.modal-reseter').click(function(){
    var modal = $(this).closest('.modal');
    var modalInputs = $(modal).find( "input" );
    var modalTextareas = $(modal).find( "textarea" );

    $(modalInputs).val('');
    $(modalTextareas).val('');

    $('#dragula_left .recommended-user').prependTo("#dragula_right");
    $('#dragula_left .recommended-user').off();
    var slots_num = $(".modal #dragula_left").data('slots');
    var missing_empty = slots_num - $("#dragula_left").children().length;
        for(i=0;i<missing_empty;i++){
            $(emptySlot).appendTo("#dragula_left");
        }
})
// JOIN TEAM RESET MODAL
$('.jointeam-modal-reseter').click(function(){
    var modal = $(this).closest('.modal');
    var modalInputs = $(modal).find( "input" );
    
    $(modalInputs).val('');
    $('#join_team_modal .your-offer-decision').removeClass('accepted')
    $('#empty_box').css('display','block');
})