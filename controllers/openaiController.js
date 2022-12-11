const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt, size } = req.body;
  const small = '256x256';
  const medium = '512x512';
  const large = '1024x1024';
  const ImageSize =
    size === 'Medium' ? 'medium' : size === 'Large' ? 'large' : 'small';

  try {
    const response = await openai.createImage({
      prompt: 'a white siamese cat', // type of image
      n: 1, // no of image
      size: ImageSize, // size of the image
    });
    const image_url = response.data.data[0].url; // result of image
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }

  res.status(200).json({
    success: true,
    data: image_url,
  });
};

module.exports = { generateImage };
