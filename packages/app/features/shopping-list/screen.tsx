import { Button, H1, Separator, Sheet, Stack, YStack, useToastController } from '@my/ui'
import { ChevronDown, Plus } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'
import type { ListItem } from '../../db/types/ListItem'

export function ShoppingListScreen() {
  const [isInputOpen, setIsInputOpen] = useState(false)
  const [items, setItems] = useState<ListItem[]>([])

  function handleAddItem() {}

  return (
    <YStack space="$4" maw={600} p={'$4'} fullscreen>
      <H1>Shopping List</H1>
      <Separator />
      <Stack position="absolute" right={'$4'} bottom={'$13'}>
        <Button circular size={'$6'} onPress={() => setIsInputOpen(true)}>
          <Plus />
        </Button>
      </Stack>
      <InputSheet open={isInputOpen} setOpen={setIsInputOpen} />
    </YStack>
  )
}

function InputSheet({ open, setOpen }) {
  const [position, setPosition] = useState(0)
  const toast = useToastController()
  return (
    <Sheet
      modal
      animation="quick"
      open={open}
      onOpenChange={setOpen}
      snapPoints={[50]}
      position={position}
      onPositionChange={setPosition}
      dismissOnSnapToBottom
    >
      <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <Sheet.Frame ai="center" jc="center">
        <Sheet.Handle />
        <Button
          size="$6"
          circular
          icon={ChevronDown}
          onPress={() => {
            setOpen(false)
            toast.show('Sheet closed!', {
              message: 'Just showing how toast works...',
            })
          }}
        />
      </Sheet.Frame>
    </Sheet>
  )
}
