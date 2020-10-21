// ==UserScript==
// @name Mailman discard
// @namespace github.com/quiddity-wp/wikimedia-style-tweaks
// @description Automatically selects "Discard" and ticks the "Add" and "Discards" checkboxes on Mailman admin requests for pending messages - Forked from https://bd808.com/userscripts/
// @include */mailman/admindb/*
// @include */lists/admindb/*
// @version 0.2.2
// @author Bryan Davis, quiddity
// @license MIT License; http://opensource.org/licenses/MIT
// @grant none
// @run-at document-end
// ==/UserScript==
(function() {
    var inputs = document.getElementsByTagName('input'),
        len = inputs.length;
    for (var i = 0; i < len; i++) {
        var input = inputs[i];
        if (
            input.name.toLowerCase().match(/^senderaction/) &&
            input.value == '3'
           ) {
            input.checked = true;
        } else if (input.name.toLowerCase().match(/^senderfilterp/)) {
            input.checked = true;
        }
    }
})();
