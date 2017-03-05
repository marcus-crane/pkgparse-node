# Pkgparse => A tiny NPM searching CLI

## Table of Contents
1. [What does it do?](#what-does-it-do)
1. [How do I install it?](#how-do-i-install-it)
1. [How do I use it?](#how-do-i-use-it)
    1. [I want to parse a package.json file](#i-want-to-parse-a-package.json-file)

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

Neat, I find this feature useful for learning about new modules myself. Heck, I could have used that [validate-npm-package-name](https://www.npmjs.com/package/validate-npm-package-name) module in pkgparse itself but ah well, it's fast enough as it is.
