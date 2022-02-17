import { useRef, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { handleImgError } from "../../../../utils/sending-media/utils";

function ImageBubble(props) {
  const { photo, style, fullview, index } = props;
  const [loading, setLoading] = useState(true);
  const count = useRef(3);

  return (
    <>
      {loading && (
        <div
          className={style}
          style={{
            backgroundColor: "rgb(240,240,241)",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            color="secondary"
            style={{
              position: "relative",
              zIndex: 2,
              color: "yellowgreen",
            }}
            size="1.5rem"
          />
        </div>
      )}
      <img
        src={photo}
        hidden={loading}
        className={style}
        onClick={(e) => fullview(index, e.target.src)}
        onError={(e) => handleImgError(e, count, photo)}
        onLoad={() => {
          setLoading(false);
        }}
      />
    </>
  );
}

export default ImageBubble;
