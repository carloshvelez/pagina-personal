import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/#hero'),      
    },
    {
      text: 'Proyectos',
      href: getPermalink('/#proyectos'),       
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),       
    },
    {
      text: 'Tecnologías',
      href: getPermalink('/#tecnologias'), 
    },
    
  ],
  actions: [{  }],
};

export const footerData = {
 
  socialLinks: [    
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/carlos-humberto-vélez-ocampo-9541617a' },    
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/carloshvelez' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
