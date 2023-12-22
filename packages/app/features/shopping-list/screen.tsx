import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  Stack,
  Tabs,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp, Plus } from '@tamagui/lucide-icons'
import { TabNavigation } from 'app/components/tab-navigation'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function ShoppingListScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack space="$4" maw={600} p={'$4'} fullscreen>
      <H1>Shopping List</H1>
      <Separator />
      <Stack position="absolute" right={'$4'} bottom={'$13'}>
        <Button circular size={'$6'}>
          <Plus />
        </Button>
      </Stack>
    </YStack>
  )
}
