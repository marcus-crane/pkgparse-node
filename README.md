Package Parse, or pkgparse for short, is a small module that does one of two things:

1. It can search any module name you give it and return its description.

2. If you feed it in a package.json (which is currently hardcoded to be its own package.json), it will parse it and return descriptions of every dependency.

To use it, install it globally using 'npm install pkgparse -g'

You can then run pkgparse direct from the command line.

I'm fairly certain this module is unusable in anything else and I've only unloaded it as a learning exercise.
