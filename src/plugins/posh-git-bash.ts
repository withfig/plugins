const plugin: Fig.Plugin = {
  name: "posh-git-bash",
  type: "shell",
  description: "Bash/ZSH version of the posh-git command prompt",
  github: "lyze/posh-git-sh",
  shells: ["zsh"],
  tags: [
    "hacktoberfest",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
