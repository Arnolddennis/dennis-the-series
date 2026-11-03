/** Dennis David — content from his current portfolio and public project READMEs. */

export type Palette = { from: string; via: string; to: string; accent: string };

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export type Certification = { issuer: string; name: string; link?: string };

export type Skill = { name: string; mono: string; note?: string };

export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export type ProfileId = 'dennis' | 'recruiter' | 'developer' | 'creative';

export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const profile = {
  "fullName": "Dennis David",
  "displayName": "Dennis David",
  "firstName": "DENNIS",
  "seriesTag": "THE SERIES",
  "originalLabel": "A DENNIS DAVID ORIGINAL",
  "role": "Senior Cloud Engineer · Azure, DevOps & Site Reliability",
  "tagline": [
    "Azure Cloud Engineering",
    "DevOps & Automation",
    "Site Reliability"
  ],
  "intro": "I work where infrastructure, automation, and incident response meet—helping teams restore services and make the next incident easier to handle. Based in Kraków, with 8+ years across IT and engineering and experience with global teams.",
  "location": "Kraków, Poland",
  "email": "dennisdavid1991@gmail.com",
  "phone": "",
  "links": {
    "github": "https://github.com/Arnolddennis",
    "linkedin": "https://linkedin.com/in/arnolddennis"
  },
  "resumePdf": "/assets/Dennis-David-CV.pdf",
  "portrait": {
    "src": "/assets/portrait-720.webp",
    "srcSet": "/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w",
    "alt": "Portrait of Dennis David"
  },
  "interests": [
    "Reliable cloud platforms",
    "Incident response & observability",
    "Controlled recovery automation"
  ]
};

export const education = [
  {
    "school": "Silesian University of Technology",
    "place": "Poland",
    "degree": "Master’s in Material Science Engineering",
    "period": "2019 – 2021",
    "score": ""
  },
  {
    "school": "Anna University",
    "place": "Chennai, India",
    "degree": "Bachelor’s in Mechanical Engineering",
    "period": "2009 – 2013",
    "score": ""
  }
];

