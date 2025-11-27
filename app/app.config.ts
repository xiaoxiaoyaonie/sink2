export default defineAppConfig({
  title: '短链接测试',
  email: '',
  github: 'https://github.com/xiaoxiaoyaonie/sink2',
  twitter: '',
  telegram: '',
  mastodon: '',
  blog: '',
  description: '',
  image: '',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    '登录',
  ],
})
