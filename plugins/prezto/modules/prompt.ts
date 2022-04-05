import {
  ModuleConfiguration,
  compileZstyle,
  compileZstyleBool,
} from "../utils";

const prompt: ModuleConfiguration = {
  name: "prompt",
  items: [
    {
      displayName: "Theme",
      name: "theme",
      description: "Set the prompt theme to load.",
      additionalDetails:
        "Setting it to 'random' loads a random theme. Auto set to 'off' on dumb terminals",
      type: "script",
      // TODO: support options here (run shell command `prompt -l` to list)
      interface: "text",
      default: "sorin",
      compile: compileZstyle(":prezto:module:prompt", "theme"),
    },
    {
      displayName: "PWD Length",
      name: "pwd-length",
      description: "Set the working directory prompt display length",
      additionalDetails:
        "By default, it is set to 'short'. Set it to 'long' (without '~' expansion) for longer or 'full' (with '~' expansion) for even longer prompt display.",
      type: "script",
      interface: "select",
      options: ["short", "long", "full"],
      default: "short",
      compile: compileZstyle(":prezto:module:prompt", "pwd-length"),
    },
    {
      displayName: "Return Code",
      name: "return-code",
      description:
        "Set the prompt to display the return code along with an indicator for non-zero return codes. This is not supported by all prompts.",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:prompt", "show-return-val"),
    },
  ],
};

export default prompt;
