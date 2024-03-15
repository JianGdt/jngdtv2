import react from '@/app/assets/reactjs.svg'
import next from '@/app/assets/nextjs.svg'
import jquery from '@/app/assets/jquery.svg'
import redux from '@/app/assets/redux.svg'
import nodejs from '@/app/assets/nodejs.svg'
import materialui from '@/app/assets/materialui.svg'
import vue from '@/app/assets/vuejs.svg'
import bootstrap from '@/app/assets/bootstrap.svg'
import git from '@/app/assets/git.svg'
import typescript from '@/app/assets/typescript.svg'
import nodejs from '@/app/assets/nodejs.svg'
import tailwind from '@/app/assets/tailwind.svg'
import figma from '@/app/assets/figma.svg'
import sass from '@/app/assets/sass.svg'
import { StaticImageData } from 'next/image'


declare type techStack = {
    imageUrl: string | StaticImageData
}

export const techStack: techStack[] = [
    {
        imageUrl: react,
    },
    {
        imageUrl: next,
    },
    {
        imageUrl: vue,
    },
    {
        imageUrl: jquery,
    },
    {
        imageUrl: typescript,
    },
    {
        imageUrl: nodejs,
    },
    {
        imageUrl: redux,
    },
    {
        imageUrl: git,
    },
    {
        imageUrl: nodejs,
    },
    {
        imageUrl: bootstrap,
    },
    {
        imageUrl: materialui,
    },
    {
        imageUrl: tailwind,
    },
    {
        imageUrl: figma,
    },
    {
        imageUrl: sass,
    },
    
]