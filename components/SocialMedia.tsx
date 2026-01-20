import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Github",
        href: "https://github.com/naiconmartins",
        icon: <Github className="w-5 h-5" />
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/naiconmartins/",
        icon: <Linkedin className="w-5 h-5" />
    },
    {
        title: "Instagram",
        href: "https://www.instagram.com/naiconmartins",
        icon: <Instagram className="w-5 h-5" />
    }

]

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-3.5", className)}>
                {socialLink.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger asChild>
                            <Link
                                key={item.title}
                                href={item.href}
                                rel="noopener noreferrer"
                                className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}
                            >
                                {item.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>
                            {item.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    )
}

export default SocialMedia
