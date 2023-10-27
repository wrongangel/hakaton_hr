export type Status = 'hr' | 'management' | 'accepted' | 'rejected'

export interface Resume {
  quality: number
  status: Status
  id: number
  first_name: any
  last_name: any
  middle_name: any
  hhid: string
  education: string
  experience: string
  title: string
  age: number
  gender: string
  area: Area
  total_experience: number
  skills: string
  skill_set: string[]
  employment: string
  created: string
  modified: string
  deleted: any
}

export interface Area {
  id: string
  name: string
}

export type Experience = {
    start: string;
    end: string;
    company: string;
    company_id: null;
    industry: null;
    industries: never[];
    area: null;
    company_url: null;
    employer: null;
    position: string;
    description: string;
}