import { Storage } from "aws-amplify";
import aws_exports from "./../../aws-exports";

export async function uploadFiles(files) {
  const bucket = aws_exports.aws_user_files_s3_bucket;
  const region = aws_exports.aws_user_files_s3_bucket_region;
  const responsesPromise = files.map(async (file) => {
    return Storage.put(file.name, file, {
      contentType: file.type,
    }).then(
      (data) =>
        `https://${bucket}-resized.s3.${region}.amazonaws.com/public/${data.key}`
    );
  });
  console.log("uploading files");

  const responses = await Promise.all(responsesPromise)
    .then((resolve) => [...resolve])
    .catch((err) => console.log("Error to upload to the bucket: ", err));

  return responses;
}

export function changeURLImg(resizedPath) {
  const rPath = resizedPath.split("-resized");
  const path = rPath.join("");
  return path;
}

export async function handleImgError(e, count, photo) {
  console.log(count.current);
  if (count.current <= 0) {
    e.target.src = changeURLImg(photo);
    return;
  }
  await sleep(500);
  count.current -= 1;
  e.target.src = photo;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
