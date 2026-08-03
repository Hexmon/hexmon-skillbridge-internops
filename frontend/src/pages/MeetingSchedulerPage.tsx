import { CalendarDays, CalendarCheck, CalendarX, CalendarMinus } from "lucide-react";
import { PageHeader } from "../components/PageHeader";

export function MeetingSchedulerPage() {
  return (
    <>
      <PageHeader
        eyebrow="F10"
        title="Meeting Scheduler"
        description="Schedule, organize and track project meetings, sprint reviews and mentoring sessions."
      />

      <section className="meeting-dashboard-summary">
        <div className="summary-left">
          <h3> Meeting Dashboard</h3>

          <div className="summary-grid">
            <div>
              <span className="label">Today's Meetings</span>
              <strong>2</strong>
            </div>

            <div>
              <span className="label">Next Meeting</span>
              <strong>Sprint Review • 3:00 PM</strong>
            </div>

            <div>
              <span className="label">This Week</span>
              <strong>5 Meetings</strong>
            </div>
          </div>
        </div>

        <button className="schedule-btn">+ Schedule Meeting</button>
      </section>

      {/* Statistics Cards */}
     <section className="meeting-stats">
  <div className="meeting-card total">
    <div className="meeting-card-header">
      <CalendarDays size={22} />
      <span className="meeting-title">Total Meetings</span>
    </div>
    <h2>24</h2>
    <small>Overall Scheduled</small>
  </div>

  <div className="meeting-card attended">
    <div className="meeting-card-header">
      <CalendarCheck size={22} />
      <span className="meeting-title">Attended</span>
    </div>
    <h2>18</h2>
    <small>Successfully Joined</small>
  </div>

  <div className="meeting-card cancelled">
    <div className="meeting-card-header">
      <CalendarX size={22} />
      <span className="meeting-title">Cancelled</span>
    </div>
    <h2>2</h2>
    <small>Meetings Cancelled</small>
  </div>

  <div className="meeting-card missed">
    <div className="meeting-card-header">
      <CalendarMinus size={22} />
      <span className="meeting-title">Not Attended</span>
    </div>
    <h2>4</h2>
    <small>Missed Sessions</small>
  </div>
</section>

      <section className="meeting-form-container">
        <h2>Schedule New Meeting</h2>

        <div className="meeting-form">
          <input type="text" placeholder="Meeting Title" />

          <input type="date" />

          <input type="time" />

          <select>
            <option>Online</option>
            <option>Offline</option>
          </select>

          <input type="text" placeholder="Google Meet Link / Meeting Room" />

          <input type="text" placeholder="Participants" />

          <textarea rows={4} placeholder="Meeting Description"></textarea>

          <button className="schedule-btn">Schedule Meeting</button>
        </div>
      </section>

      <section className="meeting-search-filter">
        <input type="text" placeholder="🔍 Search meetings..." />

        <select>
          <option>All Status</option>
          <option>Upcoming</option>
          <option>Attended</option>
          <option>Cancelled</option>
          <option>Missed</option>
        </select>

        <select>
          <option>All Dates</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </section>

      <section className="upcoming-meetings">
        <div className="section-header">
          <h2>Upcoming Meetings</h2>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="meeting-grid">
          <div className="meeting-card-item">
            <span className="status upcoming">Upcoming</span>
            <h3>Weekly Sprint Review</h3>
            <p>📅 18 Jul 2026</p>
            <p>🕒 3:00 PM - 4:00 PM</p>
            <p>👤 Rahul Sharma</p>
            <p>📍 Google Meet</p>
            <div className="meeting-footer">
              <button className="join-btn">Join</button>
              <button className="edit-btn">Edit</button>
            </div>
          </div>

          <div className="meeting-card-item">
            <span className="status scheduled">Scheduled</span>
            <h3>Frontend Review</h3>
            <p>📅 20 Jul 2026</p>
            <p>🕒 11:00 AM</p>
            <p>👤 Priya Singh</p>
            <p>📍 Meeting Room A</p>
            <div className="meeting-footer">
              <button className="join-btn">Join</button>
              <button className="edit-btn">Edit</button>
            </div>
          </div>
        </div>
      </section>

      <section className="meeting-bottom-grid">

        {/* Calendar */}
        <div className="calendar-card">
          <h2>📅 Meeting Calendar</h2>

          <div className="calendar-placeholder">
            <h3>July 2026</h3>

            <div className="calendar-days">
              <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span>
              <span>Thu</span><span>Fri</span><span>Sat</span>

              <span></span><span></span>
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>

              <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>

              <span>13</span><span>14</span><span>15</span>
              <span className="meeting-date">18</span>

              <span>19</span>
              <span className="meeting-date">20</span>

              <span>21</span>
              <span className="meeting-date">22</span>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="participants-card">
          <h2>👥 Participants</h2>

          <div className="participant">
            <div>
              <strong>Rahul Sharma</strong>
              <p>Mentor</p>
            </div>
            <span className="online">Online</span>
          </div>

          <div className="participant">
            <div>
              <strong>Rajesh</strong>
              <p>Frontend Developer</p>
            </div>
            <span className="online">Online</span>
          </div>

          <div className="participant">
            <div>
              <strong>Priya Singh</strong>
              <p>UI Designer</p>
            </div>
            <span className="offline">Offline</span>
          </div>
        </div>

      </section>

      <section className="meeting-history">
        <h2>Meeting History</h2>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Meeting</th>
              <th>Status</th>
              <th>Duration</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>10 Jul</td>
              <td>Sprint Review</td>
              <td>✅ Attended</td>
              <td>45 min</td>
            </tr>

            <tr>
              <td>08 Jul</td>
              <td>Frontend Review</td>
              <td>❌ Cancelled</td>
              <td>-</td>
            </tr>

            <tr>
              <td>05 Jul</td>
              <td>Weekly Sync</td>
              <td>🚫 Missed</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="recent-activity">
        <h2>Recent Activity</h2>

        <div className="activity-item">
          <div className="activity-dot"></div>
          <div>
            <strong>Rajesh</strong> scheduled
            <strong> Weekly Sprint Review</strong>
            <p>10 minutes ago</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-dot"></div>
          <div>
            <strong>Priya Singh</strong> cancelled
            <strong> Frontend Review</strong>
            <p>1 hour ago</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-dot"></div>
          <div>
            <strong>Rahul Sharma</strong> completed
            <strong> Sprint Planning</strong>
            <p>Yesterday</p>
          </div>
        </div>
      </section>
    </>
  );
}