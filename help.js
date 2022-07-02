module.exports = {
  'spam': {
    description: 'Spam someone or multiple people with pings! Outputs an average of 45 pings per minute, and works across channels for more efficiency.',
    format: 'spam <mention user(s)>'
  }
  'kill': {
    description: 'Halt the bot completely. NOTE: This will crash the bot harmlessly and it will need to be turned back on by the owner. Delete this in  `help.js` to hide in the help menu.',
    format: 'kill'
  }
  'help': {
    description: 'Shows the list of commands or help on specified command.',
    format: 'help [command-name]'
  }
}