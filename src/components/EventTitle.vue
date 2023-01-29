<template>
    <div>
        <label for="title">Title</label>
        <input 
            type="text" 
            name="title" 
            :value="value" 
            @input="$emit('input', $event.target.value)">
        <p>{{ value }}</p>
    </div>
</template>
<script>
export default {
    props: ["value"]
}
</script>