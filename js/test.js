(function(){
var createElement = function (tag,attrs){
    var elem = document.createElement(tag);
    for (var key in attrs){
        elem.setAttribute(key, attrs[key]);
    };
    return elem;
};
var loadJS = function(src, success) {
  var domScript = createElement('script', { 'src' : src, 'type' : 'text/javascript'});
  success = success || function(){};
  domScript.onload = domScript.onreadystatechange = function() {
    if (!this.readyState || 'loaded' === this.readyState || 'complete' === this.readyState) {
      success();
      this.onload = this.onreadystatechange = null;
      this.parentNode.removeChild(this);
    }
  }
  document.body.appendChild(domScript);
};
// *** main_url is to be replaced 
if (chrome.extension){
var main_url =  chrome.extension.getURL("")
var temp = createElement("script", {'type' : 'text/javascript'} );
temp.textContent = "window.$M_main = '" + main_url + "'" 
document.body.appendChild(temp)
//var main = "chrome-extension://gobdfldbhiigjcfnebkfcdkalnfmahfm/"
loadJS(main_url + 'js/jquery-1.8.2.min.js', function(){
	loadJS(main_url + 'js/markalbe.js');
});
}
}());