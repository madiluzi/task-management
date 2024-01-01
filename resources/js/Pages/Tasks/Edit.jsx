import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import Select from 'react-select'

export default function Edit(props) {
    console.log(props)
    const { data, setData, put, errors } = useForm({
        id: props.task.id,
        title: props.task.title || "",
        project_id: props.task.project_id || "",
    });
    console.log(data)


    const projectOptions =
        props.projects.map(project => {
            project.value = project.id
            project.label = project.title
            return project;
        })

    function handleSubmit(e) {
        e.preventDefault()
        put(route("tasks.update", props.task.id));
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-slate-800">Edit Task</h2>}
        >
            <Head title="Edit Task" />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="mb-6">
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-900">Title</label>
                                <input type="text" id="title" name="title"
                                    className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    onChange={(e) => setData("title", e.target.value)}
                                    value={data.title}
                                    required />
                                {props.errors.title && <span className='text-sm text-red-700'>{props.errors.title}</span>}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="project_id" className="block mb-2 text-sm font-medium text-slate-900">Project</label>
                                <Select id="project_id"
                                    classNames={{
                                        control: (state) =>
                                            state.isFocused ? 'border-red-600' : 'border-grey-300',
                                    }}
                                    options={projectOptions}
                                    defaultValue={projectOptions.find(project => project.value === data.project_id)}
                                    onChange={(e) => setData("project_id", e.value)} />
                                {props.errors.project_id && <span className='text-sm text-red-700'>{props.errors.project_id}</span>}
                            </div>
                            <input type='hidden' value={data.id} />
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
