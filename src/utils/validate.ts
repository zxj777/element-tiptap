import { LINK_REGEX } from '@/constants';

export function linkLimitRule(regex?: RegExp) {
  return { required: true, message: '链接格式不正确', pattern: regex || LINK_REGEX, trigger: 'blur' };
}
