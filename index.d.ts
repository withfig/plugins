/** The Fig namespace */
declare namespace Fig {
  /** Context used to generate a plugin */
  interface PluginContext {
    installDirectory: string;
    shell: Shell
  }

  /** Environment mediates queries about the local environment */
  interface ClientEnvironment {
    listFolder: (path: string) => Promise<string[]>;
  }

  /**  InstallationValueGenerators are run on the backend when compiling blocks to dotfiles. No direct access to users local environment */
  type InstallationValueGenerator = ({ ctx }: { ctx: PluginContext }) => InstallationValueLiteral;

  /**  ConfigurationGenerators are run on the client to provide suggestions. Access to local device is mediated through ClientEnvironment. */
  type ConfigurationGenerator<T> = ({ ctx, env, config }: { ctx: PluginContext, env?: ClientEnvironment, config: Record<string, unknown> }) => Promise<T>;


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

  type InstallationValueLiteral =  string | string[]
  type InstallationValue =  InstallationValueLiteral | InstallationValueGenerator

  interface PluginInstallation {
    pre?: InstallationValue;
    post?: InstallationValue;
    use?: InstallationValue;
  }

  type Installation = PluginInstallation & {
    [key in Shell]?: PluginInstallation;
  } & {
    source: PluginSource;
  };

  interface ConfigurationInterface {
    displayName?: string;
    description: string;
    details?: string;
    hidden?: ConfigurationGenerator<boolean>;
    disabled?: ConfigurationGenerator<boolean>;
  }

  interface Configuration<T> extends ConfigurationInterface{
    name?: string;
    type: "multiselect" | "select" | "bool" | "number" | "string";
    default?: T | ConfigurationGenerator<T>;
    options?: T | ConfigurationGenerator<T>;
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
    name: string;
    script: ScriptGenerator<T>;
  }

  type ConfigurationPrimitive = EnvironmentVariableConfiguration | ScriptConfiguration<unknown>;

  interface ConfigurationGroup extends ConfigurationInterface {
    displayName: string;
    configuration: ConfigurationPrimitive[]
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

  export interface Plugin {
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
    installation: Installation;
    /** The configuration for the plugin */
    configuration?: (
      | ConfigurationPrimitive
      | ConfigurationGroup
    )[];
  }
}
