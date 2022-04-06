import { ModuleConfiguration, compileZstyleList } from "../utils";

const completion: ModuleConfiguration = {
  name: "completion",
  items: [
    {
      displayName: "Ignored Hosts",
      name: "ignored-hosts",
      description:
        "Entries to ignore in static '/etc/hosts' for host completion",
      type: "script",
      interface: "multi-text",
      default: ["0.0.0.0", "127.0.0.1"],
      compile: compileZstyleList(
        ":prezto:module:completion:*:hosts",
        "etc-host-ignores"
      ),
    },
  ],
};

export default completion;
