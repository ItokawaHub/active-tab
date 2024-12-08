import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useState } from 'react';
import { Pressable } from 'react-native';

export default function TabLayout() {
  const [showTabBar, setShowTabBar] = useState(true);

  const toggleTabBar = () => {
    setShowTabBar(!showTabBar);
  };

  return (
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
            <Pressable 
              onPress={toggleTabBar}
              style={{ marginRight: 15 }}
            >
              <FontAwesome 
                name={showTabBar ? 'eye-slash' : 'eye'} 
                size={24} 
              />
            </Pressable>
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
