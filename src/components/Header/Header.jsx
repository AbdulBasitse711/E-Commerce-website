/* eslint-disable no-unused-vars */
import React, { useState, useEffect, Children } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../navbar/Navbar'
import Announcement from './announcement-bar/Announcement'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const [isSticky, setIsSticky] = useState(false)
  const [headerColor, setHeaderColor] = useState('backdrop-blur-xl bg-emerald-400/15')


  let primaryColor = 'bg-emerald-400'

  const navItems = [
    {
      name: 'Fasion',
      slug: "/fasion",
      active: true,
      Children: [
        {
          name: 'Men',
          slug: "/fasion/men",
          active: true
        },
        {
          name: 'Women',
          slug: "/fasion/women",
          active: true
        },
        {
          name: 'Boys',
          slug: "/fasion/boy",
          active: true
        },
        {
          name: 'Girls',
          slug: "/fasion/girls",
          active: true
        }
      ]
    },
    {
      name: "Baby Products",
      slug: "/baby-products",
      active: true,
      Children: [
        {
          name: 'Changing & Bathing',
          slug: "/baby-products/changing-and-bathing",
          active: true
        },
        {
          name: 'Feeding Accessories',
          slug: "/baby-products/feeding-accessories",
          active: true
        }
      ]
    },
    {
      name: "Cleaning & Household",
      slug: "/cleaning-and-Household",
      active: true,
      Children: [
        {
          name: 'Cleaning Supplies',
          slug: "/cleaning-and-Household/cleaning-upplies",
          active: true
        },
        {
          name: 'Disposable Tableware',
          slug: "/cleaning-and-Household/disposable-tableware",
          active: true
        }
      ]
    },
    {
      name: "Phone & Accessories",
      slug: "/phone-and-accessories",
      active: true,
      Children:[
        {
          name: "Mobile Accessories",
          slug: "/phone-and-accessories/mobile-accessories",
          active: true
        },
        {
          name: "Smartphones & Wearables",
          slug: "/phone-and-ccessories/smartphones-and-wearables",
          active: true
        }
      ]
    },
    {
      name: "Sale",
      slug: "/sale",
      active: authStatus,
      Children:[
        //add sales
      ]
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 140)
      // setHeaderColor(window.scrollY > 140 && primaryColor)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      <Announcement />

      <header className={`header  shadow-lg  h-16 w-full transition-transform duration-300 ${isSticky ? ` fixed ${headerColor} -top-16 left-0 right-0 z-20 translate-y-full` : 'absolute  '}`}>
        <Container>
          <nav className='flex items-center pt-2'>
            <div className='mr-14'>
              <Link to='/'>
                <Logo />

              </Link>
            </div>
            <Navbar data={navItems}/>


            <div className='flex w-full justify-end items-center gap-5'>
              <div className=''>
                <img src="../../../src/assets/Flag_of_Pakistan.png" className='w-6 ' alt="" />
              </div>
              <button>
                <img src="../../../src/assets/search-interface-symbol.png" className='w-4 filter invert brightness-0' alt="" />
              </button>
              <button>
                <img src="../../../src/assets/trolley.png" className='w-6 filter invert brightness-0' alt="" />
              </button>
              <button onClick={() => navigate('/login')}>
                <img src={authStatus ? "../../../src/assets/user(2).png" : "../../../src/assets/user(1).png"} className='w-6 filter invert brightness-0' alt="" />
              </button>
              {authStatus && <button>
                <LogoutBtn />
              </button>}
            </div>
            {/* <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul> */}
          </nav>
        </Container>
      </header>
      {/* {isSticky && <div style={{ height: '4rem' }}></div>} */}
    </>
  )
}

export default Header