const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');
const { token, mongoose } = require('./config.json');
const { connect } = require("mongoose");
const cron = require('cron');
const { dir } = require('node:console');
const { duration } = require('moment');

connect(mongoose, {
}).then(() => console.log("Conectado a la base de datos"));


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Estoy preparado para la buya');
	const mapa = require("./recursos/mapas")
	const {channelId, messageId, channelIdSend} = require("./recursos/info.json")
	client.user.setPresence({
		activities: [{ name: `La Policia Local`, type: ActivityType.Competing }],
		status: 'dnd',
	  });  
	
	/*let scheduledMessage = new cron.CronJob('00 17 19 * * *', () => {
		const guild = client.guilds.cache.get("992995584019533894");
		const channel = guild.channels.cache.get(channelId);
		channel.send('You message');
	});

			  
	scheduledMessage.start()*/
  
	client.channels.cache.get(channelId).messages.fetch(messageId).then(msg =>{
		let ifliter = i => !i.user.bot;
		const collector = msg.createMessageComponentCollector({filter: ifliter})
		collector.on("collect", async i => {
			if(i.customId === "FichajeEntrar"){
				const pringados = ["711522034345312308" || "928332789093388288"]
				//!i.member.roles.cache.has()
				if (i.member.roles.cache.find (rol => rol.id === "814734838887088158")) {
					return i.reply({content: "Bro, que tienes una inactividad osea quitatela en <#811271616431390720> y ya lo vuelves a intentarlo venga, bobo..", ephemeral: true})
				}		
				if (i.member.roles.cache.find (rol => rol.id === "880232147502399509")) {
					return i.reply({content: "Bro, que estas supendido en plan ya te puedes ir al llamamiento pero de que te ya, venga pringado", ephemeral: true})
				}		
						
				if(!mapa.verificar(i.member.id)){
					const hoy = new Date();
					const embed = new EmbedBuilder()
						.setTitle(":ledger: | Fichaje")
						.setDescription(`Nombre ➜ ${i.user} \nFecha ➜ ${hoy.toLocaleDateString('es-ES')} \nHora de inicio ➜ ${hoy.getHours()}:${hoy.getMinutes()} \nHora de finalización ➜ Esta en servicio \nDuración del turno ➜ Esta en servicio`)
						client.channels.cache.get(channelIdSend).send({embeds: [embed]}).then(msg2 => {
							mapa.agregar(i.member.id, `${msg2.id};${hoy.toLocaleDateString('es-ES')};${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`)
						})
					i.reply({content: `¡Hey ${i.user.username}!\nHas entrado a servicio correctamente, no olvides confirmarlo en el canal esperamos que tengas un buen turno 😉.`, ephemeral: true});
					await i.member.roles.add("1023004444364898324")
				}else{
					i.reply({content: "Ya estas dentro de servicio!", ephemeral: true})
				}
			}
			if(i.customId === "Duracion"){
				if(mapa.verificar(i.member.id)){
					const hoy = new Date();
					let str = mapa.conseguir(i.member.id)
					let array = str.split(";")
					var hora1 = array[2].split(":"),
					horas = hoy.getHours(),
					minutos = hoy.getMinutes(),
					segundos = hoy.getSeconds()
					t1 = new Date(),
					t2 = new Date();
					
					t2.setHours(hora1[0], hora1[1], hora1[2]);
					t1.setHours(horas, minutos, segundos);
					
					t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
					
					let diferencia = (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? ", " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? " y " : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos" : " segundo") : "");
						i.reply({content: `Has estado ${diferencia}`, ephemeral: true});
				}else{
					i.reply({content: "No puedes verlo si no estas de servicio!", ephemeral: true})
				}
			}
			if(i.customId === "FichajeSalida"){
				if(mapa.verificar(i.member.id)){
					const hoy = new Date();
					let str = mapa.conseguir(i.member.id)
					let array = str.split(";")
					var hora1 = array[2].split(":"),
					horas = hoy.getHours(),
					minutos = hoy.getMinutes(),
					segundos = hoy.getSeconds()
					t1 = new Date(),
					t2 = new Date();
					
					t2.setHours(hora1[0], hora1[1], hora1[2]);
					t1.setHours(horas, minutos, segundos);
					
					t1.setHours(t1.getHours() - t2.getHours(), t1.getMinutes() - t2.getMinutes(), t1.getSeconds() - t2.getSeconds());
					
					let diferencia = (t1.getHours() ? t1.getHours() + (t1.getHours() > 1 ? " horas" : " hora") : "") + (t1.getMinutes() ? ", " + t1.getMinutes() + (t1.getMinutes() > 1 ? " minutos" : " minuto") : "") + (t1.getSeconds() ? (t1.getHours() || t1.getMinutes() ? " y " : "") + t1.getSeconds() + (t1.getSeconds() > 1 ? " segundos" : " segundo") : "");
					const embed = new EmbedBuilder()
						.setTitle(":ledger: | Fichaje")
						.setDescription(`Nombre ➜ ${i.user} \nFecha ➜ ${array[1]} \nHora de inicio ➜ ${parseInt(hora1[0])}:${hora1[1]} \nHora de finalización ➜ ${horas}:${minutos} \nDuración del turno ➜ ${diferencia}`)
						client.channels.cache.get(`1025526497458528266`).send(`El señor ${i.member.displayName} ha estado ${diferencia} en servicio`)
						client.channels.cache.get(channelIdSend).messages.fetch(array[0]).then(msgedit => {
							msgedit.edit({embeds: [embed]})
							mapa.remover(i.member.id)
						})
						await i.member.roles.remove("1023004444364898324")
						i.reply({content: `Has salido de servicio correctamente, que tengas Feliz Dia.`, ephemeral: true});
				}else{
					i.reply({content: "No puedes salirse de servicio si no estas de servicio!", ephemeral: true})
				}
			}
		})
	})
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Error al ejecutar el comando!', ephemeral: true });
	}

});




client.login(token);
