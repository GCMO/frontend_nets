import { useState, useCallback } from "react";
import getData from "./api/getData";
import { Button } from "./components/button";
import { ToDoCard } from "./components/to-do-card";

interface Todo {
  id: number;
  title: string;
  due_on: string;
  status: string;
}


const App: React.FC = () => {
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


  return (
    <div className="App w-screen h-screen justify-center items-center m-12">
      <h1 className="text-3xl font-bold underline mb-6 ml-10">
        To do or Not to do
      </h1>
       
        { loading ? (
            <div className="m-14">
              <img src="/loader.png" alt="Loading..." />
              <p>Loading...</p>
            </div>
        ) : todoList.length ? ( 
          <div className="container">
            <div className="grid grid-col-3 gap-2 m-6">
            { todoList.map((todo) => (
                <ToDoCard 
                  key={todo.id} 
                  title={todo.title} 
                  id={todo.id} 
                  due_on={todo.due_on} 
                  status={todo.status}  
                />
                ))}
              </div> 
              <Button onClick={handleClick}/>
          </div>
        ) : (
          <div className="text-xl m-14  ">
              <p><b>Nothing to see here...</b></p>
              <p>Grab something to do</p>
              <Button onClick={handleClick}/>
          </div> 
        )}  
    </div>
  );
};


// const RenderCard = () => {
//   return (
//     <div className="relative bg-slate-200 shadow-md rounded-lg px-6 py-6 w-56 mb-6">
//       <div className="absolute h-3 w-3 rounded-full bg-green-600 top-3 right-3"></div>
//       What to do, what to do....
//     </div>
//   );
// };

export default App;
