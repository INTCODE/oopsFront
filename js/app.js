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
function addUserHandler(event){
    $(event.target).prependTo("#dragula_left");
    $(event.target).attr('onclick','removeUserHandler(event)');
    $('.empty-slot').remove();
    if($("#dragula_left").children().length<10){
        var missing_empty = 10 - $("#dragula_left").children().length;
        for(i=0;i<missing_empty;i++){
            $(emptySlot).appendTo("#dragula_left");
        }
    }
}
function removeUserHandler(event){
    $(event.target).prependTo("#dragula_right");
    $(event.target).attr('onclick','addUserHandler(event)');
    if($("#dragula_left").children().length<10){
        var missing_empty = 10 - $("#dragula_left").children().length;
        for(i=0;i<missing_empty;i++){
            $(emptySlot).appendTo("#dragula_left");
        }
    }
}
$('#dragula_choose_cancel').on('click',function(){
    $("#dragula_choose_box").toggleClass('showed');
    $('body').toggleClass('freeze');
});
if($(document).width()<991){
    $('#dragula_left li.empty-slot').attr('onclick','openMenuHandler()');
    $('#dragula_right li.recommended-user').attr('onclick','addUserHandler(event)');
}
// if($(document).width()<991){
//     $('#dragula_left .empty-slot').on('click',function(){
//         $("#dragula_choose_box").toggleClass('showed');
//         $('body').toggleClass('freeze');
//     });
//     $('#dragula_choose_cancel').on('click',function(){
//         $("#dragula_choose_box").toggleClass('showed');
//         $('body').toggleClass('freeze');
//     });
//     $('#dragula_right .recommended-user').on('click', function(){
//         $(this).prependTo("#dragula_left");
//         $(this).off();
//         $('.empty-slot').remove();
//         if($("#dragula_left").children().length<10){
//             var missing_empty = 10 - $("#dragula_left").children().length;
//             for(i=0;i<missing_empty;i++){
//                 $(emptySlot).appendTo("#dragula_left");
//                 $('#dragula_left .empty-slot').on('click',function(){
//                     $("#dragula_choose_box").toggleClass('showed');
//                     $('body').toggleClass('freeze');
//                 });
//             }
//         }
//         $('#dragula_left .recommended-user').on('click', function(){
//             $(this).prependTo("#dragula_right");
//             $(this).off();
//             if($("#dragula_left").children().length<10){
//                 $(emptySlot).appendTo("#dragula_left");
//                 $('#dragula_left .empty-slot').on('click',function(){
//                     $("#dragula_choose_box").toggleClass('showed');
//                     $('body').toggleClass('freeze');
//                 });
//             }
//             $('#dragula_right .recommended-user').on('click', function(){
//                 $(this).prependTo("#dragula_left");
//                 $(this).off();
//                 $('.empty-slot').remove();
//                 if($("#dragula_left").children().length<10){
//                     var missing_empty = 10 - $("#dragula_left").children().length;
//                     for(i=0;i<missing_empty;i++){
//                         $(emptySlot).appendTo("#dragula_left");
//                         $('#dragula_left .empty-slot').on('click',function(){
//                             $("#dragula_choose_box").toggleClass('showed');
//                             $('body').toggleClass('freeze');
//                         });
//                     }
//                 }
//             });
//         })
//     })
// }