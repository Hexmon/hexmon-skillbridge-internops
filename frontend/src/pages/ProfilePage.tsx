import { Award, CalendarDays, CheckCircle2, Clock3, FileText, Flame, Github, Mail, MapPin, Target, Trophy, Upload, UserRound } from "lucide-react";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";

type HeatmapCell = { date: Date; visited: boolean };
type ProfileForm = { email: string; github: string; mentor: string; role: string; photoName: string; resumeName: string };

const skillChoices = ["React", "TypeScript", "JavaScript", "Node.js", "FastAPI", "Python", "Git", "UI/UX", "Tailwind CSS", "REST APIs", "SQL", "Docker"];
const blankProfile: ProfileForm = { email: "", github: "", mentor: "", role: "", photoName: "", resumeName: "" };

const visitStorageKey = "skillbridge-profile-visits";
const dateKey = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

function buildHeatmap(weeks: number, visits: string[]): HeatmapCell[][] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(today.getDate() - (weeks * 7 - 1));
  return Array.from({ length: weeks }, (_, week) => Array.from({ length: 7 }, (_, day) => {
    const date = new Date(start);
    date.setDate(start.getDate() + week * 7 + day);
    return { date, visited: visits.includes(dateKey(date)) };
  }));
}

const formatDate = (date: Date) => new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(date);

