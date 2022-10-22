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
		.setName('opos')
        .addUserOption(option => option.setName('usuario').setDescription('La persona haya pasado las oposiciones').setRequired(true))
        .addStringOption(option => option.setName('nombre').setDescription('Apellido IC [Para el nombre del discord]').setRequired(true))
        .setDescription('oposiciones'),
    
	async execute(interaction) {
    	const user = interaction.options.getMember('usuario')
    	const nombre = interaction.options.getString('nombre')
        if (!interaction.member.roles.cache.find (rol => rol.id === "826222911127289898" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="1026537748741492756") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		
        interaction.reply({content: `El señor ${user} ha pasado las oposiciones, recuerde usar /nuevo \n\ \n\ Att.${interaction.user}` ,allowedMentions:{parse:["users"]}})
        user.setNickname(`Policía A. | ${nombre} [80]`);
        user.roles.add("873605181659553872")
        user.roles.add("1008661114030133268")
        user.roles.add("873604323685314591")
        user.roles.add("873604537896828979")
        user.roles.add("914966864810090536")
        user.roles.add("854797519845064714")
        user.roles.add("810972644656283690")
        user.roles.add("813052641940602930")
        user.roles.add("810972210852397125")
        user.roles.remove("1027925131907043348")
        }
};