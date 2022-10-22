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
		.setName('oposiciones_abrir')
		.setDescription('Abrir estado oposiciones'),
        async execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle("📝 | Oposiciones")
        .setDescription("Oposiciones abierta, ver el hilo del canal y ver el mensaje anclado \n\ \n\ Oposiciones abiertas hasta nuevo aviso.")
        interaction.reply({embeds: [embed]})
			
        await interaction.channel.threads.create({
 		 name: `Oposiciones`,
 		 autoArchiveDuration: 60,
});
	},
};
