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
  channels: ['jaredshane', 'jimstewartallen']
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
  // client.color('GoldenRod');

  client.on('chat', (channel, user, message, self) => {
      if (self) return

    // setInterval(() => {
    //   client.say(channel, 'hi')
    // }, 31000)
// my twitch channel
    // if (channel = 'jaredshane') {
    //   if (message == '!ping') {
    //     client.say(channel, 'Pong')
    //   }
    //   if (message == '!modping' && user.mod) {
    //     client.say(channel, 'modpong')
    //   }
    //   if (message == '!broadcasterping' && user.badges.broadcaster) {
    //     client.say(channel, 'Broadcasterpong')
    //   }
    //   if (message == '!ip') {
    //     client.say(channel, 'None ya bizness')
    //   }
    //   if (message == '!help') {
    //     client.say(channel, 'Here you go. https://www.youtube.com/watch?v=yWP6Qki8mWc')
    //   }
    //   if (message == '!nss') {
    //     client.say(channel, 'Best school ever')
    //   }
    // }
    if (channel = 'jimstewartallen') {
      if (self) return

      if (message == '~facebook') {
        client.say(channel, 'Come join us in the wagon circle on Facebook: https://www.facebook.com/groups/198654150555913/	')
      }
      if (message == '~badsound') {
        client.say(channel, 'WARNING: This clip contains a loud, ear-splitting sound. Blame Chelsea and Oregon Trail 2 if you feel any discomfort. https://clips.twitch.tv/jimstewartallen/CourageousJackalBleedPurple')
      }
      if (message == '~bbc') {
        client.say(channel, 'The BBC has a number of amazing documentaries on historical professions and events. They are all amazing. Check out this list and see if anything peaks your interest: https://docs.google.com/spreadsheets/d/10fVxat3dVAa34KQ14smwJNRKbedkK_oIeX7c5xoRaPg/edit?usp=sharing')
      }
      if (message == '~chelsea') {
        client.say(channel, 'Chelsea does a pretty great job as a mod around here! Jim sure is lucky to have her!')
      }
      if (message == '~dance') {
        client.say(channel, 'And this is the part of the stream where JIM DANCES ON THE GRAVES OF HIS VICTIMS!!!!	')
      }
      if (message == '~discord') {
        client.say(channel, 'ATTENTION: New Discord. Make sure to join us on our Discord server: https://discord.gg/NhJMUnt')
      }
      if (message == '~donate') {
        client.say(channel, 'Jim works really hard for you guys, you should donate to his channel!! See that covered wagon button right below this stream?? Click it and donate, then you can make his dream come true of being a professional Oregon Trail player! If you are on mobile, here\'s the link: https://twitch.streamlabs.com/JimStewartAllen')
      }
      if (message == '~hello') {
        client.action(channel, `Hello ${user['display-name']}, I am TrailheadBot. You look lovely today.`)
      }
      if (message == '~hyperrpg') {
        client.action(channel, 'HyperRPG is an interactive, hyperactive community-driven Twitch channel. Check them out at twitch.tv/hyperrpg !')
      }
      if (message == '~jesse') {
        client.action(channel, 'Do you like FPS shooters?? Two options, watch me hunt on Oregon Trail or check out Jesse\'s stream at www.twitch.tv/jessewenrich')
      }
      if (message == '~klayton') {
        client.action(channel, 'Klayton is a good friend and sometimes trail buddy of JSA. They regularly stream Myst together. Check him out here: https://twitter.com/FrackAttack_KS')
      }
      if (message == '~lowe') {
        client.action(channel, 'Is he a robot, or a person?! It doesn\'t freaking matter because he is lowebot and our love for him is AUTOMATIC!')
      }
      if (message == '~lugerron') {
        client.action(channel, 'He is both the greatest engineer of all time and star of a Welch\'s Grape Juice commercial in Puerto Rico in the 80\'s, give it up for Lugerron!!!!')
      }
      if (message == '~murder') {
        client.action(channel, 'Uh oh! It looks like Jim has killed someone AGAIN! Will no one stop his murderous rampage? In the meantime listen to some sad music: https://open.spotify.com/user/1225676420/playlist/4Cc816CyKVZth2h14iNvGi')
      }
      if (message == '~nationaltreasure') {
        client.action(channel, 'JSA at his best: https://clips.twitch.tv/hyperrpg/ZealousHumanDeIlluminati')
      }
      if (message == '~otmurders') {
        client.action(channel, 'We are keeping track of Jim\'s unfortunate victims. Check it out: https://docs.google.com/spreadsheets/d/1BvjNIdR1Db_wfh_5l9uVVd4GJGXlozDUgP5EfVnZF8Y/edit?usp=sharing')
      }
      if (message == '~podcast') {
        client.action(channel, 'Podcast: http://historiography.libsyn.com/ (new episodes every Sunday!)')
      }
      if (message == '~politics') {
        client.action(channel, 'We\'re here to forget our troubles. Let\'s keep the politics limited to events that happened prior to 1860. :D')
      }
      if (message == '~screen') {
        client.action(channel, 'Hi, have you seen my game? I seem to have forgotten to switch screens :(')
      }
      if (message == '~lowehello') {
        client.action(channel, 'Hello Lowebot, you handsome devil.')
      }
      if (message == '~commands') {
        client.action(channel, 'Here is a list of all the current commands: https://github.com/jaredshane/TrailheadBot/blob/dev/README.md')
      }
     }
  })
})
