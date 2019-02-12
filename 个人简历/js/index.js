let oUl = $(".clear")[0];
let oli = $(".coverOne>.clear>li");
function show(a, i, name) {
    let clerity = 0;
    let timer;
    timer = setInterval(function () {
        $(a).css("opacity", `${clerity}`);
        if (clerity <= 1) {
            clerity += 0.01;
        } else if (clerity >= 1) {
            $(".coverOne").css("display", "none");
            oli.css('opacity', 0)
            $(name).css("display", "block");
            clearInterval(timer);
            return;
        }
    }, 10)
}
function play_show(name) {
    let i = 7;
    let i2 = 8;
    $(".coverOne").css("display", "block");
    // oli.css('opacity',0)
    let timer2 = setInterval(function () {
        show(oli[i], i, name);
        show(oli[i2], i2, name);
        i--;
        i2++;
        if (i < 0) {
            clearInterval(timer2);
            return;
        }
    }, 50);
}
$loginBox = $("#app");
$information = $("#information");
$work = $("#work");
$workExperience = $("#workExperience");
$contactMe = $("#contactMe");
play_show(".loginBox");

var moveY,                                           //滑动距离
    endY,                                            //滑动停止的Y坐标
    startY;                                          //滑动开始的Y坐标
// 触摸开始
function boxTouchStart(e) {
    e = e || window.event;
    var touch = e.touches[0];
    startY = touch.pageY;
}

$loginBox.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$information.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$work.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$workExperience.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$contactMe.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})


$loginBox.on('touchmove', function (e) {
    var touch = e.touches[0];

    moveY = touch.pageY - startY;

})
$("#information").on('touchmove', function (e) {
    var touch = e.touches[0];
    moveY = touch.pageY - startY;
})
$("#work").on('touchmove', function (e) {

    var touch = e.touches[0];
    moveY = touch.pageY - startY;

})
$("#workExperience").on('touchmove', function (e) {

    var touch = e.touches[0];
    moveY = touch.pageY - startY;
})
$("#contactMe").on('touchmove', function (e) {
    var touch = e.touches[0];
    moveY = touch.pageY - startY;
})



$loginBox.on('touchend', function (e) {
    //下一页
    if (moveY < 0) {
        $loginBox.hide();
        play_show(".information");
    }
})
$("#information").on('touchend', function (e) {
    //下一页
    if (moveY < 0) {
        $information.hide();
        play_show(".work");
    }
    //上一页
    else if (moveY > 0) {
        $information.hide();
        play_show(".loginBox");

    }
})
$("#work").on('touchend', function (e) {
    //下一页
    if (moveY < 0) {

        $work.hide();
        play_show(".workExperience");
    }
    //上一页
    else if (moveY > 0) {
        $work.hide();
        play_show(".information");

    }
})
$("#workExperience").on('touchend', function (e) {

    // 下一頁
    if (moveY < 0) {
        $workExperience.hide();
        play_show(".contactMe");

    }
    // 上一頁
    else if (moveY > 0) {
        $workExperience.hide();
        play_show(".work");

    }
})
$("#contactMe").on('touchend', function (e) {
    // 上一頁
    if (moveY > 0) {
        $contactMe.hide();
        play_show(".workExperience");
    }
})
play_show(".loginBox");