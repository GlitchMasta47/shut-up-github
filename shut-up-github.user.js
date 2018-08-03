// ==UserScript==
// @name         Shut up GitHub
// @version      1.0
// @description  Every time you load a page on GitHub, it removes any error banners. Helpful for hiding that stupid "your password has been pwned" banner.
// @author       GlitchMasta47
// @match        *.github.com
// @grant        none
// ==/UserScript==

(function() {
    window.document.getElementById("js-flash-container").innerHTML = null;
})();
