import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack>
      {/* (tabs)ディレクトリのデフォルトのヘッダーを非表示 */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs2)" options={{ headerShown: false }} />
    </Stack>
  );
}
