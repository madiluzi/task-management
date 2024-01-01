import SideNav from '@/Components/SideNav';
import Header from '@/Components/Header';
import { usePage } from '@inertiajs/react';
import SubSideNav from '@/Components/SubSideNav';

export default function Authenticated({ user, header, children }) {
    const { allProjects } = usePage().props

    return (
        <div className="min-h-screen p-5 bg-slate-100">
            <div className="flex mx-auto max-w-7xl">
                <SideNav projects={allProjects} />
                <div className='w-full h-full overflow-hidden shadow-xl rounded-xl ml-60'>
                    <Header user={user} header={header} />
                    <main className='w-full'>{children}</main>
                </div>
            </div>
        </div>
    );
}
