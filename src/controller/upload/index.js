const uploadFileController = (req, res) => {
  console.log(req.file);
  res.json({
    message: "Successfully uploaded file",
  });
};

export default uploadFileController;
