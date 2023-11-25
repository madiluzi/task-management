import { Link } from '@inertiajs/react';
import ApplicationLogo from './ApplicationLogo';

export default function SideNavLink({ active = false, className = '', children, ...props }) {
    return (
        <li className='mb-2'>
            <Link
                {...props}
                // href={route('dashboard')}
                className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded hover:text-slate-800 hover:bg-slate-300 hover:transition-all
                    ${active
                        ? 'bg-slate-600 text-white'
                        : 'text-slate-400'}  ${className}
                `}
            >
                {children}
            </Link>
        </li >
    );
}
