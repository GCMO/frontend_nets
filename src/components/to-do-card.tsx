import {useState, useCallback} from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
// import  update  from 'immutability-helper';

import {Button} from './button';
import getData from '../api/getData';

interface CardProps {
  id: number;
  title: string;
  due_on: string;
  status: string;
}


export const ToDoCard: React.FC<CardProps> = ({ id, title, due_on, status }) => {
  const [todoList, setTodoList] = useState<CardProps[]>([]);

  
  
  const handleClick = useCallback (async () => {
    try {
      const response = await getData();
      setTodoList(response);
      console.log('DATA', response)
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  const handleDragEnd = (result: DropResult ) => {
    if (!result.destination || !todoList.length) return;
    
    const { source, destination } = result
  
    const items = Array.from(todoList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    setTodoList(items);
  };
  
  return (
    
    <div className="container">
      
        <DragDropContext onDragEnd={handleDragEnd}>  
          <div className="flex flex-row gap-3 bg-slate-200 rounded-lg">

            <Droppable droppableId={"todoList"} key={'todoList'}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps} > 
                  <div className="flex-col w-1/2 text-xl p-4"> <b>PENDING </b>
                    { todoList
                    .filter((todo) => ( todo.status === "pending" )) 
                    .map((todo, index) => ( 
                      <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                        {(provided, shapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div key={index} className={` ${todo.status === "completed" ? "bg-green-500" : "bg-orange-300"} relative text-lg drop-shadow-lg rounded-lg px-3 py-6 my-2`}>
                              <div>
                                <div className="relative mr-5 mb-2 ">{todo.title}</div>
                                <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{todo.id}</div>
                                <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {todo.due_on}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>

                  <div className="flex-col w-1/2 text-xl p-4"><b>COMPLETED</b>
                  { todoList
                    .filter((todo) => (todo.status === "completed"))
                    .map((todo, index) => ( 
                      <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                        {(provided, shapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            >
                            <div key={index} className={` ${todo.status === "completed" ? "bg-green-500" : "bg-orange-300"} relative text-lg drop-shadow-lg rounded-lg px-3 py-6 my-2`}>
                              <div>
                                <div className="relative mr-5 mb-2 ">{todo.title}</div>
                                <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{todo.id}</div>
                                <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {todo.due_on}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            </div>
          <Button onClick={handleClick}/>

        </DragDropContext>
    </div>
  
  )
};