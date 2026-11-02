"use client";

import { VideoProps } from "@/types";
import { getCldVideoUrl } from "next-cloudinary";

export default function VideoView({
  videoSrc,
  height,
  width,
  classNames,
  autoplay,
  muted,
  playsinline,
  loop,
  controls,
  captionsSrc,
  transformations,
}: VideoProps) {
  const videoUrl = getCldVideoUrl({
    src: videoSrc,
    crop: transformations.crop,
    aspectRatio: transformations.aspect,
    width: transformations.width,
    height: transformations.height,
    quality: "auto",
    format: "mp4",
  });

  const posterUrl = getCldVideoUrl({
    src: videoSrc,
    crop: "limit",
    width: 1400,
    format: "jpg",
  });

  return (
    <video
      className={classNames}
      width={width}
      height={height}
      poster={posterUrl}
      autoPlay={autoplay === "always" || autoplay === "true"}
      muted={muted}
      loop={loop}
      playsInline={playsinline}
      controls={controls}
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={videoUrl} type="video/mp4" />
      {captionsSrc && (
        <track
          kind="captions"
          src={captionsSrc}
          srcLang="en"
          label="English"
        />
      )}
    </video>
  );
}
