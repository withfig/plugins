# oh-my-zsh-aws-mfa

oh-my-zsh plugin for AWS CLI MFA
based on [https://github.com/sweharris/aws-cli-mfa](https://github.com/sweharris/aws-cli-mfa)
support for passing totp as an argument added by [kt-caylent](https://github.com/kt-caylent)

## Using settings from .aws/config

Now also supports "mfa_device" that is specified in profile (even with "source_profile").

When "role_arn" is specified, it will assume the role after successful mfa login, and set the credentials for that assumed role

## Install Oh-My-Zsh AWS MFA Plugin

1. `git clone --depth=1 https://github.com/joepjoosten/aws-cli-mfa-oh-my-zsh.git "$ZSH/custom/plugins/aws-mfa"`
2. enable it in plugins=(... aws-mfa) in your zshrc file
3. source ~/.zshrc

## Using Oh-My-Zsh AWS MFA Plugin

This plugin adds a new zsh alias, `aws-mfa`, this plugin has five ways you can use it:

1. Call `aws-mfa` with no arguments. This will cause it to prompt you interactively for a TOTP code for your current active AWS_PROFILE.
2. Call `aws-mfa 123456` where **123456** is your 6-digit mfa code from your virtual MFA device (such as Google Authenticator, FreeOTP, etc)
3. Call `aws-mfa my-aws-profile` where **my-aws-profile** is the name of the AWS_PROFILE you want to mfa authenticate to. It will prompt for TOTP as in case #1.
4. Call `aws-mfa my-aws-profile 123456` where **my-aws-profile** is the name of the AWS_PROFILE you want to mfa authenticate to and **123456** is your TOTP code.
5. Call `aws-mfa my-aws-profile 123456 temp-profile` where **my-aws-profile** is the name of the AWS_PROFILE to mfa authenticate to, **123456** is your TOTP code, and **temp-profile** is the name of the AWS_PROFILE to write the temporary credentials to

Note: Options 3, 4, and 5 only make sense if you don't have an AWS_PROFILE already defined. The objective being to go from having no AWS_PROFILE defined to having mfa-authenticated STS temporary credentials in one command.

Furthermore, if you are using the zsh plugin for aws and have set your profile using it's `asp` function, this will interfere with both options 3 and 4, because it will inject it's AWS_PROFILE information into all subshells, causing all requests to utilize the profile defined with `asp` rather than the argument you provide here. You can correct for this by running `asp` with no arguments to unset the profile, and these setting will once again work as outlined above.

