import { Command, flags } from "@oclif/command"
import oclifErrorsHandle from "@oclif/errors/handle.js"
import { Client, Intents } from "discord.js"

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

class MemeMaster extends Command {
  static flags = {
    version: flags.version(),
    help: flags.help(),
  }
  static args = [
    { name: "token", required: true, description: "MemeMaster discord token" },
  ]
  async run() {
    const { args } = this.parse(MemeMaster)
    client.login(args.token)
  }
}

MemeMaster.run().catch(oclifErrorsHandle)
