$(document).ready(function(){
    $('form').ajaxForm({
        dataType: 'json',
        beforeSend:function()
        {
            $('.progress-bar').text('0%');
            $('.progress-bar').css('width', '0%');
            $('.progress-success').empty();
        },
        uploadProgress:function(event, position, total, percentComplete)
        {
            console.log(percentComplete)
            $('.progress-bar').text(`${percentComplete}%`);
            $('.progress-bar').css('width', `${percentComplete}%`);
        },
        success:function(data)
        {
            console.log(data)
            if(data.success)
            {
                $('.progress-success').html(`<div class="alert alert-success"><b>${data.success}</b></div>`);
            }
        }
    })
});