export const experience = [
  {
    "company": "LTIMindtree",
    "role": "Senior Cloud Engineer",
    "place": "Kraków, Poland · Azure Monitoring & DevOps",
    "period": "Apr 2024 — Present",
    "points": [
      "Respond to L2/L3 incidents across VMs, App Services, AKS, and databases; correlate alerts, logs, and deployment changes to guide service restoration.",
      "Execute Azure CLI diagnostics and resource changes during incidents and planned infrastructure updates.",
      "Reduced manual incident-resolution effort by approximately 40% with Logic Apps, Azure Automation runbooks, PowerShell, and Bash.",
      "Develop actionable alerts, dashboards, SOPs, and runbooks. Support Linux/Windows hardening, AKS troubleshooting, secure Terraform changes, and post-incident improvements."
    ]
  },
  {
    "company": "Concentrix",
    "role": "Team Leader & IT Trainer",
    "place": "Katowice, Poland",
    "period": "Jun 2023 — Feb 2024",
    "points": [
      "Coordinated technical support escalations across teams and customer stakeholders.",
      "Defined performance metrics, quality standards, and targeted operational improvement plans.",
      "Delivered technical training and reusable knowledge-base guidance for consistent troubleshooting."
    ]
  },
  {
    "company": "Capgemini",
    "role": "IT Project Specialist",
    "place": "Katowice, Poland",
    "period": "Jun 2022 — Feb 2023",
    "points": [
      "Supported Azure migrations involving IaaS/PaaS services, hybrid integration, and containerized workloads.",
      "Provisioned and monitored infrastructure with Azure Monitor, Log Analytics, and platform alerts.",
      "Collaborated on Docker/AKS troubleshooting and documented access models, connectivity diagnostics, and reusable support procedures."
    ]
  },
  {
    "company": "Fluidtech Engineers",
    "role": "IT & Engineering Business Head",
    "place": "Chennai, India · Fluidtech Engineers India Pvt. Ltd.",
    "period": "Feb 2014 — Dec 2018",
    "points": [
      "Led cross-functional IT and engineering initiatives supporting industrial machinery, manufacturing, and customer projects.",
      "Implemented equipment monitoring and dashboards for uptime, fault indicators, quality metrics, and production performance.",
      "Coordinated software, firmware, HMI/SCADA, and MES/ERP changes, with backup and continuity procedures."
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "azure-self-healing-sre-platform",
    "title": "Azure Self-Healing SRE Platform",
    "year": "Portfolio project",
    "genre": "Azure · SRE · Incident Automation",
    "logline": "Observe. Orchestrate. Recover. Learn. An alert-to-remediation workflow for unhealthy Azure services, with scoped permissions and controlled recovery.",
    "stack": [
      "Azure Monitor",
      "Terraform",
      "Logic Apps",
      "PowerShell",
      "Python",
      "Kubernetes",
      "Flux",
      "Prometheus",
      "Grafana"
    ],
    "build": [
      "Built a monitoring and remediation framework that routes Azure Monitor common-schema alerts through a Logic App to an Azure Automation PowerShell runbook.",
      "Implemented managed identity, scoped RBAC, diagnostic logging, and Web App restart remediation.",
      "Added Kubernetes health probes, autoscaling, Flux GitOps definitions, and Jenkins/GitHub Actions validation. Optional AI incident summaries retain a deterministic fallback."
    ],
    "features": [
      "HTTP 5xx alert-to-remediation workflow",
      "Managed identity and scoped RBAC",
      "Terraform infrastructure definitions",
      "Kubernetes probes and autoscaling",
      "Prometheus and Grafana integration",
      "Optional AI-assisted incident summaries"
    ],
    "metrics": [
      {
        "value": "Azure",
        "label": "monitoring and remediation"
      },
      {
        "value": "IaC",
        "label": "Terraform provisioning"
      },
      {
        "value": "GitOps",
        "label": "Flux reconciliation"
      },
      {
        "value": "RBAC",
        "label": "scoped recovery permissions"
      }
    ],
    "motif": "shield",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    },
    "github": "https://github.com/Arnolddennis/azure-self-healing-sre-platform"
  },
  {
    "id": "Unified-Hybrid-Cloud-Monitoring-Dashboard",
    "title": "Hybrid Cloud Monitoring",
    "year": "Portfolio project",
    "genre": "Azure Arc · Observability · Hybrid Infrastructure",
    "logline": "One operational view across Azure applications and Arc-enabled Windows and Linux servers, combining infrastructure health, application signals, and remediation.",
    "stack": [
      "Azure Arc",
      "Azure Monitor Agent",
      "Log Analytics",
      "KQL",
      "Azure Workbooks",
      "Application Insights",
      "Azure Automation",
      "Bicep"
    ],
    "build": [
      "Built a centralized observability solution connecting on-premises and edge servers to Azure Monitor through Azure Arc.",
      "Defined Windows and Linux Data Collection Rules, application telemetry, and a shared Log Analytics workspace using Bicep.",
      "Created Workbook views and KQL queries for heartbeat, CPU, memory, events, syslog, requests, and exceptions, with a Hybrid Runbook Worker remediation path."
    ],
    "features": [
      "Windows and Linux telemetry collection",
      "Shared Log Analytics workspace",
      "Azure Workbook operational views",
      "Reusable KQL queries",
      "Bicep infrastructure modules",
      "PowerShell remediation runbook"
    ],
    "metrics": [
      {
        "value": "Hybrid",
        "label": "Azure and on-premises visibility"
      },
      {
        "value": "KQL",
        "label": "operational signal queries"
      },
      {
        "value": "Bicep",
        "label": "infrastructure definitions"
      },
      {
        "value": "Arc",
        "label": "server onboarding"
      }
    ],
    "motif": "flow",
    "palette": {
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff",
      "from": "#04121f"
    },
    "github": "https://github.com/Arnolddennis/Unified-Hybrid-Cloud-Monitoring-Dashboard"
  },
  {
    "id": "azure-devops-terraform-aks-project",
    "title": "Azure DevOps · Terraform · AKS",
    "year": "Portfolio project",
    "genre": "Cloud Native · Infrastructure as Code · CI/CD",
    "logline": "Infrastructure provisioning and container deployment on Azure Kubernetes Service, connected through an automated delivery pipeline.",
    "stack": [
      "Microsoft Azure",
      "Terraform",
      "Azure DevOps",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
      "Azure Monitor"
    ],
    "build": [
      "Created a portfolio project demonstrating Azure infrastructure provisioning with Terraform.",
      "Combined a sample application, Docker, AKS deployment definitions, and CI/CD configuration.",
      "Included Azure Monitor setup to connect delivery with operational visibility."
    ],
    "features": [
      "Terraform infrastructure provisioning",
      "Azure Kubernetes Service deployment",
      "CI/CD pipeline configuration",
      "Docker container workflow",
      "Azure Monitor setup"
    ],
    "metrics": [
      {
        "value": "AKS",
        "label": "Kubernetes deployment"
      },
      {
        "value": "IaC",
        "label": "Terraform infrastructure"
      },
      {
        "value": "CI/CD",
        "label": "automated delivery"
      },
      {
        "value": "Docker",
        "label": "containerized application"
      }
    ],
    "motif": "tenants",
    "palette": {
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8",
      "from": "#03150f"
    },
    "github": "https://github.com/Arnolddennis/azure-devops-terraform-aks-project"
  }
];

