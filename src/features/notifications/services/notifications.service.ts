import { MOCK_NOTIFICATIONS } from "@/shared/lib/mock-data";

export interface NotificationRow {
  id: string;
  type: string;
  title: string;
  message: string;
  link: string | null;
  is_read: boolean;
  read_at: string | null;
  created_at: string;
}

// In-memory store for mutations during the session
const _notifications = MOCK_NOTIFICATIONS.map((n) => ({ ...n }));

export async function getNotifications(
  userId: string,
): Promise<NotificationRow[]> {
  return _notifications
    .filter((n) => n.user_id === userId)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    );
}

export async function markNotificationRead(id: string, userId: string) {
  const notif = _notifications.find(
    (n) => n.id === id && n.user_id === userId,
  );
  if (notif) {
    notif.is_read = true;
    notif.read_at = new Date().toISOString();
  }
}

export async function markAllNotificationsRead(userId: string) {
  for (const notif of _notifications) {
    if (notif.user_id === userId) {
      notif.is_read = true;
      notif.read_at = new Date().toISOString();
    }
  }
}
