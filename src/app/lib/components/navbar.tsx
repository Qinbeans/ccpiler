'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { pages } from '../consts'
import type { PageInfo } from '../types'

export default function Navbar() {
    
    // get the current page
    const [currentPage, setCurrentPage] = useState(pages.find(page => page.url === usePathname())?.name || 'home')

    const changePage = (page:PageInfo) => {
        if (currentPage === page.name) return
        setCurrentPage(page.name)
        // redirect to the new page
        window.location.href = page.url
    }

    return (
        <header>
            <nav className='grid grid-cols-3'>
                <section></section>
                <section>
                    <ul className='flex justify-center gap-3'>
                        {pages.map(({name, url}) => (
                            <li
                                key={name}
                                className={currentPage === name ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500 cursor-pointer transition duration-300 ease-in-out'}
                                onClick={() => changePage({name, url})}
                            >
                                {name.toUpperCase()}
                            </li>
                        ))}
                    </ul>
                </section>
                <section></section>
            </nav>
        </header>
    )
}