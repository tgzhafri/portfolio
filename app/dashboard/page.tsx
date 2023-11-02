"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const contents = [
    {
        href: '/',
        label: 'About Me',
        width: 'col-span-4',
    },
    {
        href: '/projects',
        label: 'Project',
        width: 'col-span-8',
    },
    {
        href: '/',
        label: 'Home',
        width: 'col-span-8',
    },
    {
        href: '/contact',
        label: 'Contact',
        width: 'col-span-4',
    },
];

export default function Dashboard() {
    const [hoveredLabel, setHoveredLabel] = useState('tgzhafri');
    const [isHovered, setHoveredStatus] = useState('');
    const [isMoving, setMovingStatus] = useState('');

    const handleLinkHover = (label: string) => {
        setHoveredLabel(label);
        label ? setHoveredStatus('bg-zinc-600/30 transition duration-1000 ease-in-out') : setHoveredStatus('');

        label ? setMovingStatus('group-hover:animate-fade-left') : setMovingStatus('');

        setTimeout(() => {
            setMovingStatus('animate-none');
        }, 1100);
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
                {/* The overlay with Hovered Tile */}
                <div className="fixed inset-0 flex items-center justify-center z-10 h-screen">
                    <h1 className="z-0 lg:text-[250px] sm:text-6xl md:text-9xl duration-750 cursor-default animate-title font-display text-white transition ease-in-out">
                        {hoveredLabel || ''}
                    </h1>
                </div>

                {/* The main content */}
                <div className="w-screen h-screen p-5 grid grid-cols-12 gap-5 relative z-10">
                    {contents.map((content) => (
                        <Link
                            key={content.label}
                            href={content.href}
                            onMouseEnter={() => handleLinkHover(content.label)}
                            onMouseLeave={() => handleLinkHover('')}
                            className={`col-span-12 rounded-xl bg-zinc-800 p-32 sm:${content.width} text-white backdrop-blur-md animate-fade-in ${isHovered}`}
                        >
                            <h1 className={`absolute bottom-0 left-0 p-7 text-lg ${isMoving}`}>
                                {content.label}
                            </h1>
                        </Link>
                    ))}
                </div>
            </div >
        </>
    );
}
