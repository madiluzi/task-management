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

    const tabItems = [
        {
            id: 1,
            title: "Overview",
            // component: <OverviewTab data={projectDetail} kanbanItems={kanbanItems} />,
            component: <OverviewTab data={props.project} />,
        },
        {
            id: 2,
            title: "Modules",
            component: <ModulesTab data={props.modules} />,
        },
        {
            id: 3,
            title: "Tasks",
            component: <TasksTab data={props.tasks} status={props.status} tasksPerStatus={props.tasksPerStatus} />,
        },
        // {
        //     id: 4,
        //     title: "Issues",
        //     component: <IssuesTab taskItems={tasks} statuses={statuses} />,
        // },
        // {
        //     id: 5,
        //     title: "Calendar",
        //     component: <CalendarTab taskItems={taskItems} />,
        // },
    ];

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="text-xl font-semibold leading-tight text-slate-800">{props.project.title}</h2>}
        >
            <Head title={props.project.title} />

            <div className="py-12">
                <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                    <ul className="flex gap-4 mb-4">
                        {tabItems.map((tab, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => handleTab(tab.id)}
                                    className={`inline-block rounded px-4 py-2.5 text-sm hover:bg-indigo-500 hover:text-white ${activeTab === tab.id
                                        ? "bg-indigo-100 font-semibold text-indigo-600"
                                        : "bg-transparent font-medium text-slate-500"
                                        }`}
                                >
                                    {tab.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {
                        tabItems.map(
                            (tab) =>
                                activeTab === tab.id && <div key={tab.id}>{tab.component}</div>,
                        )
                    }
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
