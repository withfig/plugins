const plugin: Fig.Plugin = {
  icon: "⌚️",
  name: "toggl-zsh-plugin_natterstefan",
  displayName: "Toggl Zsh Plugin",
  type: "shell",
  description:
    "A oh-my-zsh plugin, printing the working hours of the current week tracked in toggl.com (for OSX).",
  authors: [
    {
      name: "natterstefan",
      github: "natterstefan",
      twitter: "natterstefan",
    },
  ],
  github: "natterstefan/toggl-zsh-plugin",
  license: ["Apache-2.0"],
  site: "https://github.com/natterstefan/toggl-zsh-plugin/blob/master/README.md",
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "toggl",
    "zsh",
    "toggl-plugin",
    "zsh-plugin",
    "timetracking",
    "timetracker",
    "cli",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["toggl.plugin.zsh"],
  },
};

export default plugin;
