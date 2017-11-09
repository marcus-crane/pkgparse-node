# pkgparse

[![npm version](https://badge.fury.io/js/pkgparse.svg)](https://badge.fury.io/js/pkgparse)
[![License](https://img.shields.io/badge/license-MIT-28BCCE.svg)](https://img.shields.io/badge/license-MIT-28BCCE.svg)

A helper CLI aimed aimed at helping newcomers to [Node.js](https://nodejs.org/en/).

Tell it the name of an [NPM](https://www.npmjs.com/) module and it'll tell you what it does, or even what modules it's made up of!

NOTE: I stalled rewriting this project at some point and so the NPM version is actually behind what is available here. The NPM version has more "features" however it doesn't take advantage of newer async/await functionality.

## Table of Contents

1. [What is pkgparse?](#what-is-pkgparse)
1. [What else can I do with pkgparse?](#what-else-can-i-do-with-pkgparse)
1. [I found a bug](#i-found-a-bug)

## What is pkgparse?

Projects built using Node will more often than not use code written by others. These libraries, or modules as they're often called, are commonly stored on NPM where you can view information about them.

Personally when starting out, I got stick of continually visiting NPM to find out what a module did so I built this tool for myself.

Let's say you're browsing an article and it mentions React. Whoa, what's that you think?

### Search

```
pkgparse search react

// Output
‣  react => React is a JavaScript library for building user interfaces.
```

Whoa, isn't that useful? Honestly, it's a pretty simple project on a technical level. I found it useful though and perhaps you will too!

## What else can I do with pkgparse?

### Scan

If your terminal is currently sitting in a directory that contains a package.json, you can run `pkgparse scan` to 

```
pkgparse scan

// Output
‣  caporal => A full-featured framework for building command line applications (cli) with node.js
‣  chalk => Terminal string styling done right
‣  mocha => simple, flexible, fun test framework
‣  standard => JavaScript Standard Style
‣  test-console => A simple and pragmatic library for testing Node.js console output.
```

Now you know not only what modules `pkgparse` uses but also what they're used for! It's pretty handy if you close a Github repository that has heaps of modules. A quick scan and you should have a rough idea of the functionality in the project!

### Fetch

The last feature is essentially the scan feature except it scans any package on NPM rather than one stored locally on your hard drive.

```
pkgparse fetch chalk

// Output
‣  ansi-styles => ANSI escape codes for styling strings in the terminal
‣  ava => Futuristic test runner 🚀
‣  coveralls => takes json-cov output into stdin and POSTs to coveralls.io
‣  escape-string-regexp => Escape RegExp special characters
‣  execa => A better `child_process`
‣  import-fresh => Import a module while bypassing the cache
‣  matcha => Benchmark your code.
‣  nyc => the Istanbul command line interface
‣  resolve-from => Resolve the path of a module like `require.resolve()` but from a given path
‣  supports-color => Detect whether a terminal supports color
‣  typescript => TypeScript is a language for application scale JavaScript development
‣  xo => JavaScript happiness style linter ❤️
```

Heck, I haven't even heard of some of these modules! Even in just scanning a random package while writing this README, I learnt about a bunch of new libraries. Isn't that cool? I think it is

## I found a bug

Ah yes, that wouldn't surprise me. You can feel free to report it under the [Issues](https://github.com/marcus-crane/pkgparse/issues) tab, preferably with an error/stack trace if possible. I'll try to get back to you as soon as I can!
