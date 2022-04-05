# ZSH shell plugin for Haskell

* completion for **ghc** options
* completion for **cabal** commands; it can expands cabal components (libraries,
  tests, benchmarks and executables) and pkgs specs.  It also complets options
  of `cabal` commands and package names (e.g. `cabal info` or `cabal
  install`)
* completion for **ghc-pkgs** commands & options

# Usage

The completion script will find and inspect all cabal files under current
directory which are not deeper than four directories away.  It does not descent
under `dist-newstye`, `dist`, `.stack-work` or `.git` directories.

Completion for the following package specs is supported:

* `component-name` - it can be either a component name or a package name
* `package-name:{lib,test,exe,bench}:component-name`
* `package-name:{libs,tests,exes,benches}`
* `pkg:package-name:{lib,test,exe,bench}:component-name`.
* `pkg:package-name:{libs,tests,exes,benches}`.
* `lib:component-name`,
* `exec:component-name`,
* `bench:component-name`,
* `test:component-name`

The last six are only triggered when `pkg:`, `lib:`, `exec:`, `bench:` or
`test:` are given **explicitly**.  This is in order to avoid providing too many
completion results.

# Configuration

```
zstyle ":completion::complete:cabal::options:" depth 4
```
Maximan directory depth for searching for `*.cabal` files.

```
zstyle ":completion::complete:cabal::options:" 
zstyle ":completion::complete:cabal::options:" packages-tmp-file "/tmp/zsh-haskell-cabal-packages"
```
File which stores list of package names.  It will be created on demenad (e.g.
by completiting `cabal info` or `cabal install`, etc.).

# Demo
![](https://raw.githubusercontent.com/coot/zsh-cabal/master/docs/screencast.gif)

