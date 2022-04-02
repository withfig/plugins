const plugin: Fig.Plugin = {
  name: "sysadmin-util_skx",
  displayName: "sysadmin-util",
  icon: "🧑‍💻",
  type: "shell",
  description: "Tools for Linux/Unix sysadmins.",
  authors: [
    {
      name: "skx",
      github: "skx",
    }
  ],
  github: "skx/sysadmin-util",
  license: ["NOASSERTION"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "sysadmin",
    "perl",
    "bash",
    "c",
    "utilities",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["sysadmin-util.plugin.zsh"],
  },
};

export default plugin;
