import {useState, useCallback} from 'react';

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
  
  
  return (
    
    <div className="container">
      <div className="flex flex-row gap-3 bg-slate-200 rounded-lg">
          
              <div className="flex-col w-1/2 text-xl p-4"> <b>PENDING </b>
              { todoList
                .filter((todo) => ( todo.status === "pending" )) 
                .map((todo, index) => ( 
                  
                    <div key={index} className={` ${todo.status === "completed" ? "bg-green-500" : "bg-orange-300"} relative text-lg drop-shadow-lg rounded-lg px-3 py-6 my-2`}>
                      <div>
                        <div className="relative mr-5 mb-2 ">{todo.title}</div>
                        <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{todo.id}</div>
                        <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {todo.due_on}</div>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex-col w-1/2 text-xl p-4"><b>COMPLETED</b>
              { todoList
                .filter((todo) => (todo.status === "completed"))
                .map((todo, index) => (                 
                  <div key={index} className={` ${todo.status === "completed" ? "bg-green-500" : "bg-orange-300"} relative text-lg drop-shadow-lg rounded-lg px-3 py-6 my-2`}>
                    <div >
                      <div className="relative mr-5 mb-2 ">{todo.title}</div>
                      <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{todo.id}</div>
                      <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {todo.due_on}</div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
           <Button onClick={handleClick}/>
      
     </div>
  
  )
};



//ORIGINAL   return (
//     <div className={` ${status === "completed" ? "bg-green-500" : "bg-orange-300"} relative text-lg drop-shadow-lg rounded-lg px-3 py-6 my-2`}>
//       <div>
//         <div className="relative mr-5 mb-2 ">{title}</div>
//         <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{id}</div>
//         <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {due_on}</div>
//       </div>
//     </div>
//   )
// }