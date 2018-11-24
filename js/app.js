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