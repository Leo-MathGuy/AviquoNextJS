import React, {useState, useEffect} from 'react'
import styles from './DashNavbar.module.css'

import Link from 'next/link'
import SearchBar from './SearchBar'
import Icon from './Icon'
import Modal from './Modal'
import Sidebar from './Sidebar'

import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {getPath} from '../lib/utilities'
import {username} from '../lib/userData'

import ecItems from '../lib/ecItems.json'

export default function DashNavbar() {
    const [navbarIcons, setNavbarIcons] = useState(true)

    //Modify navbar view for smaller screens
    useEffect(() => {
        const handleSmallScreenShowNavbar = () => {
          if(window.innerWidth <= 960) {
            setNavbarIcons(false);
          } else {
            setNavbarIcons(true);
          }
        }
    
        //handleSmallScreenShowSidebar([])
        window.addEventListener('resize', handleSmallScreenShowNavbar);
        
      }, []);


      // Handle mobile sidebar clicking states
      const [mobileSidebarClick, setMobileSidebarClick] = useState(false)

      const handleMobileSidebarClick = () => {
            setMobileSidebarClick(!mobileSidebarClick)
      }

       // Changing sidebar width in root variable upon sidebar being clicked
       
       useEffect(() => {
        const cssRootSidebarMobileScreenWidth = '--w-sidebar';
        const root = document.documentElement;
    
        // Updates the CSS variable based on the state of the sidebar
        root.style.setProperty(cssRootSidebarMobileScreenWidth, mobileSidebarClick ? '0px' : '0px');
      }, [!mobileSidebarClick]);




      //Functionality for searching
      const [searchText, setSearchText] = useState('');
      const searchDataFiltered = [];
      for (let i = 0; i < ecItems.length; i++) {
          if (ecItems[i].name.toLowerCase().includes(searchText.toLowerCase())) {
            searchDataFiltered.push(ecItems[i]);
          }
      }
    const modalSearchContent = searchDataFiltered.slice(0, 6);

  return (
    <nav className='px-1/6 md:px-[5vw] lg:px-[5vw] py-[1vh] flex flex-row gap-4 items-center'>
        <ul className='flex flex-row w-full px-[60px] gap-4 items-center'>
            <li>
                <div onClick={handleMobileSidebarClick} className={`${styles['mobile__sidebar__icon']}`}>
                    <Icon icon='sidebar' fillColor='black'/>
                </div>
            </li>
            <li>
                <SearchBar placeholder="Search" searchFunction={setSearchText}/>
            </li>
            <Modal showModal={searchText != ''}>

              {modalSearchContent.map((item,index)=>(
                <span key={index} className='flex flex-row items-center gap-4 hover:bg-[var(--clr-grey-200)]'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4'/>
                  <Link href={`/ecs${getPath(item.name)}`} className='text-base font-medium'>{item.name}</Link>

                </span>
              ))}
              
            </Modal>
            <li>
                <Icon icon='notification-bell' fillColor='black'/>
            </li>
            <li>
                <img className='w-1/3 rounded-full' src='https://lh3.googleusercontent.com/a-/AOh14GgeD4LTuYuvwpMah5byGlk8eREsrmb9xO691yO3VQ=s96-c'/>
            </li>
        </ul>
        


        


        <div className={`${styles['sidebar--mobile']} border-2 border-[var(--clr-grey-300)] w-[50px] h-full p-2 bg-[#fff] fixed top-0 ${mobileSidebarClick ? 'left-[0px]' : 'left-[-200px]'} `}>
            <ul className={`flex flex-col items-center gap-10`}>
                <li>
                    <Link href='/dashboard'>
                        <Icon icon="sidebar" fillColor="black"/>
                    </Link>   
                </li>
                <li>
                    <Link href='/forum'>
                        <Icon icon="notifications" fillColor="black"/>
                    </Link>
                </li>
                <li>
                    <Link href='/marketplace'>
                        <Icon icon="house" fillColor="black"/>
                    </Link>
                </li>
                <li>
                    <Link href='/discover'>
                        <Icon icon="search" fillColor="black"/>
                    </Link>
                    
                </li>
                <li>
                    <Link href={`/${username}`}>
                        <Icon icon="user" fillColor="black"/> 
                    </Link>
                </li>
                <li>
                    <Link href='/settings'>
                        <Icon icon="cog" fillColor="black"/>
                    </Link>
                </li>
            </ul>
        </div>
    
    </nav>
  )
}
