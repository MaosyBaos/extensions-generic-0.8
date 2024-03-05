import {
    ContentRating,
    BadgeColor,
    SourceInfo,
    SourceIntents
} from '@paperback/types'

import {
    getExportVersion,
    Madara
} from '../Madara'

const DOMAIN = 'https://sinensisscan.net'

export const SinensisInfo: SourceInfo = {
    version: getExportVersion('0.0.1'),
    name: 'Sinensis',
    description: `Extension that pulls manga from ${DOMAIN}`,
    author: 'Netsky',
    authorWebsite: 'http://github.com/TheNetsky',
    icon: 'icon.png',
    contentRating: ContentRating.MATURE,
    websiteBaseURL: DOMAIN,
    sourceTags: [
        {
            text: 'Portuguese',
            type: BadgeColor.GREY
        }
    ],
    intents: SourceIntents.MANGA_CHAPTERS | SourceIntents.HOMEPAGE_SECTIONS | SourceIntents.CLOUDFLARE_BYPASS_REQUIRED | SourceIntents.SETTINGS_UI
}

export class Sinensis extends Madara {

    baseUrl: string = DOMAIN

    override language = '🇵🇹'

    override chapterEndpoint = 1

    override hasProtectedChapters = true
}