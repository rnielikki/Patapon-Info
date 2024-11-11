# About contribution

**Please fork and keep contributing**.

I don't want to mod anymore, and I don't want to maintain this.

Hopefully this is helpful for mission editor project.

# Before editing this docs

The main philosophy of this documentation is explaining the PAC instructions to beginners.

Also, please consider that many documentations mainly focus on usages and examples.

## About code of conduct

You can change the rule (code of conduct) after forking. In this case, be sure that the changed rules are applied to all files.

The new rule can be applied with e.g. Regex search and replace.

Please **keep the certain format** so any of PAC reader/editor in future can easily parse and use this.

### Format

For future usage of the MD files, please keep this:

- Every main description (summary) goes right after the first heading.
- Every parameters are listed after `# Parameters` section.
- There must be clear way to distinguish parameter type, parameter name, and parameter description, so can be parsed later.
  - For additional explanation of the parameter, the parameter is *indented* so can skip parsing.

# Guide on editing docs

This uses static website generator called *docfx*.

## Getting Started

.NET is required for installing docfx.

Check [DocFX website](https://dotnet.github.io/docfx/) to start.

## Files

**All documentations are inside `_build/md/`** as markdown files.

For all images and resources (that isn't md file to be converted), use `_build/md/guide/images` or  `_build/md/guide/resources`.

## Building

Go to `_build` and hit `docfx docfx.json --serve`.

Make sure there are 0 warning and 0 error. Broken link might cause warning, so watch the warning message carefully.

The result is in `_build/_site`. If it looks all good, move them to parent directory. (Unfortunately, DocFX doesn't build on parent directory)

Something like `cp -r _build/_site .`.

Optional: Copy `_build/main.css` and `_build/main.js` to `public` after everything else is ready. This will hide Code Information and Code automatically. If you don't want them to be hidden, don't copy these files.






Good luck
