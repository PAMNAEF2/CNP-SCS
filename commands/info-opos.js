const {
	SlashCommandBuilder,
	ChatInputCommandInteraction,
	Client,
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder
  } = require("discord.js");
module.exports = {
	data: new SlashCommandBuilder()
		.setName('info_opos')
		.setDescription('Info opos'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle("**Estado del CNP:**")
			.setDescription("· Nº de agentes dentro del cuerpo: **56 agentes.**\n· Limite de agentes: **60-65 variables.**\n· Plazas disponibles: **~~9 plazas ~~**\n\nLas oposiciones están: Abiertas   :aprobado: \n\n**Convocados a venir en las próximas oposiciones:**\n(Consultar hora con el instructor)\n\n☛ <@1025508284922331207>\n☛ <@849699233626849312>\n☛ <@781405893408325632>\n☛ <@962727116519145522>\n☛ <@908338492176756746>\n☛ <@991980770182824017>\n☛ <@1016284764107444295>\n☛ <@828408315734261810>\n☛ <@490555418452557836>\n\n**LISTA DE ESPERA**\n\n☛ <@847874556580724756>\n☛ <@827429654540845106>\n\n**╠Instructores de las oposiciones╣ **\n\n** Instruct@r:**  <@733278548172734495>\n** Ayudantes:** <@711522034345312308>\n\n** ╠Horario╣ ** \n\n** XX/10/2022 XX:00 UTC+2**  ||**(No definida)**||\n\n||**Ping:** <@&1027925131907043348>||")
        	.setColor(478676)
        	.setThumbnail('https://cdn.discordapp.com/icons/810968896756252732/d666e069c3493bca401dfe9f7907df39.png?size=1024')
			interaction.reply({ embeds: [embed]})
			
	},
};
