import Long from 'long'

import { throwError } from 'util/errors'

import { Group } from 'store'

import { toGroupMember } from './member.utils'

export async function fetchGroupMembers(groupId?: string | Long) {
  if (!Group.query) throwError('Wallet not initialized')
  if (!groupId) throwError('groupId is required')
  try {
    const { members } = await Group.query.groupMembers({
      groupId: groupId instanceof Long ? groupId : Long.fromString(groupId),
    })
    return members.map(toGroupMember)
  } catch (error) {
    throwError(error)
  }
}
