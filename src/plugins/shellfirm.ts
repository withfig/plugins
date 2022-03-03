const plugin: Fig.Plugin = {
  name: "shellfirm",
  type: "shell",
  description: "Intercept any risky patterns (default or defined by you) and prompt you a small challenge for double verification",
  github: "kaplanelad/shellfirm",
  shells: ["zsh"],
  tags: [
    "shell",
    "rust",
    "zsh",
    "devops",
    "terminal",
    "captcha",
    "prompt",
    "devops-tools",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
