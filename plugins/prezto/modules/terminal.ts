import {
  ModuleConfiguration,
  compileZstyleBool,
  compileZstyle,
} from "../utils";

const terminal: ModuleConfiguration = {
  name: "terminal",
  items: [
    {
      displayName: "Auto Set Tab and Window Titles",
      name: "auto-title",
      description: "Auto set the tab and window titles",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:terminal", "auto-title"),
    },
    {
      displayName: "Window Title Format",
      name: "window-title-format",
      description: "Set the window title format",
      type: "script",
      interface: "text",
      default: "%n@%m: %s",
      compile: compileZstyle(":prezto:module:terminal:window-title", "format"),
    },
    {
      displayName: "Tab Title Format",
      name: "tab-title-format",
      description: "Set the tab title format",
      type: "script",
      interface: "text",
      default: "%m: %s",
      compile: compileZstyle(":prezto:module:terminal:tab-title", "format"),
    },
    {
      displayName: "Multiplexer Title Format",
      name: "multiplexer-title-format",
      description: "Set the terminal multiplexer title format",
      type: "script",
      interface: "text",
      default: "%s",
      compile: compileZstyle(
        ":prezto:module:terminal:multiplexer-title",
        "format"
      ),
    },
  ],
};

export default terminal;
