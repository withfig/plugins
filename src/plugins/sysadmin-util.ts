const plugin: Fig.Plugin = {
  name: "sysadmin-util",
  type: "shell",
  description: "Tools for Linux/Unix sysadmins.",
  github: "skx/sysadmin-util",
  shells: ["zsh"],
  tags: [
    "c",
    "bash",
    "utilities",
    "perl",
    "sysadmin",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
