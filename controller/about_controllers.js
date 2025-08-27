const { post } = require("../routing/about_route");

const aboutController = {
  getAboutPage: (req, res) => {
    res.status(200).json({ message: "Ini adalah tentang aplikasi.", data: [] });
  },

  postAboutPage: (req, res) => {
    res.status(200).json({ message: "Data berhasil dimasukkan.", data: [] });
  },
};

module.exports = aboutController;
