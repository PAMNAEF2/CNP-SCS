const {
	SlashCommandBuilder,
	EmbedBuilder
  } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serviciosalir')
		.setDescription('Sal de servicio ya.'),
	async execute(interaction) {
		const mapa = require("../recursos/mapas")
		const {channelIdSend} = require("../recursos/info.json")
		if(mapa.verificar(interaction.member.id)){
			const hoy = new Date();
			let str = mapa.conseguir(interaction.member.id)
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
				.setDescription(`Nombre ➜ ${interaction.user.username} \nFecha ➜ ${array[1]} \nHora de inicio ➜ ${parseInt(hora1[0]) +2}:${hora1[1]} \nHora de finalización ➜ ${horas +2}:${minutos} \nDuración del turno ➜ ${diferencia}`)
				interaction.guild.channels.cache.get(channelIdSend).messages.fetch(array[0]).then(msgedit => {
					msgedit.edit({embeds: [embed]})
					mapa.remover(interaction.member.id)
				})
				interaction.reply({content: `Has salido de servicio correctamente, que tengas Feliz Dia.`});
		}else{
			interaction.reply({content: "No puedes salirse de servicio si no estas de servicio!"})
		}
	},
};
