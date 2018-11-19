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
              <li></li>
              <li></li>
              <li></li>
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
    }
  },
  mounted(){

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





   @media only screen and (max-width: 1800px){
      
  }
    @media only screen and (max-width: 1400px){
      
    }
    @media only screen and (max-width: 1300px){
       
    }
    @media only screen and (max-width: 1100px){
     
    }
    @media only screen and (max-width: 1000px){
  
   
   
       
    }
     @media only screen and (max-width: 900px){
       
    }
    
    @media only screen and (max-width: 800px){
      
    }
    @media only screen and (max-width: 700px){
 
    }
    @media only screen and (max-width: 700px){
       
    }
     @media only screen and (max-width: 500px){
      
     
     }
</style>