export const achievements: Achievement[] = [
  {
    "id": "automation",
    "title": "≈40% Less Manual Effort",
    "org": "LTIMindtree · Cloud Operations",
    "detail": "Reduced manual incident-resolution effort by approximately 40% using Logic Apps, Azure Automation runbooks, PowerShell, and Bash.",
    "laurel": "Automation Impact"
  },
  {
    "id": "career",
    "title": "8+ Years Across IT & Engineering",
    "org": "India & Poland",
    "detail": "A career spanning industrial engineering, Azure migrations, technical leadership, and cloud production operations.",
    "laurel": "Engineering Experience"
  },
  {
    "id": "credentials",
    "title": "Two Microsoft Certifications",
    "org": "Microsoft Certified",
    "detail": "DevOps Engineer Expert (AZ-400) and Azure Administrator Associate (AZ-104).",
    "laurel": "Cloud Credentials"
  },
  {
    "id": "reliability",
    "title": "From Alert to Recovery",
    "org": "Azure Self-Healing SRE Platform",
    "detail": "An event-driven portfolio implementation connecting Azure Monitor, Logic Apps, and PowerShell remediation.",
    "laurel": "Hands-on Reliability",
    "link": "https://github.com/Arnolddennis/azure-self-healing-sre-platform"
  }
];

export const certifications: Certification[] = [
  {
    "issuer": "Microsoft Certified · AZ-400",
    "name": "DevOps Engineer Expert"
  },
  {
    "issuer": "Microsoft Certified · AZ-104",
    "name": "Azure Administrator Associate"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    "id": "cloud",
    "title": "Cloud & Infrastructure",
    "subtitle": "Azure platforms and repeatable infrastructure",
    "skills": [
      {
        "name": "Microsoft Azure",
        "mono": "Az",
        "note": "Primary"
      },
      {
        "name": "Azure CLI",
        "mono": "Cl"
      },
      {
        "name": "VMs & App Services",
        "mono": "Vm"
      },
      {
        "name": "AKS",
        "mono": "Ks"
      },
      {
        "name": "Azure SQL & Storage",
        "mono": "Db"
      },
      {
        "name": "Azure Arc",
        "mono": "Ar"
      },
      {
        "name": "Terraform",
        "mono": "Tf",
        "note": "IaC"
      },
      {
        "name": "ARM / Bicep",
        "mono": "Bi"
      },
      {
        "name": "AWS foundations",
        "mono": "Aw",
        "note": "Hands-on exposure"
      }
    ]
  },
  {
    "id": "observability",
    "title": "Signals & Response",
    "subtitle": "Understand the signal. Restore the service.",
    "skills": [
      {
        "name": "Azure Monitor",
        "mono": "Mo"
      },
      {
        "name": "Log Analytics / KQL",
        "mono": "Kq"
      },
      {
        "name": "Application Insights",
        "mono": "Ai"
      },
      {
        "name": "Azure Workbooks",
        "mono": "Wb"
      },
      {
        "name": "Datadog",
        "mono": "Dd"
      },
      {
        "name": "Prometheus / Grafana",
        "mono": "Pg"
      },
      {
        "name": "Incident Response",
        "mono": "Ir",
        "note": "L2 / L3"
      },
      {
        "name": "Root-Cause Analysis",
        "mono": "Rc"
      }
    ]
  },
  {
    "id": "automation",
    "title": "Automation & Delivery",
    "subtitle": "Controlled changes and repeatable recovery",
    "skills": [
      {
        "name": "PowerShell",
        "mono": "Ps"
      },
      {
        "name": "Bash",
        "mono": "Sh"
      },
      {
        "name": "Python",
        "mono": "Py"
      },
      {
        "name": "Logic Apps",
        "mono": "La"
      },
      {
        "name": "Azure Automation",
        "mono": "Aa"
      },
      {
        "name": "Azure DevOps",
        "mono": "Ad"
      },
      {
        "name": "GitHub Actions",
        "mono": "Gh"
      },
      {
        "name": "Docker / Kubernetes",
        "mono": "Dk"
      },
      {
        "name": "Git",
        "mono": "Gt"
      }
    ]
  },
  {
    "id": "security",
    "title": "Security & Control",
    "subtitle": "Scoped permissions and documented operations",
    "skills": [
      {
        "name": "RBAC / Managed Identity",
        "mono": "Mi"
      },
      {
        "name": "Azure Key Vault",
        "mono": "Kv"
      },
      {
        "name": "Private Endpoints",
        "mono": "Pe"
      },
      {
        "name": "NSGs / Azure Firewall",
        "mono": "Fw"
      },
      {
        "name": "Linux / Windows Server",
        "mono": "Os"
      },
      {
        "name": "Hardening & Patching",
        "mono": "Hp"
      },
      {
        "name": "SOPs & Runbooks",
        "mono": "Rb"
      }
    ]
  }
];

