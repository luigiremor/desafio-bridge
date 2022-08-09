import React from 'react'

export default function Header() {
  return (
    <div className="h-16 bg-zinc-800 shadow-zinc-900 shadow-md top-0 fixed w-full">
      <nav className="flex justify-between items-center h-full mx-8">
        <img
          className="h-12"
          alt="logo"
          src="https://portal.bridge.ufsc.br/wp-content/uploads/2021/09/cropped-logo_bridge_branca.png"
        />

        <a
          className="hover:text-blue-500"
          href="https://github.com/luigiremor/desafio-bridge"
        >
          Github
        </a>
      </nav>
    </div>
  )
}
