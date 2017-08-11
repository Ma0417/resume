$(function () {
    $.fn.fullpage({
        // verticalCentered: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: true,
        navigationTooltips: ['首页', '技能', '作品', '个人评价'],
        menu:'#menu',
        // slideNavPosition:true,
        afterLoad: function(anchorLink, index){
            if(index == 4){
                var s = "我是一个性格幽默、善于沟通、做事负责任的人。"+
                        "喜欢研究所碰到的各种技术和问题，" +
                        "对个人的提升有不懈的追求。" +
                        "热爱生活，热爱前端。有一年半的前端开发经验，" +
                        "有比较丰富的HTML5、CSS3、JavaScript手写经历." +
                        "能够熟练使用jQuery、bootstrap等常用框架;" +
                        "我的宗旨是坚持手写，不依赖插件，拒绝复制粘贴;" +
                        "开发出的页面符合W3C标准，有良好的编程习惯。",
                    arr = s.split(''),
                    result = '';
                (function output() {
                    if(arr.length) {
                        setTimeout(function() {
                            result = arr.shift();
                            var text=document.getElementById('page-text');
                            text.innerHTML+=result;
                            output();
                        },100);
                    }
                }());
            }
        }
    });

    $('.menu .btn').click(function () {
        if($(this).hasClass('close')){
            $(this).removeClass('close');
            $('.menu-list').fadeOut();
        }else{
            $(this).addClass('close');
            $('.menu-list').fadeIn();
        }
        return false;
    })
    $('.menu-list').click(function () {
        $(this).fadeOut();
        $('.menu .btn').removeClass('close');
    });
    var audio=document.getElementById('music');
    audio.play();
    audio.volume = 0.3;
    $('.music span').click(function () {
        // var audio=$('#music');
        if($(this).hasClass('control')){
            $(this).removeClass('control');
            audio.pause();
        }else{
            $(this).addClass('control');
            audio.play();
        }
    })
});

