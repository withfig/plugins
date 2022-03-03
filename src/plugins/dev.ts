const plugin: Fig.Plugin = {
  name: "dev",
  type: "shell",
  description: "zsh plug-in to automate project setup and workflow",
  github: "sbfaulkner/dev-plugin-zsh",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