export const skillEvidence: Record<string, string[]> = {
  "Microsoft Azure": [
    "Current portfolio · Cloud & Infrastructure"
  ],
  "Azure CLI": [
    "Current portfolio · Cloud & Infrastructure"
  ],
  "VMs & App Services": [
    "Current portfolio · Cloud & Infrastructure"
  ],
  "AKS": [
    "Current portfolio · Cloud & Infrastructure"
  ],
  "Azure SQL & Storage": [
    "Current portfolio · Cloud & Infrastructure"
  ],
  "Azure Arc": [
    "Hybrid Cloud Monitoring"
  ],
  "Terraform": [
    "Azure Self-Healing SRE Platform",
    "Azure DevOps · Terraform · AKS"
  ],
  "ARM / Bicep": [
    "Current portfolio · Cloud & Infrastructure"
  ],
  "AWS foundations": [
    "Hands-on exposure; foundational EC2, Lambda & CloudFormation knowledge"
  ],
  "Azure Monitor": [
    "Current portfolio · Signals & Response"
  ],
  "Log Analytics / KQL": [
    "Hybrid Cloud Monitoring",
    "LTIMindtree · Azure production operations"
  ],
  "Application Insights": [
    "Current portfolio · Signals & Response"
  ],
  "Azure Workbooks": [
    "Current portfolio · Signals & Response"
  ],
  "Datadog": [
    "Current portfolio · Signals & Response"
  ],
  "Prometheus / Grafana": [
    "Current portfolio · Signals & Response"
  ],
  "Incident Response": [
    "Current portfolio · Signals & Response"
  ],
  "Root-Cause Analysis": [
    "Current portfolio · Signals & Response"
  ],
  "PowerShell": [
    "Current portfolio · Automation & Delivery"
  ],
  "Bash": [
    "Current portfolio · Automation & Delivery"
  ],
  "Python": [
    "Current portfolio · Automation & Delivery"
  ],
  "Logic Apps": [
    "LTIMindtree · incident automation",
    "Azure Self-Healing SRE Platform"
  ],
  "Azure Automation": [
    "Current portfolio · Automation & Delivery"
  ],
  "Azure DevOps": [
    "Current portfolio · Automation & Delivery"
  ],
  "GitHub Actions": [
    "Current portfolio · Automation & Delivery"
  ],
  "Docker / Kubernetes": [
    "Current portfolio · Automation & Delivery"
  ],
  "Git": [
    "Current portfolio · Automation & Delivery"
  ],
  "RBAC / Managed Identity": [
    "Current portfolio · Security & Control"
  ],
  "Azure Key Vault": [
    "Current portfolio · Security & Control"
  ],
  "Private Endpoints": [
    "Current portfolio · Security & Control"
  ],
  "NSGs / Azure Firewall": [
    "Current portfolio · Security & Control"
  ],
  "Linux / Windows Server": [
    "Current portfolio · Security & Control"
  ],
  "Hardening & Patching": [
    "Current portfolio · Security & Control"
  ],
  "SOPs & Runbooks": [
    "Current portfolio · Security & Control"
  ]
};

