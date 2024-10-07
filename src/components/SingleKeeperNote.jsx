import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { copyToClipBoard } from '../features/keeper/keeperSlice';
import { useDispatch } from 'react-redux';

const singleKeeperNote = () => {

  const { id } = useParams();
  const keepers = useSelector((state) => state.keeper);

  const filteredData = keepers.keeper.filter((keeper) => keeper.id === id)[0]

  const lineNumbers = filteredData.content.split('\n').length;

  const dispatch = useDispatch();

  function copy(content) {
    dispatch(copyToClipBoard(content));
  }


  return (
    <div className="p-2 sm:p-4 font-mono max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
        <input
          type="text"
          value={filteredData.title}
          disabled
          placeholder="Enter keeper title..."
          className="w-full sm:flex-grow bg-[#2d2d2d] text-gray-300 
                     sm:px-3 pt-[10px] text-sm sm:text-base items-center
                     border border-[#3d3d3d] focus:border-[#4d4d4d]
                     outline-none placeholder-gray-500"
        />

        <button
          onClick={() => copy(filteredData.content)}
          className="w-full sm:w-auto bg-[#2d2d2d] text-gray-300 
                     sm:px-3 text-sm sm:text-base items-center
                     border border-[#3d3d3d] hover:bg-[#3d3d3d]
                     focus:outline-none focus:border-[#4d4d4d]
                     disabled:opacity-50 disabled:cursor-not-allowed
                     whitespace-nowrap"
        >
          Copy content
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
          value={filteredData.content}
          disabled
          className="w-full bg-transparent text-gray-300 pl-12 pr-4 py-2 
                     text-sm leading-5 outline-none resize-y min-h-[400px]
                     font-mono"
          placeholder="// Enter your code here..."
        />
      </div>
    </div>
  )
}

export default singleKeeperNote