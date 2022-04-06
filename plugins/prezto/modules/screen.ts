import { ModuleConfiguration, compileZstyleBool } from "../utils";

const screen: ModuleConfiguration = {
  name: "screen",
  items: [
    {
      displayName: "Auto-start Local",
      name: "auto-start-local",
      description:
        "Auto start a session when Zsh is launched in a local terminal.",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:screen:auto-start", "local"),
    },
    {
      displayName: "Auto-start Remove",
      name: "auto-start-remote",
      description:
        "Auto start a session when Zsh is launched in a SSH connection.",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:screen:auto-start", "remote"),
    },
  ],
};

export default screen;
