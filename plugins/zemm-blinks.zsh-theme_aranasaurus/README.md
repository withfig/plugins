# Introduction
This is my customizations on the Blinks theme that comes with Oh My ZSH. It makes the following changes:

  * Replace the history counter on the right side of the prompt with the date/time.
  * Adds Mercurial support similar to the git support that the original uses. Minimally it will show the Mercurial symbol on the left side of the prompt,
    but if you also have my changes to the mercurial zsh plugin \([see below](#mercurial-support)\), it will flag when you're in a dirty repo, and show the name of the current branch.
  * Makes the prompt display username\[Predator Reticle\]hostname

## Instructions
To use, copy the zemm-blinks.zsh-theme file into your $ZSH\_CUSTOM directory and set your theme to zemm-blinks in your .zshrc.

### Mercurial Support
If you'd like mercurial support similar to the git support:

  1. Copy the mercurial directory from this repo into your $ZSH\_CUSTOM/plugins/ directory
  2. Add 'mercurial' to your plugins in .zshrc.


