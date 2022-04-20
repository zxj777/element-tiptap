import { LINK_REGEX } from '@/constants';

export function linkLimitRule() {
  return { required: true, message: '链接格式不正确', pattern: LINK_REGEX, trigger: 'blur' };
}
