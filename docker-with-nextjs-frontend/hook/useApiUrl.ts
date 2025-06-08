export const useApiUrl = (): string => {
  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1');

  return isLocalhost
    ? (process.env.NEXT_PUBLIC_API_URL_LOCAL as string)
    : (process.env.NEXT_PUBLIC_API_URL_DOCKER as string);
};
