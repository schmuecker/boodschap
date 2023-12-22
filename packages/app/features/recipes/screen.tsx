import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function RecipesScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack space="$4">
      <H1 onPress={console.log}>Recipes</H1>
      <Separator />
    </YStack>
  )
}
