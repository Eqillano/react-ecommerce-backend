const cloudinary = require("cloudinary");

// config
cloudinary.config({
  cloud_name: "dx2gku6h5",
  api_key: "638498189749115",
  api_secret: "M5NErObf-eIWoqdX3IEoBkMUQ60",
});

// req.files.file.path
exports.upload = async (req, res) => {
  let result = await cloudinary.uploader.upload(req.body.image, {
    public_id: `${Date.now()}`,
    resource_type: "auto", // jpeg, png
  });
  res.json({
    public_id: result.public_id,
    url: result.secure_url,
  });
};

exports.remove = (req, res) => {
  let image_id = req.body.public_id;

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false, err });
    res.send("ok");
  });
};
