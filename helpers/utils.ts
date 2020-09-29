export const isBrowser = () => typeof window !== 'undefined';

export const consoleWarning = (error: Error) =>
  console.warn(`warning ${error.message}, you're probably not running this in the browser`);
