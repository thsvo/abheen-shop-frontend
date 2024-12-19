'use client'

import { useState } from 'react'

export default function NavigationMenu() {
  const [activeItem, setActiveItem] = useState('OFFER')

  const menuItems = [
    'OFFER',
    'Organic Foods',
    'Spices/Masala',
    'Beauty Products',
    'Fashion',
    'Gadget -Device',
    'Electronics',
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

