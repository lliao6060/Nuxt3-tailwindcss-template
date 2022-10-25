import { mock } from 'remockjs'

export default {
  mockUserList: (locale: string) => {
    return mock({
      'list|10-15': [{
        'id|+1': 1,
        'name': `@name("${locale}")`,
        'profession': `@word("${locale}", 3, 5)`,
        'email': '@email("gmail.com", 8, 12)',
        'avatar': 'image("50x50", @color(), "#22222")',
      }],
    })
  },
}
