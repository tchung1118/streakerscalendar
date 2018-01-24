# Streakers Calendar

No, not THOSE [streakers](https://en.wikipedia.org/wiki/Streaking).

Streakers Calendar is a calendar web application for streak runners, built using Revel (Go) and React.

### Clone it to the right directory:

    git clone https://github.com/tchung1118/streakerscalendar $GOPATH/src/github.com/tchung1118/streakerscalendar

### Node version used:

    node==9.4.0
    npm==5.6.0

### Install dependencies:

    npm install

### Manual build:

    npm run build

### To trigger build on change:

    npm run watch

You need [watchman](https://facebook.github.io/watchman/) for this
### Start the web server:

    revel run github.com/tchung1118/streakerscalendar

### Local server running at:

[http://localhost:9000/](http://localhost:9000/)

## Code Layout

The directory structure of a generated Revel application:

    conf/             Configuration directory
        app.conf      Main app configuration file
        routes        Routes definition file

    app/              App sources
        init.go       Interceptor registration
        controllers/  App controllers go here
        views/        Templates directory

    messages/         Message files

    public/           Public static assets
        css/          CSS files
        js/           Javascript files
        images/       Image files

    tests/            Test suites


## Help

* The [Getting Started with Revel](http://revel.github.io/tutorial/gettingstarted.html).
* The [Revel guides](http://revel.github.io/manual/index.html).
* The [Revel sample apps](http://revel.github.io/examples/index.html).
* The [API documentation](https://godoc.org/github.com/revel/revel).
