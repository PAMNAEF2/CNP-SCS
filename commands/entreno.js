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
		.setName('entreno')
        .addStringOption(option => option.setName('fecha').setDescription('Fecha del entrenamiento').setRequired(true))
        .addStringOption(option => option.setName('hora').setDescription('Hora del entrenamiento').setRequired(true))
        .addStringOption(option => option.setName('estimada').setDescription('Duracion estimada del entrenamiento').setRequired(true))
        .addRoleOption((option) =>
        option
          .setName('instructor')
          .setDescription('-')
          .setRequired(true)
      )    
      .addRoleOption((option) =>
      option
        .setName('ayudantes')
        .setDescription('-')
        .setRequired(true)
    )    
      .setDescription('Envia un entreno'),
	async execute(interaction) {
    	const fecha = interaction.options.getString('fecha')
    	const estimada = interaction.options.getString('estimada')
        const hora = interaction.options.getString('hora')
    	const instructor = interaction.options.getRole('instructor')
    	const ayudantes = interaction.options.getRole('ayudantes')
        if (!interaction.member.roles.cache.find (rol => rol.id === "826222912339443733" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="848269596279832616") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		

        interaction.reply({content: `**╘Fecha: ${fecha} | ${hora} UTC+2/+1╛**\n\
**╏Fase teórica╏**\n\ \n\
≣ Prueba de conocimientos básicos.\n\ \n\
≣ Prueba de códigos etc.\n\ \n\
≣ Preguntas de situaciones y como actuar\n\ \n\
**╏Fase práctica╏**\n\ \n\
≣ Código 1. \n\ \n\
≣ Prueba de negociación.\n\ \n\
≣ Respuesta a llamadas [Casa y robo a mano armada].\n\ \n\
≣ Actuación en servicio. [Organización, logística, etc.] \n\ \n\
**>╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍<** \n\ \n\
≣ Instructores: ${instructor}+\n\
≣ Ayudantes: ${ayudantes}+\n\
≣ Duracion Estimada: ${estimada} \n\
≣ Firmado: ${interaction.user}\n\
≣ Ping: ||<@&810972644656283690>||\n\ \n\
**Código Oficial del servidor: zzlrC**
        
        
        ` ,allowedMentions:{parse:["roles"]}})

	},

};
