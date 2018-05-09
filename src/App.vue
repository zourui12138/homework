<template>
    <div id="app">
        <header class="header clear">
            <h1 class="fl">Cruise</h1>
            <div class="fr">
                <p class="clear">
                    <el-button class="fl" type="text">signed in as Member</el-button>
                    <el-button class="fr" type="text">Sing out</el-button>
                </p>
                <ul class="clear">
                    <li class="fl">DASHBOARD</li>
                    <li class="fl">MY CRUISE</li>
                    <li class="fl current">AGENTS</li>
                    <li class="fl">HELP</li>
                </ul>
            </div>
        </header>
        <section class="section"><router-view/></section>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss" scoped>
    @import "./assets/css/constant";
    #app{
        height: calc(100% - 40px);
        padding: 20px 0;
        .header{
            height: 80px;
            h1{
                font-size: 36px;
                font-weight: bold;
                line-height: 80px;
            }
            p{
                height: 44px;
                line-height: 44px;
                text-align: right;
                padding-left: 6px;
            }
            ul{
                li{
                    width: 98px;
                    height: 35px;
                    line-height: 35px;
                    cursor: pointer;
                    text-align: center;
                    border-top-right-radius: 10px;
                    border-top-left-radius: 10px;
                    border: 1px solid $color;
                    border-bottom: none;
                    background: #ecf5ff;
                    color: $color;
                    margin-left: 6px;
                    &:hover,&.current{
                        background-color: $color;
                        border-color: $color;
                        color: #fff;
                    }
                }
            }
        }
        .section{
            height: calc(100% - 80px);
            border: 1px solid $color;
        }
    }
</style>
