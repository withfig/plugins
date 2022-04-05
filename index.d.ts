/** The Fig namespace */
declare namespace Fig {
  /** Local device context about a plugin */
  interface PluginContext {
    /** The directory the plugin was installed in */
    installDirectory: string;
  }

  /** Context used to generate shell source code in a dotfile  */
  interface DotfileCompilationContext {
    plugin: PluginContext;
    /** The shell the plugin is being compiled for */
    shell: Shell;
  }

  /** Function that compiles a context to a string-like result or block to be
   * included in dotfiles
   */
  type DotfileCompiler<T, S> = (_: T, __: { ctx: DotfileCompilationContext }) => S;

  /** DeviceEnvironment mediates queries about the local device environment */
  interface DeviceEnvironment {
    plugin: PluginContext;
    /** A function to list the directories in a folder */
    listFolder: (path: string) => Promise<string[]>;
  }

  type InstallationScriptCompiler = (_: { ctx: DotfileCompilationContext }) => string | string[];
  type InstallationScript = string | string[] | InstallationScriptCompiler;

  interface PluginInstallation {
    preScript?: InstallationScript;
    postScript?: InstallationScript;
    sourceFiles?: InstallationScript;
  }

  type PluginOrigin = "github" | { github: string };

  type BinaryDependency = {
    type: "binary";
    name: string;
  };
  type Dependency = BinaryDependency;

  type Installation = PluginInstallation & {
    [key in Shell]?: PluginInstallation;
  } & {
    /** The origin of the plugin */
    origin: PluginOrigin;
    /** Specify any dependencies the plugin has */
    dependencies?: Dependency[];
  };

  /** Current value of a field in a plugin configuration. */
  type ConfigurationValue = unknown;
  type ConfigurationDictionary = Record<string, ConfigurationValue>;

  /** Dynamically computes a result based on current configuration item values. */
  type ConfigurationGenerator<T, S = {}> = (_: S & { config: ConfigurationDictionary }) => T;

  type DeviceConfigurationGenerator<T> = ConfigurationGenerator<
    T | Promise<T>,
    { env?: DeviceEnvironment }
  >;

  type UIType =
    | "multiselect"
    | "select"
    | "multi-text"
    | "text"
    | "textarea"
    | "checkbox"
    | "toggle";

  type NonEmpty<T extends unknown[]> = T & { 0: T[number] };
  type Suggestions<T> = T[] | DeviceConfigurationGenerator<T[]>;

  // Multiselect UI item type
  type MultiselectUI<T> = T extends (infer S)[]
    ? {
        interface: "multiselect";
        allowUserCreatedOptions?: true;
        default: S | T;
        options: Suggestions<S | { option: S, description: string }>;
        value: T;
      }
    : never;

  type SelectUI<T> = {
    interface: "select";
    allowUserCreatedOptions?: true;
    value: T;
    default: T;
    options: Suggestions<T>;
  };

  type TextUI<T> = {
    interface: "text";
    value: T;
    default: T;
  };

  type MultiTextUI = {
    interface: "multi-text";
    value: string[];
    default: string[];
  };

  interface BasicUI<T, U extends UIType> {
    interface: U;
    default: T;
    value: T;
  }

  // Get all ui's that support a value type of T.
  // This enforces that, e.g. you can only use booleans with a toggle/checkbox UI.
  // Gets all valid UIs that satisfy { value: T, interface: S }
  type UI<V, U extends UIType = UIType> = Omit<
    Extract<
      | MultiselectUI<V>
      | SelectUI<V>
      | BasicUI<boolean, "toggle">
      | TextUI<number>
      | TextUI<string>
      | MultiTextUI
      | BasicUI<string, "textarea">,
      { value: V; interface: U }
    >,
    "value"
  >;

  // Interface common to Configuration *items* and Configuration groups (which contain configuration items)
  interface ConfigurationInterface {
    displayName?: string;
    description?: string;
    additionalDetails?: string;
    hidden?: ConfigurationGenerator<boolean>;
    disabled?: ConfigurationGenerator<boolean>;
  }

