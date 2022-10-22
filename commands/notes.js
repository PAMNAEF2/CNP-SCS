const {
  SlashCommandBuilder,
  ChatInputCommandInteraction,
  Client,
  EmbedBuilder,
  PermissionsBitField,
  time,
} = require("discord.js");
const { Types } = require("mongoose");
const noteSchema = require("../schemas/noteSchema");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nota")
    .setDescription("Agregar una nota a un usuario")
    .setDefaultMemberPermissions(PermissionsBitField.Administrator)
    .addSubcommand((subCmd) =>
      subCmd
        .setName("añadir")
        .setDescription("Agregar una nota a un usuario.")
        .addUserOption((option) => {
          return option
            .setName("usuario")
            .setDescription("El usuario para agregar una nota a.")
            .setRequired(true);
        })
        .addStringOption((option) => {
          return option
            .setName("nota")
            .setDescription("La nota a añadir al usuario..")
            .setRequired(true)
            .setMaxLength(110)
        })
    )
    .addSubcommand((subCmd) =>
      subCmd
        .setName("remover")
        .setDescription("Eliminar una nota de un usuario.")
        .addStringOption((option) => {
          return option
            .setName("id")
            .setDescription("El ID de la nota.")
            .setRequired(true);
        })
    )
    .addSubcommand((subCmd) =>
      subCmd
        .setName("editar")
        .setDescription("Editar una nota de un usuario.")
        .addStringOption((option) => {
          return option
            .setName("id")
            .setDescription("El ID de la nota a editar.")
            .setRequired(true);
        })
        .addStringOption((option) => {
          return option
            .setName("nota")
            .setDescription("La nota para editar de un usuario..")
            .setRequired(true);
        })
    ),

  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   * @param {Client} client
   */


  async execute(interaction, client) {
    const { options, member, guild } = interaction;

    switch (options.getSubcommand()) {
      case "añadir":
        const roles = await interaction.guild.roles
    .fetch("1032242037443006554")
    .catch(console.error);
        const note = options.getString("nota");
        const usr = options.getUser("usuario");
        const noteTime = time();

        const newSchema = new noteSchema({
          _id: Types.ObjectId(),
          guildId: guild.id,
          userId: usr.id,
          note: note,
          moderator: member.user.id,
          noteDate: noteTime,
        });
        if (member.roles.cache.has('1032242037443006554')) {
        newSchema.save().catch((err) => console.log(err));
        await interaction.reply({
          embeds: [
            new EmbedBuilder()
              .setTitle("Éxitoso")
              .setDescription(
                `Se agregó una nueva nota a un usuario.!\n> Nota: \`${note}\``
              )
              .setColor("#2f3136"),
          ],
        });
        break;
        } else {
          return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
        }
      case "remover":
        const noteId = options.getString("id");
        const data = await noteSchema.findById(noteId);
        if (member.roles.cache.has('810971133833904148')) {
        const error = new EmbedBuilder()
          .setTitle("ERROR")
          .setDescription(
            `No hay notas que coincidan \`${noteId}\` fue encontrado en la base de datos.`
          )
          .setColor("Red");

        if (!data) await interaction.reply({ embeds: [error], ephemeral: true });

        data.delete();

        const success = new EmbedBuilder()
          .setTitle("Éxitoso")
          .setColor("Green")
          .setDescription(
            `Se eliminó con éxito la nota de <@${data.userId}>!`
          );

        await interaction.reply({
          embeds: [success],
        });
        break;
      } else {
        return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
      }

      case "editar":
        const newNote = options.getString("note");
        const newId = options.getString("id");

        const newData = await noteSchema.findById(newId);
        if (member.roles.cache.has('1032242037443006554')) {
        const err = new EmbedBuilder()
          .setTitle("ERROR")
          .setDescription(
            `No hay notas que coincidan \`${newId}\` fue encontrado en la base de datos.`
          )
          .setColor("Red");

        if (!newData) await interaction.reply({ embeds: [err], ephemeral: true });

        await noteSchema.findOneAndUpdate(
          { guildId: guild.id, _id: newId },
          { note: newNote }
        );

        const suc = new EmbedBuilder()
          .setTitle("Éxitoso")
          .setColor("Green")
          .setDescription(
            `Editó con éxito la nota de <@${newData.userId}> a \`${newNote}\``
          );

        await interaction.reply({
          embeds: [suc],
        });
      } else {
        return interaction.reply({content: "No tienes el rango suficiente, pringao", ephemeral: true})
      }
      default:
        break;
    }
  },
};
