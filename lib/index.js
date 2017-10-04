'use strict'

const debug = require('debug')('telegram')
const net = require('net')

class Client {
    constructor(port) {
        this._client = net.connect(port)
    }

    listener() {
        const self = this
        const client = self._client
        return new Promise((resolve, reject) => {
            client.on('connect', () => {
                debug('Connected')
            })

            client.once('close', (had_error) => {
                (had_error) ? reject('Server connection closed by error') : reject('Server connection closed')
            })

            client.on('error', (e) => {
                reject(e.stack)
                client.destroy()
                self._client = null
            })

            client.on('data', (data) => {
                data = data.toString().split('\n')
                // debug('%O', data)
                data.forEach((row) => {
                    debug('%O', row)
                })
            })

            client.on('timeout', () => {
                debug('Client disconnected from timeout')
            })

            client.on('end', () => {
                debug('Client disconnected')
            })
        })
    }

    send(data) {
        data = JSON.stringify(data)
        debug('%O', data)
        this._client.write(data + '\n')
    }

    async getUserId(username) {
        this.send({_: 'searchPublicChat', username: username})
    }

    async getMe() {
        this.send({_: 'getMe'})
    }

    async searchPublicChat(username) {
        this.send({_: 'searchPublicChat', username: username})
    }

    async closeSecretChat(secret_chat_id) {
        this.send({_: 'closeSecretChat', secret_chat_id: secret_chat_id})
    }

    async createSecretChat(secret_chat_id) {
        this.send({_: 'createSecretChat', secret_chat_id: secret_chat_id})
    }

    async getSecretChat(secret_chat_id) {
        this.send({_: 'getSecretChat', secret_chat_id: secret_chat_id})
    }

    async createNewSecretChat(user_id) {
        this.send({_: 'createNewSecretChat', user_id: user_id})
    }

    async sendMessage(text, chat_id) {
        const InputMessageContent = {_:'inputMessageText', text: text, disable_web_preview: 0, clear_draft: 0, entities: []}
        this.send({_: 'sendMessage', chat_id: chat_id, reply_to_message_id: 0, disable_notification: 0, from_background: 0, input_message_content: InputMessageContent})
    }
}

module.exports = Client