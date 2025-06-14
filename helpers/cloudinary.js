const cloudinary = require("cloudinary").v2;

const uploadToCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  // console.log("req file <<<", filePath);
  const imageBase64 = `data:${
    filePath.mimetype
  };base64,${filePath.buffer.toString("base64")}`;
  // console.log("ini 64 <<<", imageBase64);

  const uploadResult = await cloudinary.uploader.upload(imageBase64);
  return uploadResult;
};

module.exports = { uploadToCloudinary };
