const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

/**
 * Sends the contact form's values as a message to your Telegram chat.
 * @param {{ name: string, email: string, message: string }} formValues
 * @returns {Promise<object>} the parsed Telegram API response
 */
export const sendTelegramMessage = async ({ name, email, message }) => {
  const text =
    "📬 New Portfolio Contact\n\n" +
    `👤 Name: ${name}\n` +
    `✉️ Email: ${email}\n\n` +
    `💬 Message:\n${message}`;

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    },
  );

  const data = await response.json();

  if (!response.ok || !data.ok) {
    throw new Error(data.description || "Failed to send Telegram message.");
  }

  return data;
};
