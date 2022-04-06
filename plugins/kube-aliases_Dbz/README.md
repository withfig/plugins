This is an oh-my-zsh plugin (or source `kube-aliases.plugin.zsh` for bash) to
make working with kubernetes easier. It provides a bunch of bash aliases and
zsh functions. Docs can be found
[here](https://github.com/Dbz/kube-aliases/blob/master/docs/usage), which
clarifies all aliases.

## Usage

There are a few main features of this plugin. First, there are lots of aliases
to make working with Kubernetes easier. Second, there are bash functions to
help with varies tasks such as switching contexts to use different clusters.

### Aliases

To see a full list of aliases, use

```bash
khelp usage
```

In general and when it makes sense, aliases follow the following conventions.

```bash
k           # kubectl
kd<r>       # kubectl delete <resource>, e.g. kdp for kubectl delete pods
kds<r>      # kubectl describe <resource>, e.g. kdsp for kubectl describe pod
ke<r>       # kubectl edit <resource>, e.g. kep for kubectl edit pods
kg<r>       # kubectl get <resource>, e.g. kgp for kubectl get pods
kga<r>      # kubectl get --all-namespaces -o wide <resource>, e.g. kgap for kubectl --all-namespaces -o wide get pods
kl          # kubectl logs <podname>
klf         # kubectl logs -f <podname>: i.e. watch logs live
```

There is also some other useful commands such as the following:

```bash
kcon       # create configuration files
kdap       # delete all pods within a namespace
kdrain     # drain a node
kexec      # execute a command in a specified pod,
           # default drops user into a shell
kfind      # use a regular expression to find items across everything except
           # custom resources
kgpns      # Get just pod names in a namespace
kpfind     # Search through pods with regular expressions
krd        # restart a deployment
kstatus    # search across namespaces to find pods statuses
```

For a more detailed list of aliases, view the [docs](https://github.com/Dbz/kube-aliases/blob/master/docs/usage).

Not everything is currently implemented, but more and more is being added to
the list. If something is missing that is desired, feel free to submit a pull
request.


### Aliases for Kubernetes Extensions

#### kubectx
For easy context and namespace switching there is
[kubectx](https://github.com/ahmetb/kubectx). `kubectx` allows users context
switching, and the linked github comes with `kubens` which allows for simple
namespace switching. You can use the following aliases:

```bash
alias kctx='kubectx'
alias kns='kubens'
```
#### Kubernetes Metrics Server

To get some metrics from nodes or pods, you can use [Kubernetes Metrics
Server](https://github.com/kubernetes-incubator/metrics-server). There are 
the aliases

```bash
alias kt='kubectl top'
alias ktn='kubectl top nodes'
alias ktp='kubectl top pods'
```

### Trouble Shooting

#### Autocomplete

If there is problems with autocomplete, it may be that kubectl is not on the
path when the plugin is loaded. To fix, load plugins after adding kubectl to
path.

