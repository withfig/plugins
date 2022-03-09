const plugin: Fig.Plugin = {
  name: "liquidprompt",
  type: "shell",
  description:
    "A full-featured & carefully designed adaptive prompt for Bash & Zsh",
  authors: [
    {
      name: "nojhan",
      github: "nojhan",
      twitter: "nojhan",
    },
  ],
  github: "nojhan/liquidprompt",
  license: ["AGPL-3.0"],
  site: "https://liquidprompt.readthedocs.io/",
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: ["zsh", "bash", "prompt", "linux-shell", "powerline"],
  installation: {
    origin: "github",
    sourceFiles: ["liquidprompt"],
  },
};

export default plugin;
