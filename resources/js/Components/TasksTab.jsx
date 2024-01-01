import { useForm } from "@inertiajs/react";
import { Dot, MoreVertical, Plus } from "lucide-react";
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import Badge from "./Badge";

export default function TasksTab(props) {
    const [widgets, setWidgets] = useState([])
    const [tasks, setTasks] = useState(props.tasksPerStatus)
    const { data, setData, put, errors } = useForm();

    const handleSetList = (newList, key) => {
        setTasks((prevTasks) => {
            const updatedTasks = [...prevTasks];
            updatedTasks[key].tasks = newList;
            return updatedTasks;
        });
    };

    function handleSubmit(e) {
        console.log(e.newIndex)
        // setTasks((prevTasks) => {
        //     const updatedTasks = [...prevTasks];
        //     console.log('updatedTasks submit', updatedTasks)
        //     updatedTasks[key].tasks = newList;
        //     newList.forEach((newTask, index) => {
        //         const originalTask = prevTasks[key].tasks[index];

        //         // Check if the task order has changed
        //         if (newTask.id !== originalTask.id) {
        //             console.log('newTask', newTask)
        //             setData(newTask)
        //             handleSubmit()
        //         }
        //     });
        //     return updatedTasks;
        // });
        // console.log('submit', data)
        // put(route("tasks.update", data.id));
        // console.log('data', data)
    }

    return (
        <div className="relative mb-6">
            <div className="flex gap-4 mb-4 overflow-auto h-80">
                {tasks.map((status, key) => {
                    console.log('status.tasks', status.tasks.length > 0 ? status.tasks : 'no tasks')
                    return (
                        <div key={key} className="flex-shrink-0 w-80">
                            <p className="inline-block mb-4 text-sm font-semibold text-slate-700">{status.name}</p>
                            <div className="relative p-2 space-y-2 bg-white rounded-lg shadow">
                                <div className="absolute w-full max-w-full px-2 -translate-x-1/2 top-2 left-1/2">
                                    <button className="flex items-center justify-center w-full gap-2 p-2 text-sm transition-colors border-2 border-dashed rounded border-slate-300 text-slate-400 hover:bg-slate-100" onClick={() => handleAdd(status.id)}>
                                        <Plus size={16} />
                                        Add New</button>
                                </div>
                                <ReactSortable
                                    list={status.tasks}
                                    setList={(newList) => handleSetList(newList, key)}
                                    onChange={(evt) => console.log(evt)}
                                    group='test'
                                    className={`w-full pt-10 ${status.tasks.length > 0 ? 'space-y-2' : 'space-y-0'}`}
                                    id={status.id}
                                    animation={200}
                                    delayOnTouchStart={true}
                                    delay={2}
                                >
                                    {status.tasks.map((item) => {
                                        return (
                                            <div key={item.id} className="p-2 text-sm font-medium border rounded border-slate-200 text-slate-700" onClick={handle}>
                                                <div className="flex justify-end mb-2">
                                                    <Badge><Dot size={16} strokeWidth={3} />{item.priority}</Badge>
                                                </div>
                                                <p>{item.content}</p>
                                            </div>
                                        )
                                    })}
                                </ReactSortable>
                            </div>
                        </div>
                    )
                })}
            </div >
        </div >
    )
}
