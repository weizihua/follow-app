import { useAtomValue } from 'jotai'

import { isUpdatingEntryAtom, isUpdatingFeedAtom } from '~/store/loading'

import { ActivityIndicator } from './activity-indicator'
import { Row } from './flex'
import { Text } from './text'

export function TabHeaderTitle(props: {
  children: string
  tintColor?: string
}) {
  const isUpdatingFeed = useAtomValue(isUpdatingFeedAtom)
  const isUpdatingEntry = useAtomValue(isUpdatingEntryAtom)
  return (
    <Row flex={1} gap={4} align="center">
      {isUpdatingFeed || isUpdatingEntry ? (
        <>
          <ActivityIndicator />
          <Text weight="bold">Loading...</Text>
        </>
      ) : (
        <Text weight="bold">{props.children}</Text>
      )}
    </Row>
  )
}