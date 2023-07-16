import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Todoform } from "./components/TodoformLocalStorage";

export default function App() {
  return (
    <main className="bg-slate-900 w-full h-screen flex items-center justify-between">
      <BrowserRouter>
        <Routes>
          <Route index element={<Todoform />} />
        </Routes>
      </BrowserRouter>
      <div className="absolute bottom-0">
        <div className="w-[400px]">
          <img
            className="w-full h-full object-cover"
            src="/todoicon.svg"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-end absolute text-md bottom-0 right-5 text-purple-600 font-semibold">
          by: Riejan Evangelista
      </h1>
    </main>
  );
}
