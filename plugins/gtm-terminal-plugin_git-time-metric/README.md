<div align="center"><img src="https://cloud.githubusercontent.com/assets/630550/19619834/43c460dc-9835-11e6-8652-1c8fff91cf02.png" alt="GTM Logo" height="115" width="275"></div>
<div align="center">Git Time Metric</div>

### Terminal Git Time Metrics (GTM) plug-in

#### Simple, seamless, lightweight time tracking for all your git projects

Git Time Metrics (GTM) is a tool to automatically track time spent reading and working on code that you store in a Git repository. By installing GTM and using supported plug-ins for your favorite editors, you can immediately realize better insight into how you are spending your time and on what files.

### Installation

Installing GTM is a two step process.  First, it's recommended you install the GTM executable that the plug-in integrates with and then install the Terminal GTM plug-in.  Please submit an issue if you have any problems and/or questions.

1. Follow the [Getting Started](https://github.com/git-time-metric/gtm/blob/master/README.md) section to install the GTM executable for your operating system.
2. To install the plugin download the shell script and `source gtm-plugin.sh` from either your .bashrc or .zshrc file. Also make sure the shell script is executable `chmod +x gtm-plugin.sh`.

**Note** - to enable time tracking for a Git repository, you need to initialize it with `gtm init` otherwise it will be ignored by GTM. This is done via the command line.
```
> cd /path/to/your/project
> gtm init
```

Consult the [README](https://github.com/git-time-metric/gtm/blob/master/README.md) and [Wiki](https://github.com/git-time-metric/gtm/wiki) for more information.

**Note** - to use this plugin you must be on GTM version 1.1-beta.1 or higher.  To enable terminal tracking on an existing GTM initialized Git repository reinitialize with `gtm init`. To disable terminal tracking for a git repostiory use `gtm init --terminal=false`. 

# Features

### Reporting

The time spent in the terminal is included when using the `gtm report` command.
```
> gtm report

72b7917 Output golang info for appveyor build
Sat Sep 10 21:30:27 2016 -0500 Michael Schenk

       12m 50s  [r] Terminal
        6m  0s  [r] script/appveyor-build.sh
        2m 10s  [m] appveyor.yml
       21m  0s
```

### Terminal Prompt

The total time spent for in-process work (uncommitted) is exported to `GTM_STATUS` environment variable. Your terminal prompt can be configured to display the current status.

![](https://cloud.githubusercontent.com/assets/630550/18611230/afa8a248-7cf8-11e6-9436-ad5eccbfa500.png)

### Command Line Interface

Use the command line to report on time logged for your commits.

Here are some examples of insights GTM can provide you.

<pre>$ gtm report -today -author Schenk

7129f00 <b>Remove post processing of status</b>
Fri Sep 09 20:45:03 2016 -0500 <b>gtm-vim-plugin</b> Michael Schenk

       20m 40s  53% [m] plugin/gtm.vim
       18m  5s  46% [r] Terminal
           15s   1% [m] .gitignore
       39m  0s          <b>gtm-vim-plugin</b> </pre>

<pre>$ gtm report -format timeline-hours -last-week -author Schenk

             <b>00.01.02.03.04.05.06.07.08.09.10.11.12.01.02.03.04.05.06.07.08.09.10.11.</b>
             ------------------------------------------------------------------------
<b>Sat Oct 08</b> |                                                          ▃▃▃             |       <b>17m  0s</b>
             ------------------------------------------------------------------------
<b>Sun Oct 09</b> |                      ▁▁▁   █████████▃▃▃██████▂▂▂   ▂▂▂                   |    <b>5h 33m  0s</b>
             ------------------------------------------------------------------------
<b>Tue Oct 11</b> |                                                       ▂▂▂         ▂▂▂    |       <b>16m  0s</b>
             ------------------------------------------------------------------------
<b>Fri Oct 14</b> |                                     ▂▂▂                                  |       <b>13m  0s</b>
             ------------------------------------------------------------------------
<b>Sat Oct 15</b> |                            ███▇▇▇███▇▇▇███▁▁▁▇▇▇▂▂▂▁▁▁▃▃▃▆▆▆███▇▇▇       |    <b>8h 11m  0s</b>
             ------------------------------------------------------------------------
                                                                                          <b>14h 30m  0s</b> </pre>

GTM is automatic, seamless and lightweight.  There is no need to remember to start and stop timers.  It runs on occasion to capture activity triggered by your editor.  The time metrics are stored locally with the git repository as [Git notes](https://git-scm.com/docs/git-notes) and can be pushed to the remote repository. 

# Support

To report a bug, please submit an issue on the [GitHub Page](https://github.com/git-time-metric/gtm-vim-plugin/issues)

Consult the [README](https://github.com/git-time-metric/gtm/blob/master/README.md) and [Wiki](https://github.com/git-time-metric/gtm/wiki) for more information.

