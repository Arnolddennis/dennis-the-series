/** Dennis David — content updated from his supplied SRE résumé; other projects retain their existing details. */

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
  "role": "Site Reliability Engineer · Azure & DevOps",
  "tagline": [
    "Azure Cloud Engineering",
    "DevOps & Automation",
    "Site Reliability"
  ],
  "intro": "I keep Azure and Linux production systems reliable through incident response, observability, and automation. I build alerts in Azure Monitor and Datadog, coordinate recovery through PagerDuty, and turn recurring incidents into documented, controlled recovery workflows. Based in Kraków, Poland.",
  "location": "Kraków, Poland",
  "email": "dennisdavid1991@gmail.com",
  "phone": "+48 787 793 194",
  "links": {
    "github": "https://github.com/Arnolddennis",
    "linkedin": "https://linkedin.com/in/arnolddennis"
  },
  "resumePdf": "/assets/Dennis-David-CV.pdf",
  "portrait": {
    "src": "/assets/portrait-720.webp",
    "srcSet": "/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w",
    "alt": "Dennis David wearing a grey suit and navy tie"
  },
  "interests": [
    "Reliable cloud platforms",
    "Incident response & observability",
    "Controlled recovery automation"
  ],
  "workAuthorization": "Authorized to work in Poland",
  "languages": [
    "English — Fluent",
    "Polish — Conversational (spoken B1)"
  ],
  "summary": "Senior Cloud Engineer specializing in Azure and Linux production operations, DevOps automation, incident response and observability. Hands-on with Azure Monitor, Datadog and PagerDuty in production: creating alerts from scratch, investigating service degradation, responding to incidents and restoring services. Experienced with Azure CLI, Bash, PowerShell, Log Analytics, Application Insights, Terraform/ARM/Bicep and Azure DevOps CI/CD pipelines. Supports Linux, Windows, AKS, applications and database workloads in enterprise environments."
};

export const education = [
  {
    "school": "Silesian University of Technology",
    "place": "Gliwice, Poland",
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
    "role": "Senior Cloud Engineer — Azure Monitoring and DevOps",
    "place": "Kraków, Poland",
    "period": "Apr 2024 — Present",
    "points": [
      "Provide enterprise L2/L3 production troubleshooting across Azure VMs, Linux/Windows systems, App Services, AKS, application dependencies and SQL workloads; investigate performance degradation, infrastructure faults and service availability incidents.",
      "Build production metric and log alerts from scratch in Azure Monitor and Datadog; configure thresholds, evaluation windows, dashboards, notification routing and KQL-based queries to detect failures and reduce false positives.",
      "Correlate system logs, KQL results, application telemetry, resource health, configuration changes and deployment events to identify likely fault domains and guide safe recovery under production pressure.",
      "Deploy and maintain monitoring resources as code with Terraform and ARM/Bicep, including Azure alert rules, diagnostic settings and action groups; use Azure CLI, Bash and PowerShell for incident diagnostics and recovery.",
      "Support Azure DevOps and GitHub CI/CD workflows: maintain YAML pipelines, troubleshoot build and release failures, validate infrastructure changes, and coordinate controlled deployment and rollback activities.",
      "Reduced manual incident-resolution effort by approximately 40% through monitoring-driven runbooks and scripted remediation; maintained procedures and troubleshooting documentation for support handovers.",
      "Troubleshoot Linux production hosts using service-status and system-log inspection, CPU/process analysis, memory and disk checks, SSH and network diagnostics; investigate AKS probes, ingress and scaling failures.",
      "Respond to production alerts through PagerDuty: acknowledge incidents, assess customer impact, coordinate escalation and recovery with engineering teams, and verify service health before resolution."
    ]
  },
  {
    "company": "Concentrix",
    "role": "Team Leader and IT Trainer",
    "place": "Katowice, Poland",
    "period": "Jun 2023 — Feb 2024",
    "points": [
      "Coordinated escalated technical-support work and cross-team communication, maintaining service quality, operational metrics and timely issue ownership.",
      "Defined quality standards and targeted improvement plans; contributed to a reported 92% improvement in customer-satisfaction scores.",
      "Delivered technical training and wrote reusable support knowledge-base content, troubleshooting guidance and process documentation."
    ]
  },
  {
    "company": "Capgemini",
    "role": "IT Project Specialist",
    "place": "Katowice, Poland",
    "period": "Jun 2022 — Feb 2023",
    "points": [
      "Supported cloud migration, Azure infrastructure and hybrid platform initiatives, including IaaS/PaaS components, requirements gathering and implementation coordination.",
      "Configured Azure Monitor, Log Analytics and platform alerting to improve operational visibility; collaborated on Docker/AKS diagnostics and troubleshooting with engineering teams.",
      "Documented RBAC/access, connectivity and application/infrastructure diagnostic procedures; communicated technical issues and project risks to stakeholders."
    ]
  },
  {
    "company": "Fluidtech Engineers India Pvt. Ltd.",
    "role": "IT and Engineering Business Head",
    "place": "Chennai, India",
    "period": "Feb 2014 — Dec 2018",
    "points": [
      "Led technical operations and engineering projects supporting industrial equipment, manufacturing and customer environments.",
      "Implemented telemetry and monitoring dashboards for equipment uptime, fault indicators and production performance; coordinated systems, software changes and backup/continuity procedures.",
      "Prepared technical documentation and worked with engineering teams and suppliers to track requirements, resolve equipment issues and coordinate operational improvements."
    ]
  }
];

