import { NextResponse } from "next/server";
const ytdl = require("ytdl-core");
const fs = require("fs");

export async function POST(req, res, next) {
  const { videoUrl } = await req.json();

  // const videoUrl = "https://youtu.be/JP6lOO14-K4";
  // console.log(videoUrl);
  try {
    const info = await ytdl.getInfo(videoUrl);
    const { url } = ytdl.chooseFormat(info.formats, { filter: "audioonly" });

    return NextResponse.json({ url ,title:info.videoDetails.title});

  } catch (error) {
    return NextResponse.json({ msg: error.message });
  }
}




    





