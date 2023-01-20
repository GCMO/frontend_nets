import { useState, useCallback } from "react";
// import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
// import  update  from 'immutability-helper';

import getData from "./api/getData";
import { Button } from "./components/button";
import { ToDoCard } from "./components/to-do-card";

interface Todo {
  id: number;
  title: string;
  due_on: string;
  status: string;
}

const App: React.FC<Todo> = (todo) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = useCallback (async () => {
    setLoading(true);
    try {
      const response = await getData();
      setTodoList(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // const handleDragEnd = (result: DropResult) => {
  //   const { source, destination } = result
  //   if (!result.destination) return;

  //   const items = Array.from(todoList);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setTodoList(items);
  // };

  return (
    <div className="App w-screen h-screen justify-center items-center m-12">
      <h1 className="text-3xl font-bold underline mb-5 ml-5">
        To do or Not to do
      </h1>
       
        { loading ? (
            <div className="m-14">
              <img src="/loader.png" alt="Loading..." />
              <p>Loading...</p>
            </div>
          ) : todoList.length ? (          
            <ToDoCard 
                id={todo.id}
                title={todo.title}
                due_on={todo.due_on}
                status={todo.status}
            /> 
          ) : (
            <div className="text-xl m-14  ">
                <p><b>Nothing to see here...</b></p>
                <p>Grab something to do</p>
                <Button onClick={handleClick}/>
            </div> 
          )
        }

    </div>
  );
};


export default App;

          // {/* <div className="container">
          //    <div className="flex flex-row gap-3 bg-slate-200 rounded-lg">
          //      <DragDropContext onDragEnd={handleDragEnd}>
          //       <Droppable droppableId={'todoList'}>
          //         {(provided) => ( */}
          //         <>
          //           {/* <div className='todoList' ref={provided.innerRef} {...provided.droppableProps}>
          //           <div className="flex-col w-1/2 text-xl p-4" {...provided.droppableProps} ref={provided.innerRef}> <b>PENDING </b>
          //           { todoList
          //             .filter((todo) => (todo.status === "pending")) 
          //             .map((todo, index) => ( 
          //               {/* <Draggable key={todo.id} draggableId={`${todo.id}-${todo.status}`} index={index}>
          //                 {(provided, shapshot) => (
          //                 <div
          //                  ref={provided.innerRef}
          //                  {...provided.draggableProps}
          //                  {...provided.dragHandleProps}
          //                 >    */}
          //                   {/* <ToDoCard 
          //                     key={todo.id} 
          //                     title={todo.title} 
          //                     id={todo.id} 
          //                     due_on={todo.due_on} 
          //                     status={todo.status}  
          //                   />  */}
          //                   {/* </div>
          //                 )}
          //               </Draggable>
          //             ))}
          //             {provided.placeholder}
          //           </div> */}

          //           {/* <div className="flex-col w-1/2 text-xl p-4" {...provided.droppableProps} ref={provided.innerRef}><b>COMPLETED</b>
          //            { todoList
          //             .filter((todo) => (todo.status === "completed"))
          //             .map((todo, index) => (
          //               <Draggable key={todo.id} draggableId={`${todo.id}-${todo.status}`} index={index}>
          //                 {(provided) => (  
          //                 <div
          //                   ref={provided.innerRef}
          //                   {...provided.draggableProps}
          //                   {...provided.dragHandleProps}
          //                 >                           */}
          //                   {/* <ToDoCard 
          //                     key={todo.id} 
          //                     title={todo.title} 
          //                     id={todo.id} 
          //                     due_on={todo.due_on} 
          //                     status={todo.status} 
          //                   /> */}
          //                 {/* </div> */}
          //                 {/* )}
          //               </Draggable>
          //             ))}
          //             {provided.placeholder}
          //           </div>
          //           </div>
          //         </>
          //         )}
          //     </Droppable>
          //   </DragDropContext> */}
          //     {/* <Button onClick={handleClick}/>
          //   </div>
          // </div> */}

        