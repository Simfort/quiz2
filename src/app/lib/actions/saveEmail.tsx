"use server";
import fs from "fs";
import queue from "../queue.json" with {type:"json"}
import { resolve } from "path";

export default async function saveEmail(fd:FormData) {
  try {
    const email=fd.get("email")! as string
    const newQueue=queue.emails as string[]
    newQueue.push(email)
    console.log(email)
    await fs.writeFile(resolve(`src/app/lib/queue.json`),JSON.stringify({
      cards:queue.cards,
      emails:newQueue,
    }),(err)=>{
      console.log(err)
    })

  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
}