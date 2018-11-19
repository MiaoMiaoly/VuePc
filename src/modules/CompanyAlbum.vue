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
       <p class="positonWrap">当前位置：<span>首页</span>><span>公司相册</span></p>
       <div class="category">
        <span class="active">施工团队</span>
        <span>设计团队</span>
       </div>
       <div class="cont">
            <ul>
              <li v-for="(item,index) in contList" :key="index">
                <div class="img">
                  <img :src="item.img" alt="">
                </div>
                <div class="dec">
                  <h2>
                   <span>{{item.name}}</span>
                   <span class="zhiwei">{{item.role}}</span>
                  </h2>
                  <p>
                    <span>从业：{{item.years}}年</span>
                    <span>作品：{{item.qty}}套</span>
                  </p>
                </div>
              </li>
            </ul>
       </div>
        <!-- 分页 -->
      <el-pagination style="margin-bottom:20px;text-align: center;"
        @current-change = "handleCurrentChange"
        :current-page = "filters.pagyNo"
        :page-size = "filters.pagyNum"
        background 
        :total = "total"
        layout = "total, prev, pager, next">
      </el-pagination>
      <div class="zy_team">
          <ul>
            <li>
              <span>
                <font>10</font>
                "年装修经验"
              </span>
            </li>
            <li>
              <span>
                <font>300+</font>
                "客户认可"
              </span>
            </li>
            <li>
              <span>
                <font>40+</font>
                "合作伙伴"
              </span>
            </li>
          </ul>
      </div>
      <div class="partner">
          <ul>
            <li style="background: url(http://www.17sucai.com/preview/1424582/2018-11-06/zs/statics/images/partner1.png) center center no-repeat"></li>
            <li style="background: url(http://www.17sucai.com/preview/1424582/2018-11-06/zs/statics/images/partner2.png) center center no-repeat"></li>
            <li style="background: url(http://www.17sucai.com/preview/1424582/2018-11-06/zs/statics/images/partner3.png)center center no-repeat"></li>
            <li style="background: url(http://www.17sucai.com/preview/1424582/2018-11-06/zs/statics/images/partner4.png) center center no-repeat"></li>
            <li style="background: url(http://www.17sucai.com/preview/1424582/2018-11-06/zs/statics/images/partner5.png) center center no-repeat"></li>
          </ul>
      </div>
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
      contList:[
        {img:require('../assets/images/team_list_pic.png'),name:'陆艺',role:'前端工程师',years:4,qty:3},
        {img:require('../assets/images/team_list_pic.png'),name:'陆艺',role:'前端工程师',years:4,qty:3},
        {img:require('../assets/images/team_list_pic.png'),name:'陆艺',role:'前端工程师',years:4,qty:3},
        {img:require('../assets/images/team_list_pic.png'),name:'陆艺',role:'前端工程师',years:4,qty:3},
        {img:require('../assets/images/team_list_pic.png'),name:'陆艺',role:'前端工程师',years:4,qty:3},
        {img:require('../assets/images/team_list_pic.png'),name:'陆艺',role:'前端工程师',years:4,qty:3},
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
    border: 1px solid #e6e6e6;
    padding-bottom: 20px;
    margin-top: 20px;
   }
   .img{
     width: 100%;
   }
   .img>img{
     width: 100%;
     display: inline-block;
   }
   .cont>ul>li:nth-child(3n){
     margin-right: 0px;
   }
   .dec{
     text-align: center;
   }
   .dec>h2{
      margin-top: 12px;
      margin-bottom: 13px;
      font-size: 30px;
      font-weight: normal;
      color: #1b434e;
   }
   .zhiwei{
      font-size: 18px;
      color: #099a10;
      padding-left: 20px;
   }
    .dec>p{
      font-size:18px;
       overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:2;
      -webkit-box-orient: vertical;
    }
    .dec>p>span{
          padding: 0 18px;
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
  .zy_team{
    width: 100%;
    overflow: hidden;
    margin-top: 80px;
  }
  .zy_team>ul>li{
    float: left;
    width: 30%;
    height: 130px;
    line-height: 130px;
    background: #099a10;
    font-size: 30px;
    color: #fff;
    text-align: center;
    margin-right: 22px;
    margin-bottom: 30px;
    box-shadow: 0px 3px 3px rgba(0,0,0,.3);
  }
     
  .partner{
     margin-bottom: 100px;
   }
  .partner>ul{
      overflow: hidden;
    }
  .partner>ul>li{
    float: left;
    width: 18%;
    height: 100px;
    margin-right: 25px;
    border: 1px solid #e6e6e6;
    background: #fff;
    margin-bottom: 20px;
  }
    @media only screen and (max-width: 1550px){
      .partner>ul>li{
           width: 22%;
         }
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
         .partner>ul>li{
           width: 30%;
         }
    }
    @media only screen and (max-width: 1000px){
       .cont>ul>li{
           margin-right: 88px;
        }
         .zy_team>ul>li{
           font-size: 25px;
         }
         .partner>ul>li{
           width: 46%;
         }
    }
     @media only screen and (max-width: 900px){
       .cont>ul>li{
           margin-right: 79px;
        }
        .zy_team>ul>li{
           width: 46%;
         }
        /* .partner>ul>li{
           width: 46%;
          margin-right: 22px
         } */
    }
    
    @media only screen and (max-width: 800px){
      .cont>ul>li{
           margin-right: 69px;
        }
       .positonWrap{
         font-size: 14px;
       }
        .category>span{
        padding: 10px 20px;
        font-size:14px;
      }
       .zy_team>ul>li{
           font-size: 20px;
           height: 100px;
           line-height: 100px;
           width: 29%;
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
        .zy_team>ul>li{
           width: 45%;
         }
        .partner>ul>li{
           width: 44%;
         }
    }
    @media only screen and (max-width: 600px){
        .zy_team>ul>li{
           width: 44%;
         }
        .partner>ul>li{
           width: 43%;
         }
     }
     @media only screen and (max-width: 500px){
        .cont>ul>li{
           margin-right: 0px!important;
           width: 100%;
        }
        .zy_team>ul>li{
           width: 100%;
         }
        .partner>ul>li{
           width: 100%;
         }
     }
</style>
