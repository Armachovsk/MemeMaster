import { PresenceUpdateStatus } from "discord-api-types/v9"
import { Client, Intents } from "discord.js"
import { isArmachovsk, isReidondUser } from "./check_states.js"
import { rainbowLog } from "./log.js"
import { addChannelCandidate, channelCandidates } from "./channel_candidates.js"

const intents = new Intents()
intents.add(
  Intents.FLAGS.GUILD_PRESENCES,
  Intents.FLAGS.GUILD_MEMBERS,
  Intents.FLAGS.GUILDS,
)

const client = new Client({ intents })

client.on("ready", async () => {
  rainbowLog(`Logged in as ${client.user.tag}!`)
})

client.on("presenceUpdate", async (_0, newPresence) => {
  const member = newPresence.member
  const guild = newPresence.guild

  if (
    isArmachovsk(guild) &&
    isReidondUser(member) &&
    newPresence.status === PresenceUpdateStatus.Online
  ) {
    ;(await guild.channels.fetch())
      .filter(
        (c) =>
          c.type === "GUILD_VOICE" && guild.afkChannelId !== c.id && !c.full,
      )
      .map((c) => addChannelCandidate(c))

    for (const cc of channelCandidates) {
    }
  }
})

export { client }
