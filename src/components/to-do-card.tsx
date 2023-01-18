interface CardProps {
  id: number;
  title: string;
  due_on: string;
  status: string;
}


export const ToDoCard: React.FC<CardProps> = ({ id, title, due_on, status }) => {

  return (
    <div className={` ${status === "completed" ? "bg-green-500" : "bg-orange-300"} relative text-lg drop-shadow-lg rounded-lg px-3 py-6 my-2`}>
      <div>
        <div className="relative mr-5 mb-2 ">{title}</div>
        <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{id}</div>
        <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {due_on}</div>
      </div>
    </div>
  )
}










