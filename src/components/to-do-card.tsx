interface CardProps {
  id: number;
  title: string;
  due_on: string;
  status: string;
}


export const ToDoCard: React.FC<CardProps> = ({ id, title, due_on, status }) => {

  return (
    <div className={`relative ${status === "completed" ? "bg-green-600" : "bg-orange-300"} text-lg shadow-lg rounded-lg px-3 py-6 my-2`}>
      <div>
        <div className="relative mr-5 mb-2 ">{title}</div>
        <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{id}</div>
        <div className="absolute h-4 w-fit text-xs bottom-2 left-3">Due: {due_on}</div>
      </div>
    </div>
  )
}


// return (
//   <div className="container">
//   <div className=" flex flex-col md:flex-col">

//     {status === "pending" && (
//     <div className="flex md:w-1/2 p-0">
//       <div className="relative bg-orange-300 text-lg shadow-xl rounded-lg px-3 py-6 mb-6">
//         <div>
//           <div className=" mb-2 ">{title}</div>
//           <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{id}</div>
//           <div className="absolute h-4 text-xs bottom-2 left-3">Due:{due_on}</div>
//         </div>
//       </div>
//     </div>
//         )}
    
//     {status === "completed" && (
//     <div className="flex md:w-1/2 p-0">
//       <div className="relative bg-green-600 text-lg shadow-xl rounded-lg px-3 py-6 mb-6">
//         <div>
//           <div className="mb-2 ">{title}</div>
//           <div className="absolute h-4 w-9 text-xs bottom-2 right-3">#{id}</div>
//           <div className="absolute h-4 text-xs bottom-2 left-3">Due:{due_on}</div>
//         </div>
//       </div>
//     </div>
//         )}

//   </div>
//   </div>
// );











