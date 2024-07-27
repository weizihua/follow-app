import { formatDistance } from 'date-fns'
import { eq } from 'drizzle-orm'
import { useLiveQuery } from 'drizzle-orm/expo-sqlite'
import { Image } from 'expo-image'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useMemo } from 'react'
import { FlatList } from 'react-native'

import { Column, Container, Row, Text } from '~/components'
import { db } from '~/db'
import type { Entry } from '~/db/schema'

function isNumber(value: string) {
  return /^\d+$/.test(value)
}

function EntryItem({ entry }: { entry: Entry }) {
  const { data } = useLiveQuery(
    db.query.feeds.findFirst({
      where(fields, operators) {
        return operators.eq(fields.id, entry.feedId)
      },
    }),
    [entry.feedId],
  )
  return (
    <>
      <Row
        px={15}
        py={12}
        gap={10}
      >
        <Image
          source={{ uri: data?.image ?? '' }}
          style={{ width: 25, height: 25, borderRadius: 25 / 4 }}
        />
        <Column gap={6} flex={1}>
          <Row>
            <Text style={{ flex: 1, flexWrap: 'wrap' }}>
              {entry.title}
            </Text>
          </Row>
          <Row gap={6}>
            <Text size={12}>{data?.title}</Text>
            <Text size={12}>
              {formatDistance(
                new Date(entry.publishedAt),
                new Date(),
                { addSuffix: true },
              )}
            </Text>
          </Row>
        </Column>
        {entry.media
        && entry.media.find(media => media.type === 'photo')
        && (
          <Image
            source={{ uri: entry.media.find(media => media.type === 'photo')?.url }}
            style={{ width: 50, height: 50 }}
          />
        )}
      </Row>
      <Row
        w="100%"
        h={1}
        bg="component"
      />
    </>
  )
}

export default function Page() {
  const { slug } = useLocalSearchParams()
  const slugString = String(slug)
  const isCategory = !isNumber(slugString)
  const { data } = useLiveQuery(
    db.query.feeds.findMany({
      where(fields) {
        return eq(fields.category, slugString)
      },
    }),
    [slugString],
  )

  const feedIds = useMemo(
    () => isCategory
      ? data.map(feed => feed.id)
      : [slugString],
    [data, isCategory, slugString],
  )

  const { data: entryList } = useLiveQuery(
    db.query.entries.findMany({
      where(fields, operators) {
        return operators.inArray(fields.feedId, feedIds)
      },
    }),
    [feedIds],
  )

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Feed',
          headerBackTitle: 'Back',
        }}
      />
      <Container>
        <FlatList
          data={entryList}
          renderItem={({ item }) => <EntryItem entry={item} />}
        />
      </Container>
    </>
  )
}