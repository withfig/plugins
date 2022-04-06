> Zsh Auto-notify automatically sends out a notification when a
long running command (more than 10 seconds) finishes

Useful for those commands you don\'t predict will take long to run or
just plain forgot to keep track of. Leave the task running and go do
something else - `auto-notify` will let you know when the task is done!
:tada:

Usage
-----

You don\'t need to do anything. Once it\'s installed, `zsh-auto-notify`
will let you know if a long running task has completed its work via a
notification in your desktop environment.

![image](https://github.com/MichaelAquilina/zsh-auto-notify/blob/master/img/notification-example.png?raw=true)

Requirements
------------

`auto-notify` officially supports zsh versions 5.1 onwards.

It is possible the plugin might work on even older versions. However
they would not have been tested as part of the CI test process.

Supported desktop environments:

-   Linux X/Wayland (Requires `notify-send` to be installed)
-   MacOSX


Configuration
-------------

**Notification Threshold**

By default, `auto-notify` will send notifications for tasks that take
longer than 10 seconds. You can configure this value by setting the
environment variable `AUTO_NOTIFY_THRESHOLD`:

    # Set threshold to 20seconds
    export AUTO_NOTIFY_THRESHOLD=20

**Notification Formatting**

You can change the formatting of notifications by setting the values for
`AUTO_NOTIFY_TITLE` and `AUTO_NOTIFY_BODY`. When writing these values,
the following variables will be replaced according to the data that
`auto-notify` has detected:

-   `%command` - the command that the user executed
-   `%elapsed` - number of seconds that elapsed
-   `%exit_code` - the exit code of the command that was executed

An example of how these values can be set is shown below:

    export AUTO_NOTIFY_TITLE="Hey! %command has just finished"
    export AUTO_NOTIFY_BODY="It completed in %elapsed seconds with exit code %exit_code"

**Notification Expiration Time**

You can set how long a notification sent by `auto-notify` will remain
showing by setting the environment variable `AUTO_NOTIFY_EXPIRE_TIME` to
a custom value in milliseconds. The default value is set to 8 seconds.
NOTE: This configuration option currently only works for Linux.

    # Set notification expiry to 10 seconds
    export AUTO_NOTIFY_EXPIRE_TIME=10000

**Ignored Commands**

A number of commands do not get notifications for long running times due
to their nature (e.g. `watch` or `man`). The list of ignored commands is
specified in the `AUTO_NOTIFY_IGNORE` environment variable. This can be
modified or completely overwritten based on your use case.

    # Add docker to list of ignored commands
    AUTO_NOTIFY_IGNORE+=("docker")

Make sure that you append to the array above *after* your plugin manager
has been loaded in your `zshrc`.

If you wish to completely redefine what is ignored and not ignored, then
just set `AUTO_NOTIFY_IGNORE` to a new array.

    # redefine what is ignored by auto-notify
    export AUTO_NOTIFY_IGNORE=("docker" "man" "sleep")

**Using a Whitelist to ignore commands**

If you wish to use a whitelist approach instead of the default blacklist
approach used by `AUTO_NOTIFY_IGNORE`, you can do so by defining the
environment variable `AUTO_NOTIFY_WHITELIST` with the elements you wish
to allow `auto-notify` to track and send notifications for. NOTE: If
`AUTO_NOTIFY_WHITELIST` is defined, then all the values in
`AUTO_NOTIFY_IGNORE` are not used.

    export AUTO_NOTIFY_WHITELIST=("apt-get" "docker")

Temporarily Disabling Notifications
-----------------------------------

You can temporarily disable auto notify by running the command
`disable_auto_notify`.

When you want to re-enable notifications, run the command
`enable_auto_notify`.

Contributing
------------

Pull requests and Feedback are welcome! :tada:

I have tried to cater for as many use cases that I can think of.
However, they are naturally tailored to to my own workflow and I could
be missing many others.

Because of this if there is a specific use case that does not work as
you would expect or if you have any suggestions to how the plugin should
behave, feel free to [open an
issue](https://github.com/MichaelAquilina/zsh-auto-notify/issues/new)

