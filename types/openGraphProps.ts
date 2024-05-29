import { ReactNode } from "react";

export default interface Props {
  children: ReactNode;
  props: {
    og_url?: string;
    og_description?: string;
    og_title?: string;
    og_image?: string;
    og_site_name?: string;
    keywords?: string;
    author?: string;
    description?: string;
    top_image?: string;
    top_title?: string;
  };
}
