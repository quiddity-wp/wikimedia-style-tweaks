// ==UserScript==
// @name        Set color Automatic on Wikimedia
// @version     0.1.9
// @namespace   github.com/quiddity-wp/wikimedia-style-tweaks
// @include *meta.wikimedia.org/*
// @include *office.wikimedia.org/*
// @include *commons.wikimedia.org/*
// @include *species.wikimedia.org/*
// @include *outreach.wikimedia.org/*
// @include *wikimania.wikimedia.org/*
// @include *foundation.wikimedia.org/*
// @include *wikitech.wikimedia.org/*
// @include *vrt-wiki.wikimedia.org/*
// @include *.mediawiki.org/*
// @include *.wikipedia.org/*
// @include *.wikisource.org/*
// @include *.wikiquote.org/*
// @include *.wiktionary.org/*
// @include *.wikivoyage.org/*
// @include *.wikibooks.org/*
// @include *.wikinews.org/*
// @include *.wikiversity.org/*
// @include *.wikidata.org/*
// @include *.beta.wmflabs.org/*
// @include *.wikifunctions.org/*
// @include *.wiki.gg/*
// @grant       none
// @version     1.0
// @author      Nick
// @description Automatically selects the Automatic color of Wikimedia pages.
// ==/UserScript==

(function() {
    'use strict';

    // Function to set the color to "Automatic"
    function setColorToAuto() {
        // Check if the page has the necessary elements
        const colorRadio = document.querySelector('#skin-client-pref-skin-theme-value-os');
        if (colorRadio) {
            // Set the "Automatic" radio button to checked
            colorRadio.checked = true;

            // Trigger a change event on the radio button
            const changeEvent = new Event('change');
            colorRadio.dispatchEvent(changeEvent);
        }
    }

    // Function to wait for the necessary element to appear
    function waitForElement() {
        const ColorBox = document.querySelector('#skin-client-pref-skin-theme-value-os');
        if (ColorBox) {
            setColorToAuto();
        } else {
            requestAnimationFrame(waitForElement);
        }
    }

    // Run the waitForElement function when the page loads
    window.addEventListener('load', waitForElement);
})();
