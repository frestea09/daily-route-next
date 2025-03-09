"use client";
import { BelajarFormHandling } from "@/components/BelajarFormHandling/BelajarFormHandling";
import { BelajarFormHandlingTwo } from "@/components/BelajarFormHandlingTwo/BelajarFormHandlingTwo";
import { BelajarFragment } from "@/components/BelajarFragments/BelajarFragment";
import { BelajarRenderList } from "@/components/BelajarRenderList/BelajarRenderlist";
import { BelajarRenderListProps } from "@/components/BelajarRenderList/BelajarRenderListProps.type";
import { BelajarUseCallBack } from "@/components/BelajarUseCallBack/BelajarUseCallBack";
import { BelajarUserEffect } from "@/components/BelajarUseEffect/BelajarUseEffect";
import { useState } from "react";

export default function Home() {
  const handleEvenet = () => {
    alert("hello world");
  };
  const [isLogin, setIsLogin] = useState(false);
  const handlingLogin = () => {
    setIsLogin(!isLogin);
  };
  const inputData = { isLogin, handlingLogin };
  const listData = [{ name: "ilman", description: "gnateng" }];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <BelajarUseCallBack />
    </div>
  );
}
