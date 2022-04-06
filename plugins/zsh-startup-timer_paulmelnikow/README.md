zsh-startup-timer
=================

A zsh plugin to print the time it takes for the shell to start up.

![Screenshot](https://raw.githubusercontent.com/paulmelnikow/zsh-startup-timer/85fa038b4188feb5c3eae133e5da1167e4e6995e/screenshot.png) 


Note
----

Unfortunately, the startup timer is itself slow. Would be great to find a
cross-platform way to get the startup time at millisecond resolution that
doesn't require Python.

Fortunately this slowness doesn't affect the time displayed, since it compares
the difference between the start time of the shell and the python process.


Installation
------------

This requires Python 2.6+ or Python 3.

**You must `pip install psutil` to install the [psutil][] library, which is
required.**

[psutil]: https://pypi.python.org/pypi/psutil

You can install it with most of the plugin managers.


Contribute
----------

- Issue Tracker: https://github.com/paulmelnikow/zsh-startup-timer/issues
- Source Code: https://github.com/paulmelnikow/zsh-startup-timer

Pull requests welcome!


Support
-------

If you are having issues, please let me know.


License
-------

This project is licensed under the MIT license.

