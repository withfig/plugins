const plugin: Fig.Plugin = {
  name: "ansiweather",
  type: "shell",
  description: "Weather in terminal, with ANSI colors and Unicode symbols",
  icon: "🌡",
  authors: [
    {
      name: "fcambus",
      github: "fcambus",
      twitter: "fcambus",
    },
  ],
  github: "fcambus/ansiweather",
  license: ["BSD-2-Clause"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: ["weather", "terminal", "ansi", "unicode"],
  installation: {
    origin: "github",
    sourceFiles: ["ansiweather.plugin.zsh"],
  },
};

export default plugin;
