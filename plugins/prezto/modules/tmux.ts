import {
  ModuleConfiguration,
  compileZstyleBool,
  compileZstyle,
  setZstyle,
} from "../utils";

const tmux: ModuleConfiguration = {
  name: "tmux",
  items: [
    {
      displayName: "Auto-start Local",
      name: "auto-start-local",
      description:
        "Auto start a session when Zsh is launched in a local terminal",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:tmux:auto-start", "local"),
    },
    {
      displayName: "Auto-start Remote",
      name: "auto-start-remote",
      description:
        "Auto start a session when Zsh is launched in a SSH connection",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:tmux:auto-start", "remote"),
    },
    {
      displayName: "Integrate With iTerm2",
      name: "integrate-with-iterm2",
      description: "Enable iTerm2 Integration",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyle(":prezto:module:tmux:iterm", "integrate"),
    },
    {
      displayName: "Default Session Name",
      name: "default-session-name",
      description: "Set the default session name",
      type: "script",
      interface: "text",
      default: "",
      compile: (value) =>
        value ? setZstyle(":prezto:module:tmux:session", "name", value) : "",
    },
  ],
};

export default tmux;
