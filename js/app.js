var filters_btn = $('#filters_toggle');
var filters_elem_array = [$('.filters'),$('#filters_mask')];

$(filters_btn).click(function(){
    $(filters_elem_array).toggleClass('showed');
    $('body').toggleClass('freeze');
});
$('#filters_mask').click(function(){
    $(filters_elem_array).toggleClass('showed');
    $('body').toggleClass('freeze');
});