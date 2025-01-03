'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState('OFFER')

  const menuItems = [
    { label: 'OFFER', link: '/shop' },
    { label: 'Organic Foods', link: '/shop' },
    { label: 'খেজুর গুড়', link: '/shop?category=%E0%A6%96%E0%A7%87%E0%A6%9C%E0%A7%81%E0%A6%B0-%E0%A6%97%E0%A7%81%E0%A6%A1%E0%A6%BC' },
    { label: 'Mustard Oil (সরিষার তেল )', link: '/shop?category=sarisha-oil-(সরিষার-তেল)' },
    { label: 'Ghee (ঘি)', link: '/shop?category=ghee-(%E0%A6%98%E0%A6%BF)' },
    { label: 'Honey', link: '/shop?category=honey' },
    { label: 'কুমড়ো বড়ি', link: '/shop?category=%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%A1%E0%A6%BC%E0%A7%8B-%E0%A6%AC%E0%A6%A1%E0%A6%BC%E0%A6%BF' },
  ]

  return (
    <div>
      <nav className="navigation center">
      <ul className="navigation__list">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`navigation__item ${activeItem === item.label ? 'navigation__item--active' : ''}`}
          >
            <Link 
              href={item.link} 
              passHref
              className="navigation__button"
              onClick={() => setActiveItem(item.label)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}
