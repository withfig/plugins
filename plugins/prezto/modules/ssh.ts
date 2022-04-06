import { ModuleConfiguration, compileZstyleList } from "../utils";

const ssh: ModuleConfiguration = {
  name: "ssh",
  items: [
    {
      displayName: "Identities",
      name: "identities",
      description: "Set the SSH identities to load into the agent",
      type: "script",
      interface: "multi-text",
      default: ["id_rsa", "id_rsa2", "id_github"],
      compile: compileZstyleList(":prezto:module:ssh:load", "identities"),
    },
  ],
};

export default ssh;
