import React from 'react'
import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux'
import { Search, Terminal } from 'lucide-react';


const AllKeeperNotes = () => {

    const [searchTerm, setSearchTearm] = useState('');

    const keepers = useSelector((state) => state.keeper);
    console.log(keepers);

    function handleChangeInput(e) {
        setSearchTearm(e.target.value);
    }

    const filteredData = useMemo(() =>
        keepers.keeper.filter((keeper) =>
            keeper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            keeper.content.toLowerCase().includes(searchTerm.toLowerCase())
        ),
        [keepers.keeper, searchTerm]
    );

    console.log(filteredData);

    return (
        <div className="p-2 sm:p-4 font-mono min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center space-x-2 text-sm mb-6 bg-[#252525] p-2 rounded">
                    <span className="text-yellow-600">~/</span>
                    <span className="text-blue-400">keeper</span>
                    <span className="text-gray-600">→</span>
                    <span className="text-green-400">list</span>
                    <span className="text-gray-600 ml-2 text-xs">(showing {keepers.length} snippets)</span>
                </div>

                <div className="flex items-center space-x-2 bg-[#1E1E1E] p-3 mb-3 rounded-md border border-[#333333] shadow-lg font-mono">
                    <Terminal className="text-green-500" size={18} />
                    <input
                        type="text"
                        className="w-full bg-transparent text-gray-300 outline-none placeholder-gray-500"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleChangeInput}
                    />
                    <Search className="text-gray-500 cursor-pointer" size={18} />
                </div>

                <div className="space-y-4">
                    {filteredData.map((keeper) => (
                        <div key={keeper.id} className="border border-[#333] bg-[#1e1e1e]">
                            {/* Snippet Header */}
                            <div className="flex flex-wrap items-center justify-between bg-[#252525] px-3 py-2 border-b border-[#333]">
                                <div className="flex items-center space-x-2">

                                    <h3 className="text-gray-200 font-medium truncate">
                                        {keeper.title}
                                    </h3>
                                </div>
                                <span className="text-gray-500 text-xs hidden sm:block">{keeper.createdAt}</span>
                            </div>

                            {/* Snippet Content */}
                            <div className="relative">
                                <pre className="text-gray-300 text-sm p-3 pl-16 overflow-x-auto">
                                    <code>{keeper.content}</code>
                                </pre>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap justify-end gap-1 px-2 py-1.5 bg-[#252525] border-t border-[#333]">
                                <button
                                    onClick={() => copyToClipboard(keeper.content)}
                                    className="px-2 py-0.5 text-xs text-gray-400 hover:bg-[#333] hover:text-gray-200 rounded transition-colors duration-150"
                                >
                                    [copy]
                                </button>
                                <button className="px-2 py-0.5 text-xs text-gray-400 hover:bg-[#333] hover:text-gray-200 rounded transition-colors duration-150">
                                    [edit]
                                </button>
                                <button className="px-2 py-0.5 text-xs text-gray-400 hover:bg-[#333] hover:text-gray-200 rounded transition-colors duration-150">
                                    [view]
                                </button>
                                <button className="px-2 py-0.5 text-xs text-gray-400 hover:bg-[#333] hover:text-gray-200 rounded transition-colors duration-150">
                                    [share]
                                </button>
                                <button className="px-2 py-0.5 text-xs text-red-400 hover:bg-red-900/30 hover:text-red-300 rounded transition-colors duration-150">
                                    [delete]
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredData.length === 0 && (
                    <div className="text-gray-500 text-sm bg-[#1e1e1e] p-4 border border-[#333]">
                        $ No snippets found. Create one to get started.
                    </div>
                )}
            </div>
        </div>)
}

export default AllKeeperNotes