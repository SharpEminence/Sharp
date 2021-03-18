import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
//import { useSession } from  'react-use-session';

export async function   createNotification(type) {
  console.log('hello',type)
  switch (type) {
    case "info":
      NotificationManager.info("haha", 1000);
      break;
    case "success":
      NotificationManager.success("LOGIN SUCCESSFUL");
      break;
    case "warning":
      NotificationManager.warning(1000);
      break;
    case "error":
      console.log("jij");
      NotificationManager.error("PLEASE ENTER VALID EMAIL OR PASSWORD", 1000);
      break;
  }
}
