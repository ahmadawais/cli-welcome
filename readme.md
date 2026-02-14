# cli-welcome

[![DOWNLOADS](https://img.shields.io/npm/dt/cli-welcome?label=DOWNLOADS%20%20❯&colorA=6A788D&colorB=6A788D&style=flat)](https://www.npmjs.com/package/cli-welcome) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro%20%E2%86%92-gray.svg?colorB=6A788D&style=flat)](https://VSCode.pro/?utm_source=GitHubFOSS)
[![Follow @MrAhmadAwais on Twitter](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=6A788D&colorB=6A788D&style=flat)](https://twitter.com/mrahmadawais/)

> Welcome header for Node.js CLI software.

<br>

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install cli-welcome
```

<br>

[![⚙️](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/usage.png)](./../../)

## Usage

```js
const welcome = require('cli-welcome');

// Use it.
welcome({title: `Welcome CLI`, tagLine: `by Ahmad Awais`});

// OR with all the options set like this:
welcome({
	title: `Welcome CLI`,
	tagLine: `by Ahmad Awais`,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
	version: `v1.0`
});
```

![img](https://on.ahmda.ws/62bbed/c)

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### welcome(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

#### ❯ title

Type: `string`

CLI title with background color highlight.

#### ❯ tagLine

Type: `string`

CLI tag line in front of the title without highlight but dimmed.

#### ❯ description

Type: `string`

CLI description below the title.

#### clear

Type: `boolean`<br>
Default: `true`

Clear console.

#### bold

Type: `boolean`<br>
Default: `true`

Bold heading text.

#### bgColor

Type: `string`<br>
Default: `#ffffff`

Background color highlight for `heading`.

#### color

Type: `string`<br>
Default: `true`

Text color for `heading`.

#### version

Type: `string`<br>
Default: `(empty string)`

Print version text.

<br>

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br>

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `✅ TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br>

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- [Code of Conduct](code-of-conduct.md)

<br>

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

<div align="left">
    <p><a href="https://github.com/ahmadawais"><img alt="GitHub @AhmadAwais" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&colorA=6cc644&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To stay up to date on free & open-source software</small></p>
    <p><a href="https://twitter.com/MrAhmadAwais/"><img alt="Twitter @MrAhmadAwais" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&colorA=1da1f2&style=flat" /></a>&nbsp;<small><strong>(follow)</strong> To get #OneDevMinute daily hot tips & trolls</small></p>
    <p><a href="https://www.youtube.com/AhmadAwais"><img alt="YouTube AhmadAwais" align="center" src="https://img.shields.io/badge/YOUTUBE-gray.svg?colorB=ff0000&colorA=ff0000&style=flat" /></a>&nbsp;<small><strong>(subscribe)</strong> To tech talks & #OneDevMinute videos</small></p>
    <p><a href="https://AhmadAwais.com/"><img alt="Blog: AhmadAwais.com" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&colorA=4D2AFF&style=flat" /></a>&nbsp;<small><strong>(read)</strong> In-depth & long form technical articles</small></p>
    <p><a href="https://www.linkedin.com/in/MrAhmadAwais/"><img alt="LinkedIn @MrAhmadAwais" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&colorA=0077b5&style=flat" /></a>&nbsp;<small><strong>(connect)</strong> On the LinkedIn profile y'all</small></p>
</div>

