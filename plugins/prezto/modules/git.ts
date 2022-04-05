import { ModuleConfiguration, compileZstyle } from "../utils";

const git: ModuleConfiguration = {
  name: "git",
  items: [
    {
      displayName: "Ignore Git Submodules",
      name: "ignore-git-submodules",
      description:
        "Ignore submodules when they are 'dirty', 'untracked', 'all', or 'none'",
      type: "script",
      interface: "select",
      default: "all",
      options: ["dirty", "untracked", "all", "none"],
      compile: compileZstyle(":prezto:module:git:status:ignore", "submodules"),
    },
  ],
};

export default git;
