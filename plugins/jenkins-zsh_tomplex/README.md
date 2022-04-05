# jenkins-zsh plugin

A jenkins plugin for ZSH, heavily inspired by the excellent [jira](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/jira) plugin.


### Install

Using oh-my-zsh:

    cd $ZSH/plugins && git clone https://github.com/tomplex/jenkins-zsh.git

And then add "jenkins-zsh" to your oh-my-zsh plugins in .zshrc.

You can specify a jenkins base url three different ways (checked in this order):  
1. Using a .jenkins-url file in the local directory (i.e. ~/project/.jenkins-url)  
2. .jenkins-url file in the ~/ directory  
3. "JENKINS_URL" environment variable.  

If you have Java and the Jenkins CLI installed, then adding a "JENKINS_CLI_PATH" env variable will allow some extra features, such as job name autocompletion when trying to open a specific job.   

Dependencies: This plugin depends on the [urltools](https://github.com/robbyrussell/oh-my-zsh/blob/master/plugins/urltools/urltools.plugin.zsh) plugin.

### Usage

    jenkins [command] [option]

The default action is to open the jenkins home, but this can be changed by setting the "JENKINS_DEFAULT_ACTION" environment variable.

Available commands:

    jenkins home

Opens up the jenkins home page / landing dashboard.

    jenkins new

Will open up the "new job" page.

    jenkins job "job name"

Open the page for the specified job. If the JENKINS_CLI_PATH env var is specified, then it will attempt to autocomplete job named. Jobs with spaces in the name must be enclosed in quotes. NOTE: This is still in development. It works, but it takes a couple seconds because each time you hit tab, it polls the server for all job names. I know there's a better way to do it, but I don't know what it is. If you have any advice, please let me know.

    jenkins search "keyword"

Opens the search results page for the given phrase. Multiple word phrases must be enclosed in quotes.

    jenkins node "node name"

Will open up the page for the named node.



