let oUl = $(".clear")[0];
let oli = $(".coverOne>.clear>li");
function show(a,i,name) {
    let clerity = 0;
    let timer;
    timer = setInterval(function () {
        $(a).css("opacity", `${clerity}`);
        if(clerity<=1){
            clerity += 0.01;
        }else if (i==0 && clerity >= 1) {
            console.log(clerity);
            $(".coverOne").css("display","none");
            $(name).css("display","block");
            clearInterval(timer);
            return;
        };
    }, 10)
}
function play_show(name) {
    let i = 7;
    let i2 = 8;
    timer2 = setInterval(function () {
        show(oli[i],i,name);
        show(oli[i2],i2,name);
        i--;
        i2++;
        if (i < 0) {
            clearInterval(timer2);
            return;
        }
    }, 50);
}
// function ()
$loginBox=$("#app");
$information=$("#information");
$work=$("#work");
$workExperience=$("#workExperience")
$("#app").on('click',function(){
    $loginBox.hide();
    play_show(".information");
})
$("#information").on('click',function(){
    $information.hide();
    play_show(".work");
})
$("#work").on('click',function(){
    $work.hide();
    play_show(".workExperience");
})
$("#workExperience").on('click',function(){
    $workExperience.hide();
    play_show(".contactMe");
})
play_show(".loginBox");


