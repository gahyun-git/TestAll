"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inputText, setInputText] = useState("");

  return (
    <main className="p-4">
      <h1 className="text-2xl mb-4">hello world!</h1>
    </main>
  );
}