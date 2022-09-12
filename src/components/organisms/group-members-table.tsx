import type { GroupMember } from 'types'
import { formatDate } from 'util/date'

import { useBoolean } from 'hooks/chakra'

import { AnimatePresence, FadeIn } from '@/animations'
import {
  Box,
  Button,
  DeleteButton,
  Flex,
  Input,
  NumberInput,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@/atoms'
import { TableTitlebar } from '@/molecules'

export const GroupMembersTable = ({ members = [] }: { members: GroupMember[] }) => {
  const [isEdit, setEdit] = useBoolean(false)
  return (
    <TableContainer w="full" borderRadius="lg" borderWidth={2} shadow="md">
      <TableTitlebar title="Members">
        <AnimatePresence mode="wait">
          {isEdit && (
            <Flex grow={1} justify="end">
              <FadeIn
                key="edit-btns"
                style={{
                  display: 'flex',
                  flexGrow: 1,
                  gap: 8,
                  marginRight: 8,
                  justifyContent: 'flex-end',
                }}
              >
                <Input width="auto" flexGrow={1} maxW={470} />
                <Button variant="outline">+ Add Member</Button>
                <Button variant="ghost" fontSize="xs" onClick={setEdit.off}>
                  cancel
                </Button>
              </FadeIn>
            </Flex>
          )}
        </AnimatePresence>
        <Button variant={isEdit ? 'solid' : 'outline'} onClick={setEdit.toggle}>
          {isEdit ? 'Save Changes' : 'Edit Members'}
        </Button>
      </TableTitlebar>
      <Table variant="striped" size="lg">
        <Thead>
          <Tr sx={{ '& > th': { fontWeight: 'bold' } }}>
            <Th>Address</Th>
            <Th>Voting Weight</Th>
            <Th>Date Added</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {members.map((m, i) => {
            const key = m.member.address + i
            return (
              <Tr key={key}>
                <Td>{m.member.address}</Td>
                <Td>
                  <AnimatePresence mode="wait">
                    {isEdit ? (
                      <FadeIn key={'weight-edit' + key}>
                        <NumberInput value={m.member.weight} maxW={20} />
                      </FadeIn>
                    ) : (
                      <FadeIn key={'weight' + key}>{m.member.weight}</FadeIn>
                    )}
                  </AnimatePresence>
                </Td>
                <Td>{formatDate(m.member.added_at)}</Td>
                <Td>
                  <AnimatePresence mode="wait">
                    {isEdit ? (
                      <FadeIn key={'delete' + key}>
                        <DeleteButton />
                      </FadeIn>
                    ) : (
                      <FadeIn key={'hidden' + key}>
                        <Box h={10} w={10} />
                      </FadeIn>
                    )}
                  </AnimatePresence>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

// const TableRow = ({ member, index }: ChainGroupMember & { index: number }) => {
//   const key = member.address + index
//   return (
//     <Tr>
//       <Td>{member.address}</Td>
//       <Td>
//         <AnimatePresence mode="wait">
//           {isEdit ? (
//             <FadeIn key={'weight-edit' + key}>
//               <NumberInput value={member.weight} maxW={20} />
//             </FadeIn>
//           ) : (
//             <FadeIn key={'weight' + key}>{member.weight}</FadeIn>
//           )}
//         </AnimatePresence>
//       </Td>
//       <Td>{formatDate(member.added_at)}</Td>
//       <Td>
//         <AnimatePresence mode="wait">
//           {isEdit ? (
//             <FadeIn key={'delete' + key}>
//               <DeleteButton />
//             </FadeIn>
//           ) : (
//             <FadeIn key={'hidden' + key}>
//               <Box h={10} w={10} />
//             </FadeIn>
//           )}
//         </AnimatePresence>
//       </Td>
//     </Tr>
//   )
// }
