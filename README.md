# Pkgparse
###### A tiny NPM searching CLI

[![npm version](https://badge.fury.io/js/pkgparse.svg)](https://badge.fury.io/js/pkgparse)
[![License](https://img.shields.io/badge/license-MIT-28BCCE.svg)](https://img.shields.io/badge/license-MIT-28BCCE.svg)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/marcus-crane/pkgparse/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/marcus-crane/pkgparse/?branch=master)

## Table of Contents
1. [What does it do?](#what-does-it-do)
1. [How do I install it?](#how-do-i-install-it)
1. [How do I use it?](#how-do-i-use-it)
    1. [Searching for a module](#searching-for-a-module)
    1. [Consuming a package.json file](#consuming-a-package.json-file)
    1. [Consuming the package.json of a remote module](#consuming-the-package.json-of-a-remote-module)
    1. [Jump to the NPM page of a module](#jump-to-the-npm-page-of-a-module)
    1. [Jump to the Github page of a module](#jump-to-the-github-page-of-a-module)
1. [I found a bug](#i-found-a-bug)
1. [I want to request a feature](#i-want-to-request-a-feature)

## What does pkgparse do?

You can

* search for an NPM module by name and receive its description

* feed it a package.json and receive descriptions of each valid dependency

* search for an NPM module and get back a list of its dependencies

* quickly navigate to a module's npm page or github repo (if it exists) in your default browser

# How do I install it?

Like most Node packages, it's available via NPM for whatever flavour of device you're on.

Simply run a global install using your terminal and you're good to go!

```sh
npm install pkgparse -g
```

If you're a cool kid using [Yarn](https://yarnpkg.com/) then simply just use yarn as you would

```sh
yarn global add pkgparse
```

# How do I use it?

You've got a few options to play with

## Searching for a module

You can use the search function to look up an NPM module and receive back its description field, if it exists.

I find it handy for a super brief overview if I see a module name without wanting to trawl through too much documentation.

That said, it's only as good as the author makes their description!

You can use it by passing it the name of a module. Let's say you keep hearing about [rethinkdbdash](https://www.npmjs.com/package/rethinkdbdash) but you still don't know what it does

```
// pkgparse search rethinkdbdash
↳ rethinkdbdash => A Node.js driver for RethinkDB with promises and a connection pool
```

## Consuming a package.json file

This is probably my favourite feature and the main reason I started building this tool in the first place.

It's basically just the search feature but applied to each dependency in a package.json file.

I found it useful while doing Node test exercises and wondering what half the dependencies even do.

It can also be used on cloned repos to get a quick overview of what its dependencies are (and actually do) without having to search up each one.

Here's what it looks like applied to pkgparse itself:

```
// pkgparse feast (while in same folder as the repo)
↳ opn => A better node-open. Opens stuff like websites, files, executables. Cross-platform.
↳ chalk => Terminal string styling done right. Much color.
↳ caporal => A full-featured framework for building command line applications (cli) with node.js
↳ axios => Promise based HTTP client for the browser and node.js
```

Now you know exactly what each of the four dependencies that make up pkgparse do in less than 5 seconds (excluding reading time and/or internet outages)

## Consuming the package.json of a remote module

The feast function would a pain in the butt if you had to clone your favourite modules just to see what they're made of so it also comes with an optional argument for parsing modules on NPM.

Let's see what [create-react-app](https://www.npmjs.com/package/create-react-app) is made out of

```
// pkgparse feast --module create-react-app
create-react-app is made of...
↳ validate-npm-package-name => Give me a string and I'll tell you if it's a valid npm package name
↳ chalk => Terminal string styling done right. Much color.
↳ cross-spawn => Cross platform child_process#spawn and child_process#spawnSync
↳ commander => the complete solution for node.js command-line programs
↳ semver => The semantic version parser used by npm.
↳ fs-extra => fs-extra contains methods that aren't included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
```

Neat, I find this feature useful for learning about new modules myself.

Heck, I could have used that [validate-npm-package-name](https://www.npmjs.com/package/validate-npm-package-name) module in pkgparse itself but ah well, it's fast enough as it is.

## Jump to the NPM page of a module

This feature and the next are mainly just handy shortcuts for myself but you might get some use out of them too!

```
// pkgparse open express
[opens https://www.npmjs.com/package/express in your default browser]
```

## Jump to the Github page of a module

Pretty much the same deal as the open command but goes to Github instead

```
// pkgparse gh express
[opens https://github.com/expressjs/express in your default browser]
```

# I found a bug

Feel free to report it under the [Issues](https://github.com/marcus-crane/pkgparse/issues) tab, using the bug label, and I'll see what I can figure out.

# I want to request a feature

Well, it's not really that kind of project but you're welcome to suggest stuff under the [Issues](https://github.com/marcus-crane/pkgparse/issues) by using the enhancement label.

You're always welcome to write additional features yourself via a pull request. All you really need to do is plug your function into the `parseMenu.js` file and a brief menu entry under `pkgparse.js`

You can even just modify your own fork and install it using `npm install <your github name>/pkgparse -g`. That said, I'll consider any upstream pushes too.
