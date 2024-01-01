import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { Pagination } from '@/Components/Pagination';
import { FileEdit, Folder, FolderTree, ListTodo, Trash2, X } from 'lucide-react';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import Select from 'react-select'

export default function Index(props) {
    // console.log('project props', JSON.stringify(props.projects.data[0]))
    console.log('project props', props)
    const { data, setData, errors, post } = useForm({
        title: "",
        status_id: "",
        priority_id: "",
    });

    const { delete: destroy } = useForm()
    const [showModal, setShowModal] = useState(false);

    function handleSubmit(e) {
        e.preventDefault()
        post(route("projects.store"), {
            onSuccess: () => closeModal(),
        })
    }

    const statusOptions =
        props.statuses.map(status => {
            status.value = status.id
            status.label = status.name
            return status;
        })

    const priorityOptions =
        props.priorities.map(priority => {
            priority.value = priority.id
            priority.label = priority.name
            return priority;
        })

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
        setData({
            title: "",
            status_id: "",
            priority_id: "",
        })
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-slate-800">Projects</h2>}
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {/* <Link href={route("projects.create")} type="button"
                        className="items-center inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-slate-800 border border-transparent rounded-md hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add Item</Link> */}
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={openModal}
                            type="button"
                            className="items-center inline-block px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-slate-800 border border-transparent rounded-md hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Add Item</button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {
                            props.projects ?
                                props.projects.data.map((item, key) => {
                                    const modulesCount = item.modules.length
                                    const tasksCount = item.tasks.length
                                    const taskCompleted = item.tasks.filter(task => task.status_id === 3 || task.status_id === 6).length
                                    const taskCompletedPercentage = Math.floor((item.tasks.filter(task => task.status_id === 3 || task.status_id === 6).length / item.tasks.length) * 100)
                                    return (
                                        <Link
                                            key={key}
                                            href={route("projects.show", item.slug)}
                                            className="p-4 bg-white border rounded-lg border-slate-200"
                                        >
                                            <div className="flex justify-between">
                                                <div className="flex items-center justify-center w-8 h-8 mb-4 text-indigo-500 bg-indigo-100 rounded">
                                                    <Folder className="w-4 h-4" />
                                                </div>
                                                {
                                                    item.status ?
                                                        <div>
                                                            <span className="px-2 py-1 ml-4 text-xs font-semibold text-indigo-500 bg-indigo-100 rounded">
                                                                {item.status.name}
                                                            </span>
                                                        </div> : ''
                                                }
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
                                                        {modulesCount}
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-center gap-2">
                                                    <ListTodo className="w-3 h-3 text-indigo-500" />
                                                    <p className="text-xs font-semibold text-slate-500">
                                                        {taskCompleted}/{tasksCount}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-full h-1 bg-indigo-100 rounded">
                                                    <div
                                                        className={`h-1 rounded bg-indigo-500`}
                                                        style={{ width: `${taskCompletedPercentage ? taskCompletedPercentage : 0}%` }}></div>
                                                    {/* <div className={`h-1 w-[42%] rounded bg-indigo-500`}></div> */}
                                                </div>
                                                <p className="text-xs font-semibold text-slate-500">{taskCompletedPercentage ? taskCompletedPercentage : 0}%</p>
                                            </div>
                                        </Link>
                                    )
                                }
                                )
                                :
                                <h1>No Data Available</h1>
                        }
                    </div>

                    <Pagination meta={props.projects.meta} />
                    <Modal show={showModal}>
                        <div className="">
                            <div className='flex justify-between p-4 border-b border-slate-200'>
                                <p className='font-semibold text-slate-800 uppercase'>Add Item</p>
                                <button onClick={closeModal}>
                                    <X />
                                </button>
                            </div>
                            <div className='p-4'>
                                <form onSubmit={handleSubmit} encType="multipart/form-data" className='space-y-6'>
                                    <div className="">
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-900">Title</label>
                                        <input type="text" id="title" name="title"
                                            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            onChange={(e) => setData("title", e.target.value)}
                                            required />
                                        {props.errors.title && <span className='text-sm text-red-700'>{props.errors.title}</span>}
                                    </div>
                                    <div className="mb-6">
                                        <div className="flex gap-4">
                                            <div className="w-1/2">
                                                <label htmlFor="status_id" className="block mb-2 text-sm font-medium text-slate-900">Status</label>
                                                <Select id="status_id"
                                                    classNames={{
                                                        input: () => 'outline-none',
                                                        control: () => "shadow-none outline-none bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full",
                                                        menu: () => "outline-none text-slate-900 text-sm",
                                                    }}
                                                    options={statusOptions}
                                                    onChange={(e) => setData("status_id", e.value)} />
                                                {props.errors.status_id && <span className='text-sm text-red-700'>{props.errors.status_id}</span>}
                                            </div>
                                            <div className="w-1/2">
                                                <label htmlFor="priority_id" className="block mb-2 text-sm font-medium text-slate-900">Priority</label>
                                                <Select id="priority_id"
                                                    classNames={{
                                                        input: () => 'outline-none',
                                                        control: () => "shadow-none outline-none bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full",
                                                        menu: () => "outline-none text-slate-900 text-sm",
                                                    }}
                                                    options={priorityOptions}
                                                    onChange={(e) => setData("priority_id", e.value)} />
                                                {props.errors.priority_id && <span className='text-sm text-red-700'>{props.errors.priority_id}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <button type="submit"
                                            className='items-center inline-block px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-slate-800 border border-transparent rounded-md hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                                            Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
