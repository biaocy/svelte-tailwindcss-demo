<script>
	import {notifier, NotificationDisplay} from '@beyonk/svelte-notifications';

	let timeout = 3000;
	const test = () => {
		notifier.success("I'll try my best");
	}
</script>
<style>
	.btn {
		@apply p-2;
		@apply border;
    @apply bg-blue-400;
    @apply text-white;
	}
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<NotificationDisplay {timeout} />

<button class="btn" on:click={test}>Test</button>