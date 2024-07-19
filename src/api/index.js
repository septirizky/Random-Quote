import axios from "axios";

export const getRandomQuote = async () => {
  try {
    const { data } = await axios.get("https://api.quotable.io/random");

    return data;
  } catch (err) {
    console.error(err);
  }
};
