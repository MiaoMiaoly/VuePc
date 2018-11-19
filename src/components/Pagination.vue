<template>
  <div v-if="show">
    <div v-if="total > pagyNum && !showPageSizes" class="pagination" :style="{paddingTop:paddingTop+'px', paddingBottom:paddingBottom+'px'}">
      <el-pagination v-if="!showPageSizes"
        @current-change = "pageChange"
        :current-page = "pagyNo"
        :page-size = "pagyNum"
        :background = "background"
        :total = "total"
        layout = "total, prev, pager, next, jumper">
      </el-pagination>
    </div>
    <div v-if="showPageSizes && total > 0" class="pagination" :style="{paddingTop:paddingTop+'px', paddingBottom:paddingBottom+'px'}">
      <el-pagination  v-if="showPageSizes"
        @current-change = "pageChange"
        @size-change="handleSizeChange"
        :current-page = "pagyNo"
        :page-size = "pagyNum"
        :page-sizes="[5,10, 20, 30, 50, 100, 500, 1000]"
        :background = "background"
        :total = "total"
        layout = "total, sizes, prev, pager, next, jumper">
      </el-pagination>
    </div>
    <div v-if="total === 0 && noContentShow" class="pagination-no-content" :style="{paddingTop:paddingTop+'px', paddingBottom:paddingBottom+'px'}">
      暂无数据
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props:{
    pagyNo:{
      type: Number,
      default: 1,
    },
    pagyNum:{
      type: Number,
      default: 10,
    },
    background:{
      type: Boolean,
      default: false
    },
    total:{
      type: Number,
      default: 0
    },
    paddingTop:{
      type: Number,
      default: 20
    },
    paddingBottom:{
      type: Number,
      default: 20
    },
    noContentShow: {
      type: Boolean,
      default: true
    },
      showPageSizes: {
          type: Boolean,
          default: false
      }
  },
  methods:{
    pageChange(val){
        this.$emit('page-change',val);
    },
      handleSizeChange(val) {
          this.$emit('handleSizeChange',val);
      }
  },
  mounted () {
    console.log(1111111111111111);
    this.show = true;
  }
}
</script>

<style>
.pagination{
  text-align:center;
}
.pagination li{
  font-size:14px;
  color:#606266;
  font-weight:normal;
}
.pagination .btn-next, .pagination .btn-prev{
  background:none;
}
.pagination .el-pager li{
  background:none;
}
.pagination-no-content {
  background: #fff;
  font-size: 16px;
  color: #909399;
  text-align:center;
}
</style>