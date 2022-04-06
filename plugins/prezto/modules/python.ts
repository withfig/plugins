import { ModuleConfiguration, compileZstyleBool } from "../utils";

const python: ModuleConfiguration = {
  name: "python",
  items: [
    {
      displayName: "Auto-switch Virtualenv",
      name: "auto-switch-virtualenv",
      description:
        "Automatically switch the Python virtualenv on directory change.",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(
        ":prezto:module:python:virtualenv",
        "auto-switch"
      ),
    },
    {
      displayName: "Initialize Virtualenv Wrapper",
      name: "auto-initialize-virtualenv",
      description:
        "Automatically initialize virtualenvwrapper if pre-requisites are met",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(
        ":prezto:module:python:virtualenv",
        "initialize"
      ),
    },
  ],
};

export default python;
