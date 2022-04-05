# 说明
-----
本主题是适用于 oh-my-zsh 的 shell 主题，使用前请先安装`git`和`zsh`  
对于`DEB系`，包括Debian、Ubuntu等，请执行`apt-get install zsh git -y`进行安装  
对于`RPM系`，包括RHEL、CentOS等，请执行`yum install zsh git -y`进行安装  
本主题旨在希望尽可能的体现出更多有用的信息在你的 shell 上，在不同的信息以不同的颜色作为区分  
如果你有更好的想法或是实现过程，欢迎 issue to me，对于一些十分有用的功能我也会不断的去更新  
本主题基于 WTFPL 协议开源  

# Install
--------
一条命令搞定 oh-my-zsh 的安装

## 一键安装
如果你从未安装过`oh-my-zsh`, 你可以输入如下命令一键安装并启用该主题，注意，安装`oh-my-zsh`需要有`git`及`zsh`。 

- 从 GitHub 安装，更新源为 GitHub
```
sh -c "$(wget --no-check-certificate https://raw.githubusercontent.com/yw9381/oh-my-zsh_theme_line/master/one_key_install_zsh_github.sh -O -)"
```
- 从 Gitee 安装，更新源为我在 Gitee 的 oh-my-zsh 镜像源  
```
sh -c "$(wget --no-check-certificate https://gitee.com/L1n3/oh-my-zsh_theme_line/raw/master/one_key_install_zsh_gitee.sh -O -)"
```


或是只安装oh-my-zsh及主题，但是不启用，更新源为 GitHub

- 基于wget方式安装
```
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)""
```

- 基于curl方式安装
```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

注意： 如果你已经安装过了oh-my-zsh，请直接下载本主题启用即可 
 
- 从 GitHub 下载
```
wget https://raw.githubusercontent.com/yw9381/oh-my-zsh_theme_line/master/line.zsh-theme -O ~/.oh-my-zsh/themes/line.zsh-theme
```
- 从 Coding 下载  
```
wget https://coding.net/u/L1n3/p/oh-my-zsh_theme_line/git/raw/master/line.zsh-theme  -O ~/.oh-my-zsh/themes/line.zsh-theme
```

# 如何启用本主题
---------------
首先确保已经下载本主题。然后修改家目录下.zshrc(```vim ~/.zshrc```)  
```
ZSH_THEME="xxxx"  
改为
ZSH_THEME="line"
```

# 信息说明
---------
本主题共分为两行，其中第一行为信息行，第二行为输入行
  
- 第一行  
**紫色字**部分表示的是当前的用户名及主机名  
**蓝色字**部分表示的是当前工作路径  
如果该目录是一个git管理的工作目录，则显示git信息，依次为当前分支，最后一次的commit id  
如果该目录有文件变动，则会显示出进行了哪种变动(如图2)  
如果当前终端是一个以screen启动的虚拟终端，则显示出来screen信息(如图3)  
- 第二行  
开始是用户输入光标  
末尾为当前时间  
当用户输入的字符超过该行的时候，时间这部分会自动隐藏(如图4)  
- 其他
如果上条命令执行失败(返回值不等于0)，则光标以红色提示(如图5)  
如果是正确执行的命令(返回值等于0)，光标以绿色提示(如图5)  

# 相关截图
---------
主界面(图1)  
![images/1.png](images/1.png)  
git信息查看(图2)  
![images/2.png](images/2.png)  
screen信息(图3)  
![images/3.png](images/3.png)  
时间自动隐藏(图4)  
![images/4.png](images/4.png)  
错误提示(图5)
![images/5.png](images/5.png)



