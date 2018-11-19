<template>
  <div class="case">
    <div class="swiper">
        <el-carousel indicator-position="none" arrow="always" :height="bannerHeight + 'px'">
            <el-carousel-item v-for="(item, index) in swiperlist" :key="index">
                    <img :src="item" ref="image" @load="imageLoaded" style="width:100%;">
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="index_contain">
       <p class="positonWrap">当前位置：<span>首页</span>><span>公司案例</span></p>
       <div class="case_category">
          <ul>
            <li v-for="(item,index) in categoryList" :key="index">
              <img :src="item.img" alt="">
              <h3>{{item.title}}</h3>
            </li>
          </ul>
       </div>
       <div class="cont">
            <ul>
              <li v-for="(item,index) in contList" :key="index">
                <div class="img">
                  <img :src="item.img" alt="">
                </div>
                <div class="dec">
                  <h2>{{item.title}}</h2>
                  <p>{{item.content}}</p>
                </div>
              </li>
            </ul>
       </div>
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
</template>
<script>
export default {
  data(){
    return{
      swiperlist:[require('../assets/images/bg01.jpg'), require('../assets/images/bg02.jpg')],
      bannerHeight:0,
      count:0,
      categoryList:[
        {img:require('../assets/images/case_category_pic1.png'),title:'办公楼'},
        {img:require('../assets/images/case_category_pic2.png'),title:'写字楼'},
        {img:require('../assets/images/case_category_pic3.png'),title:'连锁店'},
        {img:require('../assets/images/case_category_pic4.png'),title:'专卖店'},
        {img:require('../assets/images/case_category_pic5.png'),title:'学校'},
        {img:require('../assets/images/case_category_pic6.png'),title:'幼儿园'},
        {img:require('../assets/images/case_category_pic7.png'),title:'厂房'},
        {img:require('../assets/images/case_category_pic8.png'),title:'展厅'},
      ],
      contList:[
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
        {img:require('../assets/images/case_list_pic.png'),title:'这里是案例名称这里是案例名称',content:'这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍这里是内容介绍'},
      ],
      total: 0,
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
        imageLoaded(){
          this.count++;
          if(this.count==1){
              this.$nextTick(() => {
                this.bannerHeight = this.$refs.image[0].height;
              })
          }
        },
        initData(){
        this.total = this.contList.length;
         },
        handleCurrentChange(val) {
          this.filters.pagyNo = val;
        },
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
  .case_category{
    padding-top:50px;
    padding-bottom:40px;
  }
  .case_category>ul{
    display: flex;
    display: -webkit-flex; 
    flex-wrap: wrap;
    justify-content:flex-start;
  }
  .case_category>ul>li{
     width: 12%;
     text-align: center;
     cursor: pointer;
  }
  .case_category>ul>li>img:hover{
    border: 2px solid red;
    border-radius: 50%;
  }
  .case_category>ul>li>h3{
     font-size: 14px;
     font-weight: normal;
     padding: 10px 0;
   }
   .cont{
     margin-bottom: 35px;
     width: 100%;
   }
   .cont>ul{
     display: flex;
     display: -webkit-flex; 
    flex-wrap: wrap;
    justify-content:flex-start;
   }
   .cont>ul>li{
     width: 25%;
    margin-right: 136px;
    margin-bottom: 20px;
   }
   .img{
     width: 100%;
   }
   .img>img{
     width: 100%;
     display: inline-block;
   }
  .cont>ul>li:hover{
    border:1px solid  green;
    box-sizing: border-box;
    cursor: pointer;
  }
   .cont>ul>li:nth-child(3n){
     margin-right: 0px;
   }
   .dec>h2{
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      padding: 13px 0;
      border-bottom: 1px solid #e6e6e6
   }
   .dec>h2:hover{
     color: green;
   }
    .dec>p{
      font-size:14px;
       overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
    }
    @media only screen and (max-width: 1400px){
       .cont>ul>li{
           margin-right: 130px;
        }
    }
    @media only screen and (max-width: 1300px){
       .cont>ul>li{
           margin-right: 110px;
        }
    }
    @media only screen and (max-width: 1100px){
       .cont>ul>li{
           margin-right: 100px;
        }
        .dec>h2{
           font-size: 15px;
         }
    }
    @media only screen and (max-width: 1000px){
       .case_category>ul>li{
        width: 21%;
      }
       .cont>ul>li{
           margin-right: 88px;
        }
       
    }
     @media only screen and (max-width: 900px){
       .cont>ul>li{
           margin-right: 79px;
        }
    }
    
    @media only screen and (max-width: 800px){
      .cont>ul>li{
           margin-right: 69px;
        }
       .positonWrap{
         font-size: 14px;
       }
       .case_category{
          padding-top:30px;
          padding-bottom:20px;
        }
      .case_category>ul>li{
        width: 30%;
        margin-right:7px;
      }
       .case_category>ul>li>img{
         width: 60px;
         height: 60px;
       }
       .case_category>ul>li>h3{
          font-size: 12px;
        }
    }
    @media only screen and (max-width: 700px){
        .cont>ul>li{
          width: 45%;
          margin-right:40px!important;
        }
        .cont>ul>li:nth-child(2n){
          margin-right: 0!important;
        }
    }
     @media only screen and (max-width: 500px){
        .cont>ul>li{
           margin-right: 0px!important;
           width: 100%;
        }
     }
</style>
