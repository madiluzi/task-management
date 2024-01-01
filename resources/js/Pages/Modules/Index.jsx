import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Pagination } from '@/Components/Pagination';
import { Component, FileEdit, ListTodo, Trash2 } from 'lucide-react';

export default function Index(props) {
    console.log(props)
    const { delete: destroy } = useForm()

    function handleDelete(e) {
        e.preventDefault()
        destroy(route("modules.destroy", e.target.id));
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-slate-800">Modules</h2>}
        >
            <Head title="Modules" />
            <div className="py-12">
                <div className="sm:px-6 lg:px-8">
                    <Link href={route("modules.create")} type="button"
                        className="items-center inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-slate-800 border border-transparent rounded-md hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add Item</Link>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {
                            props.modules ?
                                props.modules.data.map((item, key) =>
                                    <Link
                                        key={key}
                                        href={route("modules.show", item.slug)}
                                        className="p-4 bg-white border rounded-lg border-slate-200"
                                    >
                                        <div className="flex justify-between">
                                            <div className="flex items-center justify-center w-8 h-8 mb-4 text-indigo-500 bg-indigo-100 rounded">
                                                <Component className="w-4 h-4" />
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
                                <h1>No Data Available</h1>
                        }
                    </div>
                    <Pagination meta={props.modules.meta} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
