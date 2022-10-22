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
		.setName('ascenso')
        .addUserOption(option => option.setName('usuario').setDescription('Usuario que quiera ascender').setRequired(true))
        .addStringOption(option => option.setName('razón').setDescription('Razón del ascenso').setRequired(true))
        .addStringOption(option => option.setName('rango').setDescription('Nombre que va a ascender [Solo nombre rango, sin emojis]').setRequired(true))
        .setDescription('Hacer un ascenso'),
	async execute(interaction) {
    const razón = interaction.options.getString('razón')
    const rango = interaction.options.getString('rango')
    const usuario = interaction.options.getMember('usuario')
        if (!interaction.member.roles.cache.find (rol => rol.id === "812393724352528384" || "878322648482979940" || "1030623885248446464")) {
            return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
		if (interaction.channel.id !="810984217852248085") {
			return interaction.reply({content: "Este canal no es el adecuado, tonto", ephemeral: true})
			}
        
		
        interaction.reply({content: `El señor ${usuario} asciende al rango ${rango}, la razón: ${razón} \n\ \n\ Att.${interaction.user}`})
        if (usuario.roles.cache.find (rol => rol.id === "810972210852397125")){
          usuario.roles.add("810972210188517396")
          usuario.roles.remove("810972210852397125")} else if(usuario.roles.cache.find (rol => rol.id === "810972210188517396")){
            usuario.roles.add("810972209555177532")
            usuario.roles.remove("810972210188517396")} else if(usuario.roles.cache.find (rol => rol.id === "810972209555177532")){
              usuario.roles.add("810971991464083526")
              usuario.roles.remove("810972209555177532")} else if(usuario.roles.cache.find (rol => rol.id === "810971991464083526")){
                usuario.roles.add("1008138792256938004")
                usuario.roles.remove("813052641940602930")
                usuario.roles.add("878318145125888020")
                usuario.roles.remove("810971991464083526")} else if(usuario.roles.cache.find (rol => rol.id === "1008138792256938004")){
                  usuario.roles.add("810971990692200459")
                  usuario.roles.remove("1008138792256938004")} else if(usuario.roles.cache.find (rol => rol.id === "810971990692200459")){
                    usuario.roles.add("810971990164504576")
                    usuario.roles.remove("878318145125888020")
                    usuario.roles.add("846404817940250624")
                    usuario.roles.remove("810971990692200459")} else if(usuario.roles.cache.find (rol => rol.id === "810971990164504576")){
                      usuario.roles.add("810971989405204484")
                      usuario.roles.remove("810971990164504576")} else if(usuario.roles.cache.find (rol => rol.id === "810971989405204484")){
                        usuario.roles.add("810971796059717634")
                        usuario.roles.remove("810971989405204484")} else if(usuario.roles.cache.find (rol => rol.id === "810971796059717634")){
                          usuario.roles.add("810971795179438141")
                          usuario.roles.remove("810971796059717634")} else if(usuario.roles.cache.find (rol => rol.id === "810971795179438141")){
                            usuario.roles.add("810971794428264448")
                            usuario.roles.remove("810971795179438141")} else if(usuario.roles.cache.find (rol => rol.id === "810971794428264448")){
                              usuario.roles.add("810971793849581578")
                              usuario.roles.remove("846404817940250624")
                              usuario.roles.add("878322648482979940")
                              usuario.roles.remove("810971794428264448")} else if(usuario.roles.cache.find (rol => rol.id === "810971793849581578")){
                                usuario.roles.add("810971725625950280")
                                usuario.roles.remove("810971793849581578")} else if(usuario.roles.cache.find (rol => rol.id === "810971725625950280")){                        
                                  usuario.roles.add("1008141006916550656")
                                  usuario.roles.remove("810971725625950280")} else if(usuario.roles.cache.find (rol => rol.id === "1008141006916550656")){                            
                                    usuario.roles.add("810971661611434014")
                                    usuario.roles.remove("878322648482979940")
                                    usuario.roles.add("812393724352528384")
                                    usuario.roles.remove("1008141006916550656")} else if(usuario.roles.cache.find (rol => rol.id === "810971661611434014")){                            
                                      usuario.roles.add("810971556448436234")
                                      usuario.roles.remove("810971661611434014")} else if(usuario.roles.cache.find (rol => rol.id === "810971556448436234")){                            
                                        usuario.roles.add("810971494552829973")
                                        usuario.roles.remove("810971556448436234")} else if(usuario.roles.cache.find (rol => rol.id === "810971494552829973")){                            
                                          usuario.roles.add("1008136551361949697")
                                          usuario.roles.remove("810971494552829973")} else if(usuario.roles.cache.find (rol => rol.id === "1008136551361949697")){                            
                                            usuario.roles.add("810971400684437515")
                                            usuario.roles.remove("1008136551361949697")} else if(usuario.roles.cache.find (rol => rol.id === "810971400684437515")){                            
                                              usuario.roles.add("810971400684437515")
                                              usuario.roles.remove("810971400684437515")} else if(usuario.roles.cache.find (rol => rol.id === "810971400684437515")){                            
                                                usuario.roles.add("810971133833904148")
                                                usuario.roles.remove("810971400684437515")}
      
      },

};
