import { CareerPath } from '../types';

export const careerPaths: CareerPath[] = [
  {
    id: 'sde',
    title: 'Software Development Engineer',
    description: 'Design, develop, and maintain complex software systems across multiple domains',
    icon: 'code',
    techStacks: [
      {
        name: 'Full Stack Development',
        description: 'End-to-end software development',
        companies: ['Google', 'Meta', 'Amazon', 'Microsoft'],
        languages: ['Java', 'Python', 'TypeScript', 'Go'],
        tools: ['Spring Boot', 'React', 'Docker', 'Kubernetes', 'AWS'],
        resources: [
          {
            title: 'System Design Primer',
            url: 'https://github.com/donnemartin/system-design-primer',
            type: 'documentation'
          },
          {
            title: 'Clean Code',
            url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
            type: 'course'
          }
        ]
      },
      {
        name: 'Distributed Systems',
        description: 'Building scalable distributed systems',
        companies: ['Netflix', 'Uber', 'LinkedIn'],
        languages: ['Java', 'Go', 'Rust'],
        tools: ['Kafka', 'gRPC', 'Redis', 'Elasticsearch'],
        resources: [
          {
            title: 'Distributed Systems Course',
            url: 'https://www.distributed-systems.net/index.php/courses/',
            type: 'course'
          }
        ]
      }
    ],
    averageSalary: '$130,000 - $250,000',
    demandLevel: 'Very High',
    timeToLearn: '12-24 months',
    prerequisites: ['Data Structures', 'Algorithms', 'System Design', 'Programming Languages']
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Create user interfaces and experiences for web applications',
    icon: 'layout-dashboard',
    techStacks: [
      {
        name: 'React Ecosystem',
        description: 'Modern frontend development with React',
        companies: ['Meta', 'Instagram', 'Airbnb', 'Discord'],
        languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        tools: ['React', 'Redux', 'Next.js', 'Tailwind CSS'],
        resources: [
          {
            title: 'React Documentation',
            url: 'https://react.dev',
            type: 'documentation'
          },
          {
            title: 'Frontend Masters',
            url: 'https://frontendmasters.com',
            type: 'course'
          }
        ]
      },
      {
        name: 'Vue.js Stack',
        description: 'Progressive JavaScript framework',
        companies: ['GitLab', 'Alibaba', 'Nintendo'],
        languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        tools: ['Vue.js', 'Vuex', 'Nuxt.js', 'Vue Router'],
        resources: [
          {
            title: 'Vue.js Documentation',
            url: 'https://vuejs.org',
            type: 'documentation'
          }
        ]
      }
    ],
    averageSalary: '$85,000 - $150,000',
    demandLevel: 'High',
    timeToLearn: '6-12 months',
    prerequisites: ['HTML', 'CSS', 'JavaScript Basics']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Build server-side applications and APIs',
    icon: 'server',
    techStacks: [
      {
        name: 'Node.js Stack',
        description: 'Server-side JavaScript development',
        companies: ['Netflix', 'PayPal', 'LinkedIn'],
        languages: ['JavaScript', 'TypeScript', 'SQL'],
        tools: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
        resources: [
          {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org',
            type: 'documentation'
          }
        ]
      },
      {
        name: 'Python Backend',
        description: 'Python-based backend development',
        companies: ['Instagram', 'Spotify', 'Dropbox'],
        languages: ['Python', 'SQL'],
        tools: ['Django', 'FastAPI', 'PostgreSQL', 'Redis'],
        resources: [
          {
            title: 'Django Documentation',
            url: 'https://docs.djangoproject.com',
            type: 'documentation'
          }
        ]
      }
    ],
    averageSalary: '$90,000 - $160,000',
    demandLevel: 'High',
    timeToLearn: '8-14 months',
    prerequisites: ['Programming Fundamentals', 'Database Basics']
  },
  {
    id: 'cloud',
    title: 'Cloud Engineering',
    description: 'Design and manage cloud infrastructure and services',
    icon: 'cloud',
    techStacks: [
      {
        name: 'AWS Stack',
        description: 'Amazon Web Services cloud platform',
        companies: ['Netflix', 'Capital One', 'Twitch'],
        languages: ['Python', 'JavaScript', 'YAML'],
        tools: ['AWS Services', 'Terraform', 'CloudFormation', 'Lambda'],
        resources: [
          {
            title: 'AWS Documentation',
            url: 'https://docs.aws.amazon.com',
            type: 'documentation'
          }
        ]
      },
      {
        name: 'Azure Stack',
        description: 'Microsoft Azure cloud platform',
        companies: ['Microsoft', 'BMW', 'Samsung'],
        languages: ['C#', 'PowerShell', 'YAML'],
        tools: ['Azure Services', 'Azure DevOps', 'ARM Templates'],
        resources: [
          {
            title: 'Azure Documentation',
            url: 'https://docs.microsoft.com/azure',
            type: 'documentation'
          }
        ]
      }
    ],
    averageSalary: '$110,000 - $180,000',
    demandLevel: 'High',
    timeToLearn: '12-18 months',
    prerequisites: ['Networking Basics', 'Linux Administration', 'Programming Fundamentals']
  },
  {
    id: 'android',
    title: 'Android Development',
    description: 'Build native and cross-platform mobile applications',
    icon: 'smartphone',
    techStacks: [
      {
        name: 'Native Android',
        description: 'Native Android development with Kotlin',
        companies: ['Google', 'Uber', 'Instagram'],
        languages: ['Kotlin', 'Java'],
        tools: ['Android Studio', 'Jetpack Compose', 'Firebase'],
        resources: [
          {
            title: 'Android Developers',
            url: 'https://developer.android.com',
            type: 'documentation'
          }
        ]
      },
      {
        name: 'Cross-Platform',
        description: 'Cross-platform mobile development',
        companies: ['Meta', 'Microsoft', 'Shopify'],
        languages: ['JavaScript', 'TypeScript'],
        tools: ['React Native', 'Flutter', 'Expo'],
        resources: [
          {
            title: 'React Native Documentation',
            url: 'https://reactnative.dev',
            type: 'documentation'
          }
        ]
      }
    ],
    averageSalary: '$85,000 - $160,000',
    demandLevel: 'High',
    timeToLearn: '8-14 months',
    prerequisites: ['Programming Fundamentals', 'UI/UX Basics']
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineering',
    description: 'Build and deploy artificial intelligence systems',
    icon: 'brain',
    techStacks: [
      {
        name: 'Machine Learning',
        description: 'Traditional ML and deep learning',
        companies: ['Google AI', 'OpenAI', 'DeepMind'],
        languages: ['Python', 'R'],
        tools: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Keras'],
        resources: [
          {
            title: 'Deep Learning Specialization',
            url: 'https://www.coursera.org/specializations/deep-learning',
            type: 'course'
          }
        ]
      }
    ],
    averageSalary: '$120,000 - $200,000',
    demandLevel: 'High',
    timeToLearn: '18-24 months',
    prerequisites: ['Mathematics', 'Statistics', 'Python Programming']
  },
  {
    id: 'gen-ai',
    title: 'Generative AI Engineering',
    description: 'Develop cutting-edge generative AI models and applications',
    icon: 'sparkles',
    techStacks: [
      {
        name: 'Large Language Models',
        description: 'Building and fine-tuning LLMs',
        companies: ['OpenAI', 'Anthropic', 'Cohere'],
        languages: ['Python', 'JAX'],
        tools: ['Transformers', 'LangChain', 'Hugging Face', 'CUDA'],
        resources: [
          {
            title: 'Hugging Face Course',
            url: 'https://huggingface.co/course',
            type: 'course'
          }
        ]
      },
      {
        name: 'Generative Computer Vision',
        description: 'Image and video generation models',
        companies: ['Midjourney', 'Stability AI', 'Runway'],
        languages: ['Python', 'CUDA'],
        tools: ['Stable Diffusion', 'GANs', 'Diffusers'],
        resources: [
          {
            title: 'Stable Diffusion Documentation',
            url: 'https://huggingface.co/docs/diffusers',
            type: 'documentation'
          }
        ]
      }
    ],
    averageSalary: '$150,000 - $300,000',
    demandLevel: 'High',
    timeToLearn: '24-36 months',
    prerequisites: ['Deep Learning', 'NLP', 'Computer Vision', 'Advanced Mathematics']
  }
];