const plugin: Fig.Plugin = {
  name: "shellder_simnalamburt",
  type: "shell",
  description: ":shell: Featured zsh/fish shell theme",
  authors: [
    {
      name: "simnalamburt",
      github: "simnalamburt",
    }
  ],
  github: "simnalamburt/shellder",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Prompt"],
  keywords: [
    "fish",
    "zsh",
    "shell-theme",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["shellder.zsh-theme"],
  },
};

export default plugin;
