import * as type from '@/constants/action_types';

export function openModal(data) {
    return {
      type: type.OPEN_LOGIN_MODAL,
      data
    }
}