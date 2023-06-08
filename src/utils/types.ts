export interface IPromptArgs {
  industry: string
  budget: number
  sector: string
  currency: string
  brief: string
  goal: string
  projectStartDate: string
  deadline: string
  employees: Employee[]
}

interface Employee {
  title: string
  rate: number
}

export interface ProjectScope {
  projectPlan: string
  projectOverview: string
  workstreams: Workstream[]
  keyMilestones: Milestone[]
  projectTimeline: Timeline[]
  resourceModel: ResourceModel[]
  caseStudies: CaseStudy[]
}

interface Workstream {
  title: string
  estimatedDuration: number
  activities: string[]
  deliverables: Deliverable[]
}

interface Deliverable {
  title: string
  format: string
}

interface Milestone {
  title: string
  dayOfCompletion: number
}

interface Timeline {
  from: number
  to: number
  event: string
}

interface ResourceModel {
  accountLeader: Leader
  engagementLeader: Leader
  engagementManager: Leader
  workstreamLeads: WorkstreamLead[]
  analysts: Analyst
}

interface Leader {
  resource: string
  quantity: number
  rate: number
  workingDays: number
}

interface WorkstreamLead {
  workstreamLeader: Leader
}

interface Analyst {
  quantity: number
  rate: number
  totalWorkingDays: number
}

interface CaseStudy {
  industry: string
  title: string
  company: string
  relevanceToProject: string
}
