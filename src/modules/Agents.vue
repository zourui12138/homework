<template>
    <div class="agents">
        <header class="title">
            <strong>Agents：</strong>
            <el-select v-model="selectValue" size="medium">
                <el-option label="All" value="All"></el-option>
                <el-option label="Physical" value="Physical"></el-option>
                <el-option label="Virtual" value="Virtual"></el-option>
            </el-select>
        </header>
        <div class="main clear">
            <VuePerfectScrollbar class="table fl">
                <el-table
                    :data="tableData"
                    style="width: 100%"
                    :show-header="false"
                    :row-class-name="tableRowClassName">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <ul class="clear">
                                <li class="fl"><strong>Resources：</strong></li>
                                <li class="fl" v-for="i in props.row.resources"><el-button type="primary" size="mini">{{i}}</el-button></li>
                            </ul>
                        </template>
                    </el-table-column>
                    <el-table-column prop="name"></el-table-column>
                    <el-table-column prop="type"></el-table-column>
                    <el-table-column prop="ip"></el-table-column>
                    <el-table-column prop="uri"></el-table-column>
                    <el-table-column width="155">
                        <template slot-scope="scope">
                            <el-button type="primary" size="mini">Specify Resources</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </VuePerfectScrollbar>
            <div class="count fr"></div>
        </div>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "agents",
        components: {VuePerfectScrollbar},
        data() {
            return {
                tableData: [
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'idle',
                        ip: '192.168.1.2',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'building',
                        ip: '192.168.1.3',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'idle',
                        ip: '192.168.1.2',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'building',
                        ip: '192.168.1.3',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'building',
                        ip: '192.168.1.3',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'idle',
                        ip: '192.168.1.2',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'building',
                        ip: '192.168.1.3',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'idle',
                        ip: '192.168.1.2',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'building',
                        ip: '192.168.1.3',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    },
                    {
                        name: 'bjstdmngbgr02.thoughtworks.com',
                        type: 'building',
                        ip: '192.168.1.3',
                        uri: '/var/lib/cruise-agent',
                        resources: ['nbuntu','firefox3','core-duo']
                    }
                ],
                selectValue: 'All'
            }
        },
        methods: {
            tableRowClassName({row}) {
                let className;
                row.type === 'idle' && (className = 'idle-row');
                row.type === 'building' && (className = 'building-row');
                return className;
            }
        }
    }
</script>

<style lang="scss">
    .el-table{
        .idle-row{
            background: #f0f9eb;
        }
        .building-row{
            background-color: oldlace;
        }
    }
</style>

<style lang="scss" scoped>
    @import "../assets/css/constant";
    .agents{
        height: $height;
        .title{
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid $color;
            padding: 0 10px;
            strong{
                font-size: 18px;
                margin-right: 30px;
            }
        }
        .main{
            height: calc(100% - 71px);
            padding: 10px 0;
            .table{
                width: calc(100% - 332px);
                padding: 0 10px;
                height: $height;
            }
            .count{
                width: 312px;
            }
        }
    }
</style>
