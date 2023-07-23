"use client";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import isYouTubeUrl from "../utils/isYouTubeUrl";
import axios from "axios";
import Loader from "./Loader";
import Link from "next/link";

export default function MainModal() {
  const [urlInput, setUrlInput] = useState("");
  const [requestSent, setReuestSent] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [audioTitle, setAudioTitle] = useState("");

  const handleChange = async (e) => {
    setAudioUrl("");
    setUrlInput(() => e.target.value);
    document.getElementById("serverMsg").textContent = "";

    const isCorrectUrl = isYouTubeUrl(e.target.value);

    !isCorrectUrl &&
      (document.getElementById("error-msg").style.display = "block");

    isCorrectUrl &&
      (document.getElementById("error-msg").style.display = "none") &&
      setReuestSent(true);

    isCorrectUrl &&
      axios
        .post("/api/getmp3url", {
          videoUrl: e.target.value,
        })
        .then(({ data }) => {
          setReuestSent(false);

          if (data.url) {
            setAudioUrl(data.url);
            setAudioTitle(data.title);
            document.getElementById("serverMsg").textContent = "";
          } else {
            setAudioUrl("");
            document.getElementById("serverMsg").textContent = data.msg;
          }
        });
  };

  return (
    <Paper sx={{ minHeight: "30rem" }}>
      <h1 className="text-3xl text-center my-3 pt-4">OnlineMP3Grab</h1>
      <FormControl fullWidth sx={{ paddingX: 7, paddingY: 1 }}>
        <Input
          sx={{ width: "100%" }}
          id="standard-basic"
          placeholder="Paste video url here..."
          variant="standard"
          type="text"
          autoFocus={true}
          endAdornment={
            <InputAdornment position="end">
              <ClearIcon
                onClick={() => setUrlInput("")}
                sx={{ cursor: "pointer" }}
              />
            </InputAdornment>
          }
          value={urlInput}
          onChange={(e) => handleChange(e)}
        />
      </FormControl>

      <p id="error-msg" className="hidden">
        Please paste correct url to download audio....
      </p>
      <p id="serverMsg" className=""></p>

      <div className="flex justify-center">
        {requestSent ? (
          <Loader />
        ) : audioUrl !== "" ? (
          <div>
            <Link
              href={`${audioUrl}`}
            //   href={`/api/download?audioUrl=${audioUrl}`}
              target="_blank"
            //   download={`${audioTitle}.mp3`}
            >
              <div className="flex justify-center">
                <Button>Download mp3</Button>
              </div>
            </Link>
            <iframe src={audioUrl}></iframe>
          </div>
        ) : (
          ""
        )}
      </div>
    </Paper>
  );
}
