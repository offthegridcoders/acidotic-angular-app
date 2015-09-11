# acidotic Racing Official Website

## Part of Off The Grid Coders

## Quick Start

Install Node.js and then:

```sh
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Finally, open `/build/index.html` in your browser.

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
acidotic-angular-app/
  |- grunt-tasks/
  |- karma/
  |- src/
  |  |- app/
  |  |  |- <app logic>
  |  |- assets/
  |  |  |- <static files>
  |  |- common/
  |  |  |- <reusable code>
  |  |- less/
  |  |  |- main.less
  |- vendor/
  |  |- angular-bootstrap/
  |  |- placeholders/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- Gruntfile.js
  |- module.prefix
  |- module.suffix
  |- package.json
```

When you're ready to push your app into production, just run the `compile`
command:

```sh
$ grunt compile
```

Lastly, a complete build is always available by simply running the default
task, which runs `build` and then `compile`:

```sh
$ grunt
```

#### About

>Our mission is to host uncompromisingly excellent events in beautiful locations on challenging courses and to make every competitor feel as though they are important and valuable to us.
