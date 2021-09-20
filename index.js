const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const keep_alive = require('./alive.js')
var cron = require("cron");




client.on('ready', async () => {

  setInterval(async ()=>{
        
        let textList = ['RTE ON TOP','MADE BY hug0#9761, https://discord.gg/s8yTgzT5bZ ']
        var text = textList[Math.floor(Math.random() * textList.length)];
        client.user.setActivity(text , { type: 'PLAYING' })
    },20000) // milliseconds

let scheduledMessage = new cron.CronJob('00 45 13,18,23 * * *', () => {
	

	let channel = client.channels.cache.get('889110130333978704');
	channel.send(`O drop cai em 15 minutos\n**Despacha-te Caralho**\n@everyone`);
  });


let scheduledMessage2 = new cron.CronJob('00 15 2,6,11,16,21 * * *', () => {
	

	let channel = client.channels.cache.get('889110130333978704');
	channel.send(`O drop cai em 15 minutos\n**Despacha-te Caralho**\n@everyone`);
  });



  // When you want to start it, use:
  scheduledMessage.start()
  scheduledMessage2.start()
  // You could also make a command to pause and resume the job

})

client.login(config.token)