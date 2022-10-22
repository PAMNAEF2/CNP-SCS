const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription('Envia un mensaje por el bot.')
		.addStringOption(option => option.setName('mensaje').setDescription('Mensaje'))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		const user = interaction.options.getString('mensaje');
		await interaction.reply(`${user}`);
	},
};
