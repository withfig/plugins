const plugin: Fig.Plugin = {
  name: "ansiweather",
  type: "shell",
  description: "Weather in terminal, with ANSI colors and Unicode symbols",
  github: "fcambus/ansiweather",
  shells: ["zsh"],
  tags: [
    "weather",
    "unicode",
    "terminal",
    "ansi",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
