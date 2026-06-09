/**
 * Central mock data store for Dibiz Studio Employee Portal
 * All data is set in May 2026 context
 */

import type { Profile } from "@/shared/stores/auth-store";
import type { AppRole } from "@/shared/types/roles";

// ─── Core Users / Profiles ────────────────────────────────────────────────

export const MOCK_PROFILES: Profile[] = [
  {
    id: "1",
    email: "snigdha@dibiz.com",
    full_name: "Snigdha Singh",
    avatar_url: null,
    role: "SUPER_ADMIN",
    phone: "+91 98765 00001",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "2",
    email: "prasanth@dibiz.com",
    full_name: "Prasanth Mahendran",
    avatar_url: null,
    role: "EMPLOYEE",
    phone: "+91 98765 00002",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-01-15T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "3",
    email: "riya@dibiz.com",
    full_name: "Riya Paithankar",
    avatar_url: null,
    role: "MANAGER",
    phone: "+91 98765 00003",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-01-15T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "4",
    email: "manshi@dibiz.com",
    full_name: "Manshi Rathi",
    avatar_url: null,
    role: "EMPLOYEE",
    phone: "+91 98765 00004",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-02-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "5",
    email: "vinisha@dibiz.com",
    full_name: "Vinisha",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00005",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "6",
    email: "simran@dibiz.com",
    full_name: "Simran Gaikwad",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00006",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "7",
    email: "sahil@dibiz.com",
    full_name: "Sahil",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00007",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "8",
    email: "vedika@dibiz.com",
    full_name: "Vedika",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00008",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
  {
    id: "9",
    email: "purva@dibiz.com",
    full_name: "Purva",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00009",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
  },
  {
    id: "10",
    email: "chirag@dibiz.com",
    full_name: "Chirag",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00010",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
  },
  {
    id: "11",
    email: "ritikesh@dibiz.com",
    full_name: "Ritikesh",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00011",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
  },
  {
    id: "12",
    email: "tarran@dibiz.com",
    full_name: "Tarran",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00012",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
  },
  {
    id: "13",
    email: "saniya@dibiz.com",
    full_name: "Saniya",
    avatar_url: null,
    role: "INTERN",
    phone: "+91 98765 00013",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
  },
  {
    id: "14",
    email: "yash@dibiz.com",
    full_name: "Yash",
    avatar_url: null,
    role: "EMPLOYEE",
    phone: "+91 98765 00014",
    is_active: true,
    onboarding_status: "COMPLETED",
    created_at: "2025-03-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
  },
];

export const MOCK_SUPER_ADMIN = MOCK_PROFILES[0];

// ─── Departments ────────────────────────────────────────────────────────────

export const MOCK_DEPARTMENTS = [
  {
    id: "dept-1",
    name: "Video Editing",
    code: "VE",
    description: "Organic and ad video editing for clients",
    head_id: "2",
    head: { id: "2", full_name: "Prasanth Mahendran", avatar_url: null },
    is_active: true,
    employee_count: 4,
  },
  {
    id: "dept-2",
    name: "Social Media Marketing",
    code: "SMM",
    description: "Research, scripting, shoot and posting",
    head_id: "3",
    head: { id: "3", full_name: "Riya Paithankar", avatar_url: null },
    is_active: true,
    employee_count: 1,
  },
  {
    id: "dept-3",
    name: "Graphic Design",
    code: "GD",
    description: "Organic and ad graphics, branding",
    head_id: "4",
    head: { id: "4", full_name: "Manshi Rathi", avatar_url: null },
    is_active: true,
    employee_count: 2,
  },
  {
    id: "dept-4",
    name: "Technology",
    code: "TECH",
    description: "Martech research and development",
    head_id: "1",
    head: { id: "1", full_name: "Snigdha Singh", avatar_url: null },
    is_active: true,
    employee_count: 4,
  },
  {
    id: "dept-5",
    name: "Production",
    code: "PROD",
    description: "Shoot and production support",
    head_id: "14",
    head: { id: "14", full_name: "Yash", avatar_url: null },
    is_active: true,
    employee_count: 1,
  },
];

// ─── Employee Profiles ───────────────────────────────────────────────────────

export const MOCK_EMPLOYEES = [
  {
    id: "emp-1",
    profile_id: "1",
    employee_code: "DIB-001",
    department_id: "dept-1",
    job_title: "Founder & CEO",
    employment_status: "ACTIVE",
    hire_date: "2024-01-01",
    termination_date: null,
    date_of_birth: "1992-04-15",
    work_location: "Office",
    created_at: "2025-01-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "1", full_name: "Snigdha Singh", email: "snigdha@dibiz.com", avatar_url: null, role: "SUPER_ADMIN" as AppRole, phone: "+91 98765 00001", is_active: true },
    department: { id: "dept-1", name: "Video Editing", code: "VE" },
  },
  {
    id: "emp-2",
    profile_id: "2",
    employee_code: "DIB-002",
    department_id: "dept-1",
    job_title: "Senior Video Editor",
    employment_status: "ACTIVE",
    hire_date: "2025-01-15",
    termination_date: null,
    date_of_birth: "1995-08-20",
    work_location: "Office",
    created_at: "2025-01-15T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "2", full_name: "Prasanth Mahendran", email: "prasanth@dibiz.com", avatar_url: null, role: "EMPLOYEE" as AppRole, phone: "+91 98765 00002", is_active: true },
    department: { id: "dept-1", name: "Video Editing", code: "VE" },
  },
  {
    id: "emp-3",
    profile_id: "3",
    employee_code: "DIB-003",
    department_id: "dept-2",
    job_title: "Social Media Manager",
    employment_status: "ACTIVE",
    hire_date: "2025-01-15",
    termination_date: null,
    date_of_birth: "1997-03-12",
    work_location: "Office",
    created_at: "2025-01-15T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "3", full_name: "Riya Paithankar", email: "riya@dibiz.com", avatar_url: null, role: "MANAGER" as AppRole, phone: "+91 98765 00003", is_active: true },
    department: { id: "dept-2", name: "Social Media Marketing", code: "SMM" },
  },
  {
    id: "emp-4",
    profile_id: "4",
    employee_code: "DIB-004",
    department_id: "dept-3",
    job_title: "Graphic Designer",
    employment_status: "ACTIVE",
    hire_date: "2025-02-01",
    termination_date: null,
    date_of_birth: "1998-11-05",
    work_location: "Office",
    created_at: "2025-02-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "4", full_name: "Manshi Rathi", email: "manshi@dibiz.com", avatar_url: null, role: "EMPLOYEE" as AppRole, phone: "+91 98765 00004", is_active: true },
    department: { id: "dept-3", name: "Graphic Design", code: "GD" },
  },
  {
    id: "emp-5",
    profile_id: "5",
    employee_code: "DIB-005",
    department_id: "dept-1",
    job_title: "VE Intern",
    employment_status: "ACTIVE",
    hire_date: "2025-06-01",
    termination_date: null,
    date_of_birth: "2001-07-18",
    work_location: "Office",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "5", full_name: "Vinisha", email: "vinisha@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00005", is_active: true },
    department: { id: "dept-1", name: "Video Editing", code: "VE" },
  },
  {
    id: "emp-6",
    profile_id: "6",
    employee_code: "DIB-006",
    department_id: "dept-1",
    job_title: "VE Intern",
    employment_status: "ACTIVE",
    hire_date: "2025-06-01",
    termination_date: null,
    date_of_birth: "2002-02-25",
    work_location: "Office",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "6", full_name: "Simran Gaikwad", email: "simran@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00006", is_active: true },
    department: { id: "dept-1", name: "Video Editing", code: "VE" },
  },
  {
    id: "emp-7",
    profile_id: "7",
    employee_code: "DIB-007",
    department_id: "dept-1",
    job_title: "VE Intern",
    employment_status: "ACTIVE",
    hire_date: "2025-06-01",
    termination_date: null,
    date_of_birth: "2002-09-14",
    work_location: "Office",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "7", full_name: "Sahil", email: "sahil@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00007", is_active: true },
    department: { id: "dept-1", name: "Video Editing", code: "VE" },
  },
  {
    id: "emp-8",
    profile_id: "8",
    employee_code: "DIB-008",
    department_id: "dept-3",
    job_title: "Graphic Design Intern",
    employment_status: "ACTIVE",
    hire_date: "2025-06-01",
    termination_date: null,
    date_of_birth: "2003-01-09",
    work_location: "Office",
    created_at: "2025-06-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "8", full_name: "Vedika", email: "vedika@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00008", is_active: true },
    department: { id: "dept-3", name: "Graphic Design", code: "GD" },
  },
  {
    id: "emp-9",
    profile_id: "9",
    employee_code: "DIB-009",
    department_id: "dept-4",
    job_title: "Tech Intern",
    employment_status: "ACTIVE",
    hire_date: "2026-05-12",
    termination_date: null,
    date_of_birth: "2003-06-22",
    work_location: "Office",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
    profile: { id: "9", full_name: "Purva", email: "purva@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00009", is_active: true },
    department: { id: "dept-4", name: "Technology", code: "TECH" },
  },
  {
    id: "emp-10",
    profile_id: "10",
    employee_code: "DIB-010",
    department_id: "dept-4",
    job_title: "Tech Intern",
    employment_status: "ACTIVE",
    hire_date: "2026-05-12",
    termination_date: null,
    date_of_birth: "2003-12-01",
    work_location: "Office",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
    profile: { id: "10", full_name: "Chirag", email: "chirag@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00010", is_active: true },
    department: { id: "dept-4", name: "Technology", code: "TECH" },
  },
  {
    id: "emp-11",
    profile_id: "11",
    employee_code: "DIB-011",
    department_id: "dept-4",
    job_title: "Tech Intern",
    employment_status: "ACTIVE",
    hire_date: "2026-05-12",
    termination_date: null,
    date_of_birth: "2003-04-17",
    work_location: "Office",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
    profile: { id: "11", full_name: "Ritikesh", email: "ritikesh@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00011", is_active: true },
    department: { id: "dept-4", name: "Technology", code: "TECH" },
  },
  {
    id: "emp-12",
    profile_id: "12",
    employee_code: "DIB-012",
    department_id: "dept-4",
    job_title: "Tech Intern",
    employment_status: "ACTIVE",
    hire_date: "2026-05-12",
    termination_date: null,
    date_of_birth: "2003-08-30",
    work_location: "Office",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
    profile: { id: "12", full_name: "Tarran", email: "tarran@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00012", is_active: true },
    department: { id: "dept-4", name: "Technology", code: "TECH" },
  },
  {
    id: "emp-13",
    profile_id: "13",
    employee_code: "DIB-013",
    department_id: "dept-2",
    job_title: "Script Writer Intern",
    employment_status: "ACTIVE",
    hire_date: "2026-05-12",
    termination_date: null,
    date_of_birth: "2003-03-11",
    work_location: "Office",
    created_at: "2026-05-12T00:00:00.000Z",
    updated_at: "2026-05-12T00:00:00.000Z",
    profile: { id: "13", full_name: "Saniya", email: "saniya@dibiz.com", avatar_url: null, role: "INTERN" as AppRole, phone: "+91 98765 00013", is_active: true },
    department: { id: "dept-2", name: "Social Media Marketing", code: "SMM" },
  },
  {
    id: "emp-14",
    profile_id: "14",
    employee_code: "DIB-014",
    department_id: "dept-5",
    job_title: "Production Lead",
    employment_status: "ACTIVE",
    hire_date: "2025-03-01",
    termination_date: null,
    date_of_birth: "1996-05-28",
    work_location: "Office",
    created_at: "2025-03-01T00:00:00.000Z",
    updated_at: "2026-05-01T00:00:00.000Z",
    profile: { id: "14", full_name: "Yash", email: "yash@dibiz.com", avatar_url: null, role: "EMPLOYEE" as AppRole, phone: "+91 98765 00014", is_active: true },
    department: { id: "dept-5", name: "Production", code: "PROD" },
  },
];

