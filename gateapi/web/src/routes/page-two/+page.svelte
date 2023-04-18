<script lang='ts' context='module'>
    const getOrder = () => {
		return fetch('http://localhost:8000/orders/1')
        .then(res => res.json())
        .then(data => JSON.stringify(data.order_details[0]))
	}
	let promise = getOrder();
</script>


<div class="pt-10">
    {#await promise}
        <p>...waiting</p>
    {:then order}
        {order}
    {:catch err}
        <h2>Error while loading the data</h2>
    {/await}

</div>