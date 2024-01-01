import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import OverviewTab from '@/Components/OverviewTab';
import ModulesTab from '@/Components/ModulesTab';
import TasksTab from '@/Components/TasksTab';

export default function Detail(props) {
    console.log(props)

    const [activeTab, setActiveTab] = useState(1);

    const handleTab = (id) => {
        setActiveTab(id);
    };

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-slate-800">{props.modules.title}</h2>}
        >
            <Head title={props.modules.title} />

            <div className="py-12">
                <div className="relative mb-6 overflow-x-auto">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {
                            props.modules ?
                                props.modules.map((item, key) =>
                                    <Link
                                        key={key}
                                        href={route("modules.show", item.id)}
                                        className="p-4 bg-white border rounded-lg border-slate-200"
                                    >
                                        <div className="flex justify-between">
                                            <div className="flex items-center justify-center w-8 h-8 mb-4 text-indigo-500 bg-indigo-100 rounded">
                                                <Folder className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="px-2 py-1 ml-4 text-xs font-semibold text-indigo-500 bg-indigo-100 rounded">
                                                    {item.status.name}
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
                                <h1>No Data Available</h1>
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
