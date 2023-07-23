const ytdl = require("ytdl-core");
const fs = require("fs");

export async function GET(req, res) {
  const request = await req.json();
  try {
    //   Replace 'YOUR_AUDIO_URL' with the actual URL of the audio file you want to download
    let audioUrl = req;
    console.log(audioUrl);
    //   const response = await axios.get(audioUrl, { responseType: "stream" });

    // //   Set the appropriate headers for the response
    //   res.setHeader("Content-disposition", "attachment; filename=audio.mp3");
    //   res.setHeader("Content-type", "audio/mpeg");

    // //   Pipe the audio stream to the response
    //   response.data.pipe(res);
    return new Response(JSON.stringify(request));
  } catch (error) {
    console.error("Error while downloading audio:", error);
    res.status(500).end();
  }
  // return NextResponse.json({hey:"hiiii"})
}
