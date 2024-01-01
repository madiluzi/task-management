import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 text-dslate-900 focus:border-indigo-700 '
                    : 'border-transparent text-dslate-500 hover:text-dslate-700 hover:border-dslate-300 focus:text-dslate-700 focus:border-dslate-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
