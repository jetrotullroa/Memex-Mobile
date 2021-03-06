import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native'

export type NativeTouchEventHandler = (
    ev: NativeSyntheticEvent<NativeTouchEvent>,
) => void
export type ResultType = 'pages' | 'notes'

export interface UICollection {
    id: number
    name: string
}

export interface UIResult {
    url: string
    date: string
    isStarred?: boolean
}

export interface UIPage extends UIResult {
    pageUrl: string
    favIcon?: string
    titleText: string
}

export interface UIPageWithNotes extends UIPage {
    notes: UINote[]
}

export interface UINote extends UIResult {
    noteText?: string
    commentText?: string
}

export interface Page {
    url: string
    text: string
    lang?: string
    domain: string
    fullUrl: string
    hostname: string
    fullTitle: string
    screenshot?: string
    description?: string
    canonicalUrl?: string
    isStarred?: boolean
}

export interface Visit {
    url: string
    time: number
    duration?: number
    scrollMaxPerc?: number
    scrollMaxPx?: number
    scrollPerc?: number
    scrollPx?: number
}

export interface Bookmark {
    url: string
    time: number
}
