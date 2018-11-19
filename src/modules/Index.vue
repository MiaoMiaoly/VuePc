<template>
  <div class="index">
   <div class="swiper">
        <el-carousel indicator-position="none" arrow="always" :height="bannerHeight + 'px'">
            <el-carousel-item v-for="(item, index) in swiperlist" :key="index">
                    <img :src="item" ref="image" @load="imageLoaded" style="width:100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="index_contain">
      <p class="positonWrap">当前位置：<span>首页</span>><span>新闻中心</span></p>
      <div class="category">
        <span class="active">企业新闻</span>
        <span>行业新闻</span>
      </div>
      <div class="contwrap">
          <ul class="content">
            <li v-for="(item ,index) in newList" :key="index">
              <div class="imgWrap">
                <img :src="item.src" alt="">
              </div>
              <div class="dec">
                  <h2>{{item.title}}</h2>
                  <p>{{item.content}}</p>
                  <div>
                    <span>{{item.time}}</span>
                    <a href="#">查看详情</a>
                  </div>
              </div>
            </li>
          </ul>
          <!-- 分页 -->
        <el-pagination style="margin-bottom:20px;text-align: right;"
        @current-change = "handleCurrentChange"
        :current-page = "filters.pagyNo"
        :page-size = "filters.pagyNum"
        background 
        :total = "total"
        layout = "total, prev, pager, next, jumper">
      </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// import Pagination from '@/components/Pagination';
export default {
  name:'index',
  data(){
    return{
      swiperlist:[require('../assets/images/bg01.jpg'), require('../assets/images/bg02.jpg')],
      bannerHeight:0,
      count:0,
      newList:[
        {src:require('../assets/images/index_case_case.jpg'),title:'木质家具该怎么选择才算环保',content:'木头家具给人的是一种淳朴和低调，实用价值和审美价值不相上下，木材作为一种可再生资源，他是有灵性的，木头从古至今在家居装饰中占据着不可撼动的地位，既然木质家具这么好',time:'2018-11-13'},
        {src:require('../assets/images/index_case_case.jpg'),title:'木质家具该怎么选择才算环保',content:'木头家具给人的是一种淳朴和低调，实用价值和审美价值不相上下，木材作为一种可再生资源，他是有灵性的，木头从古至今在家居装饰中占据着不可撼动的地位，既然木质家具这么好',time:'2018-11-13'},
        {src:require('../assets/images/index_case_case.jpg'),title:'木质家具该怎么选择才算环保',content:'木头家具给人的是一种淳朴和低调，实用价值和审美价值不相上下，木材作为一种可再生资源，他是有灵性的，木头从古至今在家居装饰中占据着不可撼动的地位，既然木质家具这么好',time:'2018-11-13'},
        {src:require('../assets/images/index_case_case.jpg'),title:'木质家具该怎么选择才算环保',content:'木头家具给人的是一种淳朴和低调，实用价值和审美价值不相上下，木材作为一种可再生资源，他是有灵性的，木头从古至今在家居装饰中占据着不可撼动的地位，既然木质家具这么好',time:'2018-11-13'},
        {src:require('../assets/images/index_case_case.jpg'),title:'木质家具该怎么选择才算环保',content:'木头家具给人的是一种淳朴和低调，实用价值和审美价值不相上下，木材作为一种可再生资源，他是有灵性的，木头从古至今在家居装饰中占据着不可撼动的地位，既然木质家具这么好',time:'2018-11-13'}
      ],
      total: 4,
      filters: {
        pagyNo: 1,
        pagyNum: 12,
      },
    }
  },
  mounted(){
      this.initData();
      window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.image[0].height;
      }, false)
  },
  methods:{
    initData(){
        this.total = this.newList.length;
    },
    imageLoaded(){
        this.count++;
        if(this.count==1){
            this.$nextTick(() => {
              this.bannerHeight = this.$refs.image[0].height;
            })
        }
    },
    handleCurrentChange(val) {
      this.filters.pagyNo = val;
    },
  },
  
  components: {
    // Pagination
  },
}
</script>

<style scoped>
  .swiper{
    width: 100%;
  }
  .index_contain{
    width:80%;
    min-height:600px;
    /* background: yellow; */
    margin: 0 auto;
  }
  .positonWrap{
    padding: 30px 0 15px 0;
    border-bottom: 1px solid #e6e6e6;
    font-size: 16px;
  }
  .positonWrap>span{
    cursor: pointer;
  }
   .positonWrap>span:hover{
    color:  #673AB7;
  }
  .category{
    padding-top: 30px;
    text-align: center;
    padding-bottom: 20px;
  }
  .category>span{
    display: inline-block;
    font-size: 24px;
    padding: 12px 40px;
    background: #e6e6e6;
    margin: 0 12px;
    cursor: pointer;
  }
  .category>.active{
    background: #673AB7;
    color: #fff;
  }
  .contwrap{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    /* background: red; */
    /* min-height: 300px; */
  }
  .content{
  
  }
  .content>li{
    padding:35px 0; 
    display: flex;
    /* height: 197px; */
    overflow: hidden;
    border-bottom: 1px solid #d3d3d3;
   }
  .imgWrap{
    /* font-size: 100px; */
    width: 310px;
    height: 200px;
    /* float:left; */
    /* width:20%; */
  }
  .imgWrap>img{
    /* font-size: 3.68em; */
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .dec{
    flex: 1;
    -webkit-box-flex: 1;
    padding-left:3.5rem;
    padding-right:5.5rem;
    box-sizing: border-box;
     /* height: 197px; */
    /* float:right; */
    /* width:80% */
  }
   .dec>h2{
    font-weight: 400;
    /* font-size: 18px; */
    color: #1a1a1a;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
   }
  .dec>p{
    font-size: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    padding-top: 5px;
    color: #595757;
    font-size:14px;
  }
  .dec>div{
       overflow: hidden;
       margin-top: 20px;
       font-size: 14px;
  }
   .dec>div>span{
     float: left;
   }
  .dec>div>a{
     float: right;
     padding: 5px 8px;
     border: 1px solid #099a10;
     color: #099a10;

   }

  @media only screen and (max-width: 1100px) {
      .dec>h2{
        font-size: 18px;
      }
      .imgWrap{
        width: 250px;
        height: 140px;
      }
   }
   @media only screen and (max-width: 1000px) {
      .imgWrap{
        width: 200px;
        height: 90px;
      }
      .dec{
         padding-left:10px;
         padding-right:10px;
      }
       .dec>div{
         margin-top:5px;
       }
   }
  @media only screen and (max-width: 800px) {
      .dec>h2{
        font-size: 14px;
        margin-bottom: 2px;
      }
      .imgWrap{
        width: 80px;
        height: 80px;
      }
      .dec>div>a{
          padding: 2.5px;
      }
      .dec>div>p{
          font-size: 12px;
          padding-top: 0px;
      }
      .content>li{
         padding:10px 0; 
      }
      .category>span{
        padding: 10px 20px;
        font-size:14px;
      }
   }
</style>
