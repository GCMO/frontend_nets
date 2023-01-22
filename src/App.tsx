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
            <>
              <ToDoCard 
                  id={todo.id}
                  title={todo.title}
                  due_on={todo.due_on}
                  status={todo.status}
              />
            </>
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