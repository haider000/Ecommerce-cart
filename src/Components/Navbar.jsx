import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Products', id: '/', current: true },
  { name: 'About us', id: '/About', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <>
      <div className="h-16 w-full"></div>
      <Disclosure as="nav" className="bg-gray-900 fixed w-full top-0 z-10">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-6">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <NavLink activeClassName="" exact={true} to="/">
                      <img
                        src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                        alt="logo"
                      />
                    </NavLink>
                  </div>
                  <div className="hidden lg:flex  sm:flex sm:ml-6">
                    <div className="flex space-x-4 items-center justify-center">
                      {navigation.map((item, idx) => (
                        <NavLink
                          activeClassName="bg-white text-gray-900 font-medium px-1.5 py-1 rounded-lg"
                          className="text-white font-medium"
                          exact={true}
                          to={`${item.id}`}
                          key={item.name + idx}
                        >
                          <span key={item.name}>{item.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-3">
                  <NavLink
                    activeClassName="flex gap-2 bg-white text-gray-900 font-medium rounded-full"
                    to="/Cart"
                    className="flex gap-2 p-1 rounded-full text-white font-medium"
                  >
                    {/* Cart Icon */}
                    <span>Cart</span>
                    <ShoppingCartIcon className="h-7 w-7" />
                  </NavLink>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-2 border-gray-900">
                {navigation.map((item, idx) => (
                  <NavLink
                    exact={true}
                    activeClassName="text-gray-900 bg-gray-900"
                    to={`${item.id}`}
                    key={idx}
                  >
                    <span
                      key={item.name}
                      className={classNames(
                        'text-gray-900 font-medium bg-white hover:bg-gray-900 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                    >
                      {item.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
