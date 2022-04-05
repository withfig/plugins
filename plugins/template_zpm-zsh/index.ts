const plugin: Fig.Plugin = {
  icon: "💡",
  name: "template_zpm-zsh",
  type: "shell",
  description: "ZSH plugin who create file from template ",
  authors: [
    {
      name: "zpm-zsh",
      github: "zpm-zsh",
    },
  ],
  github: "zpm-zsh/template",
  license: ["GPL-3.0"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["zsh", "zsh-plugin", "template", "zpm"],
  installation: {
    origin: "github",
    sourceFiles: ["template.plugin.zsh"],
  },
};

export default plugin;
