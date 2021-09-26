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

/**
 * @template T
 * @param {Array.<T>} items
 * @return {T}
 */
const rand = (items) => items[(items.length * Math.random()) | 0]

/**
 * @template T
 * @param {Array.<T>} args
 * @return {void}
 */
export function rainbowLog(...args) {
  if (isColorSupported) {
    const newArgs = args.map((a) => {
      if (typeof a === "string") {
        return a
          .split("")
          .map((s) => {
            const color = rand([red, green, yellow, blue, magenta, cyan])
            return color(s)
          })
          .join("")
      }

      return a
    })
    console.log(...newArgs)
  } else {
    console.log(...args)
  }
}
