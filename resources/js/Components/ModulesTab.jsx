import { Link } from "@inertiajs/react"
import { FileEdit, Folder, FolderTree, ListTodo, Trash2 } from "lucide-react"

export default function ModulesTab(props) {
    return (
        <div className="relative mb-6 overflow-x-auto">
            <div className="grid grid-cols-3 gap-4 mb-4">
                {
                    props.data ?
                        props.data.map((item, key) => {
                            console.log('ModulesTab', item)
                            const tasksCount = item.tasks.length
                            const taskCompleted = item.tasks.filter(task => task.status_id === 3 || task.status_id === 6).length
                            const taskCompletedPercentage = Math.floor((item.tasks.filter(task => task.status_id === 3 || task.status_id === 6).length / item.tasks.length) * 100)
                            return (
                                <Link
                                    key={key}
                                    href={route("modules.show", item.slug)}
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
                                        </div>
                                        <div className="flex items-center justify-center gap-2">
                                            <ListTodo className="w-3 h-3 text-indigo-500" />
                                            <p className="text-xs font-semibold text-slate-500">
                                                {taskCompleted}/{tasksCount}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-full h-1 bg-indigo-100 rounded">                                                    <div
                                            className={`h-1 rounded bg-indigo-500`}
                                            style={{ width: `${taskCompletedPercentage}%` }}></div>
                                        </div>
                                        <p className="text-xs font-semibold text-slate-500">{taskCompletedPercentage}%</p>
                                    </div>
                                </Link>
                            )
                        }
                        )
                        :
                        <h1>No Data Available</h1>
                }
            </div>
        </div >
    )
}
