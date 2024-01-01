import { Plus } from "lucide-react";
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

export default function TasksTab(props) {
    const [widgets, setWidgets] = useState([])
    const [tasks, setTasks] = useState(props.tasksPerStatus)
    const [showField, setShowField] = useState(null)
    console.log('taskstab', tasks)
    const handleSetList = (newList, key) => {
        console.log('newList', newList)
        console.log('key', key)
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            console.log('updatedTasks', updatedTasks)
            console.log('newList', newList)
            console.log('key', key)
            updatedTasks[key].tasks = newList;
            return updatedTasks;
        });
    };

    const handleAdd = (id) => {
        setShowField(id)
    }

    return (
        <div className="relative mb-6">
            <div className="flex gap-4 mb-4 overflow-auto h-80">
                {tasks.map((status, key) => {
                    return (
                        <div key={key} className="flex-shrink-0 w-80">
                            <p className="mb-4 text-xs font-medium text-slate-800">{status.name}</p>
                            <div className="bg-white rounded-lg shadow">
                                <ReactSortable
                                    list={status.tasks}
                                    setList={(newList) => handleSetList(newList, key)}
                                    onChange={(order, sortable, evt) => {
                                        console.log('order', order)
                                        console.log('sortable', sortable)
                                        console.log('evt', evt)
                                    }}
                                    group='test'
                                    className="w-full p-2 space-y-2"
                                >
                                    {status.tasks.map((item) => {
                                        return (
                                            <div key={item.id} className="p-2 text-sm font-semibold border rounded border-slate-200 text-slate-700">{item.content}</div>
                                        )
                                    })}
                                </ReactSortable>
                                {showField == status.id &&
                                    <div className="flex gap-2 px-2">
                                        <input className="w-full p-2 border rounded border-slate-200" />
                                        <button className="inline-block px-4 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded hover:bg-indigo-500 hover:text-white" onClick={handleSave}>
                                            Save</button>
                                    </div>
                                }
                                <button className="flex w-full gap-2 p-2 text-xs text-slate-500 hover:bg-slate-200" onClick={() => handleAdd(status.id)}>
                                    <Plus size={16} />
                                    Add New</button>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}
