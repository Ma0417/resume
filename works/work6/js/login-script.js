$(function () {

    $.fn.fullpage({

        verticalCentered: false,

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],

        navigation: true,

        navigationTooltips: ['首页', '第二页', '第三页', '第四页', '第五页']

    });

	$('.login input').focus(function () {
		$(this).removeAttr('placeholder');
    });
	$('.beat').blur(function () {
		if(!$(this).val()){
			$('.beat-span').text('请输入正确的用户名!');
		}else{
            $('.beat-span').text('');
		}
		$(this).attr('placeholder','请输入用户名')
    });
    $('.passWorld').blur(function () {
        if(!$(this).val()){
            $('.ps-span').text('请输入正确的密码!');
        }else{
            $('.ps-span').text('');
		}
        $(this).attr('placeholder','请输入用户密码')
    });
    $('.verification').blur(function () {
        if(!$(this).val()){
            $('.vf-span').text('请输入正确的验证码!');
        }else{
            $('.vf-span').text('');
		}
        $(this).attr('placeholder','请输入验证码')
    });
    $('.sign').click(function() {
		if(!$('.beat').val() || !$('.passWorld').val() || !$('.verification').val()){
			alert('登录信息填写不完整!');
			return false;
		}
    })
});