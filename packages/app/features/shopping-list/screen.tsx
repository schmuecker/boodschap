import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  Tabs,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { TabNavigation } from 'app/components/tab-navigation'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function ShoppingListScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack space="$4" maw={600}>
      <H1 onPress={console.log}>Shopping List</H1>
      <Separator />
    </YStack>
  )
}
