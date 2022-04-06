# VOX - ZSH Plugin

An [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) plugin to control [VOX](http://coppertino.com/vox/mac), a lightweight full-featured audio player for OS X that can play a variety of formats including FLAC and Ogg Vorbis.

## Requirements

VOX

## Usage

```
Usage: vox <option>
    -h, --help      Show this message, then exit
    -v, --version   Show version number, then exit

Options:
    launch|quit             Launch or quit VOX
    play|pause|resume       Play or pause the current track
    rewind|forward          Skip back or ahead in the current track
    fastrewind|fastforward  Skip further back or ahead in the current track
    next|previous           Play the next or previous track
    vol|volume [up|down]    Increase or decrease the volume
    vol|volume #            Set volume to # [0-10]
    mute|unmute             Toggle volume
    status                  Show current track details
```

## Examples

```
$ vox launch
> Launch VOX

$ vox play
> Start or resume playback

$ vox pause
> Pause the currently playing track

$ vox next
> Play next track

$ vox vol up
> Increase the volume
```

## Installation

Clone this repository into your oh-my-zsh custom plugins directory.

```
cd ~/.oh-my-zsh/custom/plugins

git clone https://github.com/andrewbonnington/vox.plugin.zsh ./vox
```

Enable the plugin by editing your ~/.zshrc file.

## Changelog

### 1.3.0

- Set volume

### 1.2.0

- Mute and unmute volume

### 1.1.0

- Show current track details

### 1.0.0
 
- Launch and quit VOX
- Play and pause
- Skip back or ahead in the current track
- Play the next or previous track
- Increase or decrease the volume

## Limitations

Due to the limited AppleScript functionality provided by VOX the set volume and mute functionality provided by this script is achieved by increasing/decreasing the volume until the desired volume is obtained. This means that the volume can not be set exactly but should be within &plusmn;5% of the required volume, due to being set in 10% intervals.

Additionally the mute functionality is achieved by storing the current volume in following location `/tmp/voxvol.dat` which is subsequently read when reinstating the volume. If this file is modified or the volume adjusted either using the script or the GUI this feature may not function as expected.

## License

MIT &copy; Andrew Bonnington

