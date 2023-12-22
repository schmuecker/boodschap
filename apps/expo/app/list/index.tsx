import { H1 } from '@my/ui/types'
import { ShoppingListScreen } from 'app/features/shopping-list/screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Shopping List',
        }}
      />
      <ShoppingListScreen />
    </>
  )
}
