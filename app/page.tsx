"use client"
import SearchTable from "@/components/SearchTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
   <div className="w-[70%] mx-auto mt-20">
     <SearchTable />
   </div>
  )
}
