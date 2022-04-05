# Colors

This document defines the Zpm Color Standard.

## Installation

### Using zpm

Add zpm load zpm-zsh/colors into .zshrc

### Using oh-my-zsh

Execute `git clone https://github.com/zpm-zsh/colors ~/.oh-my-zsh/custom/plugins/colors`. Add colors into plugins array in .zshrc

### Using antigen

Add antigen bundle zpm-zsh/colors into .zshrc

### Using zgen

Add zgen load zpm-zsh/colors into .zshrc

### Note

Load this plugin before others otherwise plugins can't use it

## Usage

```bash
echo $c[default] Default text color $c[reset]
echo $c[bold] Bold text $c[reset]
echo $c[dim] Dim text $c[reset]
echo $c[coursive] Coursive text $c[reset]
echo $c[underline] Underlined text $c[reset]
echo $c[blink] Blink text $c[reset] "<- Blink"
echo $c[inverse] Inverse text $c[reset]
echo $c[hidden] Hidden text $c[reset] "<- Hidden text"
echo $c[strike] Strike text $c[reset]
echo
echo $c[double_underline] Double underlined text $c[reset]
echo
echo $c[overline] Overlined text $c[reset]
echo
echo $c[red] Red color $c[reset]
echo $c[light_red] Light red color $c[reset]
echo $c[bg_red] Red background $c[reset]
echo $c[bg_light_red] Light red background $c[reset]
```

![Screenshot](./images/example.png)

## Aviable modificators

* Self-descriptive modificators: `bold`, `dim`, `coursive`, `underline`, `blink`, `inverse`, `hidden`, `strike`, `double_underline`, `overline`
* Base colors: `base0`, `base1`, `base2`, `base3`
* 6 colors: `red`, `green`, `blue`, `yellow`, `cyan`, `magenta`
* `light_` variants for 6 colors: `light_red`, `light_green`, `light_blue`, `light_yellow`, `light_cyan`, `light_magenta`
* 6 background colors with `bg_` prefix: `bg_red`, `bg_green`, `bg_blue`, `bg_yellow`, `bg_cyan`, `bg_magenta`
* 6 light background colors with `bg_light_` prefix: `bg_light_red`, `bg_light_green`, `bg_light_blue`, `bg_light_yellow`, `bg_light_cyan`, `bg_light_magenta`

## Who we need this?

Many color schemes define very beautiful colors for your terminal emulator. But they have big issue: some CLI apps show output text with same color than your background. So, this text will be invisible.

### Solution?

#### Set-up your terminal emulator colors

1. Do not use **Show bold text in bright colors**, or something like this. Bold should be bold, bright should be bright. Do not mix these options.

2. Your color distribution should be like this, from darker to lighter, or from lighter to darker: primary color (base0), background, lighter variant of primary (base1), secondary (base2), foreground, lighter variant of secondary (base3). ![Colors](images/Diagram.svg)

3. Set-up 6 terminal colors: red, green, blue, yellow, cyan, magenta, and lighter variant of them. This will provide you possibility to set 4 variants of these colors, like `$c[modificator]`: color (color), color with dim modification (color + dim), light color (light_red), light color with dim modification (light_red + dim)

4. You can use 4 base colors for your background (base[0-3] or one of 6 colors)

