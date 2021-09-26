import {
  isColorSupported,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  bold,
} from "nanocolors"

/**
 * @typedef {import('discord.js').Client} Client
 * @param {Client} client
 */
export function consoleLogOnReady(client) {
  if (isColorSupported) {
    console.log(
      `${red("L")}${green("o")}${yellow("g")}${blue("g")}${magenta("e")}${cyan(
        "d",
      )} ${red("i")}${green("n")} ${yellow("a")}${blue("s")} ${bold(
        `${client.user.tag}!`,
      )}`,
    )
  } else {
    console.log(`Logged in as ${client.user.tag}!`)
  }
}
