import React from 'react'

export default function Footer() {
  return (
    <footer className='w-full bg-dark h-16 flex justify-center items-center  fixed bottom-0  '>
         My dashboard &copy; {new Date().getFullYear()}
    </footer>
  )
}
