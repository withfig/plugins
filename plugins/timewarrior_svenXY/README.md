# timewarrior

This is a small plugin for [timewarrior][1], a timetracking application.

It contains a few aliases and attempts to integrate the bash completion found [here][2]
by using bashcompinit (see [here][3] for some explanation)

Requirements
------------------------------------------------------------------------------

* [ZSH][4] 4.3 or newer

Install
------------------------------------------------------------------------------

### Using [Oh-my-zsh][5]:

1. Clone this repository in oh-my-zsh's plugins directory:

        git clone https://github.com/svenXY/timewarrior ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/timewarrior

2. Activate the plugin in `~/.zshrc`:

        plugins=( [plugins...] timewarrior)

3. Source `~/.zshrc`  to take changes into account:

        source ~/.zshrc
        
### other zsh plugin managers

Please refer to the respective documentation on how to install a plugin from guthub

Usage
------------------------------------------------------------------------------

The aliases all start with tw, for the command completion, just type

        tw <TAB>

Configuration
------------------------------------------------------------------------------

none currently.


History
------------------------------------------------------------------------------

* April 2018: Sven Hergenhahn put this together
* June 2020: added more aliases and functions
             added a license (MIT)

------------------------------------------------------------------------------
[1]: https://timewarrior.net/
[2]: https://github.com/lauft/timew-bashcompletion
[3]: https://stackoverflow.com/questions/3249432/can-a-bash-tab-completion-script-be-used-in-zsh/8492043#8492043 
[4]: http://zsh.sourceforge.net
[5]: https://github.com/robbyrussell/oh-my-zsh


