# zhooks

[![MIT License](img/mit_license.svg)](https://opensource.org/licenses/MIT)
![GitHub Stars](https://img.shields.io/github/stars/agkozak/zhooks.svg)

`zhooks` is a tool for displaying the code for all Zsh hook functions (such as `precmd`), as well as the contents of hook arrays (such as `precmd_functions`). It is useful in debugging conflicts between interactive scripts.

![zhooks](img/demo.gif)

## Installation:

Simply source `zhooks` from your `.zshrc`:

    source /path/to/zhooks.plugin.zsh

or load it using your favorite Zsh plugin manager or framework. Then run the command `zhooks` from the command line to see a thorough report.

`zhooks` returns true when hooks are being used and false when they are not.

## Zsh Hooks Functions and Hook Arrays

Zsh has the hook functions:

* `chpwd`
* `periodic`
* `precmd`
* `preexec`
* `zshaddhistory`
* `zsh_directory_name`
* `zshexit`

The corresponding arrays have `_functions` appended to their names:

* `chpwd_functions`
* `periodic_functions`
* `precmd_functions`
* `preexec_functions`
* `zshaddhistory_functions`
* `zsh_directory_name_functions`
* `zshexit_functions`

<p align=center>
    <img src="img/mascot.png" alt="zhooks Mascot">
</p>

