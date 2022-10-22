const {
	SlashCommandBuilder,
	EmbedBuilder
  } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servicioentrar')
		.setDescription('Entra de servicio ya.'),
	async execute(interaction) {
		const mapa = require("../recursos/mapas")
		const {channelIdSend} = require("../recursos/info.json")
		if(!mapa.verificar(interaction.member.id)){
			const hoy = new Date();
			interaction.reply({content: `¡Hey ${interaction.user.username}!\nHas entrado a servicio correctamente, no olvides confirmarlo en el canal esperamos que tengas un buen turno 😉.`});
			const embed = new EmbedBuilder()
				.setTitle(":ledger: | Fichaje")
				.setDescription(`Nombre ➜ ${interaction.user.username} \nFecha ➜ ${hoy.toLocaleDateString('es-ES')} \nHora de inicio ➜ ${hoy.getHours() +2}:${hoy.getMinutes()} \nHora de finalización ➜ Por Definir \nDuración del turno ➜ Por Definir`)
				interaction.guild.channels.cache.get(channelIdSend).send({embeds: [embed]}).then(msg2 => {
					mapa.agregar(interaction.member.id, `${msg2.id};${hoy.toLocaleDateString('es-ES')};${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`)
				})
			//await i.member.roles.add("")
		}else{
			interaction.reply({content: "Ya estas dentro de servicio!"})
		}
	},
};
