import { useParams } from 'react-router-dom'

import type { UIGroupWithMembers } from 'models'
import { useGroup, useGroupMembers, useGroupPolicies } from 'hooks/useQuery'
import { formatDate } from 'util/date'

import {
  Button,
  Center,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@/atoms'
import { PageTemplate } from '@/templates/PageTemplate'

export default function GroupDetails() {
  // const adminItems = (adminGroups || []).map((m) => convertGroup(m, 'admin'))
  // const memberItems = (memberGroups || []).map((m) => convertGroup(m, 'member'))
  const tableData: GroupTableItem[] = []
  const { groupId } = useParams()
  const { data: group } = useGroup(groupId)
  const { data: members } = useGroupMembers(groupId)
  const { data: policies } = useGroupPolicies(groupId)

  console.log('group :>> ', group)
  console.log('members :>> ', members)
  console.log('policies :>> ', policies)

  return (
    <PageTemplate>
      <Stack>
        <Flex justify="space-between">
          <Heading>{group?.metadata.name || 'Loading...'}</Heading>
          <Button>Edit Group</Button>
        </Flex>
        <Text>{group?.metadata.description}</Text>
      </Stack>
    </PageTemplate>
  )
}

function groupToTableData(
  { id, createdAt, members, metadata: { name, updatedAt } }: UIGroupWithMembers,
  type: 'admin' | 'member',
): GroupTableItem {
  return {
    name,
    type,
    id: id.toString(),
    created: formatDate(createdAt),
    edited: formatDate(updatedAt),
    memberCount: members.length,
  }
}

interface GroupTableItem {
  id: string
  name: string
  created: string
  edited: string
  memberCount: number
  type: 'admin' | 'member'
}

function GroupMembersTable(p: { tableData: GroupTableItem[] }) {
  if (p.tableData.length === 0) {
    return (
      <Center h={250} w="full" borderWidth={1} borderRadius="lg">
        <Heading as="h3" size="lg">
          No groups
        </Heading>
      </Center>
    )
  }
  return (
    <TableContainer borderRadius="lg" borderWidth={2} shadow="md">
      <Table variant="striped" size="lg">
        <Thead>
          <Tr sx={{ '& > th': { fontWeight: 'bold' } }}>
            <Th>Name</Th>
            <Th>Created</Th>
            <Th>Last Edited</Th>
            <Th>Number of Members</Th>
            <Th>Membership Type</Th>
          </Tr>
        </Thead>
        <Tbody>
          {p.tableData.map((group, i) => (
            <Tr key={i + group.name}>
              <Td>{group.name}</Td>
              <Td>{group.created}</Td>
              <Td>{group.edited}</Td>
              <Td>{group.memberCount}</Td>
              <Td>{group.type}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
