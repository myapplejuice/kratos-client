import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="registeration/index"
        options={{
          headerStyle: { backgroundColor: "#F25B36" },
          headerTintColor: "white",
          headerTitle: "Registeration",
          headerTitleAlign: "center",
          headerLeft: () => null,
        }}
      />
    </Stack>
  )
}
