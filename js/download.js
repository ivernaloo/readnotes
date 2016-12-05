(function(){
var a,b,c,download;
a = document.getElementById("remarkalbe-readable-iframe");
b = $(a.contentDocument).find("html");
$(b).find("#remarkalbe-topbar>ul").append("<li class=\"remarkalbe-for-readable\"><a href=\"javascript:void()\" id=\"download-note\" target=\"blank\">Download</a></li>");
download = $("#download-note", b);
var ondownload = function(){
    c = b.clone();
    $(c).find("#remarkalbe-views").css({width:"auto", height : "auto"});
    b.find("#remarkalbe-views>div:hidden").each(function(){   var id = this.id; $(c).find("#"+id).remove()});
   $(c).find("#remarkalbe-topbar").hide().remove();
   $(c).find("#remarkalbe-view-nav").hide().remove();
   $(c).find("script").remove();
    t = $(c).find(".remarkalbe-title-header h1").text()
    $(c).find("head").append("<title>"+t+"</title>")
    download.attr("href", "data:text/html;charset=utf-8, "+ c.html());
};
download.mousedown(ondownload);
})();