import React, { Fragment, useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import Select from 'react-select'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Create(props) {
    console.log(props)
    const { data, setData, errors, post } = useForm({
        title: "",
        content: "",
        project_id: "",
    });

    const projectOptions =
        props.projects.map(project => {
            project.value = project.id
            project.label = project.title
            return project;
        })

    function handleSubmit(e) {
        e.preventDefault()
        post(route("pages.store"))
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-slate-800">Add Page</h2>}
        >
            <Head title="Add Page" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="mb-6">
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-900">Title</label>
                            <input type="text" id="title" name="title"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                onChange={(e) => setData("title", e.target.value)}
                                required />
                            {props.errors.title && <span className='text-sm text-red-700'>{props.errors.title}</span>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-slate-900">Content</label>
                            <CKEditor
                                editor={ClassicEditor}
                                data=""
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                    editor.editing.view.change((writer) => {
                                        writer.setStyle(
                                            "height",
                                            "200px",
                                            editor.editing.view.document.getRoot()
                                        );
                                    });
                                }}
                                onChange={(event, editor) => {
                                    // const data = editor.getData();
                                    setData("content", editor.getData())
                                }}
                            />
                            {props.errors.content && <span className='text-sm text-red-700'>{props.errors.content}</span>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="project_id" className="block mb-2 text-sm font-medium text-slate-900">Project</label>
                            <Select id="project_id"
                                classNames={{
                                    control: (state) =>
                                        state.isFocused ? 'border-red-600' : 'border-grey-300',
                                }}
                                options={projectOptions}
                                onChange={(e) => setData("project_id", e.value)} />
                            {props.errors.project_id && <span className='text-sm text-red-700'>{props.errors.project_id}</span>}
                        </div>
                        <button type="submit"
                            className='inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-slate-800 border border-transparent rounded-md hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                            Submit</button>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
