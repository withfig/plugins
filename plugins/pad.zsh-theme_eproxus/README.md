Pad
===

Pad is a simple, concise and beautiful theme for Zsh.

<img src="https://raw.githubusercontent.com/eproxus/pad.zsh-theme/master/screenshot.png" alt="screenshot.png" width="600">

Features:

* Double line prompt with visible divider between commands
* Highlight of the current workind directory
* Shortening of long paths that don't fit
* Version control information using Zsh's [`vcs_info`][vcs_info]
* Printing of error codes if non-zero
* Subtle printing of command execution time

Requirements
------------

Pad is made for 256-color shells and works best with the [Base 16 Shell][base-16-shell] Tomorrow Night color scheme.

Installation
------------

It is recommended to use a plugin manager or framework for Zsh. Installation instructions for various frameworks can be found [here][installation].

Configuration
-------------

Currently, no configuration for the theme itself exists. You can configure the
VCS prompt via [`vcs_info`][vcs_info]'s own options after the theme is loaded.

[base-16-shell]: https://github.com/chriskempson/base16-shell "Base 16 Shell"
[vcs_info]: http://zsh.sourceforge.net/Doc/Release/User-Contributions.html#Version-Control-Information "Zsh vcs_info"
[installation]: https://github.com/unixorn/awesome-zsh-plugins#installation "Zsh plugin installation"

