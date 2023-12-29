import { Link } from "@inertiajs/react"
import { FileEdit, Trash2 } from "lucide-react"

export default function ModulesTab(props) {
    return (
        <div className="relative mb-6 overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            #
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Priority
                        </th>
                        <th scope="col" className="px-6 py-3"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data ?
                            props.data.map((item, key) =>
                                <tr key={key} className="bg-white border-b">
                                    <td className="px-6 py-4">{key + 1}</td>
                                    <td className="px-6 py-4">{item.title}</td>
                                    {/* <td className="px-6 py-4"><Badge status={item.status} /></td> */}
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4"></td>
                                    <td className="px-6 py-4">
                                        <div className='flex items-center justify-end h-full gap-2'>
                                            <Link href={route(`modules.edit`, item.id)}
                                                className="inline-block px-2 py-2 text-yellow-500 transition duration-150 ease-in-out bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-500 focus:bg-yellow-500 active:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 hover:text-white focus:text-white active:text-white focus:ring-offset-2">
                                                <FileEdit className='w-4 h-4' />
                                            </Link>
                                            <button
                                                id={item.id}
                                                className="inline-block px-2 py-2 text-red-500 transition duration-150 ease-in-out bg-red-100 border border-transparent rounded-md hover:bg-red-500 focus:bg-red-500 active:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 hover:text-white focus:text-white active:text-white focus:ring-offset-2">
                                                <Trash2 className='w-4 h-4' />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ) :
                            <tr><td>No Data Available</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
