const plugin: Fig.Plugin = {
  name: "geometry-rust-version",
  type: "shell",
  description: "Geometry plugin to display the current folder's Rust version.",
  github: "drager/geometry-rust-version",
  shells: ["zsh"],
  tags: [
    "zsh",
    "geometry",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
