import {
  ModuleConfiguration,
  compileZstyle,
  compileZstyleBool,
  setZstyle
} from "../utils";

const syntaxHighlighting: ModuleConfiguration = {
  name: "syntax-highlighting",
  items: [{
    displayName: "Highlighters",
    name: "highlighters",
    description: "Set syntax highlighters. By default, only the main highlighter is enabled",
    type: "script",
    interface: "multiselect",
    default: ["main"],
    options: [
      "main",
      "brackets",
      "pattern",
      "cursor",
      "regexp",
      "root",
      "line",
    ],
    compile: (value: string[]) => setZstyle(
      ":prezto:module:syntax-highlighting",
      "highlighters",
      value.map(value => `'${value}'`).join(" ")
    ),
  }]
  /*
   * TODO: need custom UI to support more complex values:
Set syntax highlighting styles.
zstyle ':prezto:module:syntax-highlighting' styles \
  'builtin' 'bg=blue' \
  'command' 'bg=blue' \
  'function' 'bg=blue'

Set syntax pattern styles.
zstyle ':prezto:module:syntax-highlighting' pattern \
  'rm*-rf*' 'fg=white,bold,bg=red'
  */
}

export default syntaxHighlighting;
