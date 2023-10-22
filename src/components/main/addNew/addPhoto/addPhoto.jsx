import { useState, useRef } from 'react';
import { rotateImage } from '../../../../lib/rotateImage';
import { Container, MainBlock, ImagesBlock } from './addPhoto.styled';
import { ImageBlock, IconDelete, IconRotate } from './addPhoto.styled';
import { SubmitButton, UploadButton, Input } from './addPhoto.styled';
import { IconImage, Text } from './addPhoto.styled';

export default function AddPhoto({ id }) {
  const [fileList, setFileList] = useState([]);
  const imagePicker = useRef(null);

  const handlePick = () => {
    imagePicker.current.click();
  };

  const handleUpload = e => {
    const files = e.target.files;
    Object.values(files).forEach(file => setFileList(prev => [...prev, file]));
  };

  const removeImage = image => {
    setFileList(fileList.filter(n => n.name !== image));
  };

  const handleRotateRight = image => {
    rotateImage(image)
      .then(rotatedImage => {
        setFileList(
          fileList.map(n => {
            if (n.name === image.name) return rotatedImage;
            return n;
          })
        );
      })
      .catch(error => {
        console.error('rotate error', error);
      });
  };
  return (
    <>
      <Container>
        <MainBlock>
          <Text>Upload images for the product</Text>

          <Input
            ref={imagePicker}
            type="file"
            name="images"
            onChange={e => {
              handleUpload(e);
            }}
            multiple
            accept="image/*,.png,.jpeg,"
          />
          <UploadButton
            variant="contained"
            onClick={handlePick}
            type="button"
            startIcon={<IconImage />}
          >
            Upload
          </UploadButton>
        </MainBlock>

        {fileList.length > 0 && (
          <ImagesBlock component="ul">
            {fileList.map((image, index) => {
              return (
                <ImageBlock component="li" key={image.name + index}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="product"
                    width={120}
                    height={120}
                  />
                  <IconDelete onClick={() => removeImage(image.name)} />
                  <IconRotate onClick={() => handleRotateRight(image)} />
                </ImageBlock>
              );
            })}
          </ImagesBlock>
        )}
      </Container>
      <SubmitButton variant="contained">Add images</SubmitButton>
    </>
  );
}
