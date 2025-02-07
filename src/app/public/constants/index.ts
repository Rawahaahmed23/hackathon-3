import { title } from "process";
import sofa from '../assets/contents/white-sofa-1.png'
import granite1 from '../assets/contents/Granite dining table with dining chair 1.png'
import outdoortable from '../assets/contents/Outdoor bar table and stool 1.png'
import plainConsole from '../assets/contents/Plain console with teak mirror 1.png'
import grainTable from  '../assets/contents/Grain coffee table 1.png'
import kentTabel from '../assets/contents/Kent coffee table 1.png'
import roundCoffTable from '../assets/contents/Round coffee table_color 2 1.png'
import reclaimedTeak from '../assets/contents/Reclaimed teak coffee table 1.png'
import plainCOlsole1 from '../assets/contents/Plain console_ 1.png'
import mainlaptop from "@/app/public/assets/contents/Rectangle 70.png"
import blogbook from "@/app/public/assets/contents/Rectangle 68.png"
import blog from "@/app/public/assets/contents/Rectangle 68.png"
import { StaticImageData } from "next/image";



export const navLinks = [
      {
        id: "home",
        title: "Home",
        link: "homepage"
      },
      {
        id: "shop",
        title: "Shop",
        link: "shop"
      },
      {
        id: "about",
        title: "About",
        link: "about"
      },
      {
        id: "contact",
        title: "Contact",
        link: "contact"
      },
];

export const shopLinks = [
  {
    id: 'product1',
    title:  'Trenton modular sofa_3',
    price:  'RS. 25,000',
    imgUrl: sofa
  },
  {
    id: 'product2',
    title:  'Granite dining table with dining chair',
    price:  'RS. 25,000',
    imgUrl: granite1
  },
  {
    id: 'product3',
    title:  'Outdoor bar table and stool',
    price:  'RS. 25,000',
    imgUrl: outdoortable
  },
  {
    id: 'product4',
    title:  'Plain console with teak mirror',
    price:  'RS. 25,000',
    imgUrl: plainConsole
  },
  {
    id: 'product5',
    title:  'Grain coffee table',
    price:  'RS. 25,000',
    imgUrl: grainTable
  },
  {
    id: 'product6',
    title:  'Kent coffee table',
    price:  'RS. 25,000',
    imgUrl: kentTabel
  },
  {
    id: 'product7',
    title:  'Round coffee table',
    price:  'RS. 25,000',
    imgUrl: roundCoffTable
  },
  {
    id: 'product8',
    title:  'Reclaimed teak coffee table',
    price:  'RS. 25,000',
    imgUrl: reclaimedTeak
  },
  {
    id: 'product9',
    title:  'Plain console',
    price:  'RS. 25,000',
    imgUrl: plainCOlsole1
  }
]



interface BlogPost {
  title: string
  date: string
  excerpt: string
  image: string | StaticImageData
  author: string
  category: string
  slug: string
}

export const recentPosts: BlogPost[] = [
  {
    title: "Going all-in with millennial design",
    date: "03 Aug 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: mainlaptop,
    author: "Admin",
    category: "Design",
    slug: "millennial-design"
  },
  {
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: blogbook,
    author: "Admin",
    category: "Interior",
    slug: "exploring-decorating"
  },
  {
    title: "Handmade pieces that took time to make",
    date: "03 Aug 2022",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.",
    image: blog,
    author: "Admin",
    category: "Handmade",
    slug: "handmade-pieces"
  }
]

export const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 6 }
]
