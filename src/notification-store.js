import { writable } from "svelte/store";

export const isNotificationVisible = writable(false);
export const notificationMessage = writable("");

export const showNotification = (message) => {
	notificationMessage.set(message);
	isNotificationVisible.set(true);
}

export const hideNotification = () => {
	isNotificationVisible.set(false);
	notificationMessage.set("");
}