import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";

export default function TasksTab(props) {
    const [widgets, setWidgets] = useState([])
    const [tasks, setTasks] = useState(props.tasksPerStatus)
    console.log('tasks', tasks)
    const [state, setState] = useState([
        { id: 1, name: "shrek" },
        { id: 2, name: "fiona" },
    ]);

    const [state2, setState2] = useState([
        { id: 1, name: "asdasd" },
        { id: 2, name: "zcvzvzxv" },
    ]);

    const [tasks1, setTasks1] = useState(props.tasksPerStatus[1])
    const [tasks2, setTasks2] = useState(props.tasksPerStatus[4])
    const [tasks3, setTasks3] = useState(props.tasksPerStatus[2])

    console.log('tasks1', tasks1)
    console.log('tasks2', tasks2)
    console.log('tasks3', tasks3)
    return (
        <div className="relative mb-6">

            <div className="flex gap-4 mb-4 overflow-x-scroll">

                <ReactSortable
                    list={tasks1}
                    setList={setTasks1}
                    group='test'
                    className="p-2 bg-slate-400 border-slate-300 w-96">
                    {tasks1.map((item) => {
                        console.log('item', item)
                        return (
                            <div key={item.id} className="p-2 mb-2 border rounded border-slate-200">{item.content}</div>
                        )
                    })}
                </ReactSortable>

                <ReactSortable
                    list={tasks2}
                    setList={setTasks2}
                    group='test'
                    className="p-2 bg-slate-400 border-slate-300 w-96">
                    {tasks2.map((item) => {
                        console.log('item', item)
                        return (
                            <div key={item.id} className="p-2 mb-2 border rounded border-slate-200">{item.content}</div>
                        )
                    })}
                </ReactSortable>

                <ReactSortable
                    list={tasks3}
                    setList={setTasks3}
                    group='test'
                    className="p-2 bg-slate-400 border-slate-300 w-96">
                    {tasks3.map((item) => {
                        console.log('item', item)
                        return (
                            <div key={item.id} className="p-2 mb-2 border rounded border-slate-200">{item.content}</div>
                        )
                    })}
                </ReactSortable>
            </div >
            <div className="flex gap-4 mb-4 overflow-x-scroll">
                {props.status ?
                    props.status.map((item, key) =>
                        <div>
                            <p key={key}>{item.name}</p>
                            <div className="p-4 mb-2 bg-white rounded w-96">
                                {/* <ReactSortable
                                    list={tasks3}
                                    setList={setTasks3}
                                    group='test'
                                    className="p-2 bg-slate-400 border-slate-300 w-96">
                                    {tasks3.map((item) => {
                                        console.log('item', item)
                                        return (
                                            <div key={item.id} className="p-2 mb-2 border rounded border-slate-200">{item.content}</div>
                                        )
                                    })}
                                </ReactSortable> */}
                                {
                                    <ReactSortable
                                        list={tasks[item.id]}
                                        setList={setTasks[item.id]}
                                        group='test'>
                                        {state.map((item) => (
                                            <div
                                                key={item.id}
                                                className="p-2 border border-slate-300 mb-2 rounded">{item.name}</div>
                                        ))}
                                    </ReactSortable>
                                    // key % 2 == 0 ?
                                    //     <ReactSortable
                                    //         list={state}
                                    //         setList={setState}
                                    //         group='test'>
                                    //         {state.map((item) => (
                                    //             <div
                                    //                 key={item.id}
                                    //                 className="p-2 border border-slate-300 mb-2 rounded">{item.name}</div>
                                    //         ))}
                                    //     </ReactSortable>
                                    //     :
                                    //     <ReactSortable
                                    //         list={state2}
                                    //         setList={setState2}
                                    //         group='test'>
                                    //         {state2.map((item) => (
                                    //             <div
                                    //                 key={item.id}
                                    //                 className="p-2 border border-slate-300 mb-2 rounded">{item.name}</div>
                                    //         ))}
                                    //     </ReactSortable>
                                }
                                {/* {props.tasksPerStatus ?
                                props.tasksPerStatus[item.id].map((taskItem, taskKey) => <div>
                                    <p key={taskKey}>{taskItem.content}</p>
                                </div>
                                ) : ''
                            } */}
                            </div>
                        </div>
                    ) : <p>asds</p>
                }
            </div>
        </div >
    )
}