export const seasons: Season[] = [
  {
    "number": 1,
    "title": "Engineering Foundations",
    "period": "2009 – 2021",
    "synopsis": "Mechanical engineering, industrial systems, and postgraduate study across India and Poland.",
    "episodes": [
      {
        "code": "S01 E01",
        "title": "The Foundation",
        "description": "Bachelor’s in Mechanical Engineering at Anna University, Chennai.",
        "tags": [
          "Mechanical Engineering",
          "Anna University"
        ],
        "runtime": "2009 – 2013",
        "palette": {
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a",
          "from": "#24060b"
        }
      },
      {
        "code": "S01 E02",
        "title": "The Next Chapter",
        "description": "Master’s in Material Science Engineering at Silesian University of Technology, Poland.",
        "tags": [
          "Material Science",
          "Silesian University"
        ],
        "runtime": "2019 – 2021",
        "palette": {
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff",
          "from": "#04121f"
        }
      }
    ]
  },
  {
    "number": 2,
    "title": "Industrial Systems & Leadership",
    "period": "Feb 2014 — Dec 2018",
    "synopsis": "IT & Engineering Business Head · Fluidtech Engineers · Chennai, India · Fluidtech Engineers India Pvt. Ltd.",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "IT & Engineering Business Head",
        "description": "Led cross-functional IT and engineering initiatives supporting industrial machinery, manufacturing, and customer projects.",
        "tags": [
          "Fluidtech Engineers",
          "Engineering & Operations"
        ],
        "runtime": "Feb 2014 — Dec 2018",
        "palette": {
          "via": "#0f4c6e",
          "to": "#05080d",
          "accent": "#4cc9ff",
          "from": "#04121f"
        }
      },
      {
        "code": "S02 E02",
        "title": "Systems, People & Process",
        "description": "Implemented equipment monitoring and dashboards for uptime, fault indicators, quality metrics, and production performance. Coordinated software, firmware, HMI/SCADA, and MES/ERP changes, with backup and continuity procedures.",
        "tags": [
          "Collaboration",
          "Continuous Improvement"
        ],
        "runtime": "Fluidtech Engineers",
        "palette": {
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8",
          "from": "#03150f"
        }
      }
    ]
  },
  {
    "number": 3,
    "title": "The Move to Azure",
    "period": "Jun 2022 — Feb 2023",
    "synopsis": "IT Project Specialist · Capgemini · Katowice, Poland",
    "episodes": [
      {
        "code": "S03 E01",
        "title": "IT Project Specialist",
        "description": "Supported Azure migrations involving IaaS/PaaS services, hybrid integration, and containerized workloads.",
        "tags": [
          "Capgemini",
          "Engineering & Operations"
        ],
        "runtime": "Jun 2022 — Feb 2023",
        "palette": {
          "via": "#0d5a40",
          "to": "#050a08",
          "accent": "#46e3a8",
          "from": "#03150f"
        }
      },
      {
        "code": "S03 E02",
        "title": "Systems, People & Process",
        "description": "Provisioned and monitored infrastructure with Azure Monitor, Log Analytics, and platform alerts. Collaborated on Docker/AKS troubleshooting and documented access models, connectivity diagnostics, and reusable support procedures.",
        "tags": [
          "Collaboration",
          "Continuous Improvement"
        ],
        "runtime": "Capgemini",
        "palette": {
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff",
          "from": "#120822"
        }
      }
    ]
  },
  {
    "number": 4,
    "title": "Technical Leadership & Training",
    "period": "Jun 2023 — Feb 2024",
    "synopsis": "Team Leader & IT Trainer · Concentrix · Katowice, Poland",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Team Leader & IT Trainer",
        "description": "Coordinated technical support escalations across teams and customer stakeholders.",
        "tags": [
          "Concentrix",
          "Engineering & Operations"
        ],
        "runtime": "Jun 2023 — Feb 2024",
        "palette": {
          "via": "#3d1a6e",
          "to": "#07060c",
          "accent": "#b98bff",
          "from": "#120822"
        }
      },
      {
        "code": "S04 E02",
        "title": "Systems, People & Process",
        "description": "Defined performance metrics, quality standards, and targeted operational improvement plans. Delivered technical training and reusable knowledge-base guidance for consistent troubleshooting.",
        "tags": [
          "Collaboration",
          "Continuous Improvement"
        ],
        "runtime": "Concentrix",
        "palette": {
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547",
          "from": "#1c1003"
        }
      }
    ]
  },
  {
    "number": 5,
    "title": "Cloud Reliability & Automation",
    "period": "Apr 2024 — Present",
    "synopsis": "Senior Cloud Engineer · LTIMindtree · Kraków, Poland · Azure Monitoring & DevOps",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "Senior Cloud Engineer",
        "description": "Respond to L2/L3 incidents across VMs, App Services, AKS, and databases; correlate alerts, logs, and deployment changes to guide service restoration. Execute Azure CLI diagnostics and resource changes during incidents and planned infrastructure updates.",
        "tags": [
          "LTIMindtree",
          "Engineering & Operations"
        ],
        "runtime": "Apr 2024 — Present",
        "palette": {
          "via": "#6b3c06",
          "to": "#0a0806",
          "accent": "#ffb547",
          "from": "#1c1003"
        }
      },
      {
        "code": "S05 E02",
        "title": "Make the Next Incident Easier",
        "description": "Reduced manual incident-resolution effort by approximately 40% with Logic Apps, Azure Automation runbooks, PowerShell, and Bash. Develop actionable alerts, dashboards, SOPs, and runbooks. Support Linux/Windows hardening, AKS troubleshooting, secure Terraform changes, and post-incident improvements.",
        "tags": [
          "Automation",
          "Reliability"
        ],
        "runtime": "LTIMindtree",
        "palette": {
          "via": "#6e0d1d",
          "to": "#09070a",
          "accent": "#ff3d5a",
          "from": "#24060b"
        }
      }
    ]
  }
];

