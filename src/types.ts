export interface TechStack {
  name: string;
  description: string;
  companies: string[];
  languages: string[];
  tools: string[];
  resources: {
    title: string;
    url: string;
    type: 'course' | 'documentation' | 'tutorial';
  }[];
}

export interface CareerPath {
  id: string;
  title: string;
  description: string;
  icon: string;
  techStacks: TechStack[];
  averageSalary: string;
  demandLevel: 'High' | 'Medium' | 'Low';
  timeToLearn: string;
  prerequisites: string[];
}

export type Theme = 'light' | 'dark';