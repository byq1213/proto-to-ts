<template>
    <div>
        <input type="file" @change="fileUpload" ref="uploader" />
        <textarea name v-model="myForm.proto_text" id cols="30" rows="10"></textarea>
        <textarea name v-model="myForm.ts_text" id cols="30" rows="10"></textarea>
    </div>
</template>

<script lang="ts">
/* eslint-disable no-undef */

import { MyForm } from '../types/my-component'
import { ref, watch, defineComponent } from 'vue'


export default defineComponent({
    name: 'ProtoTots', // 这里是必要的!!!!, 直接就是用这个标签 <ProtoTots/>

    setup() {
        const myForm = ref<MyForm>({
            proto_text: '',
            ts_text: ''
        })
        const uploader = ref()
        const fileUpload = () => {
            console.log('uploader', uploader.value.files)
            // proto.load(uploader.value.files[0].name)
            const reader = new FileReader();
            reader.onload = function fileReadCompleted() {
                // 当读取完成时，内容只在`reader.result`中
                console.log(reader.result);
                // const protoObj = proto.parse(reader.result as string);
            };
            reader.readAsText(uploader.value.files[0]);

        }
        watch(() => myForm.value.proto_text, (value) => {
            myForm.value.ts_text = value
        })

        return {
            myForm,
            uploader,
            fileUpload
        }
    }
})
</script>

<style scoped>
</style>
