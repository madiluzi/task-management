import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import SideNavLink from './SideNavLink';
import { Component, Folders, LayoutDashboard, ListTodo, StickyNote } from 'lucide-react';

export default function SideNav() {
    return (
        <div className='fixed h-screen bg-white w-60'>
            <div className='px-5 pt-3 pb-4 bg-gray-700 border-b border-gray-600'>
                <Link href="/">
                    <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
                </Link>
            </div>
            <div className=''>
                <ul className='p-3'>
                    <li className='mb-2'>
                        <SideNavLink href={route('dashboard')} active={route().current('dashboard')}>
                            <LayoutDashboard size={20} className='mr-2' />
                            Dashboard
                        </SideNavLink>
                        {/* <Link href={route('dashboard')} className={`block w-full px-4 py-3 text-sm font-medium rounded ${route().current('dashboard') ? 'text-gray-700 bg-gray-100' : 'text-white bg-gray-700'} hover:bg-gray-500 hover:text-gray-700 hover:transition-all`}>Dashboard</Link> */}
                    </li>
                    <li className='mb-2'>
                        <SideNavLink href={route('projects.index')} active={route().current('projects.index')}>
                            <Folders size={20} className='mr-2' />
                            Projects
                        </SideNavLink>
                        {/* <Link href={route('projects.index')} className={`block w-full px-4 py-3 text-sm font-medium rounded ${route().current('projects.index') ? 'text-gray-700 bg-gray-100' : 'text-white bg-gray-700'} hover:bg-gray-500 hover:text-gray-700 hover:transition-all`}>Projects</Link> */}
                    </li>
                    <li className='mb-2'>
                        <SideNavLink href={route('modules.index')} active={route().current('modules.index')}>
                            <Component size={20} className='mr-2' />
                            Modules
                        </SideNavLink>
                        {/* <Link href={route('modules.index')} className={`block w-full px-4 py-3 text-sm font-medium rounded ${route().current('modules.index') ? 'text-gray-700 bg-gray-100' : 'text-white bg-gray-700'} hover:bg-gray-500 hover:text-gray-700 hover:transition-all`}>Modules</Link> */}
                    </li>
                    <li className='mb-2'>
                        <SideNavLink href={route('tasks.index')} active={route().current('tasks.index')}>
                            <ListTodo size={20} className='mr-2' />
                            Tasks
                        </SideNavLink>
                        {/* <Link href={route('tasks.index')} className={`block w-full px-4 py-3 text-sm font-medium rounded ${route().current('tasks.index') ? 'text-gray-700 bg-gray-100' : 'text-white bg-gray-700'} hover:bg-gray-500 hover:text-gray-700 hover:transition-all`}>Tasks</Link> */}
                    </li>
                    <li className='mb-2'>
                        <SideNavLink href={route('pages.index')} active={route().current('pages.index')}>
                            <StickyNote size={20} className='mr-2' />
                            Pages
                        </SideNavLink>
                        {/* <Link href={route('pages.index')} className={`block w-full px-4 py-3 text-sm font-medium rounded ${route().current('pages.index') ? 'text-gray-700 bg-gray-100' : 'text-white bg-gray-700'} hover:bg-gray-500 hover:text-gray-700 hover:transition-all`}>Pages</Link> */}
                    </li>
                </ul>

            </div>
        </div>
    );
}
