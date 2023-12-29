import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Pagination } from '@/Components/Pagination';
import { FileEdit, Folder, FolderTree, ListTodo, Trash2 } from 'lucide-react';

export default function Index(props) {
    const { delete: destroy } = useForm()

    function handleDelete(e) {
        e.preventDefault()
        destroy(route("projects.destroy", e.target.id));
    }
    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Projects</h2>}
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <Link href={route("projects.create")} type="button"
                        className="items-center inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add Item</Link>
                    <div className="relative mb-6 overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Priority
                                    </th>
                                    <th scope="col" className="px-6 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.projects ?
                                        props.projects.data.map((item, key) =>
                                            <tr key={key} className="bg-white border-b">
                                                <td className="px-6 py-4">{key + 1}</td>
                                                <td className="px-6 py-4">{item.title}</td>
                                                {/* <td className="px-6 py-4"><Badge status={item.status} /></td> */}
                                                <td className="px-6 py-4"></td>
                                                <td className="px-6 py-4"></td>
                                                <td className="px-6 py-4">
                                                    <div className='flex items-center justify-end h-full gap-2'>
                                                        <Link href={route(`projects.edit`, item.id)}
                                                            className="inline-block px-2 py-2 text-yellow-500 transition duration-150 ease-in-out bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:text-white focus:text-white active:text-white focus:ring-offset-2">
                                                            <FileEdit className='w-4 h-4' />
                                                        </Link>
                                                        <button onClick={handleDelete}
                                                            id={item.id}
                                                            className="inline-block px-2 py-2 text-red-500 transition duration-150 ease-in-out bg-red-100 border border-transparent rounded-md hover:bg-red-500 focus:bg-red-500 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 hover:text-white focus:text-white active:text-white focus:ring-offset-2">
                                                            <Trash2 className='w-4 h-4' />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ) :
                                        <tr><td>No Data Available</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    <Pagination meta={props.projects.meta} />
                    <div className="grid grid-cols-3 gap-4">
                        {
                            props.projects ?
                                props.projects.data.map((item, key) =>
                                    <Link
                                        key={key}
                                        href={route("projects.show", item.id)}
                                        className="p-4 bg-white border rounded-lg border-slate-200"
                                    >
                                        <div className="flex justify-between">
                                            <div className="flex items-center justify-center w-8 h-8 mb-4 text-indigo-500 bg-indigo-100 rounded">
                                                <Folder className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="px-2 py-1 ml-4 text-xs font-semibold text-indigo-500 bg-indigo-100 rounded">
                                                    {/* {item.status.title} */}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <p className="text-sm font-semibold text-slate-700">
                                                {item.title}
                                            </p>
                                            <p className="text-sm font-medium text-slate-400">
                                                {/* {item.type.title} */}
                                            </p>
                                        </div>
                                        <div className="flex justify-between mb-2">
                                            <div className="flex items-center justify-center gap-2">
                                                <FolderTree className="w-3 h-3 text-indigo-500" />
                                                <p className="text-xs font-semibold text-slate-500">
                                                    {Math.floor(Math.random() * 20) + 1}/30
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-center gap-2">
                                                <ListTodo className="w-3 h-3 text-indigo-500" />
                                                <p className="text-xs font-semibold text-slate-500">
                                                    {Math.floor(Math.random() * 5) + 1}/10
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-full h-1 bg-indigo-100 rounded">
                                                <div className="h-1 w-[50%] rounded bg-indigo-500"></div>
                                            </div>
                                            <p className="text-xs font-semibold text-slate-500">50%</p>
                                        </div>
                                    </Link>
                                )
                                :
                                <h1>no data</h1>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
