'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"

export function FloatingDockDemo() {
    const contactlinks = [
        {
            title: "Linkedin",
            icon: (
                <LinkedInLogoIcon className="h-full w-full text-[#38BDF9] dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/roland-ibiwoye/",
        },
        {
            title: "Twitter",
            icon: (
                <TwitterLogoIcon className="h-full w-full text-neutral-800 dark:text-neutral-300" />
            ),
            href: "https://x.com/theayotomiwa",
        },
        {
            title: "GitHub",
            icon: (
                <GitHubLogoIcon className="h-full w-full text-purple-950 dark:text-neutral-300" />
            ),
            href: "https://github.com/rolandaayo",
        },

    ];


    return (
        <div id="projects" className="flex items-center justify-center mt-14 w-full">
            <FloatingDock
                items={contactlinks}
            />
        </div>
    );
}