  type EnvironmentVariableValue = null | string | string[];
  type CompiledEnvironmentVariable =
    | {
        value: EnvironmentVariableValue;
        concat?: boolean;
        export?: boolean;
      }
    | EnvironmentVariableValue;
  type EnvironmentVariableItemForType<V, U extends UIType> = ConfigurationInterface &
    UI<V, U> & {
      type: "environmentVariable";
      environmentVariable: string;
      name?: string;
      compile?: DotfileCompiler<V, CompiledEnvironmentVariable>;
      // Syntactic sugar to compile as environment variable vs shell variable.
      export?: boolean;
    };

  type ScriptItemForType<V, U extends UIType> = ConfigurationInterface &
    UI<V, U> & {
      name: string;
      type: "script";
      compile: DotfileCompiler<V, string>;
    };

  type ScriptItem =
    | ScriptItemForType<string[], "multiselect">
    | ScriptItemForType<number[], "multiselect">
    | ScriptItemForType<string[], "multi-text">
    | ScriptItemForType<boolean, "checkbox" | "toggle">
    | ScriptItemForType<string, "select">
    | ScriptItemForType<string, "text">
    | ScriptItemForType<string, "textarea">
    | ScriptItemForType<number, "select">
    | ScriptItemForType<number, "text">;

  type EnvironmentVariableItem =
    | EnvironmentVariableItemForType<string[], "multiselect">
    | EnvironmentVariableItemForType<number[], "multiselect">
    | EnvironmentVariableItemForType<string[], "multi-text">
    | EnvironmentVariableItemForType<boolean, "checkbox" | "toggle">
    | EnvironmentVariableItemForType<null | string, "select">
    | EnvironmentVariableItemForType<null | string, "text">
    | EnvironmentVariableItemForType<null | string, "textarea">
    | EnvironmentVariableItemForType<null | number, "select">
    | EnvironmentVariableItemForType<null | number, "text">;

  type ConfigurationItem = ScriptItem | EnvironmentVariableItem;

  interface ConfigurationGroup extends ConfigurationInterface {
    /** The name of the group to display in the interface */
    displayName: string;
    /** The children configuration items that are a part of the group */
    configuration: ConfigurationItem[];
  }

  type PluginType = "shell";
  type Shell = "zsh" | "bash" | "fish";

  type Author =
    | string
    | {
        /** The name of the author */
        name: string;
        /** The Twitter handle of the author */
        twitter?: string;
        /** The GitHub username of the author */
        github?: string;
      };

  type Category =
    | "Completion"
    | "Prompt"
    | "Color"
    | "Alias"
    | "Convenience Function"
    | "Productivity Hack"
    | "Framework"
    | "Other";

  export interface Plugin {
    /** The name of the plugin */
    name: string;
    /** The name of the plugin used in UI if defined */
    displayName?: string;
    /** The plugin type */
    type?: PluginType;
    /** A description of the plugin */
    description?: string;
    /** The icon for the plugin */
    icon?: string;
    /** Screenshots displayed in carousel in Fig plugin store */
    screenshots?: string[];
    /** The site for the plugin */
    site?: string;
    /** The docs for the plugin */
    docs?: string;
    /** The github for the plugin in the format (owner/repo) */
    github?: string;
    /** The twitter for the plugin */
    twitter?: string;
    /** Link to community page for plugin (e.g. discord, slack) */
    community?: string;
    /** The authors for the plugin */
    authors?: Author[];
    /** The license for the plugin */
    license?: string[];
    /** The shells that the plugin supports */
    shells?: Shell[];
    /** The categories for the plugin */
    categories?: Category[];
    /** The keywords for the plugin */
    keywords?: string[];
    /** The installation for the plugin */
    installation: Installation;
    /** The configuration for the plugin */
    configuration?: (ConfigurationItem | ConfigurationGroup)[];
  }
}
