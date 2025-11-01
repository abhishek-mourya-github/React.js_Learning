import React, { useState, useEffect } from "react";

const App = () => {
  const [heading, setHeading] = useState("");
  const [detail, setDetail] = useState("");
  const [task, setTask] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("task"));
    if (storedTasks && storedTasks.length > 0) {
      setTask(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const submitHandle = (e) => {
    e.preventDefault();
    if (!heading.trim() || !detail.trim()) return;

    const newTask = [...task, { heading, detail }];
    setTask(newTask);
    setHeading("");
    setDetail("");
  };

  const handleDelete = (index) => {
    const updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  };

  return (
    <div className="min-h-screen lg:h-screen bg-black text-white lg:flex">
      <form
        onSubmit={submitHandle}
        className="flex gap-4 items-start flex-col p-10 lg:w-1/2"
      >
        <h1 className="text-3xl font-medium">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 py-2 border-2 border-white rounded outline-none w-full"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />

        <textarea
          placeholder="Enter Notes Details"
          className="px-5 py-2 h-36 border-2 border-white rounded outline-none w-full"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black px-5 py-2 cursor-pointer outline-none w-full active:bg-gray-400"
        >
          Add Note
        </button>
      </form>

      <div className="p-10 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-medium">Your Notes</h1>
        <div className="flex flex-wrap gap-5 h-full overflow-auto pt-5 items-start">
          {task.map((elem, index) => (
            <div
              key={index}
              onClick={() => setSelectedTask(elem)}
              className="h-[40vh] w-full md:h-72 md:w-52 border-2 border-white rounded-2xl overflow-hidden text-black bg-white p-6 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="leading-tight text-xl font-bold">
                  {elem.heading}
                </h3>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  className="border px-1.5 rounded-lg outline-none font-medium cursor-pointer"
                >
                  X
                </button>
              </div>
              <p className="mt-2 leading-tight font-medium text-gray-700">
                {elem.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedTask && (
        <div className="absolute top-0 left-0 md:inset-0 w-full min-h-screen  bg-black text-white flex flex-col justify-center items-center z-50 p-10">
          <h1 className="text-4xl font-bold mb-5">{selectedTask.heading}</h1>
          <p className="text-lg leading-relaxed text-gray-300">
            {selectedTask.detail}
          </p>
          <button
            onClick={() => setSelectedTask(null)}
            className="mt-10 border-2 border-white px-6 py-2 rounded-lg cursor-pointer">Close</button>
        </div>
      )}
    </div>
  );
};

export default App;
