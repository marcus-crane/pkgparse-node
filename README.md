Pkgparse -- a small NPM searching module
===================

Here's the basics of how to use my tiny project:

[![Build Status](https://travis-ci.org/marcus-crane/pkgparse.svg?branch=master)](https://travis-ci.org/marcus-crane/pkgparse)

## Installing

Assuming you have Node installed, plug the following into your terminal to install it globally. This will allow you to run the program anywhere on your system.

```sh
npm install pkgparse -g
```

## What does it do?

* You can search for an NPM module by name and receive back a super brief overview of what it does.

* You can search for a module and receive back a list of the dependencies that it relies on.

* You can feed it a package.json file and it will parse it, returning brief descriptions of each valid dependency.

* You can enter a package name to have pkgparse open its npm page in your favourite browser (or specify one!)

## How do you use it?

### Parsing a package.json file

You can use -f to fetch the package.json file in your current working directory.

```sh
pkgparse -f
```

Alternatively, you can feed in a package.json file from anywhere on your computer like so

```sh
pkgparse -f "~/Development/0050_pkgparse/package.json"
```

The output of -f would look similar to the following:

```sh
Parsing package from /Users/Sentry/Development/0050_pkgparse/package.json

↳ promise => Bare bones Promises/A+ implementation
↳ commander => the complete solution for node.js command-line programs
↳ superagent-promise => superagent promise wrapper
↳ superagent => elegant & feature rich browser / node HTTP with a fluent API
↳ chalk => Terminal string styling done right. Much color.
```

Just a note: Entering ~ as a substitute for your root directory doesn't work 'out of the box' with Node so what it does is swap out ~ for whatever your process.env.HOME variable is: On OS X for example, this would be `/Users/username/`

### Searching for a specific module

You can use -s followed by the name of a module to return a brief overview on what it does.

```sh
pkgparse -s express
```

The resulting output would look like this:

```sh
↳ express => Fast, unopinionated, minimalist web framework
```

### Searching for the dependencies of a module

Just slap -d followed by the name of a module like so:

```sh
pkgparse -d tape
```

What would that look like you ask? Check this out:

```sh
tape
----
Dependencies
↳ deep-equal
↳ defined
↳ function-bind
↳ glob
↳ has
↳ inherits
↳ minimist
↳ object-inspect
↳ resolve
↳ resumer
↳ string.prototype.trim
↳ through

Dev Dependencies
↳ concat-stream
↳ falafel
↳ js-yaml
↳ tap
↳ tap-parser
```

### Open the NPM page of a module

```sh
pkgparse -o chalk
```

Running the command by itself will open, in this case http://npmjs.org/package/chalk, in your default browser

##### But how can I open a page in a specific browser?!?"

```sh
pkgparse -o firefox
```

Thought I'd forget, didn't you? The above case uses firefox but you can swap it out for any browser. Well, you can actually use any application you like but I won't be responsible if your favourite website won't open in VLC or causes a meltdown when you try to open it with Spotify.

Case sensitivity doesn't matter much but **multi-word names** like `Google Chrome` **MUST** be entered in quotes!

If you don't, pkgparse will interpret `Google` and `Chrome` as two separate arguments resulting in nothing happening (until I add some sort of feedback/error string)

## Why?

Learning! I wanted to figure out how to write a super basic CLI application using Javascript. It's a neat tool to hack away at here and there but don't expect super clean code from a pro or anything. Personally, I like using it so perhaps you might find it useful too!

## What is this Node thing? Where am I? What is an NPM?

Here's what you're looking for: https://nodejs.org/en/

## Feedback / Feature Requests

If you'd like to suggest a feature or report a bunch, feel free to add it via Github at https://github.com/marcus-crane/pkgparse or send me an email at <a href="mailto:pkgparse@thingsima.de">pkgparse@thingsima.de</a>
