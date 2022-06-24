var clientlist = ["Hessisches Staatstheater", "Musikstadt :Leipzig", "Schauspielhaus Graz", "Oper Leipzig", "Deutscher Designer Club", "KunstSalon Köln", "eos chamber orchestra", "KarmaXutra", "Staatstheater Cottbus", "Kunstbibliothek Berlin", "Cosmic Compositions", "Black Roll", "Echt Bodensee", "Jazzclub Lindau", "Kultur Lindau", "Mediendesign Ravensburg", "Lunchtime Talks", "KulturRegion Stuttgart", "Forever Broke", "Under The Scope", "House Of One", "SINNER", "blum", "van hoecke", "Dethleffs", "Leipzig Tourismus", "Radio Bremen Zwei", "MHP"];

function textSequence(e) {
    clientlist.length > e ? setTimeout(function () {
        document.getElementById("clients").innerHTML = clientlist[e], textSequence(++e)
    }, 500) : clientlist.length == e && textSequence(0)
}

function startTime() {
    var e = new Date
        , t = e.getHours()
        , n = e.getMinutes()
        , s = e.getSeconds()
        , n = checkTime(n)
        , s = checkTime(s);
    document.getElementById("time").innerHTML = t + "<span class='time-dots'>:</span>" + n + "<span class='time-dots'>:</span>" + s;
    setTimeout(startTime, 500)
}

function checkTime(e) {
    return e < 10 && (e = "0" + e), e
}
textSequence(0), $(document).bind("mousemove", function (e) {
    $(".mouse").css({
        left: e.pageX
        , top: e.pageY
    })
});