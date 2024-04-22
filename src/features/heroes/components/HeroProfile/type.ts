import { Profile } from '@/apis/type';

export type HeroProfile = { name: keyof Profile; value: number };
