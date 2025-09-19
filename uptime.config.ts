import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "realwds-status",
  links: [
    { link: 'https://github.com/realwds', label: 'GitHub' },
    { link: 'https://realwds.com', label: 'Blog' },
    { link: 'mailto:hi@realwds.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 10,
  monitors: [
    {
      id: 'realwds-blog',
      name: 'realwds-blog',
      method: 'GET',
      target: 'https://realwds.com',
      tooltip: 'realwds-blog',
      statusPageLink: 'https://realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
    {
      id: 'realwds-status',
      name: 'realwds-status',
      method: 'GET',
      target: 'https://status.realwds.com',
      tooltip: 'realwds-status',
      statusPageLink: 'https://status.realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
    {
      id: 'realwds-link',
      name: 'realwds-link',
      method: 'GET',
      target: 'https://link.realwds.com',
      tooltip: 'realwds-link',
      statusPageLink: 'https://link.realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
    {
      id: 'realwds-notion',
      name: 'realwds-notion',
      method: 'GET',
      target: 'https://me.realwds.com',
      tooltip: 'realwds-notion',
      statusPageLink: 'https://me.realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
    {
      id: 'realwds-vless',
      name: 'realwds-vless',
      method: 'GET',
      target: 'https://vless.realwds.com',
      tooltip: 'realwds-vless',
      statusPageLink: 'https://vless.realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
    {
      id: 'realwds-photo',
      name: 'realwds-photo',
      method: 'GET',
      target: 'https://photo.realwds.com',
      tooltip: 'realwds-photo',
      statusPageLink: 'https://photo.realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
    {
      id: 'realwds-tv',
      name: 'realwds-tv',
      method: 'GET',
      target: 'https://tv.realwds.com',
      tooltip: 'realwds-tv',
      statusPageLink: 'https://tv.realwds.com',
      expectedCodes: [200],
      timeout:10000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    // appriseApiServer: 'https://apprise.example.com/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    // recipientUrl: 'tgram://bottoken/ChatID',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    // gracePeriod: 5,
    // [Optional] disable notification for monitors with specified ids
    // skipNotificationIds: ['foo_monitor', 'bar_monitor'],
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here
      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// You can define multiple maintenances here
// During maintenance, an alert will be shown at status page
// Also, related downtime notifications will be skipped (if any)
// Of course, you can leave it empty if you don't need this feature
const maintenances: MaintenanceConfig[] = []

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig, maintenances }
