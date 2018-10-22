'use strict'

const Match = use('App/Models/MatchConversation')
class GuestController {
    async index({ response }) {
        let match = await Match.all()

        return response.json(match)
    }

    async show({ params, response }) {
        const match = await Match.find(params.id)

        return response.json(match)
    }

    async store({ request, response }) {
        const matchInfo = request.only(['guest_id', 'match_id', 'message'])

        const match = new Match()
        match.guest_id = matchInfo.guest_id
        match.match_id = matchInfo.match_id
        match.message = matchInfo.message

        await match.save()

        return response.status(201).json(match)
    }

}

module.exports = GuestController
