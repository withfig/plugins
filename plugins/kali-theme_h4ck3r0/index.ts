const plugin: Fig.Plugin = {
  icon: "🚀",
  name: "kali-theme_h4ck3r0",
  displayName: "Kali Theme",
  type: "shell",
  description: "Kali Linux Theme Installer , Zsh Shell , Pure Look",
  authors: [
    {
      name: "h4ck3r0",
      github: "h4ck3r0",
    },
  ],
  github: "h4ck3r0/kali-theme",
  license: ["GPL-3.0"],
  shells: ["bash", "zsh"],
  categories: ["Prompt"],
  keywords: [
    "kali-theme",
    "zsh",
    "pure-zsh",
    "theme",
    "kali",
    "kali-linux",
    "kalilinux",
    "customize-kalilinux",
    "oh-my-zsh",
    "oh-my-zsh-theme",
    "linux",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["os.sh"],
    },
    zsh: {
      sourceFiles: ["os.sh"],
    },
  },
};

export default plugin;
