export interface Site {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  footerDescription: string;
  socials: { name: string; url: string }[];
}

export interface Contact {
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
  };
  businessHours: {
    days: string;
    hours: string;
  };
}

export interface AboutValue {
  title: string;
  description: string;
}

export interface About {
  mission: string;
  values: AboutValue[];
  image: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  featured?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  featured?: boolean;
}
