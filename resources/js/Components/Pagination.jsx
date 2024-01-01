import { Link } from "@inertiajs/react"

export const Pagination = ({ meta }) => {
    const prevPage = meta.current_page > 1 ? meta.current_page - 1 : null
    const nextPage = meta.current_page < meta.last_page ? meta.current_page + 1 : null
    const prevLink = prevPage ? meta.links[0].url : null
    const nextLink = nextPage ? meta.links[meta.links.length - 1].url : null
    const firstLink = meta.links[1].url
    const lastLink = meta.links[meta.links.length - 2].url

    let pages = []
    for (let index = 0; index < meta.last_page; index++) {
        pages.push(
            <button type="button" key={index}
                className="px-4 py-2 text-sm font-medium bg-white border-t border-b text-slate-900 border-slate-200 hover:bg-slate-100 focus:z-10 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-blue-500 dark:focus:text-white"
                onClick={() => changePage(index + 1)}>
                {index + 1}
            </button>
        );
    }
    // return pages;
    return (
        <div className="inline-flex overflow-hidden rounded-md shadow-sm" role="group">
            {
                prevLink &&
                <>
                    <Link href={firstLink} className="flex items-center px-3 py-2 text-sm font-medium bg-white border rounded-l-lg text-slate-900 border-slate-200 hover:bg-slate-100 focus:z-10 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                    <Link href={prevLink} className="px-4 py-2 text-sm font-medium bg-white border text-slate-900 border-slate-200 hover:bg-slate-100 focus:z-10 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        {prevPage}
                    </Link>
                </>
            }
            <Link href={''} className="px-4 py-2 text-sm font-medium text-white border bg-slate-800 border-slate-200 focus:z-10 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-blue-500 dark:focus:text-white">
                {meta.current_page}
            </Link>
            {
                nextLink &&
                <>
                    <Link href={nextLink} className="px-4 py-2 text-sm font-medium bg-white border text-slate-900 border-slate-200 hover:bg-slate-100 focus:z-10 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        {nextPage}
                    </Link>
                    <Link href={lastLink} className="flex items-center px-3 py-2 text-sm font-medium bg-white border rounded-r-lg text-slate-900 border-slate-200 hover:bg-slate-100 focus:z-10 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:hover:text-white dark:hover:bg-slate-600 dark:focus:ring-blue-500 dark:focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </>
            }
            {/* {pages} */}
        </div>
    )
}
