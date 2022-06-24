$("a[href='#top']").click(function () {
    return $("html, body").animate({
        scrollTop: 0
    }, "fast"), !1
});
var color = ["#dedede", "#ae90ff", "#ff0000", "#a3b42e", "#F2ED6F"];
$(".color-change").mouseover(function () {
    var o = color[Math.floor(Math.random() * color.length)];
    $("body").css("--color-main", o)
});
