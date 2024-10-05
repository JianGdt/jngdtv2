import facebook from '@/app/assets/facebook.svg'
import linkedin from '@/app/assets/linkedin.svg'
import github from '@/app/assets/github.svg'
import { StaticImageData } from 'next/image'


declare type socialMedia = {
    name: string,
    link: string
    imageUrl: string | StaticImageData
}

export const socialMedia: socialMedia[] = [
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/Gyaaannn',
        imageUrl: facebook,
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/jn-gdt/',
        imageUrl: linkedin,
    },
    {
        name: 'Github',
        link: 'https://github.com/JianGdt',
        imageUrl: github,
    }
]