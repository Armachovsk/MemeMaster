import { PresenceUpdateStatus } from "discord-api-types/v9"
import { Client, Intents } from "discord.js"
import { devChannelId, isArmachovsk, isReidondUser } from "./check_states.js"
import { consoleLogOnReady } from "./log.js"

const intents = new Intents()
intents.add(
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILDS,
)

const client = new Client({ intents })

client.on("ready", async () => {
  consoleLogOnReady(client)
})

client.on("presenceUpdate", (_0, newPresence) => {
  const member = newPresence.member
  const guild = newPresence.guild

  if (
    isArmachovsk(guild) &&
    isReidondUser(member) &&
    newPresence.status === PresenceUpdateStatus.Online
  ) {
  }
})

export { client }
