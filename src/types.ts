export interface ImageProps {
  imageSrc: string;
  height: number;
  width: number;
  alt: string;
  classNames: string;
}
export type CloudinaryCrop =
  | "auto"
  | "crop"
  | "fill"
  | "fill_pad"
  | "fit"
  | "imagga_crop"
  | "imagga_scale"
  | "lfill"
  | "limit"
  | "lpad"
  | "mfit"
  | "mpad"
  | "pad"
  | "scale"
  | "thumb";

export interface VideoProps {
  videoSrc: string;
  height: number;
  width: number;
  autoplay:string;
  muted:boolean;
  loop:boolean;
  controls:boolean;
  playsinline:boolean;
  classNames: string;
  captionsSrc?: string;
  transformations: {
    crop: CloudinaryCrop;
    aspect: string;
    width: number;
    height: number;
  }
}

export interface ContactUsEmailProps {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}