export type Contact = {
  email?: string;
  facebook?: string;
  fediverse?: string;
  homepage?: string;
  instagram?: string;
  linktree?: string;
  preferred: keyof Contact;
  sandlot?: string;
}

export const ContactIcon: Contact = {
  email: 'mdi-email',
  facebook: 'mdi-facebook',
  fediverse: 'mdi-mastodon',
  homepage: 'mdi-web',
  instagram: 'mdi-instagram',
  linktree: 'mdi-palm-tree',
  sandlot: 'mdi-beach',
  preferred: 'email'
}
