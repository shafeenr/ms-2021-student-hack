const axios = require("axios").default;

const SUBSCRIPTION_KEY = "KEY";
const TRANSLATE_ENDPOINT =
  "https://api.cognitive.microsofttranslator.com/translate";
const LOCATION = "eastus";

/**
 * Translates messages to specified language.
 * @param {string[]} messages
 * @param {(messages: string) => {}} setMessages
 * @param {string} language
 */
export async function setTranslations(
  messages = [],
  setMessages = (message) => {},
  language = ""
) {
  const response = await axios.post(
    TRANSLATE_ENDPOINT,
    messages.map((message) => ({ text: message })),
    {
      headers: {
        "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
        "Ocp-Apim-Subscription-Region": LOCATION,
        "Content-type": "application/json",
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: [language],
      },
      responseType: "json",
    }
  );

  const results = response.data.map((x) => x.translations[0].text);

  setMessages(results);
}
