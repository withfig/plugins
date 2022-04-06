const plugin: Fig.Plugin = {
  icon: "🔗",
  name: "odin_tylerreckart",
  displayName: "Odin Prompt",
  type: "shell",
  screenshots: [
    "https://github.com/tylerreckart/odin/raw/master/images/hero_screenshot.png",
  ],
  description: "A git flavored zsh prompt",
  authors: [
    {
      name: "tylerreckart",
      github: "tylerreckart",
    },
  ],
  github: "tylerreckart/odin",
  shells: ["zsh"],
  categories: ["Prompt"],
  installation: {
    origin: "github",
    sourceFiles: ["odin.zsh-theme"],
  },
};

export default plugin;
