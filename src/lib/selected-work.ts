import type { ServiceGalleryItem } from "@/components/service-gallery-carousel";
import { cloudinaryVideo } from "@/lib/cloudinary";

export const selectedWork: ServiceGalleryItem[] = [
  {
    image: "/media/finish-interiors/02.jpg",
    alt: "Finished living room with a panel wall and a white ceiling.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/04.jpg",
    alt: "Completed office interior with a suspended ceiling and wall panels.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/14.jpg",
    alt: "Formal living room with a detailed ceiling and curtains.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/18.jpg",
    alt: "Staircase with a panelled wall and concealed lighting.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/17.jpg",
    alt: "Cathedral ceiling with a feature cross.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/19.jpg",
    alt: "White ceiling with concealed linear lighting and a pendant.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/20.jpg",
    alt: "Ceiling with concealed LED lighting and a central pendant.",
    note: "Completed work",
  },
  {
    image: "/media/selected-work/01.jpg",
    alt: "Completed brick duplex with a gated frontage.",
    note: "Completed work",
  },
  {
    image: "/media/selected-work/02.jpg",
    alt: "Completed residence with ornate facade detailing.",
    note: "Completed work",
  },
  {
    image: "/media/selected-work/03.jpg",
    alt: "Completed white residential building with a gated frontage.",
    note: "Completed work",
  },
  {
    image: "/media/selected-work/04.jpg",
    alt: "Completed residence with a red roof and landscaped frontage.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/video-04.jpg",
    video: cloudinaryVideo("ephtech/videos/finish-interiors/04"),
    alt: "Completed cathedral ceiling video.",
    note: "Completed work",
  },
  {
    image: "/media/finish-interiors/video-06.jpg",
    video: cloudinaryVideo("ephtech/videos/finish-interiors/06"),
    alt: "Completed kitchen and ceiling video.",
    note: "Completed work",
  },
  {
    image: "/media/selected-work/video-01.jpg",
    video: cloudinaryVideo("ephtech/videos/selected-work/exterior"),
    alt: "Completed residential exterior video.",
    note: "Completed work",
  },
];
