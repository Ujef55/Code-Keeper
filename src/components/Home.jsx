import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToKeeper, updateToKeeper } from '../features/keeper/keeperSlice';
import toast from 'react-hot-toast';

const Home = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const keeperId = searchParams.get('keeperId');

    const lineNumbers = content.split('\n').length;

    const dispatch = useDispatch();

    const createKeeper = () => {
        const keeper = {
            title: title,
            content: content,
            id: keeperId || Date.now().toString(36),
            createdAt: new Date().toLocaleDateString()
        }

        if (!keeperId) {
            // create new keeper
            if (title && content) {
                dispatch(addToKeeper(keeper));
            } else {
                toast.error('Please fill all the details');
            }
        } else {
            // update keeper
            dispatch(updateToKeeper(keeper));
        }

        // after create or update
        if (title && content) {
            setTitle('');
            setContent('');
            setSearchParams({});
        }

    }

    return (
        <div className="p-2 sm:p-4 font-mono max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter keeper title..."
                    className="w-full sm:flex-grow bg-[#2d2d2d] text-gray-300 
                             px-2 sm:px-3 py-1 text-sm sm:text-base
                             border border-[#3d3d3d] focus:border-[#4d4d4d]
                             outline-none placeholder-gray-500"
                />
                <button
                    className="w-full sm:w-auto bg-[#2d2d2d] text-gray-300 
                             px-2 sm:px-3 py-1 text-sm sm:text-base
                             border border-[#3d3d3d] hover:bg-[#3d3d3d]
                             focus:outline-none focus:border-[#4d4d4d]
                             disabled:opacity-50 disabled:cursor-not-allowed
                             whitespace-nowrap"
                    disabled={!title}
                    onClick={createKeeper}
                >
                    {keeperId ? `[Update]` : `[Create]`}
                </button>
            </div>

            <div className="relative border border-[#3d3d3d] bg-[#1e1e1e]">
                <div className="absolute top-0 left-0 flex flex-col items-end py-2 px-2 text-gray-600 bg-[#1e1e1e] select-none border-r border-[#3d3d3d]">
                    {[...Array(lineNumbers || 1)].map((_, i) => (
                        <div key={i} className="text-xs leading-5">
                            {i + 1}
                        </div>
                    ))}
                </div>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full bg-transparent text-gray-300 pl-12 pr-4 py-2 
                             text-sm leading-5 outline-none resize-y min-h-[400px]
                             font-mono"
                    placeholder="// Enter your code here..."
                />
            </div>

            {(title || content) && (
                <div className="mt-2 text-gray-500 text-sm">
                    $ Status: {keeperId ? 'Updating' : 'Creating'} keeper{title ? `: ${title}` : ''}...
                    {content ? ` (${content.split('\n').length} lines)` : ''}
                </div>
            )}
        </div>
    );
};

export default Home;