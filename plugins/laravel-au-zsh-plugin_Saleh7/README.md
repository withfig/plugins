# laravel-au-zsh-plugin

## Laravel 6 Artisan/PHPUnit Commands Aliases Plugin for ZSH

### The idea Commands Aliases

![idea](https://raw.githubusercontent.com/Saleh7/laravel-au-zsh-plugin/master/ideaCommands.png)

### Example

Without typing full `Artisan` command in console, like:

```bash
php artisan make:model Attachment -m
```
there is more convenient alias:
```bash
amamod Attachment -m
```

Without typing full `PHPUnit` command in console, like:
```bash
vendor/bin/phpunit
```
there is more convenient alias:
```bash
pu
```

### Installation on oh-my-zsh

1- Go to oh-my-zsh plugins directory:
```bash
cd ~/.oh-my-zsh/plugins
```
2- Clone the repository into a new directory `laravel-au`:
```bash
git clone https://github.com/Saleh7/laravel-au-zsh-plugin.git laravel-au
```
3- Enable laravel-au plugin by adding to your `.zshrc` configuration file:
```bash
plugins=(.... laravel-au)
```
### Aliases PHPUnit

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| pu  | `vendor/bin/phpunit`    |phpunit|
| puf  | `vendor/bin/phpunit --filter`    |Filter which tests to run|
| put  | `vendor/bin/phpunit --testsuite`    |Filter which testsuite to run|
| pug  | `vendor/bin/phpunit --group`    |Only runs tests from the specified group(s)|
| pueg  | `vendor/bin/phpunit --exclude-group`    |Exclude tests from the specified group(s)|
| pulg  | `vendor/bin/phpunit --list-groups`    |List available test groups|
| puls  | `vendor/bin/phpunit --list-suites`    |List available test suites|
| pult  | `vendor/bin/phpunit --list-tests`    |List available tests|

### Aliases Artisan

#### General

| Alias | Command            | Description |
|-------|--------------------|-------------|
|a       | `php artisan`                | Main Artisan command|
|av     | `php artisan -V`     |Display this application version|
|acc    | `php artisan clear-compiled`     |Remove the compiled class file|
|adow     | `php artisan down`     |Put the application into maintenance mode|
|aenv     | `php artisan env`     |Display the current framework environment|
|ahel     | `php artisan help`     |Displays help for a command|
|ains     | `php artisan inspire`     |Display an inspiring quote|
|alis     | `php artisan list`     |Lists commands|
|amig     | `php artisan migrate`     |Run the database migrations|
|migrate     | `php artisan migrate`     |Run the database migrations|
|aopt     | `php artisan optimize`     |Cache the framework bootstrap files|
|apre     | `php artisan preset`     |Swap the front-end scaffolding for the application|
|aser     | `php artisan serve`     |Serve the application on the PHP development server|
|serve     | `php artisan serve`     |Serve the application on the PHP development server|
|atin     | `php artisan tinker`     |Interact with your application|
|tinker     | `php artisan tinker`     |Interact with your application|
|aui     | `php artisan ui`     |Swap the front-end scaffolding for the application|
|aup     | `php artisan up`     |Bring the application out of maintenance mod|

#### Auth
| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| aaucr       | `php artisan auth:clear-resets` | Flush expired password reset tokens  |

#### cache
| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| acacle  | `php artisan cache:clear`    | Flush the application cache|
| acafor | `php artisan cache:forget`     | Remove an item from the cache|
| acatab | `php artisan cache:table` | Create a migration for the cache database table |

#### config

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| acocac  | `php artisan config:cache`    | reate a cache file for faster configuration loading|
| acocle | `php artisan config:clear`     | Remove the configuration cache file|

#### db

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| adbsee  | `php artisan db:seed`    | Seed the database with records|
| adbwip | `php artisan db:wipe`     | Drop all tables, views, and types|

#### event

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| aevcac  | `php artisan event:cache`    |Discover and cache the application's events and listeners|
| aevcle | `php artisan event:clear`     |Clear all cached events and listeners|
| aevgen | `php artisan event:generate`     |Generate the missing events and listeners based on registration|
| aevlis | `php artisan event:list`     |List the application's events and listeners|

#### key

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| akegen  | `php artisan key:generate`    |Set the application key|

#### make

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| amacha  | `php artisan make:channel`    |Create a new channel class|
| amacom  | `php artisan make:command`    |Create a new Artisan command|
| amacon  | `php artisan make:controller`    |Create a new controller class|
| amaeve  | `php artisan make:event`    |Create a new event class|
| amaexc  | `php artisan make:exception`    |Create a new custom exception class|
| amafac  | `php artisan make:factory`    |Create a new model factory|
| amajob  | `php artisan make:job`    |Create a new job class|
| amalis  | `php artisan make:listener`    |Create a new event listener class|
| amamai  | `php artisan make:mail`    |Create a new email class|
| amamid  | `php artisan make:middleware`    |Create a new middleware class|
| amamig  | `php artisan make:migration`    |Create a new migration file|
| amamod  | `php artisan make:model`    |Create a new Eloquent model class|
| amanot  | `php artisan make:notification`    |Create a new notification class|
| amaobs  | `php artisan make:observer`    |Create a new observer class|
| amapol  | `php artisan make:policy`    |Create a new policy class|
| amapro  | `php artisan make:provider`    |Create a new service provider class|
| amareq  | `php artisan make:request`    |Create a new form request class|
| amares  | `php artisan make:resource`    |Create a new resource|
| amarul  | `php artisan make:rule`    |Create a new validation rule|
| amasee  | `php artisan make:seeder`    |Create a new seeder class|
| amates  | `php artisan make:test`    |Create a new test class|

#### migrate

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| amifre  | `php artisan migrate:fresh`    |Drop all tables and re-run all migrations|
| amiins  | `php artisan migrate:install`    |Create the migration repository|
| amiref  | `php artisan migrate:refresh`    |Reset and re-run all migrations|
| amires  | `php artisan migrate:reset`    |Rollback all database migrations|
| amirol  | `php artisan migrate:rollback`    |Rollback the last database migration|
| amista  | `php artisan migrate:status`    |Show the status of each migration|

#### notifications

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| anotab  | `php artisan notifications:table`    |Create a migration for the notifications table|

#### optimize

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| aopcle  | `php artisan optimize:clear`    |Remove the cached bootstrap files|

#### package

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| apadis  | `artisan package:discover`    |Rebuild the cached package manifest|

#### queue

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| aqufai  | `php artisan queue:failed`    |List all of the failed queue jobs|
| aqufait  | `php artisan queue:failed-table`    |Create a migration for the failed queue jobs database table|
| aquflu  | `php artisan queue:flush`    |Flush all of the failed queue jobs|
| aqufor  | `php artisan queue:forget`    |Delete a failed queue job|
| aqulis  | `php artisan queue:listen`    |Listen to a given queue|
| aqures  | `php artisan queue:restart`    |Restart queue worker daemons after their current job|
| aquret  | `php artisan queue:retry`    |Retry a failed queue job|
| aqutab  | `php artisan queue:table`    |Create a migration for the queue jobs database table|
| aquwor  | `php artisan queue:work`    |Start processing jobs on the queue as a daemon|


#### route

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| arocac  | `php artisan route:cache`    |Create a route cache file for faster route registration|
| arocle  | `php artisan route:clear`    |Remove the route cache file|
| arolis  | `php artisan route:list`    |List all registered routes|


#### schedule

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| ascrun  | `php artisan schedule:run`    |Run the scheduled commands|


#### session

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| asetab  | `php artisan session:table`    |Create a migration for the session database table|

#### storage

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| astlin  | `php artisan storage:link`    |Create a symbolic link from `public/storage` to `storage/app/public`|

#### ui

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| auiaut  | `php artisan ui:auth`    |Scaffold basic login and registration views and routes|

#### vendor

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| avepub  | `php artisan vendor:publish`    |Publish any publishable assets from vendor packages|

#### view

| Alias     | Command                      | Description                                        |
|-----------|------------------------------|----------------------------------------------------|
| avicac  | `php artisan view:cache`    |Compile all of the application's Blade templates|
| avicle  | `php artisan view:clear`    |Clear all compiled view files|


### License

The MIT License (MIT). Please see [License File](https://github.com/crazybooot/laravel-zsh-plugin/blob/master/LICENSE.MD) for more information.

