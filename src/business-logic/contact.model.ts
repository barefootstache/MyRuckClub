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
