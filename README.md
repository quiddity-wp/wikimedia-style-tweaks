## To use: 
1. Install Stylus: [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/) / [Chromium](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne/) (or [read more](https://github.com/openstyles/stylus/wiki/Usercss) - It's open-source and widely used)
2. Click the install links below (or just go directly to the "raw" file pages, for the ones you want to try)

## Wikimedia CSS tweaks

### General - All wikis

* **Enhanced Vector-2022** -- (compact the whitespace and tools, use the pre-scroll-header as sticky-header)
  * [Install directly with Stylus](https://github.com/quiddity-wp/wikimedia-style-tweaks/raw/master/new-vector-enhanced.user.css )
* **quiddity** -- (many power-editor tweaks - see code comments for details)
  * [Install directly with Stylus](https://raw.githubusercontent.com/quiddity-wp/wikimedia-style-tweaks/master/quiddity.user.css)

### Gerrit and IRC Cloud - (reduced Opacity for lines written by bots)
* **Gerrit** 
  * [Install directly with Stylus](https://github.com/quiddity-wp/wikimedia-style-tweaks/raw/refs/heads/master/gerrit.user.css)
* **IRC Cloud**
  * [Install directly with Stylus](https://github.com/quiddity-wp/wikimedia-style-tweaks/raw/refs/heads/master/irccloud.user.css)

### In testing...
* **tables_vertical-align_top_test** -- (for testing a [proposed change](https://en.wikipedia.org/wiki/Wikipedia_talk:Manual_of_Style/Tables#Vertical_alignment))
  * [Install directly with Stylus](https://raw.githubusercontent.com/quiddity-wp/wikimedia-style-tweaks/master/tables_vertical-align_top_test.user.css)

## Wikimedia JavaScript tweaks

* **linkify-header-script** -- (adds links that float next to subheadings. Only needed until [phab:T18691](https://phabricator.wikimedia.org/T18691) is implemented!)
  * [Install directly with GreaseMonkey (etc)](https://raw.githubusercontent.com/quiddity-wp/wikimedia-style-tweaks/master/linkify-header-script.user.js) (Get [ViolentMonkey](https://violentmonkey.github.io/) for your browser)
* **set-color-automatic-script** -- (change the color in the Appearance menu to "automatic", for a default dark-at-nighttime in private windows)
  * [Install directly with GreaseMonkey (etc)](https://raw.githubusercontent.com/quiddity-wp/wikimedia-style-tweaks/master/set-color-automatic-script.user.js)

## Before / After

Default (while scrolled) -- vs -- showing "Compact-vector-2022" -- (both logged-out)

![Before/after](https://raw.githubusercontent.com/quiddity-wp/wikimedia-style-tweaks/master/usercss14.png)

## see also
https://github.com/quiddity-wp/style-tweaks
