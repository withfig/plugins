const plugin: Fig.Plugin = {
  name: "duration",
  type: "shell",
  description: "Zsh plugin for displays command duration when exceeds threshold.",
  github: "rtakasuke/zsh-duration",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zplug",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
