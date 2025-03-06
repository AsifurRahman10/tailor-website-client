import axios from "axios";

export const uploadImage = async (image) => {
  console.log(image);
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    "https://api.imgbb.com/1/upload?expiration=600&key=0e19a3d519d57f6985d8f61637db8a0a",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return data.data.url;
};
