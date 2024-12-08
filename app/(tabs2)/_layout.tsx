import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

export default function TabLayout() {

  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="page3"
        options={{
          title: 'page3',
          tabBarIcon: ({ color }) => <AntDesign name="staro" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="page4"
        options={{
          title: 'page4',
          tabBarIcon: ({ color }) => <AntDesign name="staro" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="page5"
        options={{
          title: 'page5',
          tabBarIcon: ({ color }) => <AntDesign name="staro" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
