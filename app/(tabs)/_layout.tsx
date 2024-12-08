import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export default function TabLayout() {
  const [showTabBar, setShowTabBar] = useState(true);

  const toggleTabBar = () => {
    setShowTabBar(!showTabBar);
  };

  return (
    // タブとかについての参照先
    // https://docs.expo.dev/router/advanced/tabs/
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
      tabBarStyle: {
        display: showTabBar ? 'flex' : 'none'
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'ホーム',
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
              <Text style={{ marginRight: 8 }}>
                {showTabBar ? 'タブを非表示' : 'タブを表示'}
              </Text>
              <Pressable onPress={toggleTabBar}>
                <FontAwesome 
                  name={showTabBar ? 'eye-slash' : 'eye'} 
                  size={24} 
                />
              </Pressable>
            </View>
          ),
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="page1"
        options={{
          title: 'page1',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          title: 'page2',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
