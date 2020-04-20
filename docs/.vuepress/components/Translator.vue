<template>
    <Translator v-slot="{ enabled, reload, message, buttonText }">
        <div>
            <textarea
                v-model="message"
                placeholder="add multiple lines"
            ></textarea>

            <p style="white-space: pre-line; font-family: 'Hymmnos'">
                {{ message }}
            </p>
        </div>
    </Translator>
</template>

<script>
let Translator;

export default {
    components: { Translator },
};
</script>

<style>


</style>
