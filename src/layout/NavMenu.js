'use client'

import { useState } from 'react'

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState('OFFER')

  const menuItems = [
    'OFFER',
    'Sarisha Oil',
    'Ghee (ঘি)',
    'Dates (খেজুর)',
    'Honey',
    'Masala',
    'Organic Oil',
    'Nuts & Seeds',
    'Tea/Coffee',
    'Functional Food',
    'খেজুর গুড়'
  ]

  return (
    <nav className="navigation center">
      <ul className="navigation__list">
        {menuItems.map((item) => (
          <li 
            key={item} 
            className={`navigation__item ${activeItem === item ? 'navigation__item--active' : ''}`}
          >
            <button 
              onClick={() => setActiveItem(item)}
              className="navigation__button"
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

