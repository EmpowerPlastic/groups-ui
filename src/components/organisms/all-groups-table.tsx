import { useEffect, useState } from 'react'
import { cosmos } from '@empower-plastic/empowerjs'
import { GroupInfo } from '@empower-plastic/empowerjs/types/codegen/cosmos/group/v1/types'

import { formatDate } from 'util/date'

import { ROUTE_PATH } from 'routes'

import {
  Center,
  Heading,
  Link,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@/atoms'

export const AllGroupsTable = () => {
  const { createRPCQueryClient } = cosmos.ClientFactory
  const [allGroups, setAllGroups] = useState<GroupInfo[]>([])

  const getAllGroups = async () => {
    try {
      const rpcQueryClient = await createRPCQueryClient({
        rpcEndpoint: 'https://empower-testnet-rpc.polkachu.com/',
      })
      const { groups, pagination } = await rpcQueryClient.cosmos.group.v1.groups({})
      setAllGroups(groups)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getAllGroups()
  }, [])

  if (allGroups.length === 0) {
    return (
      <Center h={250} w="full" borderWidth={1} borderRadius="lg">
        <Heading as="h3" size="lg">
          No groups
        </Heading>
      </Center>
    )
  }

  return (
    <TableContainer>
      <Table variant="striped" size="lg">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Created</Th>
            <Th>Admin</Th>
            <Th>Number of Members</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allGroups.map((group, i) => (
            <Tr key={i + group.totalWeight}>
              <Td>
                <Link to={ROUTE_PATH.group(group.id.toString())}>
                  {JSON.parse(group.metadata)?.name}
                </Link>
              </Td>
              <Td>{formatDate(group.createdAt)}</Td>
              <Td>{group.admin}</Td>
              <Td>{group.totalWeight}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
