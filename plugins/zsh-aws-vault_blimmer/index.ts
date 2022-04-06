const plugin: Fig.Plugin = {
  icon: "⭐️",
  name: "zsh-aws-vault_blimmer",
  displayName: "zsh-aws-vault",
  type: "shell",
  description: "oh-my-zsh plugin for aws-vault",
  authors: [
    {
      name: "blimmer",
      github: "blimmer",
    },
  ],
  github: "blimmer/zsh-aws-vault",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Other"],
  keywords: [
    "oh-my-zsh",
    "oh-my-zsh-plugin",
    "aws-vault",
    "zsh-plugin",
    "zsh",
    "prompt",
  ],
  installation: {
    origin: "github",
    sourceFiles: ["zsh-aws-vault.plugin.zsh"],
  },
  configuration: [
    {
      displayName: "Browser",
      description: "The browser to use for aws-vault",
      name: "AWS_VAULT_PL_BROWSER",
      type: "environmentVariable",
      interface: "select",
      options: [
        {
          option: "org.mozilla.firefox",
          displayName: "Firefox",
          description:
            "Creates and/or opens a profile with the same name as your " +
            "aws-vault profile. This allows for multiple profiles to be open " +
            "simultaneously.",
        },
        {
          option: "org.mozilla.firefoxdeveloperedition",
          displayName: "Firefox Developer Edition",
          description:
            "Creates and/or opens a profile with the same name as your " +
            "aws-vault profile. This allows for multiple profiles to be open " +
            "simultaneously.",
        },
        {
          option: "com.google.Chrome",
          displayName: "Chrome",
          description:
            "Opens a new private browsing window for the session. This " +
            "allows for multiple profiles to be open simultaneously.",
        },
        {
          option: "com.brave.Browser",
          displayName: "Brave",
          description:
            "Opens a new private browsing window for the session. This " +
            "allows for multiple profiles to be open simultaneously.",
        },
      ],
      allowUserCreatedOptions: true,
      default: null,
    },
    {
      displayName: "MFA",
      description: "The MFA device to use for aws-vault",
      name: "AWS_VAULT_PL_MFA",
      type: "environmentVariable",
      interface: "select",
      options: [
        {
          option: "inline",
          displayName: "Inline",
          description:
            "Enter your MFA token as an additional argument to the command.",
        },
        {
          option: "yubikey",
          displayName: "Yubikey",
          description:
            "Generate an MFA token from your Yubikey. See the " +
            "[docs](https://github.com/99designs/aws-vault/blob/master/USAGE.md#using-a-yubikey-as-a-virtual-mfa) " +
            "for more information.",
        },
      ],
      default: null,
    },
  ],
};

export default plugin;
