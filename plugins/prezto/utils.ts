export const setZstyle = (namespace: string, key: string, value: string) =>
  `zstyle '${namespace}' ${key} ${value}`;

export const compileZstyleBool =
  (namespace: string, key: string) => (value: boolean) =>
    setZstyle(namespace, key, value ? "'yes'" : "'no'");

export const compileZstyle =
  (namespace: string, key: string) => (value: unknown) =>
    setZstyle(namespace, key, `${value}`);

export const compileZstyleList =
  (namespace: string, key: string) => (value: string[]) =>
    setZstyle(namespace, key, value.map((item) => `"${item}"`).join(" "));

export type ModuleConfiguration = {
  name: string;
  items: Fig.ConfigurationItem[];
};

export const DEFAULT_MODULES = [
  "archive",
  "autosuggestions",
  "command-not-found",
  "completion",
  "directory",
  "dnf",
  "docker",
  "dpkg",
  "editor",
  "emacs",
  "environment",
  "fasd",
  "git",
  "gnu-utility",
  "gpg",
  "haskell",
  "helper",
  "history",
  "history-substring-search",
  "homebrew",
  "macports",
  "node",
  "ocaml",
  "osx",
  "pacman",
  "perl",
  "prompt",
  "python",
  "rails",
  "rsync",
  "ruby",
  "screen",
  "spectrum",
  "ssh",
  "syntax-highlighting",
  "terminal",
  "tmux",
  "utility",
  "wakeonlan",
  "yum",
];