export function ProfilePage() {
  const [range, setRange] = useState<4 | 12>(12);
  const [profile, setProfile] = useState<ProfileForm>(blankProfile);
  const [profileImageUrl, setProfileImageUrl] = useState<string>("");
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [visits, setVisits] = useState<string[]>([]);
  useEffect(() => {
    const today = dateKey(new Date());
    const savedVisits = JSON.parse(localStorage.getItem(visitStorageKey) ?? "[]") as string[];
    const updatedVisits = Array.from(new Set([...savedVisits, today]));
    localStorage.setItem(visitStorageKey, JSON.stringify(updatedVisits));
    setVisits(updatedVisits);
  }, []);
  const heatmap = useMemo(() => buildHeatmap(range, visits), [range, visits]);
  const completedFields = Object.values(profile).filter(Boolean).length;
  const profileComplete = Math.round((completedFields / Object.keys(profile).length) * 100);
  const months = heatmap.map((week, index) => week[0].date.getMonth() !== (index ? heatmap[index - 1][0].date.getMonth() : -1) ? week[0].date.toLocaleString("en-IN", { month: "short" }) : "");
  const updateText = (field: keyof ProfileForm) => (event: ChangeEvent<HTMLInputElement>) => setProfile((current) => ({ ...current, [field]: event.target.value }));
  const updateResume = (event: ChangeEvent<HTMLInputElement>) => {
    const resume = event.target.files?.[0];
    setProfile((current) => ({ ...current, resumeName: resume?.name ?? "" }));
    setResumeUrl(resume ? URL.createObjectURL(resume) : "");
  };
  const updateProfileImage = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];
    setProfile((current) => ({ ...current, photoName: image?.name ?? "" }));
    setProfileImageUrl(image ? URL.createObjectURL(image) : "");
  };
  const toggleSkill = (skill: string) => setSelectedSkills((current) => current.includes(skill) ? current.filter((item) => item !== skill) : [...current, skill]);

  return <>
    <PageHeader eyebrow="Intern view" title="My Profile" description="Keep your details current and track profile completion." />
    <section className="profile-hero"><div className="profile-photo" aria-label="Profile image">{profileImageUrl ? <img alt="Yatish Sunder's profile" src={profileImageUrl} /> : "YS"}</div><div className="profile-identity"><h2>Yatish Sunder</h2><p className="profile-role">{profile.role || "Frontend Intern"}</p><div className="profile-contact"><span><MapPin size={15} /> India · IST (UTC +5:30)</span>{profile.github && <a className="profile-github-link" href={profile.github} rel="noreferrer" target="_blank"><Github size={15} /> View GitHub profile</a>}</div></div><div className="profile-points"><span>Total points</span><strong>1,250 <small>PTS</small></strong><p>150 earned this week</p></div><div className="profile-rank"><Trophy size={28} /><div><span>Current rank</span><strong>Top 15%</strong><p>Keep it up — you’re doing great.</p></div></div></section>
    <section className="profile-stat-grid" aria-label="Performance summary"><article><CheckCircle2 /><span>Tasks completed</span><strong>42</strong></article><article><Target /><span>Completion rate</span><strong>87%</strong></article><article><CalendarDays /><span>Attendance</span><strong>96%</strong></article><article><Flame /><span>Current streak</span><strong>8 days</strong></article></section>
    <section className="profile-layout"><div className="profile-main"><article className="profile-card"><div className="card-heading"><div><h2>Complete your profile</h2><p>Add your professional details to make your profile complete.</p></div><div className="profile-edit-actions"><strong className="completion-value">{profileComplete}%</strong><button className="primary-action" onClick={() => setIsEditing((editing) => !editing)} type="button">{isEditing ? "Save changes" : "Edit profile"}</button></div></div><div className="completion-track" aria-label={`Profile is ${profileComplete}% complete`}><span style={{ width: `${profileComplete}%` }} /></div><p className="completion-note">{completedFields} of 6 profile items added</p><div className="profile-form"><label className="upload-field" data-disabled={!isEditing}><UserRound size={18} /><span><strong>Profile image</strong><small>{profile.photoName || "Upload a JPG, PNG, or WEBP image"}</small></span><input accept="image/png,image/jpeg,image/webp" aria-label="Upload profile image" disabled={!isEditing} onChange={updateProfileImage} type="file" /><Upload size={17} /></label><label><span><Mail size={16} /> Email address</span><input disabled={!isEditing} onChange={updateText("email")} placeholder="you@example.com" type="email" value={profile.email} /></label><label><span><Github size={16} /> GitHub profile link</span><input disabled={!isEditing} onChange={updateText("github")} placeholder="https://github.com/username" type="url" value={profile.github} /></label><label><span><Award size={16} /> Role</span><input disabled={!isEditing} onChange={updateText("role")} placeholder="e.g. Frontend Developer" type="text" value={profile.role} /></label><label><span><Award size={16} /> Mentor name</span><input disabled={!isEditing} onChange={updateText("mentor")} placeholder="Enter your mentor’s name" type="text" value={profile.mentor} /></label><label className="upload-field" data-disabled={!isEditing}><FileText size={18} /><span><strong>Résumé</strong><small>{profile.resumeName || "Upload your résumé as a PDF"}</small>{resumeUrl && <a className="resume-link" download={profile.resumeName} href={resumeUrl}>View or download résumé</a>}</span><input accept="application/pdf" aria-label="Upload resume" disabled={!isEditing} onChange={updateResume} type="file" /><Upload size={17} /></label></div><div className="skills-editor"><div><h3>Skills</h3><p>Choose all skills that apply to you.</p></div><div className="skill-options">{skillChoices.map((skill) => <button aria-pressed={selectedSkills.includes(skill)} className="skill-option" data-selected={selectedSkills.includes(skill)} disabled={!isEditing} key={skill} onClick={() => toggleSkill(skill)} type="button">{skill}</button>)}</div></div></article>
      <article className="profile-card heatmap-card"><div className="card-heading"><div><h2>Visit heatmap</h2><p>Visits are saved in this browser. Red means visited; grey means no visit.</p></div><select aria-label="Heatmap date range" value={range} onChange={(event) => setRange(Number(event.target.value) as 4 | 12)}><option value={4}>Last 4 weeks</option><option value={12}>Last 12 weeks</option></select></div><div className="heatmap-scroll"><div className="heatmap" data-range={range} style={{ gridTemplateColumns: `32px repeat(${range}, minmax(18px, 28px))` }}><span />{months.map((label, index) => <span className="heatmap-month" key={index}>{label}</span>)}{["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, row) => <span className="heatmap-day" key={day}>{row % 2 ? day : ""}</span>)}{Array.from({ length: 7 }, (_, day) => heatmap.map((week, weekIndex) => { const cell = week[day]; return <span aria-label={`${formatDate(cell.date)}: ${cell.visited ? "visited" : "no visit"}`} className="heatmap-cell" data-visited={cell.visited} key={`${weekIndex}-${day}`} title={`${formatDate(cell.date)}: ${cell.visited ? "visited" : "no visit"}`} />; }))}</div></div><div className="heatmap-legend"><i /><span>No visit</span><i data-visited="true" /><span>Visited</span></div></article></div>
      <aside className="profile-side"><article className="profile-card"><div className="card-heading"><h2>Skills</h2><Award size={20} /></div><div className="skill-chips">{selectedSkills.length ? selectedSkills.map((skill) => <span key={skill}>{skill}</span>) : <p>No skills added yet.</p>}</div></article><article className="profile-card"><div className="card-heading"><h2>Intern information</h2><Clock3 size={20} /></div><dl className="profile-details"><div><dt>Role</dt><dd>{profile.role || "Not added"}</dd></div><div><dt>Mentor</dt><dd>{profile.mentor || "Not added"}</dd></div><div><dt>Department</dt><dd>Software Development</dd></div><div><dt>Current week</dt><dd>Week 5 of 12</dd></div></dl></article></aside></section>
  </>;
}
