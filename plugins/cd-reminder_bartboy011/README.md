# cd-reminder
An Oh-My-Zsh Plugin to display reminders when cd-ing into specified directories.

## Installation
Clone this repo into `~/.oh-my-zsh/plugins` (or wherever your plugins are configured to live)
and update the plugins config in your `~/.zshrc` file to include `cd-reminder`:

```bash
plugins=(cd-reminder)
```


## Usage
If a directory has a file named `.cd-reminder` in it, then when you `cd` into that directory
this plugin will read the contents of the file to the display. This is useful if you have
repositories with specific things that must be done when entering, etc.

Additionally, you can use the command `new_reminder` which will do two things:

* If you just call `new_reminder`, it will create an empty `.cd-reminder` file for
you to fill as you please.
* If you call `new_reminder This is my new reminder` it will create (if it doesn't exist already)
a `.cd-reminder` file and append the text to it (meaning it won't override what's already in the file

Having issues with these files messing with Git? Run the command `git_exclude_cd_reminder` -
this will do one of two things - if you already have a global gitignore file configured,
it will append to that file. Otherwise it will create the file `$HOME/.gitignore-global`,
configure that file with Git, and then add our exclusion to it.

