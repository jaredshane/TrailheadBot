const tmi = require('tmi.js');
const oAuth = require('./oAuth.js')

let options = {
  options: {
      debug: true
  },
  connection: {
    cluster: 'aws',
    reconnect: true
  },
  identity: {
    username: 'TrailheadBot',
    password: oAuth.password
  },
  channels: ['jaredshane']
};

let client = new tmi.client(options);
client.connect();

// client.on('connected', (address, port) => {
//   // console.log('address', address)
//   // console.log('port', port)
//   client.on('chat', (channel, user, message, self) => {
//     if (self) return
//     if(message === '!twitter') {
//       client.action('jaredshane', 'http://twitter.com/TheGreatJSA')
//     } else if (message === '!westley') {
//       client.action('jaredshane', 'Hi Westley, you should be paying attention in class.')
//     } else if (message === '!hello') {
//       client.action('jaredshane', `Hello ${user['display-name']}, welcome to the chat.`)
//     } else if (message === '!randall') {
//       client.action('jaredshane', 'Hey Randall, you suck.')
//     }
//     // client.action('jaredshane', user['display-name'] + ' Hop on the trail')
//   })
//   // client.action('jaredshane',  "Hello, I'm TrailheadBot")
// })


client.on('connected', (address, port) => {

  client.on('chat', (channel, user, message, self) => {
    if (self) return

    setInterval(() => {
      client.say(channel, 'hi')
    }, 30001)

    if (channel = 'jaredshane') {
      if (message == '!ping') {
        client.say(channel, 'Pong')
      }
      if (message == '!modping' && user.mod) {
        client.say(channel, 'modpong')
      }
      if (message == '!broadcasterping' && user.badges.broadcaster) {
        client.say(channel, 'Broadcasterpong')
      }
      if (message == '!ip') {
        client.say(channel, 'None ya bizness')
      }
      if (message == '!help') {
        client.say(channel, 'Here you go. https://www.youtube.com/watch?v=yWP6Qki8mWc')
      }
      if (message == '!nss') {
        client.say(channel, 'Best school ever')
      }
    }
  })
})
