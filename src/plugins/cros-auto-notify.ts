const plugin: Fig.Plugin = {
  name: "cros-auto-notify",
  type: "shell",
  description: "ZSH Plugin that sends hterm-notify.sh compatible notifys to CrOS/hterm User",
  github: "D3STY/cros-auto-notify-zsh",
  shells: ["zsh"],
  tags: [
    "chrome",
    "chromeos",
    "hterm",
    "cros",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
