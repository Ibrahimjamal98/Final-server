const express = require("express");

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  uploadUserImage,
  resizeImage,
} = require("../services/userService");

const router = express.Router();

router.route("/").get(getUsers).post(uploadUserImage, resizeImage, createUser);
router
  .route("/:id")
  .get(getBrandValidator, getUser)
  .put(authService.protect, uploadUserImage, resizeImage, updateUser)
  .delete(authService.protect, authService.allowedTo("admin"), deleteUser);

module.exports = router;
