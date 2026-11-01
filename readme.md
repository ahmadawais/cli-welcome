# cli-welcome

[![DOWNLOADS](https://img.shields.io/npm/dt/cli-welcome?label=DOWNLOADS%20%20❯&colorA=6A788D&colorB=6A788D&style=flat)](https://www.npmjs.com/package/cli-welcome) [![Learn VSCode](https://img.shields.io/badge/-VSCODE.pro%20%E2%86%92-gray.svg?colorB=6A788D&style=flat)](https://VSCode.pro/?utm_source=GitHubFOSS)
[![Follow @MrAhmadAwais on X](https://img.shields.io/badge/FOLLOW%20@MRAHMADAWAIS%20%E2%86%92-gray.svg?colorA=6A788D&colorB=6A788D&style=flat)](https://x.com/MrAhmadAwais)

> Welcome header for Node.js CLI software.

<br />

[![📟](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/install.png)](./../../)

## Install

```sh
npm install cli-welcome
```

<br />

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

<br />

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/options.png)](./../../)

## API

### welcome(options)

#### ❯ options

Type: `object`<br />
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

Type: `boolean`<br />
Default: `true`

Clear console.

#### bold

Type: `boolean`<br />
Default: `true`

Bold heading text.

#### bgColor

Type: `string`<br />
Default: `#ffffff`

Background color highlight for `heading`.

#### color

Type: `string`<br />
Default: `#000000`

Text color for `heading`.

#### version

Type: `string`<br />
Default: `(empty string)`

Print version text.

<br />

[![📝](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/log.png)](changelog.md)

## Changelog

[❯ Read the changelog here →](changelog.md)

<br />

<small>**KEY**: `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `✅ TEST`

> _I use [Emoji-log](https://github.com/ahmadawais/Emoji-Log), you should try it and simplify your git commits._

</small>

<br />

[![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)](./../../)

## License & Conduct

- MIT © [Ahmad Awais](https://x.com/MrAhmadAwais)
- [Code of Conduct](code-of-conduct.md)

<br />

[![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)](./../../)

## Connect

[![X @MrAhmadAwais](https://img.shields.io/badge/X-@MrAhmadAwais-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)](https://x.com/MrAhmadAwais/) [![LinkedIn @MrAhmadAwais](https://img.shields.io/badge/LINKEDIN-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)](https://www.linkedin.com/in/MrAhmadAwais/) [![YouTube AhmadAwais](https://img.shields.io/badge/YOUTUBE-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)](https://youtube.com/AhmadAwais?sub_confirmation=1) [![Blog: AhmadAwais.com](https://img.shields.io/badge/-MY%20BLOG-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)](https://AhmadAwais.com/) [![GitHub @AhmadAwais](https://img.shields.io/badge/-GitHub-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)](https://github.com/ahmadawais)

<small><strong>❯❯ Professional Development Courses ↓</strong></small>

[![Node CLI Course](https://img.shields.io/badge/LEARN-Node%20CLI%20Automation-gray.svg?colorA=215732&colorB=44883e&style=for-the-badge)](https://NodeCLI.com?utm_source=github.com/ahmadawais/readme&utm_medium=referral&utm_campaign=readme) [![VSCode Course](https://img.shields.io/badge/LEARN-VSCode%20Power%20User-gray.svg?colorA=655BE1&colorB=4F44D6&style=for-the-badge)](https://VSCode.pro?utm_source=github.com/ahmadawais/readme&utm_medium=referral&utm_campaign=readme) [![Node.js Course](https://img.shields.io/badge/LEARN-Node.js%20(free)-gray.svg?colorA=21262D&colorB=30363D&style=for-the-badge)](https://NodejsBeginner.com?utm_source=github.com/ahmadawais/readme&utm_medium=referral&utm_campaign=readme)
