import React, { useState } from "react";
import NoteItem from "./components/NoteItem";

// let title = "";
const App = () => {
  const [title, setTitle] = useState("hello");

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="space-y-6 bg-white shadow-md rounded p-5">
        <h1 className="font-semibold text-2xl text-center">Note Application</h1>
        <div>
          {title.trim() && title.length < 3 ? (
            <p className="text-red-500">Title is too short</p>
          ) : null}
          <input
            placeholder="Title"
            type="text"
            className="w-full border-b-2 border-gray-700 outline-none"
            onChange={(evt) => {
              setTitle(evt.target.value);
            }}
            value={title}
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            className="w-full border-b-2 border-gray-700 outline-none resize-none h-36"
          ></textarea>
        </div>
        <div className="text-right">
          <button
            onClick={() => {
              console.log(title);
            }}
            className="bg-blue-500 text-white px-5 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Note Items */}
      <NoteItem title="My first re-usable component" />
      <NoteItem title="Lorem ipsum dolor sit amet consectetur" />
      <NoteItem title="Hic perferendis at repellendus fuga" />
      <NoteItem title="In molestiae optio aspernatur repudiandae" />
    </div>
  );
};

export default App;
