import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function SideNavLink({ active = false, className = '', children, ...props }) {
    return (
        <li className=''>
            <Link
                {...props}
                // href={route('dashboard')}
                className={`flex items-center w-full p-2 text-sm rounded hover:text-slate-800 hover:bg-slate-200 hover:transition-all
                    ${active
                        ? 'text-slate-900 font-semibold bg-slate-200'
                        : 'text-slate-600'}  ${className}
                `}
            >
                {children}
            </Link>
        </li >
    );
}
