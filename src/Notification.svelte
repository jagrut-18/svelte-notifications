<script>
	import { fly } from "svelte/transition";
	import { notificationMessage, hideNotification } from "./notification-store.js";
</script>

<div class="notification-container" transition:fly={{ x: 350, duration: 500 }}>
	<div class="notification-message">{$notificationMessage}</div>
	<button class="close-btn" on:click={hideNotification}>
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="20" height="20"
viewBox="0 0 50 50"
style=" fill:#FFFFFF;"><path d="M 14.40625 13 L 13 14.40625 L 23.625 25 L 13 35.59375 L 14.40625 37 L 25.0625 26.40625 L 35.6875 37 L 37.09375 35.59375 L 26.46875 25 L 37.09375 14.40625 L 35.6875 13 L 25.0625 23.59375 Z"></path></svg></button>
</div>

<style>
	.notification-container {
		position: absolute;
		top: 10px;
		right: 10px;
		z-index: 10;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-radius: 5px;
		max-width: 400px;
		min-width: 200px;
		background-color: green;
		background-image: radial-gradient( circle farthest-corner at -1% 57.5%, rgba(0,102,43,1) 0%, rgba(19,170,82,1) 90% );
		padding: 10px 10px;
		gap: 20px;
	}

	.notification-message {
		color: white;
		font-size: 14px;
	}
	.close-btn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: transparent;
		outline: 0;
		border: 0;
		margin: 0;
		padding: 0;
		cursor: pointer;
	}
</style>