/** The Fig namespace */
declare namespace Fig {
  /** Context used to generate a plugin */
  interface PluginContext {
    installDirectory: string;
  }

  /** A function that takes a context and returns a type `T` */
  type ContextGenerator<T> = ({ ctx }: { ctx: PluginContext }) => T;

  type PluginSource =
    | "github"
    | {
        github: string;
      }
    | {
        git: string;
      }
    | {
        folder: string;
      };

  interface PluginInstallation {
    pre?: string | string[] | ContextGenerator<string | string[]>;
    post?: string | string[] | ContextGenerator<string | string[]>;
    use?: string | string[] | ContextGenerator<string | string[]>;
  }

  type Installation = PluginInstallation & {
    [key in Shell]?: PluginInstallation;
  } & {
    source: PluginSource;
  };

  interface Configuration<T> {
    displayName: string;
    description: string;
    type: "multiselect" | "select" | "bool" | "number" | "string";
    default?: T | ContextGenerator<T>;
    options?: T | ContextGenerator<T>;
  }

  interface EnvironmentVariableConfiguration
    extends Configuration<string | string[]> {
    enviromentVariable: string;
  }

  type ScriptGenerator<V> = ({
    ctx,
    value,
  }: {
    ctx: PluginContext;
    value: V;
  }) => string;

  interface ScriptConfiguration<T> extends Configuration<T> {
    script: ScriptGenerator<T>;
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

  interface Plugin {
    /** The name of the plugin */
    name: string;
    /** The plugin type */
    type: PluginType;
    /** A description of the plugin */
    description?: string;
    /** The icon for the plugin */
    icon?: string;
    /** The site for the plugin */
    site?: string;
    /** The docs for the plugin */
    docs?: string;
    /** The github for the plugin in the format (owner/repo) */
    github?: string;
    /** The twitter for the plugin */
    twitter?: string;
    /** The authors for the plugin */
    authors?: Author[];
    /** The license for the plugin */
    license?: string[];
    /** The shells that the plugin supports */
    shells?: Shell[];
    /** The tags for the plugin */
    tags?: string[];
    /** The installation for the plugin */
    installation?: Installation;
    /** The configuration for the plugin */
    configuration?: (
      | EnvironmentVariableConfiguration
      | ScriptConfiguration<unknown>
    )[];
  }
}
