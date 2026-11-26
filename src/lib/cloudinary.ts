const CLOUDINARY_CLOUD_NAME = "drikcqdzp";

export function cloudinaryVideo(publicId: string) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload/q_auto,f_auto/${publicId}.mp4`;
}
