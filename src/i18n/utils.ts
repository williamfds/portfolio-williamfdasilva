export async function getMessages(locale: string) {
  try {
    const messages = await import(`../locales/${locale}.json`);
    return messages.default;
  } catch {
    return null;
  }
}
