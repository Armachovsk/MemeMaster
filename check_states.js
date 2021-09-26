/**
 * @typedef {import('discord.js').Guild} Guild
 * @param {Guild} guild
 */
export const isArmachovsk = (guild) => guild.id === "257520217796771840"

/**
 * @typedef {import('discord.js').GuildMember} GuildMember
 * @param {GuildMember} member
 */
export const isReidondUser = (member) => member.id === "257519105177812993"

/**
 * @typedef {import('discord.js').GuildMember} GuildMember
 * @param {GuildMember} member
 */
export const isRabbitUser = (member) => member.id === "429584290586820628"

/**
 * @returns {string}
 */
export const devChannelId = () => "721394814276599829"
