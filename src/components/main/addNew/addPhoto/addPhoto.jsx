import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addImages } from '../../../../redux/products/operations';
import { rotateImage } from '../../../../lib/rotateImage';
import { Container, MainBlock, ImagesBlock } from './addPhoto.styled';
import { ImageBlock, IconDelete, IconRotate } from './addPhoto.styled';
import { SubmitButton, UploadButton, Input } from './addPhoto.styled';
import { IconImage, Text } from './addPhoto.styled';
import { Switch, FormControlLabel, FormGroup } from '@mui/material';

export default function AddPhoto({ id, onSuccess }) {
  const [fileList, setFileList] = useState([]);
  const [deleteBG, setDeleteBG] = useState(true);
  const [trim, setTrim] = useState(true);

  const imagePicker = useRef(null);
  const dispatch = useDispatch();

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

  const handleAddImages = async () => {
    if (fileList.length) {
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append(`images`, file);
      });
      formData.append('id', id);
      formData.append('deleteBG', deleteBG);
      formData.append('trim', trim);
      const response = await dispatch(addImages(formData));
      if (response.meta.requestStatus === 'rejected') return;
    }
    setFileList([]);
    onSuccess();
    setFileList([]);
  };

  return (
    <>
      <Container component={'section'}>
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
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={deleteBG}
                  onChange={e => setDeleteBG(e.target.checked)}
                />
              }
              label="Delete background"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={trim}
                  onChange={e => setTrim(e.target.checked)}
                />
              }
              label="Trim"
            />
          </FormGroup>
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
                    width={'100%'}
                    height={216}
                    style={{ objectFit: 'contain' }}
                  />
                  <IconDelete onClick={() => removeImage(image.name)} />
                  <IconRotate onClick={() => handleRotateRight(image)} />
                </ImageBlock>
              );
            })}
          </ImagesBlock>
        )}
      </Container>
      <SubmitButton variant="contained" onClick={handleAddImages}>
        Add images
      </SubmitButton>
    </>
  );
}
