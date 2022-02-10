const plugin: Fig.Plugin = {
  name: "base16-shell",
  type: "shell",
  description: "Base16 for Shells",
  github: "chriskempson/base16-shell",
  license: ["MIT"],
  shells: ["bash", "zsh", "fish"],
  tags: ["theme"],
  installation: {
    source: "github",
    use: [],
    zsh: {
      post: '[ -n "$PS1" ] && [ -s "{{ dir }}/profile_helper.sh" ] && eval "$("{{ dir }}/profile_helper.sh")"',
    },
    bash: {
      post: '[ -n "$PS1" ] && [ -s "{{ dir }}/profile_helper.sh" ] && eval "$("{{ dir }}/profile_helper.sh")"',
    },
    fish: {
      post: [
        "if status --is-interactive",
        '    source "{{ dir }}/profile_helper.fish"',
        "end",
      ],
    },
  },
};

export default plugin;
