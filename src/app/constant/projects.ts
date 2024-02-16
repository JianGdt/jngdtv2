import movie from '@/app/assets/imovie.png'
import github from '@/app/assets/githubUsers.png'
import ecommerce from '@/app/assets/ecom.png'
import randomjks from '@/app/assets/rndmjokes.png'
import weatherApp from '@/app/assets/weatherApp.png'
import foodRecipes from '@/app/assets/foodRecipes.png'
import { StaticImageData } from 'next/image'


type project = {
    name: string,
    imageUrl: string | StaticImageData,
    link: string
}


export const projects: project[] = [
    {
        name: 'iMovie',
        imageUrl: movie,
        link: 'https://imovie-three.vercel.app/'
    },
    {
        name: 'Github Users',
        imageUrl: github,
        link: 'https://githubusers-mauve.vercel.app/'
    },
    {
        name: 'Shopiyey',
        imageUrl: ecommerce,
        link: 'https://shopiyey.vercel.app/'
    },
    {
        name: 'Random Jokes',
        imageUrl: randomjks,
        link: 'https://rndmjokes.vercel.app/'
    },
    {
        name: 'Weather App',
        imageUrl: weatherApp,
        link: 'https://weather-app-jngdt.vercel.app/'
    },
    {
        name: 'Food Recipes',
        imageUrl: foodRecipes,
        link: 'https://foodhuntt.netlify.app/'
    },
]