import { useLocalSearchParams } from "expo-router";

export function useParsedParams<T = any>(key: string): T | null {
  const params = useLocalSearchParams();

  if (!params[key]) return null;

  try {
    return JSON.parse(params[key] as string) as T;
  } catch (error) {
    console.warn(`Failed to parse param "${key}":`, error);
    return null;
  }
}
