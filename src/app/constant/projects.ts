import github from '@/app/assets/githubUsers.png'
import ecommerce from '@/app/assets/ecom.png'
import randomjks from '@/app/assets/rndmjokes.png'
import foodRecipes from '@/app/assets/foodRecipes.png'
import capstone from '@/app/assets/capstoneTitle.png'
import productShop from '@/app/assets/MERN-CRUD.png'
import { StaticImageData } from 'next/image'


type project = {
    name: string,
    imageUrl: string | StaticImageData,
    link: string,
    description: string,
    stack: string,
}


export const projects: project[] = [
    {
        name: 'Shopi',
        imageUrl: ecommerce,
        link: 'https://shopiyey.vercel.app/',
        description: 'Sample ecommerce Search filter, category filter and add to cart functionality',
        stack: "ReactJS, Redux"
    },
    {
        name: 'Product Shop',
        imageUrl: productShop,
        link: 'https://mernshopp.onrender.com/',
        description: 'Sample MERN stack CRUD app',
        stack: "MongoDB, ExpressJS, NodeJS, ReactJS, Tailwind, Shadcn ui, Zustand"
    },
    {
        name: 'Food Recipes',
        imageUrl: foodRecipes,
        link: 'https://foodhuntt.netlify.app/',
        description: 'Food Recipes that you can search for different recipes and also by their countries',
        stack: "VueJS, Sass, Typescript"
    },
    {
        name: 'Capstone Title Generator',
        imageUrl: capstone,
        link: 'https://capstonetitles.vercel.app/',
        description: 'Generate random title for capstone',
        stack: "NextJS, Material UI, Typescript"
    },
    {
        name: 'Random Jokes',
        imageUrl: randomjks,
        link: 'https://rndmjokes.vercel.app/',
        description: 'Generate Jokes',
        stack: "ReactJS"
    },
    // {
    //     name: 'Weather App',
    //     imageUrl: weatherApp,
    //     link: 'https://weather-app-jngdt.vercel.app/',
    //     description: 'Sample MERN stack CRUD app',
    //     stack: "ReactJS"
    // },
    // {
    //     name: 'iMovie',
    //     imageUrl: movie,
    //     link: 'https://imovie-three.vercel.app/',
    //     description: 'Sample MERN stack CRUD app',
    //     stack: "ReactJS"
    // },
    {
        name: 'Github Users',
        imageUrl: github,
        link: 'https://githubusers-mauve.vercel.app/',
        description: 'Search for github users using github api',
        stack: "HTML, CSS, JavaScript"
    },
]