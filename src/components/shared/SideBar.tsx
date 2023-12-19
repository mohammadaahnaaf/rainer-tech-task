import { items } from '@rainer/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDebounce } from '../hooks/useDebounce'

type Props = {}

export const SideBar = (props: Props) => {

    const [openMenu, setOpenMenu] = React.useState<boolean>(true)
    const dOpenMenu = useDebounce<boolean>(openMenu, { delay: openMenu ? 300 : 0 });

    function handleMenu() {
        setOpenMenu(!openMenu)
    }

    return (
        <div className={`absolute bg-[#FFF] dark:bg-[#2E1619] h-full transition-all duration-300 ${openMenu ? 'w-[264px]' : 'w-[96px]'
            }`}>
            <div className='h-full w-full p-[31px]'>
                <div className='flex flex-col items-start gap-16'>

                    {/* side-bar logo  */}
                    <button type='button' onClick={handleMenu} className='flex items-center w-full gap-[25px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <path d="M18.25 6C17.6533 6 17.081 6.23705 16.659 6.65901C16.2371 7.08097 16 7.65326 16 8.25C16 12.5302 12.5302 16 8.25 16C7.65326 16 7.08097 16.2371 6.65901 16.659C6.23705 17.081 6 17.6533 6 18.25V29.75C6 30.3467 6.23705 30.919 6.65901 31.341C7.08097 31.7629 7.65326 32 8.25 32C12.5302 32 16 35.4698 16 39.75C16 40.3467 16.2371 40.919 16.659 41.341C17.081 41.7629 17.6533 42 18.25 42H29.75C30.3467 42 30.919 41.7629 31.341 41.341C31.7629 40.919 32 40.3467 32 39.75C32 35.4698 35.4698 32 39.75 32C40.3467 32 40.919 31.7629 41.341 31.341C41.7629 30.919 42 30.3467 42 29.75V18.25C42 17.6533 41.7629 17.081 41.341 16.659C40.919 16.2371 40.3467 16 39.75 16C35.4698 16 32 12.5302 32 8.25C32 7.65326 31.7629 7.08097 31.341 6.65901C30.919 6.23705 30.3467 6 29.75 6H18.25Z" fill="url(#paint0_linear_1_1515)" />
                            <defs>
                                <linearGradient id="paint0_linear_1_1515" x1="13.0108" y1="18.1538" x2="57.3099" y2="19.3666" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#FF7594" />
                                    <stop offset="0.536458" stop-color="#FF797B" />
                                    <stop offset="1" stop-color="#FF7C65" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <h1 className={`flex items-center ${openMenu ? "block" : "hidden"}`}>
                            <span className='text-gray-700 dark:text-white font-poppins text-xl font-medium leading-7'>Medi</span>
                            <span className='text-pink-500 font-poppins text-2xl font-semibold leading-7'>Doc</span>
                        </h1>
                    </button>

                    {/* side-bar icons  */}
                    <div className={`flex flex-col items-start self-stretch ${openMenu ? "duration-300 gap-[20px]" : "duration-300 gap-[40px]"}`}>
                        {items.map((item: any, index: number) => (

                            <div key={index} className={`w-full ${openMenu ? "" : "p-0"}`}>
                                <div className='flex relative gap-8 justify-between items-center flex-1'>
                                    <item.icon className={`text-black dark:text-white  ${openMenu ? "w-[36px] h-[36px] duration-300" : "w-[32px] h-[32px] duration-300"}`} />
                                    <h2 className={`focus:text-pink-500 text-[#2E1619] dark:text-[#D1D5DB] w-full text-base transition-all font-medium ${!!dOpenMenu ? "duration-300 opacity-100" : "duration-300 hidden opacity-0"}`}>{item.title}</h2>
                                    <Link href={item.link} className='absolute text-end w-full h-full' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}