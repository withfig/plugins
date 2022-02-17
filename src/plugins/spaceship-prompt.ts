const plugin: Fig.Plugin = {
  name: "spaceship-prompt",
  type: "shell",
  description: "A Zsh prompt for Astronauts",
  icon:
    "https://spaceship-prompt.github.io/brand/spaceship-letters-outlined.svg",
  site: "https://spaceship-prompt.sh/",
  docs: "https://spaceship-prompt.sh/getting-started/",
  github: "spaceship-prompt/spaceship-prompt",
  twitter: "SpaceshipPrompt",
  license: ["MIT"],
  shells: ["zsh"],
  tags: ["zsh", "theme"],
  installation: {
    source: "github",
    use: "spaceship.zsh"
  },
};

export default plugin;
