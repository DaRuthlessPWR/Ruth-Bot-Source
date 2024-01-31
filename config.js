module.exports = {
  TOKEN: "",
  ownerID: ["1154494919038222448", ""],
  botInvite: "",
  supportServer: "discord.gg/grapes",
  mongodbURL: "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  status: 'Ruthless .gg/Grapes',
  commandsDir: './commands',
  language: "en",
  embedColor: "A020F0",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UC0gihhSJpXbYhCDoOD1WPmA",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 200,

  }
}
