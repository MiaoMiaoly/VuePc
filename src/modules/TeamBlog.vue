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
        <div class="pic-tit">
            <div class="titleWrap">
              <h2>
                <em>新闻</em>
                <em class="f-normal">咨询</em>
              </h2>
              <p>CONTACT US</p>
            </div>
            <div class="line">
            </div>
        </div>
        <div class="infoWrap">
            <ul>
              <li class="clearfix" v-for="(item,index) in newsList" :key="index">
                  <div class="colImg">
                    <img :src="item.img" alt="" style="width:100%;">
                  </div>
                  <div class="colContent">
                      <div class="newItem">
                        <h4>{{item.title}}</h4>
                        <em></em>
                        <span>{{item.see}}</span>
                        <em class="er"></em>
                        <span>{{item.collect}}</span>
                        <p>{{item.content}}</p>
                      </div>
                      <div class="time">
                        <strong>{{item.time}}</strong>
                        <time>{{item.date}}</time>
                      </div>
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
      newsList:[
        {img:require('../assets/images/n1.jpg'),title:'英国首相卡梅伦最爱吃四川火锅',see:'463',collect:'2432',content:'从抵达到离开，短短6个多小时内，卡梅伦马不停蹄地到访杜甫草堂、锦里、龙江路小学分校，并与四川高层会面，就进一步推动四川与英国之间的友好往。',date:'2017-07',time:'17'},
         {img:require('../assets/images/n2.jpg'),title:'狗不理拿下美咖啡连锁 打响餐企跨国并购第一枪',see:'463',collect:'2432',content:'昨日，天津狗不理方面传出消息，拥有155年历史的中华老字号有望在年内并购美国一家知名连锁咖啡企业，掌握其位于40多个国家的数百家连锁店，实现中餐。',date:'2017-07',time:'18'},
          {img:require('../assets/images/n3.jpg'),title:'快餐行业的数字化进程',see:'123',collect:'1032',content:'随着生活节奏的不断加快，快餐满足了人们日常对“快”的生活所需。然而，面对需求多样化的消费者，就要求快餐连锁企业做出更快的反应，比如展示不同菜品，为消。',date:'2017-07',time:'19'},
      ],
      total: 10,
      filters: {
        pagyNo: 1,
        pagyNum: 12,
      },
    }
  },
  mounted(){
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
    margin: 0 auto;
    margin-bottom: 260px;
    padding-top: 4%;
  }
  .pic-tit{
    position: relative;
    height: 45px;
    margin-bottom: 50px;
    z-index: 20;
  }
  .titleWrap{
    margin-left: -71px;
    position: absolute;
    top: -5px;
    left: 50%;
    background: #FFF;
    border: #FFF solid 6px;
    z-index: 5;
  }
  .titleWrap>h2>em{
    font-size: 1.5em;
    text-align: center;
    color: #ff8800;
  }
  .titleWrap>p{
    font-size: 0.8em;
    color: #999999;
    text-indent: 0;
    text-align: center;
  }
  .line{
    position: absolute;
    top: 13px;
    width: 100%;
    z-index: 0;
    border-bottom: #e9e9e9 solid 1px;
  }
  .f-normal{
    color: #000!important;
  }
  .infoWrap{
        margin-left: 3%;
  }
  .infoWrap>ul>li{
    background: #fff;
    margin-bottom: 20px;
    margin-right: 10px;
    padding: 20px 0;
    box-shadow: 5px 5px 5px #888888;
    border: 1px solid #ccc;
  }
  .clearfix{
    overflow: hidden;
  }
  .colImg,.colContent,.time,.newItem{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    float: left;
  }
  .newItem{
    width: 80%;
  }
  .time{
    width: 20%;
  }
  .newItem>h4{
    font-size: 1em;
    font-weight: 900;
    margin: 10px;
    display: block;
  }
  .newItem>em{
    width: 25px;
    height: 14px;
    background-position: -22px 0;
    background-image: url(http://www.17sucai.com/preview/850167/2017-12-21/%E9%A4%90%E9%A5%AE/images/zixum.png);
    display: inline-block;
  }
  .er{
    width: 22px;
    background-position: 0px 0;
    margin-left: 20px;
    background-image: url(http://www.17sucai.com/preview/850167/2017-12-21/%E9%A4%90%E9%A5%AE/images/zixum.png);
  }
 
  .newItem>p{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 13px;
  }
  .time{
    border: 1px solid #F0AD4E;
    padding: 20px 10px;
    text-align: center;
  }
  .time strong {
    display: block;
    font-size: 3em;
    font-weight: 900;
    position: relative;
    color: #F0AD4E;
    margin-bottom: 10px;
}
.time strong:after {
    width: 40%;
    height: 3px;
    background: #F0AD4E;
    content: "";
    display: block;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -20%;
}
.time time {
    color: #F0AD4E;
}
.colImg{
          width: 16.66666667%;
    }
.colContent{
          width: 83.33333333%;
    }
@media only screen and (max-width: 700px){
      
    .colImg{
      width: 100%;
    }
    .colContent{
        width: 100%;
      }
      .time{
       display: none;
      }
      .newItem{
          width: 100%;
      }
      .titleWrap>h2{
        font-size: 1rem;
      }
      .pic-tit{
            margin-bottom: 30px;
      }
  }


</style>
