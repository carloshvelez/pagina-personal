import { getRssString } from '@astrojs/rss';
import { S as SITE, M as METADATA, b as getPermalink } from './404_CWz3tLlB.mjs';
import { f as fetchPosts } from './index_DlrjfBT9.mjs';

const GET = async () => {
  const posts = await fetchPosts();
  const rss = await getRssString({
    title: `${SITE.name}’s Blog`,
    description: METADATA?.description ,
    site: "https://astrowind.vercel.app",
    items: posts.map((post) => ({
      link: getPermalink(post.permalink, "post"),
      title: post.title,
      description: post.excerpt,
      pubDate: post.publishDate
    })),
    trailingSlash: SITE.trailingSlash
  });
  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};

export { GET };
