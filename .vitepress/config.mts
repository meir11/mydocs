import { defineConfig, createContentLoader } from 'vitepress'
// import { data as posts } from '../blog.data.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "מאיר לוי",
  description: "הבלוג של מאיר לוי",
  base: '/mydocs/',
  lang: 'he',
  dir: 'rtl',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'בית', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'כל הפוסטים',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ],
        // items: posts.map((post: any) => ({
        //   text: post.title,
        //   link: withBase(post.link)
        // }))
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/meir11/mydocs' }
    ],
  },
  async buildEnd(site) {
    console.log('buildEnd');

    //   const posts = await createContentLoader('blog/*.md').load()
    //   console.log(posts);
    //   site.site.themeConfig.sidebar[0].text = 'כל הפוסטים'
    //   site.site.themeConfig.sidebar[0].items = posts.map((post: any) => ({
    //     text: post.title,
    //     link: `${site.site.base}${post.link}`
    //   }))
  }
})
