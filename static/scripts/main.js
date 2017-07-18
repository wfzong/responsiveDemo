console.log("log")

$("a.trigger").click(function(){
    if($(this).attr("rel") == "opened"){
        $("body").removeClass("has-open-menu")
        $(".mobile_nav").hide()
        $(this).attr("rel","closed").removeClass("close")
    } else {
        $("body").addClass("has-open-menu")
        $(".mobile_nav").show()
        $(this).attr("rel","opened").addClass("close")
    }

    return null
})