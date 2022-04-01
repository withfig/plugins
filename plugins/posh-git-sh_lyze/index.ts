const plugin: Fig.Plugin = {
  name: "posh-git-sh_lyze",
  type: "shell",
  description: "Bash/ZSH version of the posh-git command prompt",
  authors: [
    {
      name: "lyze",
      github: "lyze",
    }
  ],
  github: "lyze/posh-git-sh",
  license: ["GPL-3.0"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "hacktoberfest",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: [
"git-prompt-test.sh","git-prompt.sh"
      ],
    },
    zsh: {
      sourceFiles: [
"git-prompt-test.sh","git-prompt.sh"
      ],
    },
  },
};

export default plugin;
