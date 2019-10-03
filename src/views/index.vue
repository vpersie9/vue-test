<template>
    <div class="wrapper">
        <group>
            <cell-box :isLink=true>{{ title }}</cell-box>
            <h3>后端给我的数据是: </h3>
        </group>
        <div id="app">{{value}}</div>
        <button @click="get()">GET 测试按钮</button>
        <button @click="put()">PUT 测试按钮</button>
        <button @click="post()">POST 测试按钮</button>
        <button @click="deleting()">DELETE 测试按钮</button>
    </div>
</template>
<script>
    import loading from '../components/loading'

    export default {
        data() {
            return {
                title: '我现在是一个 HTTP 请求',
                value: '点击不同的按钮进行测试!',
                // TODO 加一个标签，通过后端给的response 修改标签的内容;
            }
        },
        methods: {
            get: async function () {
                await this.$store.dispatch('testApiGetRequest');
                alert("get.json 的结果为: \n" +  JSON.stringify(this.$store.getters.getResponseData));
            },

            put: async function () {
                await this.$store.dispatch('testApiPutRequest', {"hello": "world", "time": "loaind"});
                alert("put.json 的结果为: \n" +  JSON.stringify(this.$store.getters.putResponseData));
            },

            post: async function () {
                await this.$store.dispatch('testApiPostRequest', {"hello": "world"});
                alert("post.json 的结果为: \n" +  JSON.stringify(this.$store.getters.postResponseData));
            },

            deleting: async function () {
                await this.$store.dispatch('testApiDeleteRequest', {"hello": "world"});
                alert("delete.json 的结果为: \n" +  JSON.stringify(this.$store.getters.deleteResponseData));
            },
            // TODO options, patch;

        },
        props: [],
        components: {
            loading
        }
    }
</script>
<style lang="less" rel="stylesheet/less" scoped>
</style>
