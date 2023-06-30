import React, { useContext } from 'react'
import {
  CAN_ADMINISTER_COMPETITIONS,
  canAdminCompetition,
} from '../../api/auth/get_permissions'
import { AuthContext } from '../../api/helper/context/auth_context'
import { CompetitionContext } from '../../api/helper/context/competition_context'
import PermissionMessage from '../../ui/messages/permissionMessage'
import RegistrationEditor from './components/RegistrationEditor'
import styles from './index.module.scss'

export default function RegistrationEdit() {
  const { competitionInfo } = useContext(CompetitionContext)
  const { user } = useContext(AuthContext)
  return (
    <div className={styles.container}>
      {canAdminCompetition(user, competitionInfo.id) ? (
        <RegistrationEditor />
      ) : (
        <PermissionMessage permissionLevel={CAN_ADMINISTER_COMPETITIONS} />
      )}
    </div>
  )
}
