import { useState } from "react";

export default function Tab() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTab = (id) => {
        setActiveTab(id);
    };

    return (
        <>
            <ul className="flex gap-4 mb-4">
                {tabItems.map((tab, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleTab(tab.id)}
                            className={`inline-block rounded px-4 py-2.5 text-sm hover:text-indigo-600 ${activeTab === tab.id
                                ? "bg-indigo-100 font-semibold text-indigo-600"
                                : "bg-transparent font-medium text-slate-600"
                                }`}
                        >
                            {tab.title}
                        </button>
                    </li>
                ))}
            </ul>
            <div>{tabItems.map((tab) => activeTab === tab.id && tab.component)}</div>
        </>
    );
}
