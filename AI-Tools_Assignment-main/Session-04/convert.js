const sharp = require("sharp");
const input = "src/assets/food-scooter.png";
const output = "src/assets/food-scooter.webp";

sharp(input)
  .resize(512, 512)
  .webp({ quality: 75 })
  .toFile(output)
  .then(() => {
    console.log("Image converted successfully! ->", output);
  })
  .catch((err) => {
    console.error(err);
  });
