import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/command";
import { DataBase } from "../utils/DB";

export const test: Command = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("test sys")
    ,
    run: async (interaction: CommandInteraction) => {
        const data = await DataBase.test()
        interaction.reply({content:String(data[5]),fetchReply:true})
    }
}