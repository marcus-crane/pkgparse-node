Pkgparse -- a small NPM searching module
===================

Here's the basics of how to use my tiny project:

## Installing

It's as simple as a global install with Node. Once you have Node installed, just run the following to install it globally. I doubt it'll actually work if you require it normally since it's intended to work as a command line tool.

```sh
npm install pkgparse -g
```

## What does it do?

* It can search any module name you give it and return its description.

* If you feed it in a package.json, it will parse it and return descriptions of each valid dependency.

## How do you use it?

### Parsing a package.json file

You can use -f to fetch the package.json file in your current working directory.

```sh
pkgparse -f
```

Currently, manually inputting a path eg; "~/Development/project1/package.json" is not implemented but may be later if anyone actually wants that.

### Searching for a specific module

You can use -s followed by the name of a module to return a brief overview on what it does.

```sh
pkgparse -s colors
```

## Why?

Learning! I wanted to figure out how to write a super basic CLI application using Javascript. That and this tool is something that I wanted so it's primarily for myself.

I'm fairly certain this module is unusable in anything else and I've only unloaded it as a learning exercise.

## What is this Node thing? Where am I? What is an NPM?

Here's what you're looking for: https://nodejs.org/en/

## Feedback / Feature Requests

Honestly, I'll probably not touch this project again but if you really want to share something, feel free to send me an email at <a href="mailto:pkgparse@thingsima.de">pkgparse@thingsima.de</a>
