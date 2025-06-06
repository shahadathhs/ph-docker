import { v2 as cloudinary } from "cloudinary";
import { ENVConfig } from "./configuration";

cloudinary.config({
  cloud_name: ENVConfig.cloudinary_cloud_name,
  api_key: ENVConfig.cloudinary_api_key,
  api_secret: ENVConfig.cloudinary_api_secret,
});

export const cloudinaryUpload = cloudinary;
