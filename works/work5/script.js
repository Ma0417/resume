$(function () {
    var music=document.getElementById('music');
    $('#play').click(function () {
        if($(this).hasClass('ion-ios-pause')){
            $(this).removeClass('ion-ios-pause').addClass('ion-ios-play');
            music.pause();
            $('.progress .bar-min').stop().animate({width:'100px'});
        }else{
            $(this).removeClass('ion-ios-play').addClass('ion-ios-pause');
            music.play();
            $('.progress .bar-min').addClass('active');
        }
    });

    $('.search').focus(function () {
        $(this).removeAttr('placeholder');
        $('.ion-ios-search').css('color','#fff');
        $('.search-modal').fadeIn(100);
        $('.admin-modal').fadeOut();
        $('.name').css('color','rgba(255,255,255,0.5)');
    });
    $('.search').blur(function () {
        $(this).attr('placeholder','搜索音乐，歌手，歌词，用户');
        $('.ion-ios-search').css('color','#CA7D7D');
        $('.search-modal').fadeOut(100);
    });

    $('.name').click(function () {
       if($('.admin-modal').is(':visible')){
           $('.admin-modal').fadeOut();
           $(this).css('color','rgba(255,255,255,0.5)');
       } else{
           $('.admin-modal').fadeIn();
           $(this).css('color','#fff');
       }
    });
    $('.content').click(function () {
        $('.admin-modal').fadeOut();
        $('.name').css('color','rgba(255,255,255,0.5)');
    });
    $('.admin-modal').click(function () {
        $(this).fadeOut();
        $('.name').css('color','rgba(255,255,255,0.5)');
    })
})
