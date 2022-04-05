[license-link]: http://avivl.mit-license.org
![GitHub stars](https://img.shields.io/github/stars/avivl/gcloud-project.svg?style=plastic)
![GitHub forks](https://img.shields.io/github/forks/avivl/gcloud-project.svg?style=plastic)
# gcloud-project

## :memo: Description

Working with multiple GCP projects can be a bit confusing. After each `gcloud` command you need to remember adding the `--project` flag of the project you are currently working on. `gcloud-project` was created in order to solve this issue.


`gcloud-project` will look for a file named `.gcpprj` starting from the current directory and going up the tree.
If such file is found its content will be read as the project-id.

Each execution of the `gcloud` command, will set the project id to that value, before actualy calling the command.

After the execution the value in the config file will be restored to it's previous value.

## :mag: Usage

Under Zsh or Bourne shells such as sh and bash, you just source `init.sh` into your shell:

```console
$ source ./init.sh
```
## :package: Installation

Give it a try!

- Install with [zplug](https://github.com/b4b4r07/zplug):

	gcloud-project can be installed by adding the following to your `.zshrc` file in the same function you're doing your other `zplug load` calls in.

	```console
	$ zplug "avivl/gcloud-project", use:init.sh
	```

- Install with `git clone`:

	```console
	$ git clone https://github.com/avivl/gcloud-project
	$ source /path/to/gcloud-project/init.sh
	```

## :ticket: License

[MIT][license-link] :copyright: avivl