// ─── May 2026 EOD Data ───────────────────────────────────────────────────────

let eodIdCounter = 1;
function makeEod(
  employeeId: string,
  employeeName: string,
  date: string,
  tasks: string[],
  hours: number,
  blockers?: string,
) {
  return {
    id: `eod-${eodIdCounter++}`,
    employee_id: employeeId,
    employee_name: employeeName,
    report_date: date,
    tasks_completed: tasks,
    hours_worked: hours,
    blockers: blockers ?? null,
    tomorrow_plan: null,
    manager_comment: null,
    reviewed_by: null,
    reviewed_at: null,
    created_at: `${date}T18:00:00.000Z`,
  };
}

export const MOCK_EOD_RECORDS = [
  // Prasanth - Senior VE
  makeEod("2", "Prasanth Mahendran", "2026-05-11", ["Munchkaro Ep.6 & 8 subtitles (remaining)", "XYXX shoot", "Dibiz shoot"], 9),
  makeEod("2", "Prasanth Mahendran", "2026-05-12", ["Munchkaro Episode 6 & 8 done", "Shoot for XYXX"], 9),
  makeEod("2", "Prasanth Mahendran", "2026-05-13", ["XYXX 2 video ads"], 8),
  makeEod("2", "Prasanth Mahendran", "2026-05-14", ["Full day XYXX Shoot"], 9),
  makeEod("2", "Prasanth Mahendran", "2026-05-15", ["XYXX full day Shoot"], 9),
  makeEod("2", "Prasanth Mahendran", "2026-05-16", ["Police XYXX reel", "GF boxers XYXX reel"], 8),
  makeEod("2", "Prasanth Mahendran", "2026-05-18", ["XYXX kidnapping video", "Changes on XYXX reels", "xyxx shoot 2 videos"], 9),
  makeEod("2", "Prasanth Mahendran", "2026-05-19", ["Transitional XYXX video - Music & SFX of XYXX Goa trip and police video"], 8),
  makeEod("2", "Prasanth Mahendran", "2026-05-20", ["Iterations XYXX", "Dibiz lockdown shoot"], 9),
  makeEod("2", "Prasanth Mahendran", "2026-05-21", ["Superman Save me XYXX"], 8),
  makeEod("2", "Prasanth Mahendran", "2026-05-22", ["Dibiz work from home reel"], 8),
  makeEod("2", "Prasanth Mahendran", "2026-05-25", ["XYXX full day Shoot"], 9),

  // Vinisha - VE Intern
  makeEod("5", "Vinisha", "2026-05-04", ["Shot Dibiz content", "ref for XYXX"], 8),
  makeEod("5", "Vinisha", "2026-05-05", ["Went for Vox Pop shoot", "Dibiz content", "helped with Dibiz carousel"], 9),
  makeEod("5", "Vinisha", "2026-05-06", ["Took voiceover for Brainrot content", "helped and acted for Dibiz content", "started editing Ep.3 of Berry Beet"], 8),
  makeEod("5", "Vinisha", "2026-05-07", ["Started Brainrot content", "assigned Ep.3 to Sahil", "helped and acted for Dibiz content"], 8),
  makeEod("5", "Vinisha", "2026-05-08", ["Completed Brainrot content", "helped and acted for Dibiz content"], 8),
  makeEod("5", "Vinisha", "2026-05-09", ["Finished changes for Brainrot", "started Ep.6 of Berry Beet"], 7),
  makeEod("5", "Vinisha", "2026-05-11", ["Edited Berry Beet Ep.6", "changes for Brainrot", "Bloomastra shoot"], 9),
  makeEod("5", "Vinisha", "2026-05-12", ["Edited bloomastra reel", "assigned amazon listing creatives", "ideated berry beet amazon video ad"], 8),
  makeEod("5", "Vinisha", "2026-05-13", ["Finalized the brainrot edit", "scripted ep.2 of brainrot", "worked on amazon listing creatives with Manshi"], 8),
  makeEod("5", "Vinisha", "2026-05-14", ["Edited 1 XYXX reel", "started editing one more XYXX reel"], 8),
  makeEod("5", "Vinisha", "2026-05-15", ["Did changes in XYXX reel", "completed 2nd assigned reel of XYXX"], 8),
  makeEod("5", "Vinisha", "2026-05-16", ["Edited superman reel", "finalised XYXX 2 edits", "helped with changes of product speaking reel"], 8),
  makeEod("5", "Vinisha", "2026-05-18", ["Finalised one edit of XYXX", "started editing a new XYXX reel"], 8),
  makeEod("5", "Vinisha", "2026-05-19", ["Finalized the remaining 1 XYXX edit", "started and completed 1 more XYXX edit"], 8),
  makeEod("5", "Vinisha", "2026-05-20", ["Shoot Dibiz reel", "got script approved", "did review work"], 9),
  makeEod("5", "Vinisha", "2026-05-21", ["Shot Dibiz reel", "started with superman therapist XYXX video and WFH Dibiz reel"], 9),
  makeEod("5", "Vinisha", "2026-05-22", ["Edited 2 versions of therapist superman reel", "worked on La Bella and Aerowalk product list"], 8),
  makeEod("5", "Vinisha", "2026-05-28", ["Edited 2 versions of hide and seek XYXX reel", "helped in Dibiz shoot"], 9),
  makeEod("5", "Vinisha", "2026-05-29", ["Edited 2 XYXX reels"], 8),
  makeEod("5", "Vinisha", "2026-05-30", ["Edited 2 XYXX reels"], 8),
  makeEod("5", "Vinisha", "2026-05-31", ["Edited one reel", "finalised and uploaded all"], 8),

  // Simran - VE Intern
  makeEod("6", "Simran Gaikwad", "2026-05-11", ["Shot Bloomastra", "XYXX shoot", "1 BA Edit", "helped in graphic Ep.1"], 9),
  makeEod("6", "Simran Gaikwad", "2026-05-12", ["Assigned amazon listing creatives", "ideated berry beet amazon video ad", "2 reel changes"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-13", ["SS and berry beats graphics", "XYXX edit"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-14", ["Full day XYXX Shoot"], 9),
  makeEod("6", "Simran Gaikwad", "2026-05-15", ["1 XYXX reel edit and shoot"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-16", ["1 XYXX reel edit and shoot"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-18", ["1 XYXX reel edit", "progress new signature reel", "worked on the approval of berry beat"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-19", ["1 XYXX reel and signature progress"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-20", ["1 signature", "1 in progress", "shoot", "XYXX 1 reel SFX experiment"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-21", ["Shoot", "changes - (XYXX, signature)", "ad 232 signature"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-22", ["Dibiz shoot", "232 signature", "Dibiz graphics", "help in pitch deck"], 9),
  makeEod("6", "Simran Gaikwad", "2026-05-25", ["Changes in signature", "started BA ad"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-27", ["XYXX 1 reel (undies, boxer)", "Dibiz reel", "XYXX 1 started"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-28", ["XYXX", "BA changes"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-29", ["XYXX", "BA (changes)", "started OPTION CHOOSING"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-30", ["Edited 3 XYXX reels (1 change)"], 8),
  makeEod("6", "Simran Gaikwad", "2026-05-31", ["Shoot", "BA 2 changes"], 9),

  // Sahil - VE Intern
  makeEod("7", "Sahil", "2026-05-11", ["Signature 227 done", "Signature 228 pending", "Signature 229 pending", "Ep changes Berry Beet"], 8),
  makeEod("7", "Sahil", "2026-05-18", ["Leave"], 0),
  makeEod("7", "Sahil", "2026-05-19", ["227, 228 Done", "233 Started", "234 Pending & Signature"], 8),
  makeEod("7", "Sahil", "2026-05-20", ["Ad 233, ad 234 done", "ad 227, ad 228 changes"], 8),
  makeEod("7", "Sahil", "2026-05-21", ["288 done"], 8),
  makeEod("7", "Sahil", "2026-05-22", ["234 done", "ad 228 changes"], 8),
  makeEod("7", "Sahil", "2026-05-25", ["BA ad 45 started", "XYXX reel started", "signature changes"], 8),
  makeEod("7", "Sahil", "2026-05-27", ["XYXX GenZ V1 done", "V2 started", "BA ad 45 done"], 8),
  makeEod("7", "Sahil", "2026-05-28", ["XYXX GenZ V1 done", "V2 changes", "dakho vo aayaga started"], 8),
  makeEod("7", "Sahil", "2026-05-29", ["XYXX GENZ V2"], 8),
  makeEod("7", "Sahil", "2026-05-30", ["XYXX V2", "dakho vo aayaga - shot and edit"], 9),
  makeEod("7", "Sahil", "2026-05-31", ["BA ad 45", "XYXX V1 and V2 done"], 8),

  // Riya - SMM
  makeEod("3", "Riya Paithankar", "2026-05-11", ["Shot and edited Bloomastra meta ad", "ideated Dibiz page"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-12", ["Worked on Thumbnails, color theme, font, aesthetic for Dibiz page", "scripted 2 Dibiz reels", "SS carousel and Hosteller meeting"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-13", ["Created thumbnails for Dibiz", "XYXX ref videos", "Scripted Brainrot script and Dibiz reel script", "SS carousel"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-14", ["Content deck for LABELLA", "Script dibiz reel", "Story/scripting for hosteller", "Thumbnail creation for Dibiz"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-15", ["XYXX shoot", "Dibiz shoot"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-16", ["Scripted 3 scripts for XYXX", "Shoot for XYXX", "Munchkaro thumbnail"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-18", ["XYXX ref", "Artist Selection", "Postings", "Hosteller meeting"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-19", ["Scripts for XYXX and Ayush Wellness", "artist selection", "Myntra listing for LA BELLA and aerowalk", "meeting"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-20", ["Script for Ayush Wellness", "Work from home shoot", "Hiring actors", "posting"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-21", ["Scripts for XYXX", "Postings", "shoot for work from home for Dibiz"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-22", ["Dibiz shoot", "Aerowalk trend analysis", "XYXX scripting", "posting"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-25", ["Bloomastra scripts", "Tech script revise", "Dibiz content ideation", "2 Carousals for Dibiz"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-26", ["Posting for BA, Munchkaro, SS", "Aayush Wellness Shoot (5 hours)", "BA Script review with Vaibhav & Tech Script Review with Snigdha", "226 VE Review for BA"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-27", ["Dibiz carousel review and changes", "Dibiz script", "Shoot", "Bloomastra trend analysis", "Postings (Bloomastra and Dibiz)"], 9),
  makeEod("3", "Riya Paithankar", "2026-05-28", ["Bloomastra concept ideation and trend analysis", "Dibiz carousel review", "Dibiz reel review", "Bloomastra graphic review"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-29", ["Dibiz post", "Scripts for Bloomastra (5 scripts)", "Bloomastra carousel review"], 8),
  makeEod("3", "Riya Paithankar", "2026-05-30", ["Bloomastra Carousel", "Bloomastra ideation", "Dibiz carousel and review"], 8),

  // Manshi - Graphic Designer
  makeEod("4", "Manshi Rathi", "2026-05-11", ["Worked on Berry Beet thumbnails"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-12", ["Created bloomastra statics and edited a few statics", "worked on berry beet amazon listing page graphics"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-13", ["Worked on amazon listing page", "created thumbnails for Dibiz Instagram page"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-14", ["Worked on thumbnails", "started creating deck for LaBella"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-15", ["Completed deck", "creating thumbnails"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-16", ["Made thumbnails for Dibiz", "made a thumbnail for Munchkaro"], 7),
  makeEod("4", "Manshi Rathi", "2026-05-18", ["Leave"], 0),
  makeEod("4", "Manshi Rathi", "2026-05-19", ["Thumbnails for Munchkaro", "started with Figma"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-20", ["Made a few changes on signature ad", "started with Figma"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-21", ["Worked on pitch deck"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-22", ["Worked on pitch deck"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-25", ["Created bloomastra ad creatives", "selected products for aerowalk and labella", "went for shoot"], 9),
  makeEod("4", "Manshi Rathi", "2026-05-27", ["Worked on munchkaro website", "made thumbnails for munchkaro and dibiz", "designed startup zone deck"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-28", ["Researched competitor websites", "created banner for signature website", "made a few changes on ads"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-29", ["Started creating about us page for the website", "made a few changes for dibiz post", "started editing for bloomastra graphics"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-30", ["Created bloomastra graphics", "Product landing page for labella and aerowalk"], 8),
  makeEod("4", "Manshi Rathi", "2026-05-31", ["Product landing page for labella and aerowalk", "made thumbnail for bloomastra", "started with homepage"], 8),

  // Tech Interns - Purva, Chirag, Ritikesh, Tarran
  makeEod("9", "Purva", "2026-05-12", ["Understood dibiz setup (Asana and Slack)", "Logged in Shopify", "Edited cart for Bloomastra"], 8),
  makeEod("9", "Purva", "2026-05-13", ["Integrated Shopify CLI into code editor", "worked on Bloomastra with Ritikesh", "meeting with ShipRocket", "creating product page for Munchkaro"], 9),
  makeEod("9", "Purva", "2026-05-14", ["Completed product page for laptop and mobile view", "completed story page", "started footer section"], 8),
  makeEod("9", "Purva", "2026-05-15", ["Completed Munchkaro entire site as per Figma", "CSS for mobile view remaining"], 8),
  makeEod("9", "Purva", "2026-05-16", ["Completed mobile view munchkaro page", "made changes as reviewed", "compared with competitors page"], 8),
  makeEod("9", "Purva", "2026-05-18", ["Domain server connection of munchkaro through GoDaddy", "TLS server connection", "redirected every other munchkaro site to www.munchkaro.com"], 9),
  makeEod("9", "Purva", "2026-05-19", ["Wrote script for tech reel (Google cart)", "worked on munchkaro site (applying scroll lock, changing fonts etc)", "checked about review system"], 8),
  makeEod("9", "Purva", "2026-05-20", ["Half day: created coming soon page and redirected all links", "made demo toggle animation", "fixed mobile view"], 4),
  makeEod("9", "Purva", "2026-05-21", ["Meta ads research", "watched YT video", "studied more about tech", "wrote one script (about MCP)"], 8),
  makeEod("9", "Purva", "2026-05-22", ["No pending tasks", "assigned tasks were completed", "waiting for further Figma designs"], 4),
  makeEod("9", "Purva", "2026-05-25", ["Redesign of munchkaro", "started on new theme from scratch", "maintaining the Shopify inbuilt feature"], 8),
  makeEod("9", "Purva", "2026-05-26", ["Continue redesign with corrections", "completion of munchkaro product page"], 8),

  makeEod("10", "Chirag", "2026-05-12", ["Interview at 1 PM", "Onboarding - creating accounts", "Joined Dibiz channels on Asana and Slack", "Fixed Dibiz logo overflow in mobile view on Framer", "Worked on Bloomastra cart drawer", "Got AeroWalk Shopify access, started CRO"], 8),
  makeEod("10", "Chirag", "2026-05-13", ["Continued CRO PPT of Aerowalk", "compared with Mochi, Ikoho, Nykaa, Woodland, Hush Puppies", "Got it reviewed by Snigdha ma'am", "Attended ShipRocket meeting", "Finished AeroWalk CRO"], 9),
  makeEod("10", "Chirag", "2026-05-14", ["Started with DIBIZ site on Framer", "Added linear gradient on borders of scroll video section", "Compared similar businesses", "Helped content team for shoot and reviews"], 8),
  makeEod("10", "Chirag", "2026-05-15", ["Signature colour swatch on each product page", "Figured out Amazon product listing of Munchkaro", "Bought cycle for the shoot"], 9),
  makeEod("10", "Chirag", "2026-05-16", ["Studied Google I/O event", "Made script for tech reel of Rambler", "Figured out how to get rid of Gemini watermark in Signature product images"], 8),
  makeEod("10", "Chirag", "2026-05-18", ["Added screenshot and rewrote Mindwise audit page", "Figured out how to remove Gemini watermark from Signature product images"], 8),
  makeEod("10", "Chirag", "2026-05-19", ["Removed the Gemini watermark from 88 images of trousers and pants", "Fixed announcement bar and modified Signature site as per instructions"], 8),
  makeEod("10", "Chirag", "2026-05-20", ["Half day: Signature site optimisation and fixed colour swatch not matching with product"], 4),
  makeEod("10", "Chirag", "2026-05-21", ["Read news regarding tech/AI updates worldwide", "Added 3 more topics in the reel doc", "Saw meta ads course till 1.5 hours"], 7),
  makeEod("10", "Chirag", "2026-05-25", ["Amazon product listing of Munchkaro", "Published that", "Initialised trademark process for Munchkaro on Amazon", "Read the code base of Aerowalk"], 8),
  makeEod("10", "Chirag", "2026-05-26", ["Redesigned the product page of Aerowalk as per Figma design given"], 8),

  makeEod("11", "Ritikesh", "2026-05-12", ["Worked on Bloomastra cart changes (added global offer announcement, free gift logic)"], 8),
  makeEod("11", "Ritikesh", "2026-05-13", ["Working on integrating GoKwik cart with Bloomastra"], 8),
  makeEod("11", "Ritikesh", "2026-05-14", ["Worked on Bloomastra gift addition/removal logic", "Updated a product listing as mentioned"], 8),
  makeEod("11", "Ritikesh", "2026-05-15", ["Integrated GoKwik cart with Bloomastra", "Updated product images on Bloomastra", "Learning GoKwik Engage CRM tool"], 8),
  makeEod("11", "Ritikesh", "2026-05-16", ["Testing Kwikengage prepaid to COD conversion automation"], 8),
  makeEod("11", "Ritikesh", "2026-05-18", ["Worked on COD to prepaid automation"], 8),
  makeEod("11", "Ritikesh", "2026-05-19", ["Raised a ticket on GoKwik to recover account", "Started designing Consultation page for Dibiz"], 8),
  makeEod("11", "Ritikesh", "2026-05-20", ["Got GoKwik dashboard account issue fixed", "Finished designing consultation page basic version"], 8),
  makeEod("11", "Ritikesh", "2026-05-21", ["Designed consultation landing page", "Updated cart changes on Bloomastra"], 8),
  makeEod("11", "Ritikesh", "2026-05-22", ["Started building the consultation page in Framer"], 8),
  makeEod("11", "Ritikesh", "2026-05-25", ["Working on consultation page in Framer", "Watched meta ads course"], 8),
  makeEod("11", "Ritikesh", "2026-05-26", ["Working on consultation page in Framer"], 8),

  makeEod("12", "Tarran", "2026-05-12", ["Shoot and CRO"], 8),
  makeEod("12", "Tarran", "2026-05-13", ["PPT"], 8),
  makeEod("12", "Tarran", "2026-05-14", ["Acting and learning CRO & CRM"], 8),
  makeEod("12", "Tarran", "2026-05-15", ["CRO work and automation"], 8),
  makeEod("12", "Tarran", "2026-05-16", ["HR automation"], 8),
  makeEod("12", "Tarran", "2026-05-18", ["Testing the workflow and debugging"], 8),
  makeEod("12", "Tarran", "2026-05-19", ["Automation"], 8),
  makeEod("12", "Tarran", "2026-05-20", ["EOD automation"], 8),
  makeEod("12", "Tarran", "2026-05-21", ["Sales automation & R&D learning FB"], 8),
  makeEod("12", "Tarran", "2026-05-22", ["Shoot"], 9),
  makeEod("12", "Tarran", "2026-05-25", ["LaBella product page"], 8),
  makeEod("12", "Tarran", "2026-05-26", ["LaBella file analysis"], 8),

  // Vedika - GD Intern
  makeEod("8", "Vedika", "2026-05-11", ["Thumbnails design (with changes)", "Signature creative", "Working on Berry Beet product listing"], 8),
  makeEod("8", "Vedika", "2026-05-12", ["Changes done of signature task and berry beet product listing"], 8),
  makeEod("8", "Vedika", "2026-05-13", ["Berry beet changes and one more creative done"], 8),
  makeEod("8", "Vedika", "2026-05-14", ["Bloomastra thumbnails and assigned task", "Salt media"], 8),
  makeEod("8", "Vedika", "2026-05-18", ["Worked on the assigned salt media task", "Ad 235, 236, 237 - Pants"], 8),
  makeEod("8", "Vedika", "2026-05-19", ["Changes in the creatives AD235, 236, Ad 237 AND BLOOMASTRA"], 8),
  makeEod("8", "Vedika", "2026-05-20", ["Changes in the product listing images of Munchkaro"], 8),
  makeEod("8", "Vedika", "2026-05-21", ["Worked on the SS ke creatives Keyur site Malv Mehta"], 8),
  makeEod("8", "Vedika", "2026-05-22", ["Changes in the signature creatives", "Beerybeet product listing and SS ke Kalol property", "Pitched for the creative"], 8),
  makeEod("8", "Vedika", "2026-05-25", ["SS creatives for Anand Patel, Anuj Patel"], 8),
  makeEod("8", "Vedika", "2026-05-27", ["1 carousel for Dibiz (growing up)", "assigned salt media task of Bloomastra ad 41, 42"], 8),
  makeEod("8", "Vedika", "2026-05-28", ["Carousel for Dibiz and edited Berry Beet file"], 8),
  makeEod("8", "Vedika", "2026-05-29", ["LEAVE"], 0),
  makeEod("8", "Vedika", "2026-05-30", ["Thumbnails for Bloomastra all reels", "changes in assigned salt media task"], 8),
  makeEod("8", "Vedika", "2026-05-31", ["Carousel for Dibiz", "re-edited the Munchkaro file"], 8),
];

// ─── EOD Roster + Rolling Recent Data ───────────────────────────────────────
// Office hours are 11:00–19:00 and EOD reports are due at 19:00. The seeded May
// data above is historical; the helpers below generate stable, deterministic
// submissions for the most recent working days so the manager board always has
// "today" and "yesterday" to look at.

export interface EodRosterMember {
  employee_id: string;
  employee_name: string;
  job_title: string;
  department: string;
  taskPool: string[];
}

// Build the roster (and a per-person task pool) from the seeded May data.
export const MOCK_EOD_ROSTER: EodRosterMember[] = (() => {
  const byId = new Map<string, EodRosterMember>();
  for (const rec of MOCK_EOD_RECORDS) {
    const emp = MOCK_EMPLOYEES.find((e) => e.profile_id === rec.employee_id);
    if (!byId.has(rec.employee_id)) {
      byId.set(rec.employee_id, {
        employee_id: rec.employee_id,
        employee_name: rec.employee_name,
        job_title: emp?.job_title ?? "Team Member",
        department: emp?.department?.name ?? "—",
        taskPool: [],
      });
    }
    const member = byId.get(rec.employee_id)!;
    for (const task of rec.tasks_completed) {
      if (task && !/^(leave|wfh|holiday)$/i.test(task)) member.taskPool.push(task);
    }
  }
  return Array.from(byId.values());
})();

// Simple deterministic hash so generated data is stable across renders.
function seededInt(seed: string, max: number) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) % max;
}

function isoDate(d: Date) {
  return d.toISOString().split("T")[0];
}

// Returns the last `count` working days (Mon–Sat) ending at `endDate` inclusive,
// ordered most-recent first.
export function getRecentWorkingDays(count: number, endDate = new Date()): string[] {
  const days: string[] = [];
  const cursor = new Date(endDate);
  while (days.length < count) {
    const dow = cursor.getDay(); // 0 = Sun
    if (dow !== 0) days.push(isoDate(cursor));
    cursor.setDate(cursor.getDate() - 1);
  }
  return days;
}

// Generate recent EOD submissions for the roster. ~88% submit on a given day.
export const MOCK_RECENT_EOD_RECORDS = (() => {
  const records: typeof MOCK_EOD_RECORDS = [];
  const days = getRecentWorkingDays(10);
  let idc = 10000;
  days.forEach((date, dayIndex) => {
    for (const member of MOCK_EOD_ROSTER) {
      if (member.taskPool.length === 0) continue;
      // Deterministically skip ~12% of submissions to simulate pending EODs.
      const skip = seededInt(`${member.employee_id}-${date}-skip`, 100) < 12;
      if (skip) continue;
      const poolLen = member.taskPool.length;
      const taskCount = 1 + seededInt(`${member.employee_id}-${date}-n`, 3);
      const tasks: string[] = [];
      for (let t = 0; t < taskCount; t++) {
        const idx = seededInt(`${member.employee_id}-${date}-${t}`, poolLen);
        const task = member.taskPool[idx];
        if (!tasks.includes(task)) tasks.push(task);
      }
      const hours = 8 + seededInt(`${member.employee_id}-${date}-h`, 2);
      // Entries from 2+ days ago are reviewed; today/yesterday await review.
      const reviewed = dayIndex >= 2;
      records.push({
        id: `eod-r-${idc++}`,
        employee_id: member.employee_id,
        employee_name: member.employee_name,
        report_date: date,
        tasks_completed: tasks,
        hours_worked: hours,
        blockers: null,
        tomorrow_plan: null,
        manager_comment: reviewed ? "Reviewed. Good work." : null,
        reviewed_by: reviewed ? "1" : null,
        reviewed_at: reviewed ? `${date}T20:00:00.000Z` : null,
        created_at: `${date}T19:00:00.000Z`,
      });
    }
  });
  return records;
})();

// All EOD records the app reads from (historical May + rolling recent).
export const MOCK_ALL_EOD_RECORDS = [
  ...MOCK_RECENT_EOD_RECORDS,
  ...MOCK_EOD_RECORDS,
];

// ─── Leave Policies ──────────────────────────────────────────────────────────

export const MOCK_LEAVE_POLICIES = [
  { id: "lp-1", name: "Casual Leave", code: "CL", description: "For personal/casual purposes", days_per_year: 12, is_paid: true, requires_approval: true, min_notice_days: 1, max_consecutive_days: 3, carry_forward: false, carry_forward_limit: null, is_active: true },
  { id: "lp-2", name: "Sick Leave", code: "SL", description: "For health-related absences", days_per_year: 8, is_paid: true, requires_approval: false, min_notice_days: 0, max_consecutive_days: 5, carry_forward: false, carry_forward_limit: null, is_active: true },
  { id: "lp-3", name: "Earned Leave", code: "EL", description: "Accrued annual leave", days_per_year: 15, is_paid: true, requires_approval: true, min_notice_days: 7, max_consecutive_days: 10, carry_forward: true, carry_forward_limit: 15, is_active: true },
  { id: "lp-4", name: "Loss of Pay", code: "LOP", description: "Unpaid leave beyond entitlement", days_per_year: 0, is_paid: false, requires_approval: true, min_notice_days: 1, max_consecutive_days: null, carry_forward: false, carry_forward_limit: null, is_active: true },
];

// ─── Leave Requests ──────────────────────────────────────────────────────────

export const MOCK_LEAVE_REQUESTS = [
  { id: "lr-1", employee_id: "5", employee_name: "Vinisha", policy_id: "lp-1", policy_name: "Casual Leave", start_date: "2026-05-26", end_date: "2026-05-27", days_requested: 2, reason: "Personal work", status: "APPROVED", reviewed_by: "1", reviewed_at: "2026-05-25T10:00:00.000Z", review_notes: "Approved", created_at: "2026-05-24T09:00:00.000Z" },
  { id: "lr-2", employee_id: "7", employee_name: "Sahil", policy_id: "lp-2", policy_name: "Sick Leave", start_date: "2026-05-12", end_date: "2026-05-13", days_requested: 2, reason: "Fever", status: "APPROVED", reviewed_by: "1", reviewed_at: "2026-05-12T08:00:00.000Z", review_notes: "Get well soon", created_at: "2026-05-12T07:00:00.000Z" },
  { id: "lr-3", employee_id: "4", employee_name: "Manshi Rathi", policy_id: "lp-1", policy_name: "Casual Leave", start_date: "2026-05-18", end_date: "2026-05-18", days_requested: 1, reason: "Personal", status: "APPROVED", reviewed_by: "1", reviewed_at: "2026-05-17T11:00:00.000Z", review_notes: "Approved", created_at: "2026-05-17T09:00:00.000Z" },
  { id: "lr-4", employee_id: "8", employee_name: "Vedika", policy_id: "lp-1", policy_name: "Casual Leave", start_date: "2026-05-29", end_date: "2026-05-29", days_requested: 1, reason: "Family function", status: "APPROVED", reviewed_by: "1", reviewed_at: "2026-05-28T15:00:00.000Z", review_notes: "Approved", created_at: "2026-05-28T09:00:00.000Z" },
  { id: "lr-5", employee_id: "9", employee_name: "Purva", policy_id: "lp-1", policy_name: "Casual Leave", start_date: "2026-06-05", end_date: "2026-06-05", days_requested: 1, reason: "Personal", status: "PENDING", reviewed_by: null, reviewed_at: null, review_notes: null, created_at: "2026-06-02T09:00:00.000Z" },
  { id: "lr-6", employee_id: "10", employee_name: "Chirag", policy_id: "lp-3", policy_name: "Earned Leave", start_date: "2026-06-10", end_date: "2026-06-12", days_requested: 3, reason: "Vacation", status: "PENDING", reviewed_by: null, reviewed_at: null, review_notes: null, created_at: "2026-06-03T09:00:00.000Z" },
];

// ─── Leave Balances ─────────────────────────────────────────────────────────

export const MOCK_LEAVE_BALANCES = [
  { id: "lb-1", policy_id: "lp-1", policy_name: "Casual Leave", policy_code: "CL", allocated_days: 12, used_days: 2, remaining_days: 10, year: 2026 },
  { id: "lb-2", policy_id: "lp-2", policy_name: "Sick Leave", policy_code: "SL", allocated_days: 8, used_days: 0, remaining_days: 8, year: 2026 },
  { id: "lb-3", policy_id: "lp-3", policy_name: "Earned Leave", policy_code: "EL", allocated_days: 15, used_days: 0, remaining_days: 15, year: 2026 },
];

// ─── KPI Templates ────────────────────────────────────────────────────────────

export const MOCK_KPI_TEMPLATES = [
  { id: "kpit-1", name: "Monthly Video Output", description: "Number of videos edited per month", category: "Production", measurement_unit: "Videos", default_target: 20, period: "MONTHLY", department_id: "dept-1", department: { id: "dept-1", name: "Video Editing", code: "VE" }, weight: 40, is_active: true, created_at: "2025-01-01T00:00:00.000Z" },
  { id: "kpit-2", name: "Client Satisfaction Score", description: "Average client feedback rating", category: "Quality", measurement_unit: "Score (1-10)", default_target: 8, period: "MONTHLY", department_id: null, department: null, weight: 30, is_active: true, created_at: "2025-01-01T00:00:00.000Z" },
  { id: "kpit-3", name: "On-Time Delivery Rate", description: "Percentage of projects delivered on time", category: "Delivery", measurement_unit: "%", default_target: 90, period: "MONTHLY", department_id: null, department: null, weight: 30, is_active: true, created_at: "2025-01-01T00:00:00.000Z" },
  { id: "kpit-4", name: "Social Media Posts Published", description: "Number of posts published per month", category: "Production", measurement_unit: "Posts", default_target: 30, period: "MONTHLY", department_id: "dept-2", department: { id: "dept-2", name: "Social Media Marketing", code: "SMM" }, weight: 40, is_active: true, created_at: "2025-01-01T00:00:00.000Z" },
  { id: "kpit-5", name: "Graphic Deliverables", description: "Number of graphic creatives delivered", category: "Production", measurement_unit: "Creatives", default_target: 25, period: "MONTHLY", department_id: "dept-3", department: { id: "dept-3", name: "Graphic Design", code: "GD" }, weight: 40, is_active: true, created_at: "2025-01-01T00:00:00.000Z" },
  { id: "kpit-6", name: "Tech Task Completion", description: "Number of tech tasks completed", category: "Development", measurement_unit: "Tasks", default_target: 15, period: "MONTHLY", department_id: "dept-4", department: { id: "dept-4", name: "Technology", code: "TECH" }, weight: 40, is_active: true, created_at: "2025-01-01T00:00:00.000Z" },
];

// ─── Employee KPIs ─────────────────────────────────────────────────────────

export const MOCK_EMPLOYEE_KPIS = [
  { id: "ekpi-1", employee_id: "2", template_id: "kpit-1", title: "Monthly Video Output - May 2026", description: "Videos edited in May", target_value: 20, current_value: 16, unit: "Videos", weight: 40, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "ON_TRACK", notes: "Good progress", created_at: "2026-05-01T00:00:00.000Z", employee: { id: "2", full_name: "Prasanth Mahendran", avatar_url: null }, template: { name: "Monthly Video Output", category: "Production" } },
  { id: "ekpi-2", employee_id: "3", template_id: "kpit-4", title: "Social Media Posts - May 2026", description: "Posts published in May", target_value: 30, current_value: 28, unit: "Posts", weight: 40, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "ON_TRACK", notes: "Nearly complete", created_at: "2026-05-01T00:00:00.000Z", employee: { id: "3", full_name: "Riya Paithankar", avatar_url: null }, template: { name: "Social Media Posts Published", category: "Production" } },
  { id: "ekpi-3", employee_id: "4", template_id: "kpit-5", title: "Graphic Deliverables - May 2026", description: "Creatives delivered in May", target_value: 25, current_value: 22, unit: "Creatives", weight: 40, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "ON_TRACK", notes: null, created_at: "2026-05-01T00:00:00.000Z", employee: { id: "4", full_name: "Manshi Rathi", avatar_url: null }, template: { name: "Graphic Deliverables", category: "Production" } },
  { id: "ekpi-4", employee_id: "5", template_id: "kpit-1", title: "VE Intern Output - May 2026", description: "Reels edited by Vinisha in May", target_value: 15, current_value: 12, unit: "Reels", weight: 30, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "IN_PROGRESS", notes: null, created_at: "2026-05-01T00:00:00.000Z", employee: { id: "5", full_name: "Vinisha", avatar_url: null }, template: { name: "Monthly Video Output", category: "Production" } },
  { id: "ekpi-5", employee_id: "9", template_id: "kpit-6", title: "Tech Tasks - May 2026", description: "Tech tasks completed by Purva", target_value: 10, current_value: 8, unit: "Tasks", weight: 40, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "ON_TRACK", notes: null, created_at: "2026-05-01T00:00:00.000Z", employee: { id: "9", full_name: "Purva", avatar_url: null }, template: { name: "Tech Task Completion", category: "Development" } },
  { id: "ekpi-6", employee_id: "10", template_id: "kpit-6", title: "Tech Tasks - May 2026", description: "Tech tasks completed by Chirag", target_value: 10, current_value: 9, unit: "Tasks", weight: 40, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "ON_TRACK", notes: null, created_at: "2026-05-01T00:00:00.000Z", employee: { id: "10", full_name: "Chirag", avatar_url: null }, template: { name: "Tech Task Completion", category: "Development" } },
  { id: "ekpi-7", employee_id: "11", template_id: "kpit-6", title: "Tech Tasks - May 2026", description: "Tech tasks completed by Ritikesh", target_value: 10, current_value: 7, unit: "Tasks", weight: 40, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "AT_RISK", notes: "GoKwik account recovery delayed work", created_at: "2026-05-01T00:00:00.000Z", employee: { id: "11", full_name: "Ritikesh", avatar_url: null }, template: { name: "Tech Task Completion", category: "Development" } },
  { id: "ekpi-8", employee_id: "2", template_id: "kpit-2", title: "Client Satisfaction - May 2026", description: "Client satisfaction score", target_value: 8, current_value: 8.5, unit: "Score", weight: 30, period: "MONTHLY", period_start: "2026-05-01", period_end: "2026-05-31", status: "COMPLETED", notes: "Exceeded target", created_at: "2026-05-01T00:00:00.000Z", employee: { id: "2", full_name: "Prasanth Mahendran", avatar_url: null }, template: { name: "Client Satisfaction Score", category: "Quality" } },
];

// ─── Notifications ─────────────────────────────────────────────────────────

export const MOCK_NOTIFICATIONS = [
  { id: "notif-1", user_id: "1", type: "LEAVE_REQUEST", title: "New Leave Request", message: "Purva has submitted a leave request for Jun 5, 2026.", link: "/leave/approvals", is_read: false, read_at: null, created_at: "2026-06-02T09:30:00.000Z" },
  { id: "notif-2", user_id: "1", type: "LEAVE_REQUEST", title: "New Leave Request", message: "Chirag has submitted a leave request for Jun 10-12, 2026.", link: "/leave/approvals", is_read: false, read_at: null, created_at: "2026-06-03T09:30:00.000Z" },
  { id: "notif-3", user_id: "1", type: "EOD_SUBMITTED", title: "EOD Submitted", message: "Prasanth Mahendran has submitted their EOD report for May 31.", link: "/eod/review", is_read: true, read_at: "2026-06-01T08:00:00.000Z", created_at: "2026-05-31T19:00:00.000Z" },
  { id: "notif-4", user_id: "1", type: "KPI_ALERT", title: "KPI At Risk", message: "Ritikesh's tech tasks KPI is marked as AT_RISK for May 2026.", link: "/kpi", is_read: false, read_at: null, created_at: "2026-05-30T10:00:00.000Z" },
  { id: "notif-5", user_id: "1", type: "SYSTEM", title: "May 2026 Payroll Ready", message: "May 2026 payroll records have been generated. Please review and approve.", link: "/payroll", is_read: true, read_at: "2026-06-01T10:00:00.000Z", created_at: "2026-06-01T08:00:00.000Z" },
];

// ─── Payroll Records ─────────────────────────────────────────────────────────

export const MOCK_PAYROLL_RECORDS = [
  { id: "pay-1", employee_id: "2", employee_name: "Prasanth Mahendran", period_month: 5, period_year: 2026, base_salary: 35000, allowances: { HRA: 5000, transport: 2000 }, deductions: { PF: 3000, TDS: 1500 }, leave_deduction: 0, gross_pay: 42000, net_pay: 37500, status: "PAID", notes: null, created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-2", employee_id: "3", employee_name: "Riya Paithankar", period_month: 5, period_year: 2026, base_salary: 30000, allowances: { HRA: 4500, transport: 2000 }, deductions: { PF: 2700, TDS: 1200 }, leave_deduction: 0, gross_pay: 36500, net_pay: 32600, status: "PAID", notes: null, created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-3", employee_id: "4", employee_name: "Manshi Rathi", period_month: 5, period_year: 2026, base_salary: 28000, allowances: { HRA: 4000, transport: 1500 }, deductions: { PF: 2520, TDS: 1000 }, leave_deduction: 1077, gross_pay: 33500, net_pay: 28903, status: "PAID", notes: "1 day LOP adjusted", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-4", employee_id: "5", employee_name: "Vinisha", period_month: 5, period_year: 2026, base_salary: 12000, allowances: { transport: 1000 }, deductions: { PF: 1080 }, leave_deduction: 0, gross_pay: 13000, net_pay: 11920, status: "PAID", notes: null, created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-5", employee_id: "6", employee_name: "Simran Gaikwad", period_month: 5, period_year: 2026, base_salary: 12000, allowances: { transport: 1000 }, deductions: { PF: 1080 }, leave_deduction: 0, gross_pay: 13000, net_pay: 11920, status: "PAID", notes: null, created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-6", employee_id: "7", employee_name: "Sahil", period_month: 5, period_year: 2026, base_salary: 10000, allowances: { transport: 1000 }, deductions: { PF: 900 }, leave_deduction: 1000, gross_pay: 11000, net_pay: 9100, status: "PAID", notes: "2 day leave adjusted", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-7", employee_id: "8", employee_name: "Vedika", period_month: 5, period_year: 2026, base_salary: 10000, allowances: { transport: 1000 }, deductions: { PF: 900 }, leave_deduction: 500, gross_pay: 11000, net_pay: 9600, status: "PAID", notes: "1 day leave adjusted", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-8", employee_id: "9", employee_name: "Purva", period_month: 5, period_year: 2026, base_salary: 8000, allowances: {}, deductions: {}, leave_deduction: 0, gross_pay: 8000, net_pay: 8000, status: "PAID", notes: "Joined May 12, prorated", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-9", employee_id: "10", employee_name: "Chirag", period_month: 5, period_year: 2026, base_salary: 8000, allowances: {}, deductions: {}, leave_deduction: 0, gross_pay: 8000, net_pay: 8000, status: "PAID", notes: "Joined May 12, prorated", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-10", employee_id: "11", employee_name: "Ritikesh", period_month: 5, period_year: 2026, base_salary: 8000, allowances: {}, deductions: {}, leave_deduction: 0, gross_pay: 8000, net_pay: 8000, status: "PAID", notes: "Joined May 12, prorated", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-11", employee_id: "12", employee_name: "Tarran", period_month: 5, period_year: 2026, base_salary: 8000, allowances: {}, deductions: {}, leave_deduction: 0, gross_pay: 8000, net_pay: 8000, status: "PAID", notes: "Joined May 12, prorated", created_at: "2026-06-01T00:00:00.000Z" },
  { id: "pay-12", employee_id: "14", employee_name: "Yash", period_month: 5, period_year: 2026, base_salary: 25000, allowances: { HRA: 3000, transport: 1500 }, deductions: { PF: 2250, TDS: 800 }, leave_deduction: 0, gross_pay: 29500, net_pay: 26450, status: "PAID", notes: null, created_at: "2026-06-01T00:00:00.000Z" },
];

// ─── Audit Logs ─────────────────────────────────────────────────────────────

export const MOCK_AUDIT_LOGS = [
  { id: "audit-1", actor_id: "1", actor_name: "Snigdha Singh", action: "ROLE_UPDATED", entity_type: "profiles", entity_id: "9", old_values: { role: "EMPLOYEE" }, new_values: { role: "INTERN" }, ip_address: "192.168.1.1", created_at: "2026-05-12T13:00:00.000Z" },
  { id: "audit-2", actor_id: "1", actor_name: "Snigdha Singh", action: "LEAVE_APPROVED", entity_type: "leave_requests", entity_id: "lr-2", old_values: { status: "PENDING" }, new_values: { status: "APPROVED" }, ip_address: "192.168.1.1", created_at: "2026-05-12T08:00:00.000Z" },
  { id: "audit-3", actor_id: "1", actor_name: "Snigdha Singh", action: "EMPLOYEE_CREATED", entity_type: "employee_profiles", entity_id: "emp-9", old_values: null, new_values: { employee_code: "DIB-009", job_title: "Tech Intern" }, ip_address: "192.168.1.1", created_at: "2026-05-12T10:00:00.000Z" },
  { id: "audit-4", actor_id: "1", actor_name: "Snigdha Singh", action: "EMPLOYEE_CREATED", entity_type: "employee_profiles", entity_id: "emp-10", old_values: null, new_values: { employee_code: "DIB-010", job_title: "Tech Intern" }, ip_address: "192.168.1.1", created_at: "2026-05-12T10:05:00.000Z" },
  { id: "audit-5", actor_id: "1", actor_name: "Snigdha Singh", action: "KPI_ASSIGNED", entity_type: "employee_kpis", entity_id: "ekpi-1", old_values: null, new_values: { title: "Monthly Video Output - May 2026", status: "IN_PROGRESS" }, ip_address: "192.168.1.1", created_at: "2026-05-01T09:00:00.000Z" },
  { id: "audit-6", actor_id: "1", actor_name: "Snigdha Singh", action: "PAYROLL_PROCESSED", entity_type: "payroll_records", entity_id: "pay-1", old_values: { status: "DRAFT" }, new_values: { status: "PROCESSED" }, ip_address: "192.168.1.1", created_at: "2026-06-01T09:00:00.000Z" },
  { id: "audit-7", actor_id: "3", actor_name: "Riya Paithankar", action: "EOD_SUBMITTED", entity_type: "daily_updates", entity_id: "eod-30", old_values: null, new_values: { report_date: "2026-05-30", hours_worked: 8 }, ip_address: "192.168.1.5", created_at: "2026-05-30T19:00:00.000Z" },
  { id: "audit-8", actor_id: "1", actor_name: "Snigdha Singh", action: "LEAVE_APPROVED", entity_type: "leave_requests", entity_id: "lr-3", old_values: { status: "PENDING" }, new_values: { status: "APPROVED" }, ip_address: "192.168.1.1", created_at: "2026-05-17T11:00:00.000Z" },
];
