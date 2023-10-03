const path = require('path');

const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

  let uploadPath = path.resolve(__dirname, '../public/images/upload');

  let extName = path.extname(fileObject.name);
  let baseName = path.basename(fileObject.name, extName);

  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  // Use the mv() method to place the file somewhere on your server
  try {
    await fileObject.mv(finalPath);
    return {
      status: 'success',
      path: finalName,
      error: null,
    };
  } catch (error) {
    console.log('check error :', error);
    return {
      status: false,
      path: null,
      error: JSON.stringify(error),
    };
  }
};

module.exports = { uploadSingleFile };
