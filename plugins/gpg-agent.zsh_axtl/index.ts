const plugin: Fig.Plugin = {
  icon: "⚡️",
  name: "gpg-agent.zsh_axtl",
  type: "shell",
  description: "very simple gpg-agent plugin for zsh",
  authors: [
    {
      name: "axtl",
      github: "axtl",
    },
  ],
  github: "axtl/gpg-agent.zsh",
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["gpg-agent.plugin.zsh"],
  },
};

export default plugin;
