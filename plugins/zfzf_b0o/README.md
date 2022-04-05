# zfzf [![version](https://img.shields.io/github/v/tag/b0o/zfzf?style=flat&color=yellow&label=version&sort=semver)](https://github.com/b0o/zfzf/releases) [![license: MIT](https://img.shields.io/github/license/b0o/zfzf?style=flat&color=green)](https://mit-license.org)

> Zsh + fzf

## Demo

![demonstration screencast](https://user-images.githubusercontent.com/21299126/151639939-0709d636-52e6-45fd-af19-6ce49671c47a.gif)

## Install

```zsh
# zinit
zinit light b0o/zfzf
```

## Usage

zfzf can work in three ways:

- as a standalone utlity by running the `zfzf` command
- as a ZLE (zsh line editor) plugin via a keyboard shortcut
- as a Zsh completion for file paths (experimental and buggy)

### As a standalone utility

zfzf can be invoked by running the `zfzf` command and optionally passing a path
as the first argument. The result will be printed to stdout.

### As a ZLE plugin

By default, zfzf is mapped to `Alt-period`. If your cursor is adjacent to any
non-whitespace text when you trigger zfzf, it will attempt to interpret that
text as a path.

### As a Zsh completion function

If you would like to use zfzf to complete filenames when you press tab, you
should call the `enable-zfzf-tab` function in your `.zshrc`.

If you use other completion plugins like fzf-tab, you should call
`enable-zfzf-tab` after all other plugins have been loaded and enabled,
otherwise another plugin may override zfzf.

You can later call `disable-zfzf-tab` to restore the prior completion function.

<!-- USAGE -->

```

zfzf v0.2.0

zfzf is a fzf-based file picker for zsh which allows you to easily navigate the
directory hierarchy and pick files using keybindings.

zfzf can be used as a standalone program, as an explicit zle widget, and as a
file path completion. By default, zfzf can be explicitly triggered with Alt-.
(this is configurable with the ZFZF_ZSH_BINDING option).

If you would like to use zfzf as your file completion when you press tab, you
should call the enable-zfzf-tab function in your .zshrc. If you use other
completion plugins like fzf-tab, you should call enable-zfzf-tab after all
other plugins have been loaded and enabled. You can later call disable-zfzf-tab
to restore the prior completion function.

Configuration Options
  Environment Variable          Default Value

  ZFZF_ENABLE_COLOR             1
    When enabled, files and previews will be colorized.

  ZFZF_ENABLE_PREVIEW           1
    When enabled, the focused item will be displayed in the fzf preview window.

  ZFZF_ENABLE_DOT_DOTDOT        1
    When enabled, display '.' and '..' at the top of the file listing.

  ZFZF_ZSH_BINDING              ^[. (Alt-.)
    Sets the keybinding sequence used to trigger zfzf. If set to the empty
    string, zfzf will not be bound. You can create a keybinding yourself by
    binding to the zfzf zle widget. See zshzle(1) for more information on key
    bindings.

  ZFZF_ENABLE_BAT               2
  ZFZF_ENABLE_EXA               2
    These options control zfzf's use of non-standard programs. Valid values
    include:
      - 0: Disable program
      - 1: Enable program (Force)
      - 2: Enable program (Optional)
    If the value 2 is used, the program will be enabled only if it is found in
    the PATH or if its path is explicitly specified as described below.

  ZFZF_BAT_PATH                 None
  ZFZF_EXA_PATH                 None
    These options allow paths to non-standard programs to be manually
    specified.

Default Key Bindings

  return             accept final
  alt-return         accept final (return absolute path)
  esc                escape
  ctrl-g             escape (return absolute path)
  alt-o              accept query
  ctrl-d             accept query final
  alt-P              append query
  ctrl-o             replace query
  alt-i              descend into directory or accept file
  alt-.              descend into directory or accept file
  alt-u              ascend into parent directory
  alt->              ascend into parent directory
  alt-U              ascend to next existing ancestor

```

<!-- /USAGE -->

## TODO

- [ ] configurable options
  - [ ] fzf key bindings
  - [ ] sorting
  - [ ] filtering
  - [x] color
  - [ ] fzf options

## License

<!-- LICENSE -->

&copy; 2021 Maddison Hellstrom

Released under the MIT License.

<!-- /LICENSE -->

