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
    id: "computer-vision",
    title: "Computer Vision Engineering",
    description: "Build systems that interpret and analyze visual data",
    icon: "eye",
    techStacks: [
      {
        name: "Object Detection & Recognition",
        description: "Detect and classify objects in images/videos",
        companies: ["Tesla", "Waymo", "OpenAI", "NVIDIA"],
        languages: ["Python", "C++"],
        tools: ["YOLO", "OpenCV", "TensorFlow", "PyTorch"],
        resources: [
          {
            title: "OpenCV Documentation",
            url: "https://docs.opencv.org/",
            type: "documentation"
          }
        ]
      },
      {
        name: "3D Vision & Reconstruction",
        description: "3D scene understanding and modeling",
        companies: ["Magic Leap", "Meta (Reality Labs)", "NVIDIA"],
        languages: ["Python", "CUDA"],
        tools: ["NeRF", "Open3D", "PCL"],
        resources: [
          {
            title: "NeRF Research Paper",
            url: "https://arxiv.org/abs/2003.08934",
            type: "course"
          }
        ]
      }
    ],
    averageSalary: "$140,000 - $250,000",
    demandLevel: "High",
    timeToLearn: "18-30 months",
    prerequisites: ["Deep Learning", "Linear Algebra", "Image Processing"]
  },

  {
    id: "rl-engineering",
    title: "Reinforcement Learning Engineering",
    description: "Develop AI agents that learn through interaction",
    icon: "gamepad",
    techStacks: [
      {
        name: "Deep Reinforcement Learning",
        description: "Train agents using deep neural networks",
        companies: ["DeepMind", "OpenAI", "Tesla (Optimus)"],
        languages: ["Python", "JAX"],
        tools: ["RLlib", "Stable Baselines3", "Gymnasium"],
        resources: [
          {
            title: "Spinning Up in Deep RL",
            url: "https://spinningup.openai.com/",
            type: "course"
          }
        ]
      },
      {
        name: "Multi-Agent Systems",
        description: "Train multiple agents to cooperate/compete",
        companies: ["DeepMind (AlphaStar)", "OpenAI (Dota 2)"],
        languages: ["Python"],
        tools: ["PettingZoo", "MALib"],
        resources: [
          {
            title: "Multi-Agent RL Survey",
            url: "https://arxiv.org/abs/2103.01955",
            type: "tutorial"
          }
        ]
      }
    ],
    averageSalary: "$160,000 - $280,000",
    demandLevel: "High",
    timeToLearn: "24-36 months",
    prerequisites: ["Deep Learning", "Probability", "Optimization"]
  },
  {
    id: "ai-robotics",
    title: "AI for Robotics",
    description: "Build intelligent robots with perception and decision-making",
    icon: "robot",
    techStacks: [
      {
        name: "Autonomous Navigation",
        description: "Self-driving robots and drones",
        companies: ["Boston Dynamics", "Waymo", "Skydio"],
        languages: ["Python", "C++", "ROS"],
        tools: ["ROS", "PyTorch", "SLAM"],
        resources: [
          {
            title: "ROS Tutorials",
            url: "https://wiki.ros.org/ROS/Tutorials",
            type: "documentation"
          }
        ]
      },
      {
        name: "Manipulation & Control",
        description: "Robot arms and dexterous hands",
        companies: ["Tesla (Optimus)", "Figure AI", "OpenAI (Robotics)"],
        languages: ["Python", "C++"],
        tools: ["PyBullet", "MuJoCo"],
        resources: [
          {
            title: "Deep Robotic Learning Labs",
            url: "https://sites.google.com/view/deep-rl-workshop",
            type: "course"
          }
        ]
      }
    ],
    averageSalary: "$150,000 - $260,000",
    demandLevel: "High",
    timeToLearn: "24-36 months",
    prerequisites: ["Reinforcement Learning", "Control Theory", "Computer Vision"]
  },
  {
    id: "edge-ai",
    title: "Edge AI & TinyML",
    description: "Deploy AI models on edge devices (IoT, mobile, embedded)",
    icon: "chip",
    techStacks: [
      {
        name: "On-Device ML",
        description: "Run models on smartphones and microcontrollers",
        companies: ["Qualcomm", "Google (TensorFlow Lite)", "Apple (Core ML)"],
        languages: ["Python", "C++"],
        tools: ["TensorFlow Lite", "ONNX Runtime", "TFLite Micro"],
        resources: [
          {
            title: "TinyML Book",
            url: "https://www.oreilly.com/library/view/tinyml/9781492052036/",
            type: "course"
          }
        ]
      },
      {
        name: "Efficient AI Models",
        description: "Optimize models for low-power devices",
        companies: ["NVIDIA (Jetson)", "Arm (Ethos)", "Samsung"],
        languages: ["Python"],
        tools: ["Pruning", "Quantization", "Knowledge Distillation"],
        resources: [
          {
            title: "Efficient Deep Learning Course",
            url: "https://efficientdl.ai/",
            type: "course"
          }
        ]
      }
    ],
    averageSalary: "$120,000 - $200,000",
    demandLevel: "High",
    timeToLearn: "12-24 months",
    prerequisites: ["Deep Learning", "Embedded Systems", "Optimization"]
  },
  {
    id: "ai-safety",
    title: "AI Safety & Alignment Engineering",
    description: "Ensure AI systems are safe, interpretable, and aligned with human intent",
    icon: "shield",
    techStacks: [
      {
        name: "Scalable Oversight",
        description: "Techniques to supervise superhuman AI",
        companies: ["Anthropic", "OpenAI (Alignment Team)", "DeepMind (Alignment)"],
        languages: ["Python"],
        tools: ["RLHF", "Constitutional AI", "Elicit"],
        resources: [
          {
            title: "Alignment Forum",
            url: "https://alignmentforum.org/",
            type: "tutorial"
          }
        ]
      },
      {
        name: "Interpretability",
        description: "Reverse-engineer neural networks",
        companies: ["Anthropic", "Redwood Research", "Ought"],
        languages: ["Python", "JAX"],
        tools: ["TransformerLens", "Mech Interp", "Captum"],
        resources: [
          {
            title: "Neural Circuits Workshop",
            url: "https://distill.pub/2020/circuits/",
            type: "documentation"
          }
        ]
      }
    ],
    averageSalary: "$180,000 - $350,000",
    demandLevel: "High",
    timeToLearn: "24-36 months",
    prerequisites: ["Deep Learning", "Probability", "Philosophy of AI"]
  },
  {
    id: "embodied-ai",
    title: "Embodied AI Engineering",
    description: "Build AI for robots, drones, and AR/VR agents",
    icon: "robot-arm",
    techStacks: [
      {
        name: "Sim-to-Real Transfer",
        description: "Train AI in simulation for real-world deployment",
        companies: ["NVIDIA (Isaac Sim)", "Boston Dynamics", "Figure"],
        languages: ["Python", "C++"],
        tools: ["Unity ML-Agents", "PyBullet", "ROS 2"],
        resources: [
          {
            title: "Sim2Real Survey",
            url: "https://arxiv.org/abs/2401.13910",
            type: "tutorial"
          }
        ]
      },
      {
        name: "Multimodal Embodied Agents",
        description: "AI with vision, touch, and audio sensors",
        companies: ["Tesla Optimus", "Apple (Vision Pro)", "Meta (Aria)"],
        languages: ["Python"],
        tools: ["PyTorch3D", "NVIDIA Omniverse"],
        resources: [
          {
            title: "Embodied AI Workshop",
            url: "https://embodied-ai.org/",
            type: "course"
          }
        ]
      }
    ],
    averageSalary: "$160,000 - $290,000",
    demandLevel: "Medium",
    timeToLearn: "24-36 months",
    prerequisites: ["Reinforcement Learning", "Computer Vision", "Physics Simulation"]
  },
  {
    id: "ai-space",
    title: "AI for Space Exploration",
    description: "Machine learning for astronomy, satellites, and mission autonomy",
    icon: "satellite",
    techStacks: [
      {
        name: "Autonomous Spacecraft",
        description: "AI for real-time decision-making in space",
        companies: ["SpaceX", "NASA JPL", "Relativity Space"],
        languages: ["Python", "C++"],
        tools: ["ROS Space", "Reinforcement Learning", "F´"],
        resources: [
          {
            title: "NASA AI Repository",
            url: "https://github.com/nasa",
            type: "code"
          }
        ]
      },
      {
        name: "Exoplanet Discovery",
        description: "AI to analyze telescope data",
        companies: ["SETI Institute", "Planet Labs", "ESA"],
        languages: ["Python"],
        tools: ["AstroPy", "Lightkurve", "PyTorch"],
        resources: [
          {
            title: "Kepler Data",
            url: "https://www.kaggle.com/nasa/kepler-exoplanet-search-results",
            type: "course"
          }
        ]
      }
    ],
    averageSalary: "$150,000 - $280,000",
    demandLevel: "High",
    timeToLearn: "24-36 months",
    prerequisites: ["Astronomy Basics", "Time Series Analysis", "Robotics"]
  },
  {
    id: "ai-swe",
    title: "AI-Augmented Software Engineering",
    description: "Leverage AI to automate coding, testing, and system design",
    icon: "ai-code",
    techStacks: [
      {
        name: "AI Code Generation",
        description: "Tools that write, review, and optimize code",
        companies: ["GitHub (Copilot)", "Replit (GhostWriter)", "Tabnine"],
        languages: ["Python", "TypeScript", "Rust"],
        tools: ["LLMs (GPT-4o, Claude 3)", "Semgrep", "SonarQube"],
        resources: [
          {
            title: "AI Pair Programming Course",
            url: "https://www.deeplearning.ai/short-courses/pair-programming/",
            type: "course"
          }
        ]
      },
      {
        name: "Automated Debugging",
        description: "AI to detect and fix bugs in production",
        companies: ["Sentry", "Datadog", "Rookout"],
        languages: ["Java", "Go"],
        tools: ["Amazon CodeGuru", "DeepCode", "Datalog"],
        resources: [
          {
            title: "AI Debugging Papers",
            url: "https://arxiv.org/list/cs.SE/recent",
            type: "course"
          }
        ]
      }
    ],
    averageSalary: "$160,000 - $300,000",
    demandLevel: "High",
    timeToLearn: "6-12 months",
    prerequisites: ["Software Engineering", "Prompt Engineering", "CI/CD"]
  },
  {
    id: "mlops-2025",
    title: "MLOps Engineering",
    description: "Design systems to deploy, monitor, and retrain ML models",
    icon: "pipeline",
    techStacks: [
      {
        name: "Model Serving",
        description: "Low-latency inference architectures",
        companies: ["Tecton", "Baseten", "Cortex"],
        languages: ["Python", "Go"],
        tools: ["FastAPI", "TF Serving", "vLLM"],
        resources: [
          {
            title: "MLOps Zoomcamp",
            url: "https://github.com/DataTalksClub/mlops-zoomcamp",
            type: "course"
          }
        ]
      },
      {
        name: "Drift Detection",
        description: "Monitor model performance decay",
        companies: ["Arize", "WhyLabs", "Fiddler"],
        languages: ["Python"],
        tools: ["Evidently", "Prometheus", "Grafana"],
        resources: [
          {
            title: "ML Monitoring Handbook",
            url: "https://arize.com/ml-monitoring/",
            type: "tutorial"
          }
        ]
      }
    ],
    averageSalary: "$180,000 - $320,000",
    demandLevel: "High",
    timeToLearn: "12-18 months",
    prerequisites: ["Cloud (AWS/GCP)", "Kubernetes", "Data Engineering"]
  }
  
];