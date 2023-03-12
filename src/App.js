import React from 'react';

// function App() {
//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800">
//         <div className="flex items-center justify-center mt-8">
//           <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
//             <path
//               d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2 2v12h10V5H7zm0 2l5 3-5 3v-6zm10 6l-5-3 5-3v6z"
//             ></path>
//           </svg>
//           <span className="mx-3 text-white font-semibold text-lg">My Notes</span>
//         </div>
//         <nav className="mt-10">
//           <a href="#" className="block py-2.5 px-4 hover:bg-gray-700 text-white font-semibold">
//             All Notes
//           </a>
//           <a href="#" className="block py-2.5 px-4 hover:bg-gray-700 text-white font-semibold">
//             Important
//           </a>
//           <a href="#" className="block py-2.5 px-4 hover:bg-gray-700 text-white font-semibold">
//             Completed
//           </a>
//         </nav>
//       </div>

//       {/* Content area */}
//       <div className="flex flex-col w-full">
//         {/* Toolbar */}
//         <div className="bg-white border-b border-gray-200 px-4 py-3">
//           <div className="flex items-center justify-between">
//             <input
//               className="border border-gray-300 py-2 px-3 rounded-md w-full"
//               type="text"
//               placeholder="Search notes"
//             />
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//               Add Note
//             </button>
//           </div>
//         </div>

//         {/* Preview/edit area */}
//         <div className="flex flex-1 h-full overflow-hidden">
//           <div className="w-1/3 bg-gray-100 overflow-auto">
//             {/* Note list */}
//             <ul className="divide-y divide-gray-200">
//               <li className="py-4 px-6 cursor-pointer hover:bg-gray-50">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">Note Title</span>
//                   <span className="text-gray-500 text-sm">2/1/2022</span>
//                 </div>
//                 <p className="text-gray-500">Note preview text...</p>
//               </li>
//               {/* more notes... */}
//             </ul>
//           </div>
//           <div className="flex-1 bg-white p-10">
//             <h2 className="text-xl font-medium mb-4">Note Title</h2>
//             <textarea className="border border-gray-300 rounded-md w-full h-full p-2"></textarea>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, title: "Note 1", content: "This is the first note" },
    { id: 2, title: "Note 2", content: "This is the second note" },
  ]);

  const [selectedNote, setSelectedNote] = useState(notes[0]);

  const handleNoteSelect = (note) => {
    setSelectedNote(note);
  };

  const handleNoteSave = (note) => {
    setNotes(
      notes.map((n) => {
        if (n.id === note.id) {
          return { ...n, ...note };
        }
        return n;
      })
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <div className="p-4 font-bold">Notes</div>
        <div className="overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note.id}
              className={`p-4 cursor-pointer ${
                selectedNote.id === note.id && "bg-gray-700"
              }`}
              onClick={() => handleNoteSelect(note)}
            >
              {note.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="mb-4">
          <input
            type="text"
            className="px-2 py-1 w-full border-gray-400 border rounded"
            value={selectedNote.title}
            onChange={(e) =>
              setSelectedNote({
                ...selectedNote,
                title: e.target.value,
              })
            }
          />
        </div>
        <div>
          <textarea
            className="px-2 py-1 w-full border-gray-400 border rounded h-64"
            value={selectedNote.content}
            onChange={(e) =>
              setSelectedNote({
                ...selectedNote,
                content: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
            onClick={() => handleNoteSave(selectedNote)}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded"
            onClick={() =>
              setNotes(notes.filter((n) => n.id !== selectedNote.id))
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
