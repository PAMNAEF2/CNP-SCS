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
		.setName('inactividad')
        .addStringOption(option => option.setName('fecha_inicio').setDescription('Fecha del inicio').setRequired(true))
        .addStringOption(option => option.setName('fecha_final').setDescription('Fecha final').setRequired(true))
        .addStringOption(option => option.setName('fecha_entrada').setDescription('Fecha de entrada del cuerpo').setRequired(true))
        .addStringOption(option => option.setName('motivo').setDescription('Motivo de la inactividad').setRequired(true))
        .setDescription('Mandar una inactividad'),
	async execute(interaction) {
        const fecha_inicio = interaction.options.getString('fecha_inicio')
        const fecha_final = interaction.options.getString('fecha_final')
        const fecha_entrada = interaction.options.getString('fecha_entrada')
        const motivo = interaction.options.getString('motivo')
        if (interaction.member.roles.cache.find (rol => rol.id === "814734838887088158")) {
            return interaction.reply({content: "Ya tienes una inactividad", ephemeral: true})
        }
        if (!interaction.member.roles.cache.find (rol => rol.id === "810972644656283690")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="811271616431390720") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		

        interaction.reply({content: `El señor ${interaction.user} se pone la inactividad,\n\ \n\Fecha de inicio: ${fecha_inicio} \n\ \n\Fecha final: ${fecha_final} \n\ \n\Fecha de entrada concreta al cuerpo: ${fecha_entrada} \n\ \n\ el motivo: ${motivo}\n\ \n\Si no se respeta los dias minimos de inactividad que son 5 dias, se le retirará el rango de inactividad sin previo aviso.`})
        interaction.member.roles.add("814734838887088158")
	},

};
