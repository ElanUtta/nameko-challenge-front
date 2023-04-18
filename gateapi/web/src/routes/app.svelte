<script context="module" lang="ts">
	import PageTwo from './page-two/+page.svelte';
	import PropertyDetails from './property-details/index.svelte';
</script>

<script>
	import { Router, Route, Link } from "svelte-routing";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main class=" bg-ghostWhite-50">
	<Router url="" >
		<nav class="bg-red">
			<Link class="bg-red" to='/'> Home</Link>
			<Link to='page-two'>Page Two</Link>
			<Link to='property-details'>Property Details</Link>
		</nav>

		<div>
			<Route path="page-two"  component={PageTwo}/>
			<Route path="property-details"  component={PropertyDetails}/>
		</div>
	</Router>
</main>