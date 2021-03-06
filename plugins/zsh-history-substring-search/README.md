This is a clean-room implementation of the [Fish shell][1]'s history search
feature, where you can type in any part of any command from history and then
press chosen keys, such as the UP and DOWN arrows, to cycle through matches.

[1]: http://fishshell.com
[2]: http://www.zsh.org/mla/users/2009/msg00818.html
[3]: http://sourceforge.net/projects/fizsh/
[4]: https://github.com/robbyrussell/oh-my-zsh/pull/215
[5]: https://github.com/zsh-users/zsh-history-substring-search
[6]: https://github.com/zsh-users/zsh-syntax-highlighting


Requirements
------------------------------------------------------------------------------

* [ZSH](http://zsh.sourceforge.net) 4.3 or newer


Usage
------------------------------------------------------------------------------

1.  If you want to use [zsh-syntax-highlighting][6] along with this script,
    then make sure that you load it *before* you load this script.

2.  Bind keyboard shortcuts to this script's functions.

    Users typically bind their UP and DOWN arrow keys to this script, thus:
    * Run `cat -v` in your favorite terminal emulator to observe key codes.
      (**NOTE:** In some cases, `cat -v` shows the wrong key codes.  If the
      key codes shown by `cat -v` don't work for you, press `<C-v><UP>` and
      `<C-v><DOWN>` at your ZSH command line prompt for correct key codes.)
    * Press the UP arrow key and observe what is printed in your terminal.
    * Press the DOWN arrow key and observe what is printed in your terminal.
    * Press the Control and C keys simultaneously to terminate the `cat -v`.
    * Use your observations from the previous steps to create key bindings.
      For example, if you observed `^[[A` for UP and `^[[B` for DOWN, then:

          bindkey '^[[A' history-substring-search-up
          bindkey '^[[B' history-substring-search-down

      However, if the observed values don't work, you can try using terminfo:

          bindkey "$terminfo[kcuu1]" history-substring-search-up
          bindkey "$terminfo[kcud1]" history-substring-search-down

      You might also want to bind the Control-P/N keys for use in EMACS mode:

          bindkey -M emacs '^P' history-substring-search-up
          bindkey -M emacs '^N' history-substring-search-down

      You might also want to bind the `k` and `j` keys for use in VI mode:

          bindkey -M vicmd 'k' history-substring-search-up
          bindkey -M vicmd 'j' history-substring-search-down

3.  Type any part of any previous command and then:

    * Press the `history-substring-search-up` key, which was configured in
      step 2 above, to select the nearest command that (1) contains your query
      and (2) is also older than the current command in your command history.

    * Press the `history-substring-search-down` key, which was configured in
      step 2 above, to select the nearest command that (1) contains your query
      and (2) is also newer than the current command in your command history.

    * Press `^U` the Control and U keys simultaneously to abort the search.

4.  If a matching command spans more than one line of text, press the LEFT
    arrow key to move the cursor away from the end of the command, and then:

    * Press the `history-substring-search-up` key, which was configured in
      step 2 above, to move the cursor to the line above the cursored line.
      When the cursor reaches the first line of the command, pressing the
      `history-substring-search-up` key again will cause this script to
      perform another search.

    * Press the `history-substring-search-down` key, which was configured in
      step 2 above, to move the cursor to the line below the cursored line.
      When the cursor reaches the last line of the command, pressing the
      `history-substring-search-down` key, which was configured in step 2
      above, again will cause this script to perform another search.


History
------------------------------------------------------------------------------

* September 2009: [Peter Stephenson][2] originally wrote this script and it
  published to the zsh-users mailing list.

* January 2011: Guido van Steen (@guidovansteen) revised this script and
  released it under the 3-clause BSD license as part of [fizsh][3], the
  Friendly Interactive ZSHell.

* January 2011: Suraj N. Kurapati (@sunaku) extracted this script from
  [fizsh][3] 1.0.1, refactored it heavily, and finally repackaged it as an
  [oh-my-zsh plugin][4] and as an independently loadable [ZSH script][5].

* July 2011: Guido van Steen, Suraj N. Kurapati, and Sorin Ionescu
  (@sorin-ionescu) [further developed it][4] with Vincent Guerci (@vguerci).

* March 2016: Geza Lore (@gezalore) greatly refactored it in pull request #55.