export const topPicks: TopPick[] = [
  {
    "label": "Reliability in Action",
    "title": "Azure Self-Healing SRE Platform",
    "detail": "Azure Monitor → Logic Apps → PowerShell recovery",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  {
    "label": "Automation Impact",
    "title": "≈40% Less Manual Effort",
    "detail": "Incident-resolution effort reduced at LTIMindtree",
    "palette": {
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff",
      "from": "#04121f"
    }
  },
  {
    "label": "Hybrid Visibility",
    "title": "Hybrid Cloud Monitoring",
    "detail": "Azure Arc · KQL · Log Analytics · Workbooks",
    "palette": {
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8",
      "from": "#03150f"
    }
  },
  {
    "label": "Cloud Credentials",
    "title": "DevOps Engineer Expert",
    "detail": "Microsoft Certified · AZ-400",
    "palette": {
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff",
      "from": "#120822"
    }
  },
  {
    "label": "Azure Administration",
    "title": "Administrator Associate",
    "detail": "Microsoft Certified · AZ-104",
    "palette": {
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547",
      "from": "#1c1003"
    }
  },
  {
    "label": "Cloud Native Delivery",
    "title": "Terraform · AKS",
    "detail": "Infrastructure as Code · CI/CD · Docker",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  {
    "label": "Production Operations",
    "title": "Senior Cloud Engineer",
    "detail": "LTIMindtree · Kraków · April 2024 – Present",
    "palette": {
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff",
      "from": "#04121f"
    }
  },
  {
    "label": "Career Perspective",
    "title": "8+ Years in IT & Engineering",
    "detail": "Industrial systems, leadership, and cloud operations",
    "palette": {
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8",
      "from": "#03150f"
    }
  },
  {
    "label": "Academic Foundation",
    "title": "Engineering Across Borders",
    "detail": "Anna University · Silesian University of Technology",
    "palette": {
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff",
      "from": "#120822"
    }
  },
  {
    "label": "How I Work",
    "title": "Reliable Clouds. Calmer Operations.",
    "detail": "Understand the signal. Restore. Document. Improve.",
    "palette": {
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547",
      "from": "#1c1003"
    }
  }
];

export const introSlides: IntroSlide[] = [
  {
    "kicker": "The Engineer",
    "title": "Dennis David",
    "lines": [
      "Senior Cloud Engineer · Kraków, Poland",
      "8+ years across IT and engineering"
    ],
    "chips": [
      "Azure",
      "DevOps",
      "Site Reliability"
    ]
  },
  {
    "kicker": "Production Operations",
    "title": "Restore. Then Improve.",
    "lines": [
      "LTIMindtree · Senior Cloud Engineer · April 2024 – Present",
      "L2/L3 incident response, observability, and controlled automation"
    ],
    "chips": [
      "Azure Monitor",
      "AKS",
      "Runbooks"
    ]
  },
  {
    "kicker": "Automation Impact",
    "title": "≈40% Less Manual Effort",
    "lines": [
      "Logic Apps, Azure Automation, PowerShell, and Bash",
      "Reducing manual incident-resolution effort at LTIMindtree"
    ],
    "chips": [
      "Automation",
      "Recovery",
      "Operations"
    ]
  },
  {
    "kicker": "Original Projects",
    "title": "From Alert to Recovery",
    "lines": [
      "Observe. Orchestrate. Recover. Learn. An alert-to-remediation workflow for unhealthy Azure services, with scoped permissions and controlled recovery.",
      "Hybrid cloud observability and Terraform/AKS delivery"
    ],
    "chips": [
      "Terraform",
      "Logic Apps",
      "PowerShell"
    ]
  },
  {
    "kicker": "Credentials",
    "title": "Microsoft Certified",
    "lines": [
      "DevOps Engineer Expert · AZ-400",
      "Azure Administrator Associate · AZ-104"
    ],
    "chips": [
      "Azure",
      "DevOps"
    ]
  },
  {
    "kicker": "The Next Episode",
    "title": "Let’s Build Reliable Systems",
    "lines": [
      "Open to cloud engineering, DevOps, and site reliability opportunities",
      "Based in Europe · Unrestricted Polish labour-market access"
    ],
    "chips": [
      "Kraków, Poland",
      "Global Teams"
    ]
  }
];

export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  {
    "id": "dennis",
    "name": "Dennis",
    "blurb": "The full series, in order",
    "color": "#e5132b",
    "order": [
      "about",
      "journey",
      "originals",
      "picks",
      "skills",
      "moments",
      "story"
    ]
  },
  {
    "id": "recruiter",
    "name": "Recruiter",
    "blurb": "Experience, impact & credentials first",
    "color": "#4cc9ff",
    "order": [
      "story",
      "moments",
      "skills",
      "originals",
      "about",
      "journey",
      "picks"
    ]
  },
  {
    "id": "developer",
    "name": "Cloud Engineer",
    "blurb": "Architecture, automation & GitHub",
    "color": "#46e3a8",
    "order": [
      "originals",
      "skills",
      "journey",
      "moments",
      "about",
      "picks",
      "story"
    ]
  },
  {
    "id": "creative",
    "name": "The Full Journey",
    "blurb": "Engineering foundations to cloud reliability",
    "color": "#ffb547",
    "order": [
      "journey",
      "picks",
      "originals",
      "moments",
      "about",
      "skills",
      "story"
    ]
  }
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  "about": {
    "nav": "About",
    "card": "About Me",
    "meta": "The Pilot · Background & engineering foundation",
    "palette": {
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff",
      "from": "#120822"
    }
  },
  "journey": {
    "nav": "Journey",
    "card": "My Journey",
    "meta": "5 Seasons · 10 Episodes",
    "palette": {
      "via": "#6b3c06",
      "to": "#0a0806",
      "accent": "#ffb547",
      "from": "#1c1003"
    }
  },
  "originals": {
    "nav": "Originals",
    "card": "My Projects",
    "meta": "3 Originals · Azure, DevOps & SRE",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  "picks": {
    "nav": "Top Picks",
    "card": "Top Picks",
    "meta": "10 highlights from my portfolio",
    "palette": {
      "via": "#0d5a40",
      "to": "#050a08",
      "accent": "#46e3a8",
      "from": "#03150f"
    }
  },
  "skills": {
    "nav": "Skills",
    "card": "My Skills",
    "meta": "4 Categories · Cloud & operations",
    "palette": {
      "via": "#0f4c6e",
      "to": "#05080d",
      "accent": "#4cc9ff",
      "from": "#04121f"
    }
  },
  "moments": {
    "nav": "Moments",
    "card": "Key Moments",
    "meta": "4 Moments · 2 Microsoft Certifications",
    "palette": {
      "via": "#6e0d1d",
      "to": "#09070a",
      "accent": "#ff3d5a",
      "from": "#24060b"
    }
  },
  "story": {
    "nav": "Resume",
    "card": "The Full Story",
    "meta": "Career, credentials & CV download",
    "palette": {
      "via": "#3d1a6e",
      "to": "#07060c",
      "accent": "#b98bff",
      "from": "#120822"
    }
  }
};
