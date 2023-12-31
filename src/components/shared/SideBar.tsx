import { items } from '@rainer/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useDebounce } from '../hooks/useDebounce'

type Props = {
    openMenu: boolean
    setOpenMenu: any
    mobile: boolean
    setMobile: any
}

export const SideBar = (props: Props) => {

    const [view, setView] = React.useState<boolean>(false)
    const dOpenMenu = useDebounce<boolean>(props.openMenu, { delay: props.openMenu ? 300 : 0 });

    function handleMenu() {
        props.setOpenMenu(!props.openMenu)
    }

    function handleMobileClose() {
        props.setOpenMenu(false)
        props.setMobile(false)
    }

    React.useEffect(() => {
        setView(true)
    }, [])

    return view && (
        <div className={`absolute h-full !transition-all !duration-300 !ease-out ${props.mobile ? 'w-[264px]' : 'w-0 hidden md:block'}`}>
            <div className={` bg-[#FFF] dark:bg-[#2E1619] transition-all duration-300 h-full ${props.openMenu ? 'w-[264px]' : 'w-[96px]'
                }`}>
                <div className='h-full w-full p-[30px]'>
                    <div className='flex flex-col items-start gap-16'>

                        {/* side-bar logo  */}
                        <button type='button' onClick={handleMenu} className={`flex hover:scale-105 duration-300 items-center relative w-full ${props.openMenu ? "bg-transparent" : "bg-[#FF7594] p-1 rounded-md"} gap-[25px]`}>
                            {props.openMenu ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-[39px] w-[39px]' viewBox="0 0 48 48" fill="none">
                                    <path d="M18.25 6C17.6533 6 17.081 6.23705 16.659 6.65901C16.2371 7.08097 16 7.65326 16 8.25C16 12.5302 12.5302 16 8.25 16C7.65326 16 7.08097 16.2371 6.65901 16.659C6.23705 17.081 6 17.6533 6 18.25V29.75C6 30.3467 6.23705 30.919 6.65901 31.341C7.08097 31.7629 7.65326 32 8.25 32C12.5302 32 16 35.4698 16 39.75C16 40.3467 16.2371 40.919 16.659 41.341C17.081 41.7629 17.6533 42 18.25 42H29.75C30.3467 42 30.919 41.7629 31.341 41.341C31.7629 40.919 32 40.3467 32 39.75C32 35.4698 35.4698 32 39.75 32C40.3467 32 40.919 31.7629 41.341 31.341C41.7629 30.919 42 30.3467 42 29.75V18.25C42 17.6533 41.7629 17.081 41.341 16.659C40.919 16.2371 40.3467 16 39.75 16C35.4698 16 32 12.5302 32 8.25C32 7.65326 31.7629 7.08097 31.341 6.65901C30.919 6.23705 30.3467 6 29.75 6H18.25Z" fill="url(#paint0_linear_1_1515)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1_1515" x1="13.0108" y1="18.1538" x2="57.3099" y2="19.3666" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF7594" />
                                            <stop offset="0.536458" stop-color="#FF797B" />
                                            <stop offset="1" stop-color="#FF7C65" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className='' width="29" height="28" viewBox="0 0 29 28" fill="currentColor">
                                    <path d="M4 21H25" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4 14H25" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M4 7H25" stroke="#D1D5DB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            )}

                            <h1 className={`flex items-center ${!!dOpenMenu ? "duration-300 opacity-100" : "duration-300 hidden opacity-0"}`}>
                                <span className='text-gray-700 dark:text-white font-poppins text-xl font-medium leading-7'>Medi</span>
                                <span className='text-pink-500 font-poppins text-2xl font-semibold leading-7'>Doc</span>
                            </h1>

                            <button type='button' onClick={handleMobileClose} className='absolute -right-12 rounded-full p-2 bg-pink-500 md:hidden'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 8 14" fill="none">
                                    <path d="M7.69408 0.308162C7.88996 0.505537 8 0.773199 8 1.05229C8 1.33138 7.88996 1.59904 7.69408 1.79642L2.52206 7.00635L7.69408 12.2163C7.88441 12.4148 7.98973 12.6807 7.98734 12.9566C7.98496 13.2326 7.87508 13.4966 7.68135 13.6917C7.48763 13.8869 7.22557 13.9976 6.95161 14C6.67765 14.0024 6.41372 13.8963 6.21666 13.7045L0.305921 7.75048C0.110041 7.55311 1.99423e-06 7.28544 1.9909e-06 7.00635C1.98757e-06 6.72727 0.110041 6.4596 0.305921 6.26223L6.21666 0.308162C6.4126 0.110846 6.67831 1.5761e-08 6.95537 1.24571e-08C7.23243 9.15321e-09 7.49814 0.110846 7.69408 0.308162Z" fill="white" />
                                </svg>
                            </button>
                        </button>

                        {/* side-bar icons  */}
                        <div className={`flex flex-col items-start self-stretch ${props.openMenu ? "duration-300 gap-[20px]" : "duration-300 gap-[40px]"}`}>
                            {items.map((item: any, index: number) => (

                                <div key={index} className={`w-full hover:scale-95 duration-300 ${props.openMenu ? "" : "p-0"}`}>
                                    <div className='flex relative gap-8 justify-between items-center flex-1'>
                                        <item.icon className={`text-black dark:text-white  ${props.openMenu ? "w-[36px] h-[36px] duration-300" : "w-[32px] h-[32px] duration-300"}`} />
                                        <h2 className={`focus:text-pink-500 text-[#2E1619] dark:text-[#D1D5DB] w-full text-base transition-all font-medium ${!!dOpenMenu ? "duration-300 opacity-100" : "duration-300 hidden opacity-0"}`}>{item.title}</h2>
                                        <Link href={item.link} className='absolute text-end w-full h-full' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* bottom-plus-button  */}
                    {dOpenMenu === false ? (
                        <button className={`rounded-full relative hover:scale-95 duration-300 flex justify-center w-8 h-8 shadow-md mt-[207px]`}>
                            <span className='absolute bottom-0 right-0 items-center justify-center flex left-0 z-0 scale-150 w-full h-full rounded-full bg-gradient-to-l from-[#FF7C65] to-[#FF7590]'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 z-40 h-6 text-white text-opacity-50">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </button>
                    ) : (
                        <div className='w-full flex justify-center'>
                            <button className={`p-3 hover:scale-95 duration-300  text-md justify-self-center text-white flex shadow-md mt-[207px] bg-gradient-to-l from-[#FF7C65] to-[#FF7590] rounded-md`}>
                                New Appointment
                            </button>
                        </div>
                    )}
                </div>
            </div >
        </div>
    )
}