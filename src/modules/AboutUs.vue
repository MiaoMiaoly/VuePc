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
      <div class="contact_info">
          <div id="map">
          </div>
          <div class="info">
                <div class="info_contain">
                    <h2>联系我们</h2>
                    <p>contact us</p>
                    <ul>
                      <li>
                        <p>地址：广州市天河区东圃二马路大圃商贸园</p>
                        <p class="dong">12栋110-115单元</p>
                      </li>
                      <li>
                        <p>电话：020-82350796</p>
                      </li>
                      <li>
                        <p>地铁：地铁5号线东圃C出口</p>
                      </li>
                      <li> <p>公交：B2、B1</p> </li>
                      <li><p>工作时间：9:00-21:00</p></li>
                    </ul>
                </div>
          </div>
      </div>
      <div class="leave_message">
                <h2>联系我们</h2>
                <p>contact us</p>
                <form action="#">
                  <div>
                    <input type="text" placeholder="业主姓名：">
                    <input type="text" placeholder="您的电话：">
                  </div>
                  <div>
                    <input type="text" placeholder="项目经理：">
                    <input type="text" placeholder="所在区域：">
                  </div>
                  <div>
                    <input type="text" placeholder="合同编号：">
                    <input type="text" placeholder="施工面积：">
                  </div>
                  <div>
                    <textarea name="" id="tt" cols="30" rows="10" placeholder="具体内容"></textarea>
                  </div>
                  <div style="text-align:center">
                    <input type="submit"  value="提交留言" class="liuyan">
                  </div>
                </form>
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
      total: 0,
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
            let mapObj = new AMap.Map('map', {//'map-location'是对应页面盒子的id
                  center: [121.5343, 31.217687] ,
                  resizeEnable: true, //自适应大小
                  zoom: 15,//初始视窗
              });
              
        },
        imageLoaded(){
          this.count++;
          if(this.count==1){
              this.$nextTick(() => {
                this.bannerHeight = this.$refs.image[0].height;
              })
          }
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
    /* height:600px; */
    margin: 0 auto;
    margin-bottom: 260px;
  }
  .contact_info{
    width: 100%;
    overflow: hidden;
    margin-top:50px;
    margin-bottom: 50px;
  }
  #map{
    float: left;
    width: 50%;
    height: 600px;
    background-color: red;
  }
  .info{
    float: left;
    width: 50%;
    background-color: #673AB7;
    color: #fff;
    height: 600px;
  }
  .info_contain{
    width: 80%;
    margin:50px auto;
  }
  .info_contain>h2{
    font-size: 24px;
    position: relative;
    text-align: center;
    margin-bottom: 20px;
    font-weight: normal;
  }
   .info_contain>h2:after{
    content: "";
    width: 75px;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: -11px;
    left: 50%;
    transform: translateX(-50%);
   }
  .info_contain>p{
      text-align: center;
      margin-bottom: 20px;
      text-transform: uppercase;
  }
  .info_contain>ul>li{
    margin: 42px 0;
  }
  .info_contain>ul>li>p{
    font-size: 18px;
    /* text-indent: 45px; */
  }
  .dong{
    padding-left: 50px;
  }
  .leave_message {
    /* padding-top: 50px; */
    margin-top: 50px;
  }
  .leave_message h2 {
    font-size: 24px;
    position: relative;
    text-align: center;
    margin-bottom: 20px;
    font-weight: normal;
    color: #673AB7;
}
.leave_message h2:after {
    content: "";
    width: 75px;
    height: 2px;
    background: #673AB7;
    position: absolute;
    bottom: -11px;
    left: 50%;
    transform: translateX(-50%);
}
.leave_message p {
    text-align: center;
    margin-bottom: 40px;
    text-transform: uppercase;
    color: #673AB7;
}
.leave_message form>div {
    margin-bottom: 30px;
}
.leave_message >form>div >input {
    width: 48%;
    height: 50px;
    margin-right: 3.7%;
    border: 1px solid #e6e6e6;
    text-indent: 20px;
    font-size: 16px;
    line-height: 55px;
}
.leave_message >form >div>input:nth-child(2n){
   margin-right: 0;
}
#tt{
  width: 100%;
  text-indent: 20px;
  padding-top: 20px;
  font-size: 16px;
  font-family: 微软雅黑;
  margin-bottom: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(230, 230, 230);
  border-image: initial;
}
.liuyan{
    width: 375px;
    background: #673AB7;
    color: #fff;
    text-indent: 0;
    font-size: 18px;
    cursor: pointer;
}
   @media only screen and (max-width: 1800px){
        .leave_message >form>div >input {
              margin-right: 3.6%;
        }
  }
    @media only screen and (max-width: 1400px){
       .leave_message >form>div >input {
              margin-right: 3.5%;
        }
    }
    @media only screen and (max-width: 1300px){
        .leave_message >form>div >input {
              margin-right: 3.4%;
        }
    }
    @media only screen and (max-width: 1100px){
     
    }
    @media only screen and (max-width: 1000px){
    #map,.info{
      height: 440px;
    }
    .info_contain>h2[data-v-656d27cc] {
        font-size: 16px;
    } 
    .info_contain>p{
      font-size: 14px;
    }
    .info_contain>ul>li{
          margin: 30px 0;
    }
    .info_contain>ul>li>p{
      font-size: 12px;
    }
    .dong {
       padding-left: 37px;
    }
     .leave_message >form>div >input {
              margin-right: 3.3%;
        }
       
    }
     @media only screen and (max-width: 900px){
        .leave_message >form>div >input {
              margin-right: 0%;
              width: 100%;
              margin-bottom: 20px;
        }
        .leave_message form>div {
              margin-bottom: 10px;
          }
    }
    
    @media only screen and (max-width: 800px){
      
    }
    @media only screen and (max-width: 700px){
 
    }
    @media only screen and (max-width: 700px){
       
    }
     @media only screen and (max-width: 500px){
        .dong {
          padding-left: 30px;
        }
     
     }
</style>
