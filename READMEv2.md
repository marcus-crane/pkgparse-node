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

Like all good Node packages, it's available via NPM for whatever flavour of device you're on.

Simply run a global install using your terminal and you're done

```
npm install pkgparse -g
```

If you're a cool kid using [Yarn](https://yarnpkg.com/) then simply just use yarn as you would

```
yarn global add pkgparse
```

# How do I use it?

## I want to parse a package.json file
