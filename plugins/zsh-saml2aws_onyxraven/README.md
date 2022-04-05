# zsh-saml2aws

oh-my-zsh plugin for [saml2aws](https://github.com/Versent/saml2aws)

## Installation

### Prerequisites

You do need the following installed. These are OSX defaults, so this should be no surprise.

- python (2 or 3)
- curl

### [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

This plugin is intended to be used with oh-my-zsh

1. `$ cd ~/.oh-my-zsh/custom/plugins` (you may have to create the folder)
2. `$ git clone git@github.com:onyxraven/zsh-saml2aws.git`
3. In your .zshrc, add `zsh-saml2aws` to your oh-my-zsh plugins:

```bash
plugins=(
  git
  ruby
  zsh-saml2aws
)
```

### [zgen](https://github.com/tarjoilija/zgen)

1. add `zgen load onyxraven/zsh-saml2aws` to your '!saved/save' block
1. `zgen update`

## Features

This plugin is pretty simple - it provides:

- aliases

### Aliases

| Alias | parameters                 | description                                                                   |
| ----- | -------------------------- | ----------------------------------------------------------------------------- |
| sa    |                            | saml2aws command shortcut alias                                               |
| sal   |                            | login to IDP (skips prompts by default)                                       |
| sae   | \<exec-profile> \<command> | execute a command as the profile                                              |
| sash  | \<exec-profile>            | open a shell as the profile                                                   |
| salr  |                            | list roles available to login as                                              |
| sac   |                            | Open a browser to the logged in AWS console                                   |
| said  |                            | output of `aws sts get-caller-identity` for assumed role (\$profile optional) |

## saml2aws configuration

| ENV var                         | example                     | information                                                                                                                                               |
| ------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SAML2AWS_LOGIN_SESSION_DURATION | 43200                       | Length of time (seconds) the "root" federation session is available. This can be up to 12 hours.                                                          |
| SAML2AWS_SESSION_DURATION       | 3600                        | Length of time (seconds) the role assume session is available. This will always be <= 1 hour.                                                             |
| SAML2AWS_MFA                    | OLP                         | Name of the MFA device to use. When unspecified, you will be prompted if there are many, and that is the string to put here. OneLogin Protect for example |
| SAML2AWS_ROLE                   | arn:aws:iam::$ID:role/$ROLE | ARN of the role to federate to. When unspecified, you will be prompted if there are many.                                                                 |
| SAML2AWS_PROFILE                | saml                        | aws cli profile (in `~/.aws/config`) to use. `saml` by default.                                                                                           |
| SAML2AWS_URL                    | https://api.us.onelogin.com | http url to IDP, OneLogin for example.                                                                                                                    |

## script helper configuration

| ENV var             | example           | information                                                                                     |
| ------------------- | ----------------- | ----------------------------------------------------------------------------------------------- |
| AWS_DEFAULT_REGION  | us-east-1         | Default console region                                                                          |
| SAML2AWS_PL_BROWSER | com.google.chrome | set the browser opened for `sac`. By default will use your system default browser if available. |

### sac - console login in private browsing window

> This alias is currently only supported in OSX.

This alias will open a new browser window after getting the temporary login URL for your federated login.

You can specify a specific browser to handle your login URL by setting `SAML2AWS_PL_BROWSER` to the bundle name of the
browser. By default, it will pick your default URL handler in MacOS. It supports the following browsers:

| `SAML2AWS_PL_BROWSER` value | Browser | Description                                                                                                                               |
| --------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `org.mozilla.firefox`       | Firefox | Creates and/or opens a profile with the same name as your aws-vault profile. This allows for multiple profiles to be open simultaneously. |
| `com.google.chrome`         | Chrome  | Opens a new private browsing window for the session. This allows for multiple profiles to be open simultaneously.                         |

## TODO

- [ ] list exec-profile names available (via ~/.aws/config)
- [ ] login url to get directly to an assumed role
  - at least, to the 'share' url. must parse profile (python?)
- [ ] exec without exec-profile ?
- [ ] prompt segment
- [ ] replace curl with python? or replace python.

## Thanks

- Inspired by [zsh-aws-vault](https://github.com/blimmer/zsh-aws-vault)

