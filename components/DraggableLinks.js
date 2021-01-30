import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box } from '@chakra-ui/react';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DraggableLinks = ({ data }) => {
  const [state, setState] = useState(data);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    const items = reorder(state, result.source.index, result.destination.index);
    setState(items);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided, snapshot) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            <Box p={3} pb={1}>
              {state.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      key={item.id}
                      h="100px"
                      p={2}
                      mb={3}
                      bg="white"
                      rounded="md"
                      shadow={snapshot.isDragging ? 'md' : 'sm'}
                    >
                      {item.name}
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DraggableLinks;
