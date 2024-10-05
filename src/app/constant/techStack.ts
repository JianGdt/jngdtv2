import postman from '@/app/assets/postman.svg';
import react from '@/app/assets/reactjs.svg'
import next from '@/app/assets/nextjs.svg'
import redux from '@/app/assets/redux.svg'
import nodejs from '@/app/assets/nodejs.svg'
import materialui from '@/app/assets/materialui.svg'
import vue from '@/app/assets/vuejs.svg'
import bootstrap from '@/app/assets/bootstrap.svg'
import git from '@/app/assets/git.svg'
import typescript from '@/app/assets/typescript.svg'
import javascript from '@/app/assets/javascript.svg'
import tailwind from '@/app/assets/tailwind.svg'
import figma from '@/app/assets/figma.svg'
import sass from '@/app/assets/sass.svg'
import mongoDB from '@/app/assets/mngoDb.svg'
import jenkins from '@/app/assets/jenkins.svg'
import insomnia from '@/app/assets/Insomnia.svg'
import vscode from '@/app/assets/vscode.svg'
import gitlab from '@/app/assets/gitlab.svg'
import jira from '@/app/assets/jira.svg'
import { StaticImageData } from 'next/image'


declare type techStack = {
    imageUrl: string | StaticImageData
}

export const languages: techStack[] = [
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
        imageUrl: typescript,
    },
    {
        imageUrl: javascript,
    },
    {
        imageUrl: nodejs,
    },
    {
        imageUrl: redux,
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
        imageUrl: sass,
    },
    {
        imageUrl: mongoDB,
    },
]

export const tools: techStack[] = [
    {
        imageUrl: jenkins,
    },
    {
        imageUrl: git,
    },
    {
        imageUrl: postman,
    },
    {
        imageUrl: figma,
    },
    {
        imageUrl: insomnia,
    },
    {
        imageUrl: vscode,
    },
    {
        imageUrl: gitlab,
    },
    {
        imageUrl: jira,
    },
]