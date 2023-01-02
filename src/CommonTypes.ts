import * as PL from "panels-layout/src/PublicTypes"

export enum ContentType {
    ABOUT,
    VIEW_WITH_LOCAL_STATE,
    VIEW_WITH_GLOBAL_STATE,
    LONG_TEXT,
    TABS,
    SAVE_RESTORE
}

export class ContentSelector implements PL.ContentSelector {
    readonly type: ContentType

    constructor(type: ContentType) {
        this.type = type
    }
}
