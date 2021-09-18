
import ajax  from './ajaxCall.js';
       
$('.more').on('click', function () {
    let json = {};

    $('.more input').each(function () {
        json[$(this).attr('name')] = $(this).val();
    });

    if (!$(this).hasClass('active')) {
        $(this).addClass('active');
        ajax.go($(this).attr('data-bind'))
        .setVaribles(json)
        .action('get',(x) => {
            x.forEach(element => {
                document.querySelector('.show-container .sec').innerHTML += element;
            });
            window.scrollTo({
                top: window.scrollY + (window.innerWidth*0.3),
                behavior: 'smooth'
            });
            let page = parseInt($('input[name="page"]').attr('value'))  + 1
            $('input[name="page"]').attr('value', page)
            $(this).removeClass('active');
            $(this).attr('data-page', page);
        }).call();
    }

});

$('.action-container').on('click','.action',function () {
   ajax.go(`/action/${$(this).attr('data-action')}/${$(this).attr('data-movie')}/${$(this).attr('data-type')}`)
        .action('post',(x)=>{
            if(x == 'false') {
                window.location.href = "/login";
            } else {
                $(this).toggleClass('active');
            }
        }).call();
});



