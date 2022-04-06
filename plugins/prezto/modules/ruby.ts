import { ModuleConfiguration, compileZstyleBool } from "../utils";

const ruby: ModuleConfiguration = {
  name: "ruby",
  items: [
    {
      displayName: "Auto-switch Ruby Version",
      name: "auto-switch-version",
      description: "Automatically switch the Ruby version on directory change.",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:ruby:chruby", "auto-switch"),
    },
  ],
};

export default ruby;
