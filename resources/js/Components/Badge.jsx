export default function Badge({ status = 'primary', className = '', disabled, children, ...props }) {
    if (status === 'success') {
        className += ' bg-emerald-100 text-emerald-800';
    } else if (status === 'danger') {
        className += ' bg-rose-100 text-rose-800';
    } else if (status === 'warning') {
        className += ' bg-amber-100 text-amber-800';
    }

    return (
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold text-indigo-500 bg-indigo-100 rounded ${className}`}>{children}</span>
    );
}
