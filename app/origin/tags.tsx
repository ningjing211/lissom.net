import React from 'react';

interface TagsProps {
    tag: string; // Adjust the type based on your requirements (e.g., string, number, etc.)
  }

export default function Tags({ tag }: TagsProps) {
    return (
        <div className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border">
            <svg
            className="feather feather-hard-drive mr-2"
            fill="none"
            height="16"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            >
            <line
                x1="22"
                x2="2"
                y1="12"
                y2="12"
            />
            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
            <line
                x1="6"
                x2="6.01"
                y1="16"
                y2="16"
            />
            <line
                x1="10"
                x2="10.01"
                y1="16"
                y2="16"
            />
            </svg>
            {tag}
      </div>
    );
  }