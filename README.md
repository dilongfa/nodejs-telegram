# node-telegram
A simple NodeJs package for the [`telegram-cli`](https://valtman.name/telegram-cli)
Send and receive a text message over TCP

See [wiki](https://github.com/longfanos/node-telegram/wiki) for documentation.

## How to Use


## The Functions

`node-telegram` is a Work In Progress. This commit is based on [telegram-cli-1222.tl](https://valtman.name/files/telegram-cli-1222.tl) scheme.
Here is a list of functions that's should works, and what left to be tested.
- [] getAuthState
- [] setAuthPhoneNumber
- [] resendAuthCode
- [] checkAuthCode
- [] checkAuthPassword
- [] requestAuthPasswordRecovery
- [] recoverAuthPassword
- [] resetAuth
- [] checkAuthBotToken
- [] getPasswordState
- [] setPassword
- [] getRecoveryEmail
- [] setRecoveryEmail
- [] requestPasswordRecovery
- [] recoverPassword
- [] createTemporaryPassword
- [] getMe
- [] getUser
- [] getUserFull
- [] getGroup
- [] getGroupFull
- [] getChannel
- [] getChannelFull
- [] getSecretChat
- [] getChat
- [] getMessage
- [] getMessages
- [] getFile
- [] getFilePersistent
- [] getChats
- [] searchPublicChat
- [] searchPublicChats
- [] searchChats
- [] getTopChats
- [] deleteTopChat
- [] addRecentlyFoundChat
- [] deleteRecentlyFoundChat
- [] deleteRecentlyFoundChats
- [] getCommonChats
- [] getCreatedPublicChats
- [] getChatHistory
- [] deleteChatHistory
- [] searchChatMessages
- [] searchMessages
- [] searchSecretMessages
- [] searchCallMessages
- [] getPublicMessageLink
- [] sendBotStartMessage
- [] sendInlineQueryResultMessage
- [] forwardMessages
- [] sendChatScreenshotTakenNotification
- [] sendChatSetTtlMessage
- [] deleteMessages
- [] deleteMessagesFromUser
- [] editMessageText
- [] editMessageCaption
- [] editMessageReplyMarkup
- [] editInlineMessageText
- [] editInlineMessageCaption
- [] editInlineMessageReplyMarkup
- [] getTextEntities
- [] getFileMimeType
- [] getInlineQueryResults
- [] answerInlineQuery
- [] getCallbackQueryAnswer
- [] answerCallbackQuery
- [] answerShippingQuery
- [] answerPreCheckoutQuery
- [] setGameScore
- [] setInlineGameScore
- [] getGameHighScores
- [] getInlineGameHighScores
- [] deleteChatReplyMarkup
- [] sendChatAction
- [] openChat
- [] closeChat
- [] viewMessages
- [] openMessageContent
- [] createPrivateChat
- [] createGroupChat
- [] createChannelChat
- [] createSecretChat
- [] createNewGroupChat
- [] createNewChannelChat
- [] createNewSecretChat
- [] migrateGroupChatToChannelChat
- [] changeChatTitle
- [] changeChatPhoto
- [] changeChatDraftMessage
- [] toggleChatIsPinned
- [] setChatClientData
- [] addChatMember
- [] addChatMembers
- [] changeChatMemberStatus
- [] getChatMember
- [] searchChatMembers
- [] setPinnedChats
- [] downloadFile
- [] cancelDownloadFile
- [] uploadFile
- [] cancelUploadFile
- [] setFileGenerationProgress
- [] finishFileGeneration
- [] exportChatInviteLink
- [] checkChatInviteLink
- [] importChatInviteLink
- [] createCall
- [] acceptCall
- [] rateCall
- [] blockUser
- [] unblockUser
- [] getBlockedUsers
- [] importContacts
- [] searchContacts
- [] deleteContacts
- [] getUserProfilePhotos
- [] getStickers
- [] getInstalledStickerSets
- [] getArchivedStickerSets
- [] getTrendingStickerSets
- [] getAttachedStickerSets
- [] getStickerSet
- [] searchStickerSet
- [] changeStickerSet
- [] viewTrendingStickerSets
- [] reorderInstalledStickerSets
- [] getRecentStickers
- [] addRecentSticker
- [] deleteRecentSticker
- [] clearRecentStickers
- [] getStickerEmojis
- [] getSavedAnimations
- [] addSavedAnimation
- [] deleteSavedAnimation
- [] getRecentInlineBots
- [] searchHashtags
- [] deleteRecentHashtag
- [] getWebPagePreview
- [] getWebPageInstantView
- [] getNotificationSettings
- [] setNotificationSettings
- [] resetAllNotificationSettings
- [] setProfilePhoto
- [] deleteProfilePhoto
- [] changeName
- [] changeAbout
- [] changeUsername
- [] changePhoneNumber
- [] resendChangePhoneNumberCode
- [] checkChangePhoneNumberCode
- [] getActiveSessions
- [] terminateSession
- [] terminateAllOtherSessions
- [] toggleGroupEditors
- [] changeChannelUsername
- [] toggleChannelInvites
- [] toggleChannelSignMessages
- [] changeChannelAbout
- [] pinChannelMessage
- [] unpinChannelMessage
- [] reportChannelSpam
- [] getChannelMembers
- [] deleteChannel
- [] closeSecretChat
- [] getChatEventLog
- [] getPaymentForm
- [] validateOrderInfo
- [] sendPaymentForm
- [] getPaymentReceipt
- [] getSavedOrderInfo
- [] deleteSavedOrderInfo
- [] deleteSavedCredentials
- [] getSupportUser
- [] getWallpapers
- [] registerDevice
- [] setPrivacy
- [] getPrivacy
- [] getOption
- [] setOption
- [] changeAccountTtl
- [] getAccountTtl
- [] deleteAccount
- [] getChatReportSpamState
- [] changeChatReportSpamState
- [] reportChat
- [] getStorageStatistics
- [] getStorageStatisticsFast
- [] optimizeStorage
- [] setNetworkType
- [] getNetworkStatistics
- [] addNetworkStatistics
- [] resetNetworkStatistics
- [] setBotUpdatesStatus
- [] uploadStickerFile
- [] createNewStickerSet
- [] addStickerToSet
- [] setStickerPositionInSet
- [] deleteStickerFromSet
- [] sendCustomRequest
- [] answerCustomQuery
- [] sendCustomRequest
- [] setAlarm
- [] getInviteText
- [] getTermsOfService
- [] setProxy
- [] getProxy
- [] sendText
- [] sendAnimation
- [] sendAudio
- [] sendDocument
- [] sendPhoto
- [] sendSticker
- [] sendVideo
- [] sendVideoNote
- [] sendVoice
- [] sendLocation
- [] sendVenue
- [] sendContact
- [] sendGame
- [] sendInvoice
- [] sendForwarded


License

The MIT License (MIT)

Copyright (c) 2013-2017 Petka Antonov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.