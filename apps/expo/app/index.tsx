import { TabNavigation } from 'app/components/tab-navigation'
import { ShoppingListScreen } from 'app/features/shopping-list/screen'
import { RecipesScreen } from 'app/features/recipes/screen'
import { Stack } from 'expo-router'
import { TAB_IDS } from 'app/components/tab-navigation/types'
import React from 'react'
import { YStack } from '@my/ui'

export default function Screen() {
  const [activeTab, setActiveTab] = React.useState<TAB_IDS>(TAB_IDS.SHOPPING_LIST)
  console.log('hi')
  console.log({ activeTab, TAB_IDS })
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Boodschap',
        }}
      />
      <YStack
        position="absolute"
        bottom={'$6'}
        zIndex={'$zIndex.1'}
        left={0}
        right={0}
        ai={'center'}
      >
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </YStack>
      <YStack f={1} p="$4">
        {activeTab === TAB_IDS.RECIPES && <RecipesScreen />}
        {activeTab === TAB_IDS.SHOPPING_LIST && <ShoppingListScreen />}
      </YStack>
    </>
  )
}
