"use client";
import React, { useState } from "react";
import PlaceItemCard from "./PlaceItemCard";
import DraggingStatus from "./DraggingStatus";
import dummyData from "../resource/dummyData";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

const DraggableList = () => {
  const handleDragEnd = (result) => {
    if (!result.destination) 
      return;
    const newList = [...listItems];
    const [removed] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, removed);
    setListItems(newList);
  };
  const [listItems, setListItems] = useState(dummyData);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="list">
        {(dropProvided) => (
          <div ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
            {listItems.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(dragProvided, dragSnapshot) => (
                  <div
                    ref={dragProvided.innerRef}
                    {...dragProvided.draggableProps}
                    {...dragProvided.dragHandleProps}
                    style={{
                      ...dragProvided.draggableProps.style,
                    }}
                  >
                    {dragSnapshot.isDragging ? (
                      <DraggingStatus placeItem={item} />
                    ) : (
                      <PlaceItemCard placeItem={item} />
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {dropProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableList;
