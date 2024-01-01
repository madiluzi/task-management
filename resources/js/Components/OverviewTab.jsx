import { Link } from "@inertiajs/react"
import { FileEdit, Trash2 } from "lucide-react"

export default function OverviewTab(props) {
    console.log('props', props)
    return (
        <div className="relative mb-6 overflow-x-auto">
            <div className="mb-2 border rounded-lg text-slate-700 bg-slate-50 border-slate-200">
                <div className="flex p-4">
                    <div className="w-1/2 space-y-6">
                        <div>
                            <p className="text-xs font-bold uppercase text-slate-700">Type</p>
                            <p className="text-xs text-slate-700">Type</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-slate-700">Category</p>
                            <p className="text-xs text-slate-700">Type</p>
                        </div>
                        <div>
                            <p className="text-xs font-bold uppercase text-slate-700">Is Active</p>
                            <p className="text-xs text-slate-700">Type</p>
                        </div>
                    </div>
                    <div className="w-1/2 space-y-6">
                        <div className="">
                            <p className="text-xs font-bold uppercase text-slate-700">Priority</p>
                            <p className="text-xs text-slate-700">{props.data.priority ? props.data.priority.name : '-'}</p>
                        </div>
                        <div className="">
                            <p className="text-xs font-bold uppercase text-slate-700">Status</p>
                            <p className="text-xs text-slate-700">{props.data.status ? props.data.status.name : '-'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-2 border rounded-lg text-slate-700 bg-slate-50 border-slate-200">
                <div className="p-4">
                    <p className='text-xs font-semibold uppercase text-slate-800'>Pages</p>
                    <ul>
                        {

                        }
                        <li></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
