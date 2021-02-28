<script>
	import Notification from "./Notification.svelte";
	import { isNotificationVisible, showNotification } from "./notification-store.js";
</script>

{#if $isNotificationVisible}
	<Notification />
{/if}
<button class="show-notification-btn" on:click={() => {
	showNotification('Yay! your order has been placed.');
}}>Show Notification</button>


<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	
    .show-notification-btn {
    	background-image: linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%);
    }
    .show-notification-btn {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            cursor: pointer;
          }

          .show-notification-btn:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
</style>