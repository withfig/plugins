# taw-ys.zsh-theme
taw-ys为一个[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)主题，在[主题ys](https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/ys.zsh-theme)基础上修改而成。主要是做针对python环境的prompt显示。

目前将主题分为了virtualenv和conda两种，请自行选用自己需要的。如只使用原生python，选用任一种均可。

## 效果预览

#### 未激活虚拟环境环境

![image-20200312135927048](https://img.cayun.me/2020-03-12-061056.png)

#### virtualenv

![image-20200312140133061](https://img.cayun.me/2020-03-12-060133.png)

#### conda

![image-20200312140240909](https://img.cayun.me/2020-03-12-060241.png)


## 使用方式

#### virtualenv

1. 将taw-ys-virtualenv.zsh-theme文件拷贝到~/.oh-my-zsh/themes下
2. 修改~/.zshrc中的theme配置为taw-ys-virtualenv
3. 在~/.zshrc中添加`export VIRTUAL_ENV_DISABLE_PROMPT=true`

#### conda

1. 将taw-ys-conda.zsh-theme文件拷贝到~/.oh-my-zsh/themes下
2. 修改~/.zshrc中的theme配置为taw-ys-conda
3. 在~/.condarc中添加`changeps1: False`

