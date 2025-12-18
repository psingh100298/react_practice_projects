/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const TodoApp = () => {

  const [todos, setTodos] = useState<string[]>([]);
  const [task, setTask] = useState<string>('');
  const [editedTask, setEditedTask] = useState<string>('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleAddTask = () => {

    if (task === '')
      return;
    setTodos([...todos, task]);
    setTask('');

  }

  const handleDelete = (e: any) => {
    const newList = todos.filter((_, index) => index != e);
    setTodos(newList);
  }

  const handleComplete = (e: any) => {
    console.log('handle complete clicked', e);
  }

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setEditedTask(todos[index]);
  };


  const handleSave = () => {
    if (editingIndex === null || editedTask.trim() === "") return;

    setTodos(prev =>
      prev.map((todo, index) =>
        index === editingIndex ? editedTask : todo
      )
    );

    setEditingIndex(null);
    setEditedTask("");
  };


  const handleCancel = () => {
    setEditingIndex(null);
    setEditedTask("");
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-md">
        <h1 className="text-amber-300 p-4 m-4">
          Today's Task List
        </h1>

        <div className="flex gap-4 px-4">
          <input
            value={task}
            onChange={(e) => {

              setTask(e.target.value);
            }}
            type="text"
            placeholder="Enter the task"
            className="border-2 border-gray-400 w-full rounded-2xl p-3"
          />
          <button className="cursor-pointer bg-blue-500 px-6 rounded-xl" onClick={handleAddTask}>
            ADD
          </button>
        </div>
        {
          todos.map((item, index) => (
            <div
              key={index}
              className="m-1 w-full max-w-md border rounded-xl p-1 shadow-sm"
            >

              {editingIndex === index ? (
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="border-2 border-gray-400 w-full rounded-2xl p-1 m-1"
                  autoFocus
                />
              ) : (
                <p className="mb-1 break-words text-gray-800">
                  {item.toUpperCase()}
                </p>
              )}

              <div className="flex justify-end gap-3">

                <div className="flex justify-end gap-3">

                  {editingIndex === index ? (
                    <>
                      <button
                        className="bg-green-500 text-white px-1 py-1 rounded-lg text-sm"
                        onClick={handleSave}
                      >
                        SAVE
                      </button>

                      <button
                        className="bg-gray-400 text-white px-1 py-1 rounded-lg text-sm"
                        onClick={handleCancel}
                      >
                        CANCEL
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-green-500 text-white px-1 py-1 rounded-lg text-sm"
                        onClick={() => handleEdit(index)}
                      >
                        EDIT
                      </button>

                      <button
                        className="bg-green-500 text-white px-1 py-1 rounded-lg text-sm"
                        onClick={() => handleComplete(index)}
                      >
                        COMPLETED
                      </button>
                    </>
                  )}

                  <button
                    className="bg-red-500 text-white px-1 py-1 rounded-lg text-sm"
                    onClick={() => handleDelete(index)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))
        }


      </div>
    </div>
  );
};

export default TodoApp;
