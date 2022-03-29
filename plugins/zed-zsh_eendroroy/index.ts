const plugin: Fig.Plugin = {
  name: "zed-zsh_eendroroy",
  type: "shell",
  description: "A simple wrapper for z to install as zsh plugin.",
  authors: [
    {
      name: "eendroroy",
      github: "eendroroy",
      twitter: "eendroroy",
    }
  ],
  github: "eendroroy/zed-zsh",
  license: ["MIT"],
  site: "https://github.com/rupa/z",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "z",
    "zsh",
    "jumparound",
    "zsh-plugin",
    "z-zsh",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zed.zsh"],
  },
};

export default plugin;
