<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media">
                <router-link to="/home/newsinfo/">
                    <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
                    <div class="mui-media-body">
                      <h1>幸福</h1>
                      <p class="mui-ellipsis">
                          <span>发表时间：2018-04-15 15:15：15</span>
                          <span>点击：0次</span>
                      </p>
                    </div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：2018-04-15 15:15：15</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="../../images/1.jpg">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：2018-04-15 15:15：15</span>
                            <span>点击：0次</span>
                        </p>
                    </div>
                </a>
            </li>

        </ul>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    .mui-table-view{
        li{
            h1{
                font-size: 14px;
            }
            .mui-ellipsis{
                font-size: 12px;
                color:blue;
                display: flex;
                justify-content:space-between;
            }
        }
    }
</style>