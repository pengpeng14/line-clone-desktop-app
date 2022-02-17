import MyMessageStyles from "../../../../styles/MyMessageBubbleStyle";
import TheirMessageStyles from "../../../../styles/TheirMessageBubbleStyle";
import ImageBubble from "./Image";

function PhotosBubble(props) {
  const { photos, handleFullView, type, setPhotos } = props;

  const classes =
    type === "my-message" ? MyMessageStyles() : TheirMessageStyles();

  function fullview(index, src) {
    photos[index] = src;
    setPhotos(photos);
    handleFullView(index);
  }

  return (
    <>
      {photos &&
        photos.map((_, index) =>
          photos.length % 2 === 0
            ? index % 2 === 0 && (
                <div key={index} className={classes.container}>
                  <ImageBubble
                    key={index}
                    photo={photos[index]}
                    style={classes.pictures}
                    fullview={fullview}
                    index={index}
                  />
                  {index !== photos.length - 1 && (
                    <ImageBubble
                      key={index + 1}
                      photo={photos[index + 1]}
                      style={classes.pictures}
                      fullview={fullview}
                      index={index + 1}
                    />
                  )}
                </div>
              )
            : (index === 0 && (
                <div key={index} className={classes.container}>
                  <ImageBubble
                    key={index}
                    photo={photos[index]}
                    style={classes.pic_zero}
                    fullview={fullview}
                    index={index}
                  />
                </div>
              )) ||
              (index % 2 !== 0 && (
                <div key={index} className={classes.container}>
                  <ImageBubble
                    key={index}
                    photo={photos[index]}
                    style={classes.pictures}
                    fullview={fullview}
                    index={index}
                  />
                  {index !== photos.length - 1 && (
                    <ImageBubble
                      key={index + 1}
                      photo={photos[index + 1]}
                      style={classes.pictures}
                      fullview={fullview}
                      index={index + 1}
                    />
                  )}
                </div>
              ))
        )}
    </>
  );
}

export default PhotosBubble;
