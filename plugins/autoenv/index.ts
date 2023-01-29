const plugin: Fig.Plugin = {
  name: "autoenv",
  displayName: "Autoenv",
  description: ".env Directory-based shell environments",
  icon: "🏕️",
  type: "shell",
  authors: [
    {
      name: "hyperupcall",
      github: "hyperupcall",
    },
  ],
  github: "hyperupcall/autoenv",
  license: ["MIT"],
  shells: ["zsh", "bash", "fish"],
  categories: ["Other"],
  keywords: [
    "dotenv",
    "env",
    ".env",
    "environment",
    "variables",
    "config",
    "settings",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["activate.sh"],
  },
  configuration: [
    {
      displayName: "Always load .env",
      name: "AUTOENV_ASSUME_YES",
      description:
        "Default to always loading the .env file. And not prompting the user.",
      type: "environmentVariable",
      interface: "toggle",
      default: false,
    },
    {
      displayName: "Filename",
      name: "AUTOENV_ENV_FILENAME",
      description:
        "Specify a filename to search the current path to the environment environment variables from.",
      type: "environmentVariable",
      interface: "text",
      default: ".env",
    },
    {
      displayName: "Authorized .env paths",
      name: "AUTOENV_AUTH_FILE",
      description:
        "Specify a path to a file containing a whitelist of authorized env files. Autoenv will automatically load env files from paths listed in this file.",
      type: "environmentVariable",
      interface: "text",
      default: "~/.autoenv_authorized",
    },
  ],
};

export default plugin;
