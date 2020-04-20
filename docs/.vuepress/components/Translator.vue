<template>
    <div class="translator">
        <textarea
            v-model="message"
            placeholder="Angel of the darkness against the creatures in the night"
        ></textarea>
        <p :style="{ '--conlang': conlang }">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: "Translator",
    props: ["conlang"],
    data() {
        return {
            message: "Angel of the darkness against the creatures in the night",
        };
    },
};
</script>

<style scoped>
.translator p {
    white-space: pre-line;
    font-family: var(--conlang);
    font-size: 36px;
}
</style>
