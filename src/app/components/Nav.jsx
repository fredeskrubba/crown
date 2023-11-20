import React from 'react'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav>
        <article className='flex lg:hidden border-b-4 border-main-green px-10 py-4 justify-between'>
            <Image
                src="images/initial-profile-picture.svg"
                width={60}
                height={60}
                alt='no profile picture found'
                className='border-2 border-main-green rounded-full '
            />
            <Image
                src="images/crown-logo.svg"
                width={60}
                height={60}
                alt='crown logo'
            />
        </article>
        <article className='lg:hidden border-t-4 border-main-green'>

        </article>
    </nav>
  )
}

export default Nav