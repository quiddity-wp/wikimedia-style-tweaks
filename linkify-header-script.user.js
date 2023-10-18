// ==UserScript==
// @name        Wikimedia - Linkify headers
// @version     0.1.9
// @namespace   github.com/quiddity-wp/wikimedia-style-tweaks
// @description A userscript helping you get the url linking to specified section - forked from https://greasyfork.org/en/scripts/15930-wikipedia-linkify-headers
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
// @include *.fandom.com/*
// @grant GM_addStyle
// @compatible  firefox
// @compatible  chrome
// @compatible  opera
// ==/UserScript==

"use strict";

var nodes = document.querySelectorAll("#mw-content-text span.mw-headline[id]"),
	i, link;

for (i = 0; i < nodes.length; i++) {
	link = document.createElement("a");
	link.innerHTML = "&#128279;";
	link.href = "#" + nodes[i].id;
	link.className = "mw-headline-link";
	nodes[i].appendChild(link);
}

GM_addStyle(".mw-headline-link{font-size:70%;margin-left:.2em;display:none;user-select: none}.mw-headline:hover .mw-headline-link{display:inline;user-select: none}");
