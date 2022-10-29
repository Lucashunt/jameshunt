import Head from "next/head";
import Link from "next/link";


import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const Navbars = () => {
  return ( 
    <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
    <>
    <Head>
      <meta name="theme-color" content="#000000"></meta>
    </Head>

    
    <div className="bg-background sticky z-10 ">
      
    <div className="pt-6 text-4xl font-bold tracking-wide text-center text-default"><Link href="/"><a> James Hunt</a></Link></div>
    <div className="flex items-center justify-center py-4 text-sm font-light sm:text-base text">
      
        <ul className="flex">
        <Menu as="div" className="">
                  <div>
                    <Menu.Button className="">
          <li>
            <p className="transition duration-300 middle hover:text-gray-600">Jeg tilbyder</p>
          </li>
          </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/tilbyder/hold"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Mine hold
                          </a>
                        )}
                      </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/tilbyder/kraniosakral"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Kranio-Sakral Terapi
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/tilbyder/kropsterapi"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Kropsterapi
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/tilbyder/begivenheder"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Begivenheder
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/tilbyder/sleep"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Søvn
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/tilbyder/stressbehandling"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Stressbehandling
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
  
          <li>
            <Link href="/videoguides"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Videoguides</a></Link>
          </li>
          <li>
            <Link href="/firma"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Firma</a></Link>
          </li>
          <li>
            <Link href="/about"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Om mig</a></Link>
          </li>
          <li>
            <Link href="/kontakt"><a className="ml-3 transition duration-300 rotate-45 middle hover:text-gray-600">Kontakt</a></Link>
          </li>
          
        </ul>
    </div>
    </div>
   
    </>
          )}
          </Disclosure>
   );
}
 
export default Navbars;

