"use server";
import fs from "fs";
import queue from "../queue.json" with {type:"json"}
import { resolve } from "path";

export default async function saveCard(fd: FormData) {
  try {
    const card = fd.get("card") as string;
    const newQueue=queue.cards 
    newQueue.push(card)

    await fs.writeFile(resolve(`src/app/lib/queue.json`),JSON.stringify({
      cards:newQueue,
      emails:queue.emails,
    }),(err)=>{
      console.log(err)
    })
    console.log(card)
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}