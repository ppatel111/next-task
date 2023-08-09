import { NextPage } from 'next'
import Image from 'next/image'

const Navbar: NextPage = () => {
  return (
    <div className='flex p-4 gap-2'> 
      <Image src='/static/images/brand-logo.svg' width={30} height={17} alt='brand logo' /> Lorem
    </div>
  )
}

export default Navbar