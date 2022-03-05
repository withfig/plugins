const plugin: Fig.Plugin = {
  name: "solarized-man",
  type: "shell",
  description: "A modified version of oh-my-zsh's plugin colored-man-pages, optimized for solarized dark theme in terminal",
  github: "zlsun/solarized-man",
  shells: ["zsh"],
  installation: {
    origin: "github",
  },
};

export default plugin;
