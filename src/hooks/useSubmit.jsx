import { useState } from "react";
import emailjs from "emailjs-com";
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Custom hook to simulate an API call — always returns success
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await emailjs.send(
        "service_cr9rtrb",
        "template_yc6p1bs",
        data,
        "_aU18h02kJ8H4ijRe"
      );

      setResponse({
        type: "success",
        message: `Thanks for contacting ${data.firstName}, I will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again later!",
      });
    } finally {
      setLoading(false);
    }
  };
  return { isLoading, response, submit };
};

export default useSubmit;
