const plugin: Fig.Plugin = {
  name: "lean_miekg",
  type: "shell",
  description: "Pretty, minimal, one-line, fast ZSH prompt",
  authors: [
    {
      name: "miekg",
      github: "miekg",
      twitter: "miekg",
    }
  ],
  github: "miekg/lean",
  license: ["Apache-2.0"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "zsh",
    "prompt",
    "minimal",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["lean.plugin.zsh"],
  },
};

export default plugin;
