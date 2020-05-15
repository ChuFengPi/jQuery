//解决苹果返回不刷新问题
window.onpageshow = function(event){
	if (event.persisted) {
		window.location.reload();
	}
};
var browserRule = /^.*((iPhone)|(iPad)|(Safari))+.*$/;
    if (browserRule.test(navigator.userAgent)) {
        window.onpageshow = function(event) {
            if (event.persisted) {
                window.location.reload()
            }
        };
    }