import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, j as Fragment, u as unescapeHTML, g as addAttribute } from '../astro_DBWtJ5Wz.mjs';
import 'kleur/colors';
import { a as $$WidgetWrapper, b as $$Headline, c as $$Button, d as $$Icon, e as $$Image, g as $$Hero, h as $$Content, $ as $$PageLayout } from './index_DlrjfBT9.mjs';
import { twMerge } from 'tailwind-merge';

const $$Astro$4 = createAstro("https://astrowind.vercel.app");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    actions = await Astro2.slots.render("actions"),
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "mb-0 md:mb-0",
    title: "text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading",
    subtitle: "text-xl text-muted dark:text-slate-400"
  } })} ${actions && renderTemplate`<div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 mt-6"> ${Array.isArray(actions) ? actions.map((action) => renderTemplate`<div class="flex w-full sm:w-auto"> ${renderComponent($$result2, "Button", $$Button, { ...action || {}, "class": "w-full sm:mb-0" })} </div>`) : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(actions)}` })}`} </div>`} </div> ` })}`;
}, "E:/astrowind/src/components/widgets/CallToAction.astro", void 0);

const $$Astro$3 = createAstro("https://astrowind.vercel.app");
const $$ItemGrid2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const {
    items = [],
    columns,
    defaultIcon = "",
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(
    ({
      title,
      description,
      icon,
      callToAction,
      classes: itemClasses = {}
    }) => renderTemplate`<div${addAttribute(twMerge(
      "relative flex flex-col",
      panelClass,
      itemClasses?.panel
    ), "class")}>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge(
      "mb-2 w-10 h-10",
      defaultIconClass,
      itemClasses?.icon
    ) })}`}<div${addAttribute(twMerge(
      "text-xl font-bold",
      titleClass,
      itemClasses?.title
    ), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge(
      "text-muted mt-2",
      descriptionClass,
      itemClasses?.description
    ), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`
  )}</div>`}`;
}, "E:/astrowind/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro$2 = createAstro("https://astrowind.vercel.app");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "E:/astrowind/src/components/widgets/Features2.astro", void 0);

const $$Astro$1 = createAstro("https://astrowind.vercel.app");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">" ${testimonial} "</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "E:/astrowind/src/components/widgets/Testimonials.astro", void 0);

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const metadata = {
    title: "Services"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Services", "title": "Elevate your projects with our stunning templates", "subtitle": "Explore our meticulously crafted templates tailored to various industries and purposes. From captivating presentations to functional website designs, we offer the tools you need to succeed.", "actions": [{ variant: "primary", target: "_blank", text: "Start exploring", href: "/" }], "image": {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    alt: "AstroWind Hero Image"
  } })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Explore our diverse templates", "subtitle": "Discover our selection below to streamline and elevate your projects.", "columns": 3, "items": [
    {
      title: "Educational",
      description: "By harmonizing instructional design and visual appeal, templates streamline content creation for varied materials, expediting development and cultivating engaging educational spaces.",
      icon: "tabler:school"
    },
    {
      title: "Interior Design",
      description: "Crafting functional, visually appealing spaces for residential and commercial use. Templates emphasize layout, colors, and furniture setups, offering a versatile toolkit for your design vision.",
      icon: "tabler:home-star"
    },
    {
      title: "Photography",
      description: `Empowering photographers, our templates facilitate captivating storytelling. With a keen focus on layout, galleries, and typography, they cater to both professionals and enthusiasts.`,
      icon: "tabler:photo"
    },
    {
      title: "E-commerce",
      description: "Developing engaging online stores, our E-commerce templates ensure a dynamic presence to effectively showcase products. Ideal for startups or revamps.",
      icon: "tabler:shopping-cart"
    },
    {
      title: "Blog",
      description: "With attention to typography, these templates empower effective content presentation for writers at any stage, ensuring visually engaging and user-friendly blogs.",
      icon: "tabler:article"
    },
    {
      title: "Business",
      description: "Providing polished options for effective visual communication, these templates empower both startups and established companies for a professional brand presence.",
      icon: "tabler:building-store"
    },
    {
      title: "Branding",
      description: "Offering pre-designed elements for a consistent brand identity, including logos and marketing materials. Ideal for new ventures or revamps.",
      icon: "tabler:arrow-big-up-lines"
    },
    {
      title: "Medical",
      description: `From presentations to patient forms, these tools enhance communication effectiveness for healthcare professionals. Ideal for medical practices and research pursuits.`,
      icon: "tabler:vaccine"
    },
    {
      title: "Fashion Design",
      description: "With attention to detail, customization, and contemporary design, they empower designers to showcase ideas cohesively. Ideal for all levels of designers.",
      icon: "tabler:tie"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "items": [
    {
      title: "High-Quality Designs",
      description: "Our templates feature top-tier designs that ensure a professional and polished appearance for your projects.",
      icon: "tabler:wand"
    },
    {
      title: "Customization Tools",
      description: "Tailor each template to your unique needs with user-friendly customization tools that let you personalize colors, fonts, and content.",
      icon: "tabler:settings"
    },
    {
      title: "Pre-Designed Elements",
      description: "Save time and effort with our ready-to-use elements, including graphics, icons, and layouts that enhance the visual appeal of your creations.",
      icon: "tabler:presentation"
    },
    {
      title: "Preview and Mockup Views",
      description: "Visualize the final outcome before making any changes using our preview and mockup views, ensuring your projects meet your expectations.",
      icon: "tabler:carousel-horizontal"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Features Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Main Features</h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Time Savings",
      description: "Streamline your workflow, enabling you to create stunning materials efficiently and allocate more time to your core tasks.",
      icon: "tabler:clock"
    },
    {
      title: "Professional Appearance",
      description: "Elevate your projects with the polished and sophisticated look that our templates provide, making a lasting impression on your audience.",
      icon: "tabler:school"
    },
    {
      title: "Cost-Efficiency",
      description: "Benefit from cost savings by avoiding the need for custom design work, as our templates offer professional-grade designs at a fraction of the cost.",
      icon: "tabler:coin"
    },
    {
      title: "Instant Download",
      description: "Enjoy immediate access to your chosen templates upon purchase, enabling you to begin working on your projects without delay.",
      icon: "tabler:file-download"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Benefits Image"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Benefits</h3> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Words from real customers", "testimonials": [
    {
      testimonial: `The designs are not only visually appealing but also highly professional. The templates have saved me a significant amount of time while helping me make a lasting impression on my clients.`,
      name: "Emily Kennedy",
      job: "Front-end developer",
      image: {
        src: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        alt: "Emily Kennedy Image"
      }
    },
    {
      testimonial: `It beautifully showcases my work, with its clean and elegant design that lets my photographs shine. Customization was a breeze, even for a non-tech person like me. The result is a professional and immersive portfolio that's garnered numerous compliments.`,
      name: "Sarah Hansen",
      job: "Photographer",
      image: {
        src: "https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Sarah Hansen Image"
      }
    },
    {
      testimonial: `I discovered these templates and I'm impressed by their variety and quality. They've helped me establish a consistent brand image across my marketing and social platforms, elevating my business's overall appearance.`,
      name: "Mark Wilkinson",
      job: "Small business owner",
      image: {
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80",
        alt: "Mark Wilkinson Image"
      }
    }
  ], "callToAction": {
    target: "_blank",
    text: "More testimonials...",
    href: "https://github.com/onwidget/astrowind",
    icon: "tabler:chevron-right"
  } })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "actions": [{
    variant: "primary",
    text: "Start exploring",
    href: "/"
  }], "title": "Dive into our template collection", "subtitle": "Whether you're in business, design, or education, our templates are here to elevate your projects." })} ` })}`;
}, "E:/astrowind/src/pages/services.astro", void 0);

const $$file = "E:/astrowind/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
