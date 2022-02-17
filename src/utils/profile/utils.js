import {
  updateUserDisplayName,
  updateUserStatusMessage,
  updateUserphoto,
} from "../../api/mutations";
import { Storage } from "aws-amplify";
import aws_exports from "./../../aws-exports";

const bucket = aws_exports.aws_user_files_s3_bucket;
const region = aws_exports.aws_user_files_s3_bucket_region;

export async function handleUpdateChange(field, id, changed) {
  if (field === "display-name") {
    await updateUserDisplayName(id, changed);
  } else if (field === "status-message") {
    await updateUserStatusMessage(id, changed);
  }
}

export async function handleUpdateUserPhoto(id, file, type, user) {
  //image resizing
  const ftype = file.type.split("/")[1];
  const path =
    type === "profile"
      ? `${id}/profile-pic/${file.name}`
      : `${id}/cover-pic/${file.name}`;
  console.log(user);
  const del_path =
    type === "profile"
      ? user.profilePhoto
        ? user.profilePhoto.key
        : false
      : user.coverPhoto
      ? user.coverPhoto.key
      : false;
  if (del_path) await Storage.remove(del_path);
  const location = await Storage.put(path, file, {
    contentType: file.type,
  })
    .then((data) => data)
    .catch(() => {
      return false;
    });
  console.log(location);
  if (location) {
    console.log(path);
    const obj = { bucket, region, key: path };
    console.log(obj);
    await updateUserphoto(id, obj, type);
    return [
      `https://${bucket}.s3.${region}.amazonaws.com/public/${obj.key}`,
      bucket,
      region,
      path,
    ];
  }
  return false;
}

export function getImg(user, type) {
  if (type === "profile") {
    return `https://${user.profilePhoto.bucket}.s3.${user.profilePhoto.region}.amazonaws.com/public/${user.profilePhoto.key}`;
  }
  return `https://${user.coverPhoto.bucket}.s3.${user.coverPhoto.region}.amazonaws.com/public/${user.coverPhoto.key}`;
}
