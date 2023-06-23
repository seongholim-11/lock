const s = $('.s')
const r = $('.r')
const p = $('.p')
const ls = $('.ls')
const lp = $('.lp')
const lr = $('.lr')
const rs = $('.rs')
const rp = $('.rp')
const rr = $('.rr')
const rps = $('.rps')
const lrps = $('.lrps')
const rrps = $('.rrps')
const reset = $('.reset')
let x = 0;

r.click(function () {
    rps.addClass('active')
    lrps.css('display', 'none')
    lr.delay(3000).css('display', 'block')
    x=0
    frps();
    console.log("🚀 ~ file: script.js:22 ~ x:", x)
})
s.click(function () {
    rps.addClass('active')
    lrps.css('display', 'none')
    ls.delay(3000).css('display', 'block')
    x=1;
    frps()
    console.log("🚀 ~ file: script.js:30 ~ x:", x)
})
p.click(function () {
    rps.addClass('active')
    lrps.css('display', 'none')
    lp.delay(3000).css('display', 'block')
    x=2
    frps()
    console.log("🚀 ~ file: script.js:38 ~ x:", x)
})

reset.click(function () {
    rps.removeClass('active')
    lrps.css('display', 'none')
    lr.css('display', 'block')
    $('h2').empty();
})

function frps(){
    var rand = Math.floor(Math.random() * 3);
    console.log("🚀 ~ file: script.js:47 ~ frps ~ rand:", rand)
    console.log("🚀 ~ file: script.js:56 ~ frps ~ x:", x)
    $('h2').empty();
    if(rand == 0){
        rrps.css('display', 'none')
        rr.delay(3000).css('display', 'block')
        if(x==0){
            $('h2').prepend("<p>비겼습니다</p>");
        }else if(x==1){
            $('h2').prepend("<p>졌습니다.</p>");
        }else{
            $('h2').prepend("<p>이겼습니다.</p>");
        }
    }else if(rand == 1){
        rrps.css('display', 'none')
        rs.delay(3000).css('display', 'block')
        if(x==0){
            $('h2').prepend("<p>이겼습니다</p>");
        }else if(x==1){
            $('h2').prepend("<p>비겼습니다.</p>");
        }else{
            $('h2').prepend("<p>졌습니다.</p>");
        }
    }else{
        rrps.css('display', 'none')
        rp.delay(3000).css('display', 'block')
        if(x==0){
            $('h2').prepend("<p>졌습니다</p>");
        }else if(x==1){
            $('h2').prepend("<p>이겼습니다.</p>");
        }else{
            $('h2').prepend("<p>비겼습니다.</p>");
        }
    }
}