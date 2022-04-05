import { ModuleConfiguration, compileZstyle } from "../utils";

const gnuUtility: ModuleConfiguration = {
  name: "gnu-utility",
  items: [
    {
      displayName: "GNU Command Prefix",
      name: "gnu-command-prefix",
      description: "Set the GNU command prefix on non-GNU systems",
      type: "script",
      interface: "text",
      default: "g",
      compile: compileZstyle(":prezto:module:gnu-utility", "prefix"),
    },
  ],
};

export default gnuUtility;
