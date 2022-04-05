import {
  ModuleConfiguration,
  compileZstyle,
  compileZstyleBool,
} from "../utils";

const editor: ModuleConfiguration = {
  name: "editor",
  items: [
    {
      displayName: "Keymapping Style",
      name: "keymapping-style",
      description: "Set the editor style to emacs or vi",
      type: "script",
      interface: "select",
      default: "emacs",
      options: ["emacs", "vi"],
      compile: compileZstyle(":prezto:module:editor", "key-bindings"),
    },
    {
      displayName: "Dot Expansion",
      name: "dot-expansion",
      description: "Auto convert .... to ../..",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:editor", "dot-expansion"),
    },
    {
      displayName: "Zsh Prompt Context",
      name: "prompt-context",
      description: "Allow the zsh prompt context to be shown",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:editor", "ps-context"),
    },
  ],
};

export default editor;
