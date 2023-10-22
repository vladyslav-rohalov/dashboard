export function rotateImage(image, angle = 90) {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = URL.createObjectURL(image);

    img.onload = function () {
      if (angle === 90 || angle === -90) {
        canvas.width = img.height;
        canvas.height = img.width;
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
      }

      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((angle * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);

      canvas.toBlob(blob => {
        const rotatedImage = new File([blob], image.name, { type: image.type });
        resolve(rotatedImage);
      }, image.type);
    };
  });
}
