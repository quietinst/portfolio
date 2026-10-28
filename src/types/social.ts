export type SocialIconName = 'facebook' | 'telegram' | 'github';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIconName;
}
