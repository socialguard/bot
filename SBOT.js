const Discord = require(`discord.js`);

const client = new Discord.Client();

var prefix = `!`
var quest = `*`
var num1
var num2
const fs = require("fs");
var moneystat = fs.readFileSync("dsww.txt", "utf8");
moneystat = Number.parseInt(moneystat);
console.log(moneystat);
var stroka1 = fs.readFileSync('./prhases/uchona.txt', 'utf8');
const mat1 = stroka1.split('\n')[1];
const mat2 = stroka1.split('\n')[2];
const mat4 = stroka1.split('\n')[4];
const mat5 = stroka1.split('\n')[5];
const mat7 = stroka1.split('\n')[7];
const mat8 = stroka1.split('\n')[8];
console.log(mat1);

//funcs
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function sleep(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
} 
//funcs



//system simbols
var one = "1⃣"
var two = "2⃣"
var three = "3⃣"
var four = "4⃣"
var five = "5⃣"
var six = "6⃣"
//system simbols

client.once('ready', () => {
    console.log('bot was started');
});
//member.roles.some(role => role.name === 'system');
//casesys

//client.on('message', message => {
//	if(message.content.startsWith(quest+'adddaymoney')){
//		if(member.roles.some(role => role.name === 'system')){
//			moneystat=moneystat+50;
//		}else{
//			message.channel.send('Придержи коней, ты не можешь этого!');
//		}
		
//	}
	
	
	
//})


//client.on('message', message => {
//	if (!message.content.startsWith(prefix) || message.author.bot) return;
//
//	const args = message.content.slice(prefix.length).split(' ');
//	const command = args.shift().toLowerCase();
//	if (command === 'calc') {
 //   if (!args.length) {
//        return message.channel.send((2+2)*(10/5));
//    }
	
//}

//});



const exampleEmbed = new Discord.RichEmbed()
    .setColor('#ff0000')
    .setTitle('Кратко обо мне')
    //.setURL('vk.com/socialguard')
    //.setAuthor('!help или же полезная информация', 'https://i.imgur.com/wSTFkRM.png`, `https://discord.js.org`)
    .setDescription('Привет, я бот для голосового среврера дискорд flowX!')
    //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addField('*Кто имеет доступ к моему коду, и к кому обратится в случае ошибки?*', '[Dev] Bongo Cat#2755')
    .addBlankField()
    .addField('!dice', 'Команда с помощью который вы можете кинуть кости', true)
    .addField('!me', 'Показывает эту информацию', true)
    .addField('!case', 'Эта команда дает возможность крутить кейсы, и получать из них деньги!', true)
	//.addField('Inline field title', 'Some value here', true)
	//.addField('Inline field title', 'Some value here', true)
    //.setImage('https://i.imgur.com/wSTFkRM.png')
    .setTimestamp()
    .setFooter('Приглашение на наш сервер , https://discord.gg/Hrz5P4T', 'https://cdn.discordapp.com/avatars/325926057502834688/d6d211978cce88d6967e848c8d1b44d2.png?size=2048');



client.on('message', message => {
if(message.content.startsWith("бот крутой")){
	message.react("❤");
	message.react("♥");
	message.react("💓");
	message.reply("Готов и дальше вам служить 😼");
}


if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
if (command === 'case') {
    if (!args.length) {
        return message.channel.send(`Ошибка 😠 , введите тип кейса который хотите открыть (wood , silver , gold), ${message.author}!`);
    }
    else if (args[0] === 'wood') {
		if(moneystat>10){
			message.channel.send('Открываем деревянный кейс 📦!');
			result=getRandomInRange(1,20);
			moneystat=moneystat-10
			message.channel.send(`Вы выйграли ${result} монет 💵!`);
			moneystat=moneystat+result;
			fs.writeFileSync(`dsww.txt`,moneystat);
			message.channel.send(moneystat);
		}else{
			message.channel.send(`Недостаточно средств 😔`);
		}

    }
	
    else if (args[0] === 'silver') {
		if(moneystat>20){
			message.channel.send('Открываем железеный кейс 📦!');
			result=getRandomInRange(5,30);
			moneystat=moneystat-20
			message.channel.send(`Вы выйграли ${result} монет 💵!`);
			moneystat=moneystat+result;
			fs.writeFileSync(`dsww.txt`,moneystat);
			message.channel.send(moneystat);
		}else{
			message.channel.send(`Недостаточно средств 😔`);
		}

    }

    console.log(`First argument: ${args[0]}`);
}

});

//casesys
client.on(`message`, message=>{
		if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();
	if (message.content.startsWith(`${prefix}ping`)) {
    message.channel.send('Pong.');
}
else if (message.content === `${prefix}server`) {
    message.channel.send(`🔧 Сервер называется: ${message.guild.name} 🔧`);
	message.channel.send(`✌ Участники: ${message.guild.memberCount} ✌`);
}
})

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === 'how to embed') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
    const embed = new RichEmbed()
      // Set the title of the field
      .setTitle('A slick little embed')
      // Set the color of the embed
      .setColor(0xFF0000)
      // Set the main content of the embed
      .setDescription('Hello, this is a slick embed!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

client.on('message', message => {
	


	
	if(
	message.content.startsWith("сука") ||
	message.content.startsWith("Бля") ||
	message.content.startsWith("бля") ||
	message.content.startsWith("ебанат") ||
	message.content.startsWith("Ебанат") ||
	message.content.startsWith("хуесос") ||
	message.content.startsWith("Хуесос") ||
	message.content.startsWith("Сука") ||
	message.content.startsWith("блять") ||
	message.content.startsWith("Блять")){
		
		message.delete()

		//message.reply("message was deleted. Reason : сarbine");
		message.reply("Сообщение удалено по причине : мат (1 пункт)");

	}
	
	if(message.content.startsWith(prefix + "me")){
		message.channel.send(exampleEmbed);
		
	}
	
	//dice
	if(message.content.startsWith(prefix + "dice")){
		num1=getRandomInRange(1,6)
		num2=getRandomInRange(1,6)
		switch(num1) {
			case 1:
			numsym1=one
			break;
			case 2:
			numsym1=two
			break;			
			case 3:
			numsym1=three
			break;		
			case 4:
			numsym1=four
			break;
			case 5:
			numsym1=five
			break;
			case 6:
			numsym1=six
			break;
		}		
		switch(num2) {
			case 1:
			numsym2=one
			break;
			case 2:
			numsym2=two
			break;			
			case 3:
			numsym2=three
			break;		
			case 4:
			numsym2=four
			break;
			case 5:
			numsym2=five
			break;
			case 6:
			numsym2=six
			break;
		}
		message.channel.send("Играем в кости...");
		console.log("diced!" + num1 + " vs " + num2);
		
		message.channel.send("Вы сыграли в кости! Результаты: " + numsym1 + " VS " + numsym2);
		

	}
	//dice
	
	

console.log(message.author.username+" says: "+"["+message.content+"]");
	
});

client.login(`NTEzNjMxMDUzOTkxMTE2ODEw.DtKz5Q.lRQjvFYhc7Q-03PX9S6v9oNVdoE`);


