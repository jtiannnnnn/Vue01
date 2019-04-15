<template>
    <div>
        <h3>
           新闻详情
        </h3>
        <hr>
<commentbox></commentbox>
    </div>
</template>
<script>
import comment from '../subcomponents/comment.vue'
    export default{
    components:{
       "commentbox":comment
    }
    }
</script>
<style lang="scss" scoped>

</style>