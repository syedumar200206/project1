$(document).ready(function() {
    $('.select-theme').click(function() {
        $('.theme-card').removeClass('selected');
        $('.select-theme').text('Apply').removeClass('btn-outline-success').addClass('btn-primary');
        $(this).closest('.theme-card').addClass('selected');
        $(this).text('✔').removeClass('btn-primary').addClass('btn-outline-success');
    });
});