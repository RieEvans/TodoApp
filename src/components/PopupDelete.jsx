import React from "react";

export const PopupDelete = ({ deleteItem, tasks, cancel }) => {
  return (
    <section className="bg-slate-700/50 fixed inset-0 flex items-center justify-center z-50">
      <main className="dropTop transition bg-slate-900 px-5 py-4 rounded-md flex flex-col items-center justify-center ">
        <h1 className="text-white font-bold text-2xl mt-5">
          Are you sure you want to Delete ?{""}
        </h1>
        <div className="flex items-center gap-5">
          <button
            onClick={() => deleteItem(tasks.id)}
            className="bg-purple-600 w-[120px] py-2 rounded-md font-semibold text-zinc-100 mt-10  "
          >
            Delete
          </button>
          <button
            onClick={() => cancel(false)}
            className="bg-purple-600 w-[120px] py-2 rounded-md font-semibold text-zinc-100 mt-10"
          >
            Cancel
          </button>
        </div>
      </main>
    </section>
  );
};
