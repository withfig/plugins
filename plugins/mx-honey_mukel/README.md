<p align="center">
  <img width="600" src="https://cdn.rawgit.com/mukel/mx-honey/demo/demo.svg">
</p>

# mx plugin

Provides handy completions for [mx](https://github.com/graalvm/mx) as well as some aliases for common `mx` commands.  
`mx` is (more than just) the build tool used by the [GraalVM project](https://github.com/oracle/graal).

# Install
```zsh
git clone --depth 1 https://github.com/mukel/mx-honey.git ${ZSH_CUSTOM:=$HOME/.oh-my-zsh/custom}/plugins/mx
```

To use it, add `mx` to the plugins in your `~/.zshrc` file:
```zsh
plugins(... mx)
```

## Aliases

| Alias | Command                                   | Description                                                 |
|-------|-------------------------------------------|-------------------------------------------------------------|
| mxb   | `mx build`                                | Build the artifacts of one or more dependencies.            |
| mxbe  | `mx benchmark`                            | Run a benchmark suite.                                      |
| mxcl  | `mx clean`                                | Remove all .class files, images, and executables.           |
| mxcs  | `mx checkstyle`                           | Run Checkstyle on the Java sources.                         |
| mxf   | `mx eclipseformat`                        | Run the Eclipse Code Formatter on the Java sources.         |
| mxu   | `mx unittest`                             | Run JUnit tests.                                            |
| mxdu  | `mx -d unittest`                          | Run JUnit tests in debug mode.                              |
| mxupd | `mx update`                               | Update `mx` to the latest version.                          |

# Features 
  - [X] [mx aliases](./mx.plugin.zsh)
  - [X] mx global-options
  - [X] Common sub-command completion
  - [X] `mx benchmark` completion with support for dynamic imports (--dy)

