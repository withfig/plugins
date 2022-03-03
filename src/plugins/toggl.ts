const plugin: Fig.Plugin = {
  name: "toggl",
  type: "shell",
  description: "⌚️A oh-my-zsh plugin, printing the working hours of the current week tracked in toggl.com (for OSX).",
  github: "natterstefan/toggl-zsh-plugin",
  shells: ["zsh"],
  tags: [
    "zsh",
    "cli",
    "toggl",
    "timetracker",
    "zsh-plugin",
    "timetracking",
    "toggl-plugin",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
