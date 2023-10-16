import { Client, REST, Routes } from "discord.js";
import { commandList } from "./commandList";
import { DataBase } from "./DB";

export const onReady =  async(BOT: Client)=>{
  
    const rest = new REST({ version: "10" }).setToken(
        process.env.token as string
      );
    
      const DB = new DataBase(process.env.db as string)

      const commandData = commandList.map((command) => command.data.toJSON());
    
      await rest.put(
        Routes.applicationGuildCommands(
          BOT.user?.id || "missing id",
          process.env.gid as string
        ),
        { body: commandData }
      );
    
      console.log("Discord ready!");
}