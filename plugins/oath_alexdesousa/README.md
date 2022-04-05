# Oath

> A solemn pledge or promise, appealing to a deity, a ruler, or another entity
> (not necessarily present) to attest to the truth of a statement or sincerity
> of one's desire to fulfill a contract or promise.

`Oath` is an [Oh My ZSH](https://ohmyz.sh/) plugin that manages 2FA
authentication 6 digit tokens. It's highly inspired in
[this article.](https://www.cyberciti.biz/faq/use-oathtool-linux-command-line-for-2-step-verification-2fa/)

## Pre-requisites

`Oath` pre-requisites are as follows:

- `oathtool` for generating 6 digit tokens.
- `gnupg2` for handling private keys securely.
- `xclip` for copying to clipboard.
- An RSA 4096 bits long key (check [this section](#generating-a-key) for
  generating a key).

## Small Example

`Oath` allows to add, remove keys as well as show the temporal 6 digit token
e.g:

- Adding a new key for a domain e.g. for `twitter.com`:

  ```bash
  ~ $ oath add twitter.com
  Private Key:
  [SUCESS]  Key created for twitter.com
  ```

- Deleting a key for a domain e.g. for `twitter.com`:

  ```bash
  ~ $ oath delete twitter.com
  [WARN]    Deleting $OATH_DIR/.oath/twitter.com/424184E122529120CC1821756759ADDD12CB6379.gpg
  [WARN]    Deleting $OATH_DIR/.oath/twitter.com
  [SUCCESS]  Key deleted for twitter.com
  ```

- Showing (and copying to clipboard) the current 6 digit token e.g. for `twitter.com`:

  ```bash
  ~ $ oath twitter.com
  012345
  [SUCCESS]  Code copied to clipboard
  ```

- Showing (and copying to clipboard) the key for a domain e.g. for `twitter.com`:

  ```bash
  ~ $ oath pk twitter.com
  SomePrivateKey
  [SUCCESS]  Private key copied to clipboard
  ```

- Listing keys for all domains e.g:

  ```bash
  ~ $ oath list twitter.com
  twitter.com
  github.com
  ```

- Updating `Oath` to latest version:

  ```bash
  ~ $ oath update
  ```

## Installation

Just clone `Oath` as follows:

```bash
~ $ git clone "https://github.com/alexdesousa/oath.git" "$ZSH_CUSTOM/plugins/oath"
```

And add the oath to your `plugins` in `$HOME/.zshrc` file:

```bash
# Activate completions
autoload -U +X compinit && compinit
autoload -U +X bashcompinit && bashcompinit

plugins=(
  oath
)

# Variables for Oath
export OATH_KEY=<My Oath key>
export OATH_EMAIL=<My Oath email>
```

> **Important**: when updating you can run the following:
>
> ```bash
> cd `$ZSH_CUSTOM/plugins/oath` && git pull origin master
> ```

## Generating a Key

First you need to create a key with `gpg2` as follows:

```bash
$ gpg2 --full-gen-key
```

This will prompt several questions:

1. Kind of key: Hit `[Enter]` or choose `1` for `RSA and RSA`:

    ```bash
    gpg (GnuPG) 2.2.19; Copyright (C) 2019 Free Software Foundation, Inc.
    This is free software: you are free to change and redistribute it.
    There is NO WARRANTY, to the extent permitted by law.

    Please select what kind of key you want:
        (1) RSA and RSA (default)
        (2) DSA and Elgamal
        (3) DSA (sign only)
        (4) RSA (sign only)
      (14) Existing key from card
    Your selection? 1
    ```

2. Key size: `4096` is recommended.

    ```bash
    RSA keys may be between 1024 and 4096 bits long.
    What keysize do you want? (3072) 4096
    Requested keysize is 4096 bits
    ```

3. Expiration: Choose `0` for no expiration.

    ```bash
    Please specify how long the key should be valid.
            0 = key does not expire
          <n>  = key expires in n days
          <n>w = key expires in n weeks
          <n>m = key expires in n months
          <n>y = key expires in n years
    Key is valid for? (0) 0
    Key does not expire at all
    ```

4. Hit `y` if everything is correct.

    ```bash
    Is this correct? (y/N) y
    ```

5. Identify the key with:

    ```bash
    GnuPG needs to construct a user ID to identify your key.

    Real name: Alex de Sousa
    Email address: alex@example.com
    Comment: My Oath key
    You selected this USER-ID:
        "Alex de Sousa (My Oath key) <alex@example.com>"
    ```

6. Hit `o` if everything is correct.

    ```bash
    Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? o
    ```

7. Move you mouse to generate entropy:

```bash
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
```

8. Retrieve your key:

    ```bash
    gpg: key 6759ADDD12CB6379 marked as ultimately trusted
    gpg: revocation certificate stored as '/home/alex/.gnupg/openpgp-revocs.d/424184E122529120CC1821756759ADDD12CB6379.rev'
    public and secret key created and signed.

    pub   rsa4096 2020-02-06 [SC]
          424184E122529120CC1821756759ADDD12CB6379
    uid                      Alex de Sousa (Oath key) <alex@example.com>
    sub   rsa4096 2020-02-06 [E]
    ```

Then we'll only need the `email` and the key `uid` e.g. in our example the
the following two values:

- `OATH_EMAIL`: `alex@example.com`
- `OATH_KEY`: `424184E122529120CC1821756759ADDD12CB6379`

> **Important**: The key will be in your `$HOME/.gnupg` folder. Saving this
> folder is enough to back it up.

## Author

Alexander de Sousa.

## License

`Oath` is released under the MIT License. See the LICENSE file for further
details.