export const projects: Project[] = [
  {
    "id": "azure-self-healing-sre-platform",
    "title": "Azure Self-Healing SRE Platform",
    "year": "Portfolio project",
    "genre": "Azure · SRE · Incident Automation",
    "logline": "A portfolio project for controlled Azure workload recovery: alerts, runbooks, scoped permissions, and health checks in one reliability workflow.",
    "stack": [
      "Terraform",
      "Azure Monitor",
      "Application Insights",
      "Log Analytics",
      "Logic Apps",
      "PowerShell",
      "Python",
      "Kubernetes",
      "Prometheus",
      "Grafana"
    ],
    "build": [
      "Designed an alert-to-runbook flow for controlled recovery of Azure workloads.",
      "Defined infrastructure as code, managed identity, scoped RBAC, observability, and health checks.",
      "Included CI validation and Kubernetes, Prometheus, and Grafana components."
    ],
    "features": [
      "Controlled alert-to-runbook recovery",
      "Managed identity and scoped RBAC",
      "Terraform infrastructure definitions",
      "Application Insights and Log Analytics",
      "Health checks and CI validation",
      "Prometheus and Grafana visibility"
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
        "value": "CI",
        "label": "recovery workflow validation"
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
        "name": "PagerDuty",
        "mono": "Pd",
        "note": "On-call"
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
      },
      {
        "name": "Alert Engineering",
        "mono": "Ae"
      },
      {
        "name": "Azure Resource Health",
        "mono": "Rh"
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
      },
      {
        "name": "YAML Pipelines",
        "mono": "Ya"
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
      },
      {
        "name": "Entra ID",
        "mono": "Id"
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
    "LTIMindtree · production monitors, thresholds, dashboards and alert routing"
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
  ],
  "PagerDuty": [
    "LTIMindtree · production alert acknowledgement, incident coordination and escalation"
  ],
  "Alert Engineering": [
    "LTIMindtree · Azure Monitor and Datadog metric/log alerts built from scratch"
  ],
  "Azure Resource Health": [
    "LTIMindtree · resource health and deployment-event correlation"
  ],
  "YAML Pipelines": [
    "LTIMindtree · Azure DevOps and GitHub CI/CD troubleshooting"
  ],
  "Entra ID": [
    "Résumé · Azure cloud and troubleshooting"
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
    "synopsis": "IT and Engineering Business Head · Fluidtech Engineers India Pvt. Ltd. · Chennai, India",
    "episodes": [
      {
        "code": "S02 E01",
        "title": "IT and Engineering Business Head",
        "description": "Led technical operations and engineering projects supporting industrial equipment, manufacturing and customer environments.",
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
        "description": "Implemented telemetry and monitoring dashboards for equipment uptime, fault indicators and production performance; coordinated systems, software changes and backup/continuity procedures. Prepared technical documentation and worked with engineering teams and suppliers to track requirements, resolve equipment issues and coordinate operational improvements.",
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
        "description": "Supported cloud migration, Azure infrastructure and hybrid platform initiatives, including IaaS/PaaS components, requirements gathering and implementation coordination.",
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
        "description": "Configured Azure Monitor, Log Analytics and platform alerting to improve operational visibility; collaborated on Docker/AKS diagnostics and troubleshooting with engineering teams. Documented RBAC/access, connectivity and application/infrastructure diagnostic procedures; communicated technical issues and project risks to stakeholders.",
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
    "synopsis": "Team Leader and IT Trainer · Concentrix · Katowice, Poland",
    "episodes": [
      {
        "code": "S04 E01",
        "title": "Team Leader and IT Trainer",
        "description": "Coordinated escalated technical-support work and cross-team communication, maintaining service quality, operational metrics and timely issue ownership.",
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
        "description": "Defined quality standards and targeted improvement plans; contributed to a reported 92% improvement in customer-satisfaction scores. Delivered technical training and wrote reusable support knowledge-base content, troubleshooting guidance and process documentation.",
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
    "synopsis": "Senior Cloud Engineer — Azure Monitoring and DevOps · LTIMindtree · Kraków, Poland",
    "episodes": [
      {
        "code": "S05 E01",
        "title": "Senior Cloud Engineer",
        "description": "Investigate Azure and Linux production incidents across VMs, App Services, AKS and SQL. Build Azure Monitor and Datadog alerts from scratch, correlate telemetry and resource health, and maintain monitoring as code with Terraform and ARM/Bicep.",
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
        "description": "Coordinate PagerDuty acknowledgement, escalation and recovery. Troubleshoot Linux hosts, AKS and CI/CD pipelines; validate deployments and rollbacks. Reduced manual incident-resolution effort by approximately 40% through monitoring-driven runbooks and scripted remediation.",
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
      "Site Reliability Engineer · Kraków, Poland",
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
      "Azure Monitor, Datadog, PagerDuty, Linux diagnostics, and controlled recovery"
    ],
    "chips": [
      "Azure Monitor",
      "Datadog",
      "PagerDuty"
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
      "Kraków, Poland · Authorized to work in Poland"
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

export const reliabilityWork = [
  {
    "title": "Alert engineering",
    "detail": "Implemented Azure Monitor alert rules through the portal and infrastructure as code; configured Datadog monitors and dashboards for application and infrastructure degradation."
  },
  {
    "title": "Incident management",
    "detail": "Used PagerDuty for on-call acknowledgement, incident coordination and escalation; improved diagnostic settings, signal quality and Azure Monitor Agent heartbeat troubleshooting."
  },
  {
    "title": "Azure networking diagnostics",
    "detail": "Investigated connectivity, NSG flow logs, Traffic Analytics and DNS visibility issues using platform telemetry to narrow down fault domains."
  },
  {
    "title": "AKS operations",
    "detail": "Supported ingress, health probes, resource scaling and telemetry collection troubleshooting; integrated Prometheus and Grafana visibility."
  },
  {
    "title": "Azure Update Manager",
    "detail": "Supported patching and maintenance diagnostics and documented recovery steps for operational teams."
  }
];
