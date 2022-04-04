const plugin: Fig.Plugin = {
  name: "tmuxrepl_csurfer",
  type: "shell",
  description: "Stupidly simple zsh plugin to have a R-EP-L tmux session.",
  authors: [
    {
      name: "csurfer",
      github: "csurfer",
    },
  ],
  github: "csurfer/tmuxrepl",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  installation: {
    origin: "github",
    sourceFiles: ["tmuxrepl.plugin.zsh"],
  },
};

export default plugin;
