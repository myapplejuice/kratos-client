import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerShown: false,
          statusBarBackgroundColor: "rgb(29,29,29)",
          navigationBarColor: "rgb(29, 29, 29)",
          headerStyle: { backgroundColor: "rgb(29, 29, 29)" },
        }}
      />
      <Stack.Screen name="login"
        options={{
          headerShown: false,
          statusBarBackgroundColor: "rgb(29,29,29)",
          navigationBarColor: "rgb(29, 29, 29)",
          headerStyle: { backgroundColor: "rgb(29, 29, 29)" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen name="registeration/index"
        options={{
          statusBarBackgroundColor: "#F25B36",
          navigationBarColor: "rgb(29, 29, 29)",
          headerStyle: { backgroundColor: "#F25B36" },
          headerTintColor: "white",
          headerTitle: "Registeration"
        }}
      />
    </Stack>
  )
}
