const plugin: Fig.Plugin = {
  name: "project_gko",
  type: "shell",
  description:
    "☕️ Create node, rust, python or ruby project locally and on github (private or public)",
  authors: [
    {
      name: "gko",
      github: "gko",
      twitter: "konstantin",
    },
  ],
  github: "gko/project",
  license: ["MIT"],
  site: "https://dev.to/konstantin/managing-your-projects-31p1",
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: [
    "project",
    "create",
    "projects",
    "git",
    "github",
    "npm",
    "node",
    "python",
    "pip",
    "ruby",
    "cargo",
    "rust",
  ],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["project.sh"],
    },
    zsh: {
      sourceFiles: ["project.sh"],
    },
  },
};

export default plugin;
