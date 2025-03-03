"use client";
import React from "react";
import { TodoProvider } from "@/Provider/TodoContext";


import Form from "@/components/Form";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import TODOList from "@/components/TODOList";


export default function Home() {
  return (
    <TodoProvider>
        <div className="wrapper">
            <Header />
            <TODOHero />
            <Form />
            <TODOList/>
       </div>
    </TodoProvider>
   
  );
}
