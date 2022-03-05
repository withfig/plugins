const plugin: Fig.Plugin = {
  name: "envrc",
  type: "shell",
  description: "Oh-my-zsh plugin to automatically load or unload environment variables from .envrc file depending on the current directory.",
  github: "fabiogibson/envrc-zsh-plugin",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
