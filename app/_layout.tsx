import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    // スタックとかについての参照先
    // https://docs.expo.dev/router/advanced/stack/
    <Stack>
      {/* (tabs)ディレクトリのデフォルトのヘッダーを非表示 */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* (tabs2)ディレクトリのデフォルトのヘッダーを非表示 */}
      <Stack.Screen name="(tabs2)" options={{ headerShown: false }} />
    </Stack>
  );
}
