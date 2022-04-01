const plugin: Fig.Plugin = {
  name: "op.plugin.zsh_sirhc",
  type: "shell",
  description: "1Password Oh-My-Zsh Plugin",
  authors: [
    {
      name: "sirhc",
      github: "sirhc",
    }
  ],
  github: "sirhc/op.plugin.zsh",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Completion"],
  installation: {
    origin: "github",
    sourceFiles: ["op.plugin.zsh"],
  },
};

export default plugin;
