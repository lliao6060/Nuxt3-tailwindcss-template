export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en-US',
    flag: 'openmoji:flag-us-outlying-islands',
  },
  tw: {
    name: '中文',
    iso: 'zh-TW',
    flag: 'emojione-v1:flag-for-taiwan',
  },
}
