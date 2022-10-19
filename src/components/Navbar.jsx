import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/Pupstagram.png'

const Navbar = ({breed, setBreed}) => {
console.log(breed)
const breeds =[
    {name: 'Hound'},
    {name: 'Labrador'},
    {name: 'Poodle'},
    {name: 'Pug'},
    {name: 'Retriever'},
    {name: 'Terrier'},
]

const activeBreedStyle = 'xl:border-2 hover:bg-primary xl:border-[#FF66C4] px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#4BA0A4]'
const breedStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black'
  return (
    <div className='w-full flex justify-between items-center border-b border-gray-200 py-4 px-4'>
        <Link href="/">
            <div className='w-[100px] md:w-[120px] md:h-[30px] h-[38px]'>
                <img src={Logo} alt={Logo} ></img>
            </div>
            </Link>
               <div >
                <div className="flex gap-3 flex-wrap">
                    {breeds?.map((item) => (
                        <button onClick={() => setBreed(item.name)} className={ breed === item.name ? activeBreedStyle : breedStyle}>
                        <span className='font-medium text-md hidden xl:block capitalize'>
                            {item.name}
                        </span>
                        </button>
                    ))}
                </div>
         </div>
    </div>
  )
}

export default Navbar