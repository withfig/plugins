import { ModuleConfiguration, compileZstyleBool } from "../utils";

const utility: ModuleConfiguration = {
  name: "utility",
  items: [
    {
      displayName: "Safe Options",
      name: "safe-ops",
      description:
        "Enable safe options. This aliases cp, ln, mv and rm so that they prompt before deleting or overwriting files. Toggle off to disable this safer behavior.",
      type: "script",
      interface: "toggle",
      default: true,
      compile: compileZstyleBool(":prezto:module:utility", "safe-ops"),
    },
  ],
};

export default utility;
