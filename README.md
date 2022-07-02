## Setup
(NOTE: This is for setting up the bot with repl.it, I don't actually know any other hosting site)

### Bot Setup
First, set up your bot. To do this, go to https://discord.com/developers/applications, and click `New Application` on the top. You can put any name you like, but Scripticus is reccomended. Go to the `Bot` page, click `Add Bot`, and then `Yes, do it!`.

### Bot User
Scroll down and allow `Presence Intent` and `Server Members Intent`. Go to `OAuth2`, and click `bot` under `Scopes`, then click `Administrator` under `Bot Permissions`. Back under `Scopes`, there will be a link, copy it and paste it in a new tab. Sign in if you need to, and select your server; then authorize the bot.

### Connecting the bot to the repl
Create a secret, name it `TOKEN` and paste your bot token in there. When you update the code, make sure to turn the bot off then on again, because it only updates when the bot reconnects. You can change the prefix in `config.js`.

## Help Command
DO NOT touch the help command in `index.js`. When/If you make a command, it goes like this: 
```JS
case 'command-name':
case 'optional-command-name':
  //code goes here
break;
```
Then, to make it show up in the help command, go to `help.js` and use this template:
```JS
{
  ...,
  'command-name': {
    aliases: ['these', 'are', 'optional'],
    description: 'This command does xyz...',
    format: 'command-name <my-args>'
}
```

### Cleanup
+ Make sure to go through `index.js` and replace any `<insert _ here>` with what it asks for. To get IDs of things like channels, you need to enable `Developer Mode` in your user settings. When you click the 3 dots that show up when you hover over a message, there will be a `Copy ID` button near the bottom. Replace the fillers with said ID. 
+ If you want the prefix to be anything other than `-`, go to `config.js`. It's right after `prefix:`.

### Online
Without a paid repl plan, your repl wil only stay online for so long before it automatically turns off. To circumvent this, you can use `https://uptimerobot.com/` to keep your repl running forever

### Notes
Keep in mind that this is a WIP Project, and I am the only one actually working on it. If you have a suggestion/question, or you find a bug, feel free to contact me via Discord (catkit08#3625) or Reddit (u/catkit08). I will reply as soon as I can.

##

PingSpam V. R.1.1

catkit08