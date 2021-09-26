import { createStore, update } from "nanostores"

/**
 * @typedef {import('discord.js').VoiceChannel} VoiceChannel
 * @type {Array.<VoiceChannel>}
 */
export const channelCandidates = createStore(() => channelCandidates.set([]))

/**
 * @typedef {import('discord.js').VoiceChannel} VoiceChannel
 * @param {VoiceChannel} channelCandidate
 * @returns {VoiceChannel}
 */
export function addChannelCandidate(channelCandidate) {
    update(channelCandidates, current => [...current, channelCandidate])

    return channelCandidate
}

/**
 * @param {string} channelCandidateId
 */
export function removeChannelCandidate(channelCandidateId) {
    update(channelCandidates, current => current.filter(c.id !== channelCandidateId))
}