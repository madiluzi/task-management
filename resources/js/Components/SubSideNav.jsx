import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import SideNavLink from './SideNavLink';
import { Component, Folder, Folders, LayoutDashboard, ListTodo, StickyNote } from 'lucide-react';

export default function SubSideNav({ projects }) {
    return (
        <div className='fixed h-screen w-30'>
            <div className='px-5 pt-3 pb-4'>
                <Link href="/">
                    <ApplicationLogo className="block w-auto text-slate-800 fill-current h-9" />
                </Link>
            </div>
            <div className='border-b border-slate-300'>
                <ul className='py-3'>
                    <SideNavLink href={route(`projects.show`, 1)} active={route().current(`projects.show`, 1)}>
                        <Folder size={16} strokeWidth={1.5} className='mr-2' />
                        asdsd
                    </SideNavLink>
                    <SideNavLink href={route(`projects.show`, 1)} active={route().current(`projects.show`, 1)}>
                        <Folder size={16} strokeWidth={1.5} className='mr-2' />
                        asdsd
                    </SideNavLink>
                </ul>
            </div>
            <div className='py-2'>
                <div className='px-2 pt-2'>
                    <p className='text-xs font-semibold text-slate-800 uppercase'>Projects</p>
                </div>
                <ul className='py-3'>
                    <SideNavLink href={route(`projects.show`, 1)} active={route().current(`projects.show`, 1)}>
                        <Folder size={16} strokeWidth={1.5} className='mr-2' />
                        asdsd
                    </SideNavLink>
                    <SideNavLink href={route(`projects.show`, 1)} active={route().current(`projects.show`, 1)}>
                        <Folder size={16} strokeWidth={1.5} className='mr-2' />
                        asdsd
                    </SideNavLink>
                </ul>
            </div>
        </div >
    );
}
