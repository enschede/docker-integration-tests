# Docker integration

## dockerUI


### Prepare environment

- Install NodeJS installeren: http://nodejs.org/
- Install Bower installeren: npm install -g bower
- Install Grunt: npm install -g grunt-cli
- Go to the dockerUI folder and execute:
-- npm install (this fetches all dependencies from package.json)
-- bower install (fetches all dependencies defined in bower.json)

### Build & development

For development you can use `grunt serve`, this starts a webserver and is serving the files directly

For build of the webapp use `grunt` this executes a jshint check, it executes the tests and it builds the dist.
After that you can run `docker build .` to create the docker container. (Example: `docker build -t cbos/dockerui --rm=true .`)

### Execute docker

There is an alias required: app1alias this has to map to app1.
Example execution:
`docker run --rm -p 81:80 --add-host=app1alias:172.17.42.1 cbos/dockerui`

