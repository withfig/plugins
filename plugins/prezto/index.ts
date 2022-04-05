import {
  setZstyle,
  compileZstyleBool,
  compileZstyleList,
  DEFAULT_MODULES,
} from "./utils";

import autosuggestions from "./modules/autosuggestions";
import completion from "./modules/completion";
import editor from "./modules/editor";
import git from "./modules/git";
import gnuUtility from "./modules/gnu-utility";
import historySubstringSearch from "./modules/history-substring-search";
import prompt from "./modules/prompt";
import python from "./modules/python";
import ruby from "./modules/ruby";
import screen from "./modules/screen";
import ssh from "./modules/ssh";
import syntaxHighlighting from "./modules/syntax-highlighting";
import terminal from "./modules/terminal";
import tmux from "./modules/tmux";
import utility from "./modules/utility";

const MODULES = [
  autosuggestions,
  completion,
  editor,
  git,
  gnuUtility,
  historySubstringSearch,
  prompt,
  python,
  ruby,
  screen,
  ssh,
  syntaxHighlighting,
  terminal,
  tmux,
  utility,
];

const plugin: Fig.Plugin = {
  icon: "☀️",
  name: "prezto",
  displayName: "prezto",
  type: "shell",
  description: "The configuration framework for Zsh",
  authors: [
    {
      name: "sorin-ionescu",
      github: "sorin-ionescu",
    },
  ],
  github: "sorin-ionescu/prezto",
  license: ["MIT"],
  shells: ["zsh"],
  categories: ["Framework"],
  installation: {
    origin: "github",
    sourceFiles: ["init.zsh"],
  },
  configuration: [
    {
      displayName: "General",
      configuration: [
        {
          displayName: "Case Sensitivity",
          name: "case-sensitive",
          description:
            "Set case-sensitivity for completion, history lookup, etc.",
          type: "script",
          interface: "toggle",
          default: true,
          compile: compileZstyleBool(":prezto:*:*", "case-sensitive"),
        },
        {
          displayName: "Color Output",
          name: "color",
          description:
            "Whether or not to color output (auto set to 'no' on dumb terminals).",
          type: "script",
          interface: "toggle",
          default: true,
          compile: compileZstyleBool(":prezto:*:*", "color"),
        },
        {
          displayName: "Module directories",
          name: "pmodule-dirs",
          description:
            "Comma separated list of directories to load prezto modules from",
          type: "script",
          // TODO: support multiselect-text
          interface: "text",
          default: "$HOME/.zprezto-contrib",
          compile: compileZstyleList(":prezto:load", "pmodule-dirs"),
        },
        {
          displayName: "Allow Module Overrides",
          name: "pmodule-allow-overrides",
          description:
            "Allow module overrides when pmodule-dirs causes module name collisions",
          type: "script",
          interface: "toggle",
          default: true,
          compile: compileZstyleBool(":prezto:load", "pmodule-allow-overrides"),
        },
        {
          displayName: "Zsh Modules",
          name: "zsh-modules",
          description:
            "Comma separated list of Zsh modules to load (man zshmodules)",
          type: "script",
          // TODO: support multiselect-text.
          // TODO: add options.
          interface: "text",
          default: "attr,stat",
          compile: compileZstyleList(":prezto:load", "pmodule-allow-overrides"),
        },
        {
          displayName: "Zsh Functions",
          name: "zsh-functions",
          description:
            "Comma separated list of Zsh functions to load (man zshcontrib)",
          type: "script",
          // TODO: support multiselect-text.
          // TODO: add options.
          interface: "text",
          default: "zargs,zmv",
          compile: compileZstyleList(":prezto:load", "zfunction"),
        },
        {
          displayName: "Modules",
          name: "modules",
          description: "Set the Prezto modules to load",
          interface: "multiselect",
          type: "script",
          default: [
            "environment",
            "terminal",
            "editor",
            "history",
            "directory",
            "spectrum",
            "utility",
            "completion",
            "history-substring-search",
            "prompt",
          ],
          options: async ({ env, config }) => {
            if (!env) {
              return DEFAULT_MODULES;
            }
            // TODO: we should look in ${ZPREZTODIR} (default is
            // ${ZDOTDIR:-HOME}/.zprezto). Need to add this functionality to env.
            // const preztoDir = `~/.zprezto/`;
            const moduleDirs = config["pmodule-dirs"] as string;
            const modules = await Promise.all(
              [
                env.listFolder(`~/.zprezto/modules/`),
                ...moduleDirs.split(",").map((dir) => env.listFolder(dir)),
              ].map((p) => p.catch(() => []))
            );
            return [...new Set(modules.flat())];
          },
          compile: (value: string[]) =>
            setZstyle(
              ":prezto:load",
              "pmodule",
              value.map((x) => `'${x}'`).join(" ")
            ),
        },
      ],
    },
    ...MODULES.map((module) => ({
      displayName: `Module: ${module.name}`,
      hidden: ({ config }: { config: Fig.ConfigurationDictionary }) =>
        !(config.modules as string[]).includes(module.name),
      configuration: module.items.map((item) =>
        // Remap names to avoid name conflicts across different plugins.
        item.name ? { ...item, name: `${module.name}-${item.name}` } : item
      ),
    })),
  ],
};

export default plugin;
