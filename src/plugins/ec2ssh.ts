const plugin: Fig.Plugin = {
  name: "ec2ssh",
  type: "shell",
  description: "zsh plugin to list up EC2 instances and ssh login the instances.",
  github: "h3poteto/zsh-ec2ssh",
  shells: ["zsh"],
  tags: [
    "ssh",
    "ec2",
    "zsh-plugins",
  ],
  installation: {
    source: "github",
  },
};

export default plugin;
