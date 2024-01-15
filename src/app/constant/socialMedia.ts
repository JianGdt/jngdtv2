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
        name: 'facebook',
        link: 'https://www.facebook.com/Gyaaannn',
        imageUrl: facebook,
    },
    {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/jn-gdt/',
        imageUrl: linkedin,
    },
    {
        name: 'github',
        link: 'https://github.com/secretx44',
        imageUrl: github,
    }
]