import { useEffect, useState } from 'react'
import { cosmos } from '@empower-plastic/empowerjs'
import { GroupInfo } from '@empower-plastic/empowerjs/types/codegen/cosmos/group/v1/types'
import Pagination from 'rc-pagination'

import { formatDate } from 'util/date'

import { ROUTE_PATH } from 'routes'

import {
  Center,
  Flex,
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

import 'rc-pagination/assets/index.css'

export const AllGroupsTable = () => {
  const { VITE_RPC_URL } = import.meta.env
  const { createRPCQueryClient } = cosmos.ClientFactory
  const [allGroups, setAllGroups] = useState<GroupInfo[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentGroups, setCurrentGroups] = useState<GroupInfo[]>([])
  const pageSize = 5

  const paginateGroup = (array: GroupInfo[], pageSize: number, pageNumber: number) => {
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize
    return array.slice(startIndex, endIndex)
  }

  const getAllGroups = async () => {
    try {
      const rpcQueryClient = await createRPCQueryClient({
        rpcEndpoint: VITE_RPC_URL,
      })
      const { groups } = await rpcQueryClient.cosmos.group.v1.groups({})
      setAllGroups(groups)
      setCurrentGroups(() => paginateGroup(groups, pageSize, 1))
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setCurrentGroups(() => paginateGroup(allGroups, pageSize, page))
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
          {currentGroups.map((group, i) => (
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
      <Flex flexDirection={'row'} justify={'flex-end'} style={{ padding: '10px' }}>
        <Pagination
          total={allGroups?.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          current={currentPage}
        />
      </Flex>
    </TableContainer>
  )
}
