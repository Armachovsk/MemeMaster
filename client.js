import { PresenceUpdateStatus } from "discord-api-types/v9"
import { Client, Intents } from "discord.js"
import { devChannelId, isArmachovsk, isReidondUser } from "./check_states"

const intents = new Intents()
intents.add(
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILDS,
)

const client = new Client({ intents })

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`)
})


export { client }
