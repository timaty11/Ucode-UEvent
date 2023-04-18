import React from 'react';


const ReactionElement = ({ reactionClickHandle, reactionAmount, isActive, children }) => {
  return (
    <div className="card-block">
      <button onClick={ reactionClickHandle } className="items-center justify-center text-white">
        <div className="mx-1 pt-2 pr-1 items-center rounded-xl flex space-x-2 flex-row text-gray-700 rounded-lg dark:text-gray-400">
          <svg className="h-4 w-4 text-gray-700 dark:text-gray-400" fill={isActive ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            { children }
          </svg>
          <p className="justify-between text-sm">{ reactionAmount }</p>
        </div>
      </button>
    </div>
  )
}

export default ReactionElement;
