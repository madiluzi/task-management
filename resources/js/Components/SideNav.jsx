import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';
import SideNavLink from './SideNavLink';
import { Component, Folder, Folders, LayoutDashboard, ListTodo, StickyNote } from 'lucide-react';

export default function SideNav({ projects }) {
    return (
        <div className='fixed h-screen pr-6 w-60'>
            <div className='px-5 pt-3 pb-4'>
                <Link href="/">
                    <ApplicationLogo className="block w-auto fill-current text-slate-800 h-9" />
                </Link>
            </div>
            <div className='border-b border-slate-300'>
                <ul className='py-3'>
                    <SideNavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <LayoutDashboard size={16} strokeWidth={1.5} className='mr-2' />
                        Dashboard
                    </SideNavLink>
                    <SideNavLink href={route('projects.index')} active={route().current('projects.index')}>
                        <Folders size={16} strokeWidth={1.5} className='mr-2' />
                        Projects
                    </SideNavLink>
                    <SideNavLink href={route('modules.index')} active={route().current('modules.index')}>
                        <Component size={16} strokeWidth={1.5} className='mr-2' />
                        Modules
                    </SideNavLink>
                    <SideNavLink href={route('tasks.index')} active={route().current('tasks.index')}>
                        <ListTodo size={16} strokeWidth={1.5} className='mr-2' />
                        Tasks
                    </SideNavLink>
                    <SideNavLink href={route('pages.index')} active={route().current('pages.index')}>
                        <StickyNote size={16} strokeWidth={1.5} className='mr-2' />
                        Pages
                    </SideNavLink>
                </ul>
            </div>
            <div className='py-2'>
                <div className='px-2 pt-2'>
                    <p className='text-xs font-semibold uppercase text-slate-800'>Projects</p>
                </div>
                <ul className='py-3'>
                    {projects.map((item, key) =>
                        <SideNavLink key={key} href={route(`projects.show`, item.slug)} active={route().current(`projects.show`, item.id)}>
                            <Folder size={16} strokeWidth={1.5} className='mr-2' />
                            {item.title}
                        </SideNavLink>
                    )}
                </ul>
            </div>
        </div >
    );
}
