"use client"
/* Importação de componentes */
import { EmojiRating } from "@/components/EmojiRating";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <EmojiRating rate={4.2} />
    </div>
  );
}

export default Page;