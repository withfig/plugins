const plugin: Fig.Plugin = {
  name: "kube-ps1",
  type: "shell",
  icon: "⚓",
  description: "Kubernetes prompt info for bash and zsh",
  authors: [
    {
      name: "jonmosco",
      github: "jonmosco",
    },
  ],
  github: "jonmosco/kube-ps1",
  screenshots: ["images/1.gif"],
  license: ["Apache-2.0"],
  shells: ["bash", "zsh"],
  categories: ["Other"],
  keywords: ["kubernetes", "kubectl", "zsh", "bash"],
  installation: {
    origin: "github",
    bash: {
      sourceFiles: ["kube-ps1.sh"],
      postScript: "PS1='[\\u@\\h \\W $(kube_ps1)]\\$ '",
    },
    zsh: {
      sourceFiles: ["kube-ps1.sh"],
      postScript: "PROMPT='$(kube_ps1)'$PROMPT",
    },
  },
  configuration: [
    {
      name: "KUBE_PS1_BINARY",
      default: "kubectl",
      description: "Default Kubernetes binary",
      type: "environmentVariable",
      interface: "text",
    },
    {
      name: "KUBE_PS1_NS_ENABLE",
      default: true,
      description:
        "Display the namespace. If set to false, this will also disable KUBE_PS1_DIVIDER",
      type: "environmentVariable",
      interface: "toggle",
    },
    {
      name: "KUBE_PS1_PREFIX",
      default: "(",
      description: "Prompt opening character",
      type: "environmentVariable",
      interface: "text",
    },
    {
      name: "KUBE_PS1_SYMBOL_ENABLE",
      default: true,
      description:
        "Display the prompt Symbol. If set to false, this will also disable KUBE_PS1_SEPARATOR",
      type: "environmentVariable",
      interface: "toggle",
    },
    {
      name: "KUBE_PS1_SYMBOL_PADDING",
      default: true,
      description:
        "Adds a space (padding) after the symbol to prevent clobbering prompt characters",
      type: "environmentVariable",
      interface: "toggle",
    },
    {
      name: "KUBE_PS1_SYMBOL_DEFAULT",
      default: "⎈",
      description: "Default prompt symbol. Unicode \u2388",
      type: "environmentVariable",
      interface: "text",
    },
    {
      name: "KUBE_PS1_SYMBOL_USE_IMG",
      default: false,
      description: "☸️ , Unicode \u2638 as the prompt symbol",
      type: "environmentVariable",
      interface: "toggle",
    },
    {
      name: "KUBE_PS1_SEPARATOR",
      default: "|",
      description: "Separator between symbol and context name",
      type: "environmentVariable",
      interface: "text",
    },
    {
      name: "KUBE_PS1_DIVIDER",
      default: ":",
      description: "Separator between context and namespace",
      type: "environmentVariable",
      interface: "text",
    },
    {
      name: "KUBE_PS1_SUFFIX",
      default: ")",
      description: "Prompt closing character",
      type: "environmentVariable",
      interface: "text",
    },
    // { name: "KUBE_PS1_CLUSTER_FUNCTION", name: "KUBE_PS1_CLUSTER_FUNCTION", default:	"", description: "Function to customize how cluster is displayed", type: "function", interface: "text"},
    // { name: "KUBE_PS1_NAMESPACE_FUNCTION", name: "KUBE_PS1_NAMESPACE_FUNCTION", default:	"", description: "Function to customize how namespace is displayed", type: "environmentVariable", interface: "text"},
    {
      displayName: "Colors",
      description:
        "Colors must be black, red, green, yellow, blue, magenta, cyan or a number between 0 and 256. Set the variable to an empty string if you do not want color for each prompt section",
      configuration: [
        // { name: "KUBE_PS1_PREFIX_COLOR", name: "KUBE_PS1_PREFIX_COLOR", default:	null, description: "Set default color of the prompt prefix", type: "environmentVariable", interface: "text"},
        {
          name: "KUBE_PS1_SYMBOL_COLOR",
          default: "blue",
          description: "Set default color of the Kubernetes symbol",
          type: "environmentVariable",
          interface: "text",
        },
        {
          name: "KUBE_PS1_CTX_COLOR",
          default: "red",
          description: "Set default color of the context",
          type: "environmentVariable",
          interface: "text",
        },
        // { name: "KUBE_PS1_SUFFIX_COLOR", name: "KUBE_PS1_SUFFIX_COLOR", default:	null, description: "Set default color of the prompt suffix", type: "environmentVariable", interface: "text"},
        {
          name: "KUBE_PS1_NS_COLOR",
          default: "cyan",
          description: "Set default color of the namespace",
          type: "environmentVariable",
          interface: "text",
        },
        // { name: "KUBE_PS1_BG_COLOR", name: "KUBE_PS1_BG_COLOR", default:	null, description: "Set default color of the prompt background", type: "environmentVariable", interface: "text"},
      ],
    },
    {
      displayName: "Additional",
      description: "Additional script to source",
      configuration: [
        {
          name: "additional",
          displayName: "Additional text to source",
          type: "script",
          description:
            "Free text field that will be sourced before `kube-ps1.sh` is sourced",
          interface: "textarea",
          default: "",
          compile: (value) => value,
        },
      ],
    },
  ],
};

export default plugin;
