import { H5, SizableText, Tabs, XStack, YStack } from '@my/ui'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { TAB_IDS } from './types'
import { Carrot, ListChecks } from '@tamagui/lucide-icons'

const TABS = {
  [TAB_IDS.RECIPES]: { label: 'Recipes' },
  [TAB_IDS.SHOPPING_LIST]: { label: 'Shopping List' },
} as const

type TabNavigationProps = {
  activeTab: keyof typeof TABS
  onTabChange: (tab: keyof typeof TABS) => void
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <Tabs value={activeTab} onValueChange={onTabChange}>
      <Tabs.List width={'100%'} justifyContent="space-evenly">
        <Tabs.Tab value={TAB_IDS.RECIPES} width={'50%'}>
          <XStack ai="center" space="$2">
            <Carrot size={18} />
            <SizableText>Recipes</SizableText>
          </XStack>
        </Tabs.Tab>
        <Tabs.Tab value={TAB_IDS.SHOPPING_LIST} width={'50%'}>
          <XStack ai="center" space="$2">
            <ListChecks size={18} />
            <SizableText>Shopping List</SizableText>
          </XStack>
        </Tabs.Tab>
      </Tabs.List>
    </Tabs>
  )
}
