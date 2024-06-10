import Image from "next/image";
import React from "react";

export default function PlaceItemCard({ placeItem }) {
  return (
    <div className="flex items-center hover:bg-slate-100 rounded-md p-4 gap-4">
      <div>
        <Image
          src={placeItem.image}
          alt={placeItem.title}
          width={96}
          height={96}
          className="rounded-md cover"
        />
      </div>

      <div>
        <h2 className="font-medium text-base">{placeItem.title}</h2>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <h3 className="text-sm text-gray-300">{placeItem.location}</h3>
        </div>
      </div>
    </div>
  );
}
