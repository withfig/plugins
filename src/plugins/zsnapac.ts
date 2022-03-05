const plugin: Fig.Plugin = {
  name: "zsnapac",
  type: "shell",
  description: "oh-my-zsh plugin for taking ZFS pre/post upgrade snapshots on Arch Linux",
  github: "johnramsden/zsh-zsnapac",
  shells: ["zsh"],
  tags: [
    "zsh",
    "zfs",
    "zsh-plugins",
    "zfs-snapshots",
    "zfsonlinux",
  ],
  installation: {
    origin: "github",
  },
};

export default plugin;
