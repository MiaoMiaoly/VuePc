<template>
  <div class="test">
    <div class="contain">
      <div class="nav">
        <ul>
            <li v-for="item in nav" :key="item.title" :class="isSelect === item.title ? 'actived' : ''" @click="selectNav(item.title)">
                  {{item.title}}
            </li>
        </ul>
        <div class="logWrap">
          <span>登录</span> | <span>退出</span>
        </div>
        <img src="../assets/images/menu.png" @click="showClick" />
      </div>
    </div>
     <div class="content">
        <router-view />
        <div class="footer">
          <div class="footer_contain">
              <div class="footer_left">
                  <img src="../assets/images/logo2.png" alt="">
              </div>
              <div class="footer_middlle">
                    <ul>
                      <li>
                        <h3>网站首页</h3>
                        <p><a href="">公司简介</a></p>
                        <p><a href="">领导致辞</a></p>
                        <p><a href="">机构设置</a></p>
                        <p><a href="">地理位置</a></p>
                      </li>
                      <li>
                        <h3>荣誉资质</h3>
                        <p><a href="">产品名称第一</a></p>
                        <p><a href="">汇源果汁</a></p>
                        <p><a href="">娃哈哈矿泉水</a></p>
                        <p><a href="">可口可乐</a></p>
                      </li>
                      <li>
                        <h3>精品案例</h3>
                        <p><a href="">年底促销</a></p>
                        <p><a href="">6.18年中大促销</a></p>
                      </li>
                      <li>
                        <h3>友情链接</h3>
                        <p class="flink">
                          <a href="">网易</a>
                          <a href="">搜狐</a>
                          <a href="">网易</a>
                          <a href="">网易</a>
                          <a href="">搜狐</a>
                          <a href="">网易</a>
                          <a href="">网易</a>
                        </p>
                      </li>
                    </ul>
              </div>
              <div class="footer_right">
                   <ul>
                     <li>
                       <div class="tel">
                         <h3>工作热线</h3>
                         <h3>020-32201587</h3>
                      </div>
                      <div>
                      <h3>24小时服务热线</h3>
                       <h3>13631338039</h3>
                      </div>
                       
                     </li>
                     <li>
                       <div><img src="../assets/images/xinlang.png" alt=""><span>新浪微博</span></div>
                       <div><img src="../assets/images/QQ.png" alt=""><span>腾讯微博</span></div>
                     </li>
                   </ul>
                   <div>
                      <img src="../assets/images/erweima.png" alt="">
                      <p>扫一扫二维码有惊喜</p>
                   </div>
              </div>
          </div>
        </div>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
        isSelect: '网站首页',
        nav:[
          {title:'网站首页',},
          {title:'公司案例'},
          {title:'公司相册'},
          {title:"团队博客"},
          {title:'关于我们'},
          ],
    };
  },
  methods: {
     selectNav (title) { 
      this.isSelect = title;
      switch (title) { 
      case '网站首页': this.$router.push('/index') 
      break
      case '公司案例': this.$router.push('/case') 
      break
      case '公司相册': this.$router.push('/album') 
      break
      case '团队博客': this.$router.push('/blog') 
      break
      case '关于我们': this.$router.push('/aboutus') 
      break
      case '地图测试': this.$router.push('/map') 
      break
      }  
      },
      showClick(){
          $(".nav ul").slideToggle(100);
      },
    //  fade:function(){
    //       $('#f').addClass('animated zoomIn');
    //        setTimeout(function(){
    //             $('#f').removeClass('zoomIn');
    //         }, 500);
    //    },
  },
  mounted () {
       this.isSelect = this.$route.name;
  },
  created () {  
   
  },

  components: {

   
  },
};
</script>
<style type="text/css">  
    .contain{
      width: 100%;
      background-color: #673AB7;
    }
    .nav {
        position: relative;
        height: 78px;
        width: 80%;
        /* border-bottom: 1px solid #DADADA; */
        margin:0 auto;
    }     
    .nav img {
        position: absolute;
        right: 20px;
        top: 30px;
        width: 28px;
        display: none;
        cursor: pointer;
    }   
    .nav ul {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: center;
        z-index: 99;
        display: block;
    }
    .nav ul li {
        height: 78px;
        width: 168px;
        line-height: 78px;
        text-align: center;
        display: inline-block;
        color: #fff;
    }  
    .nav ul li:hover {
        cursor: pointer;
    }
    .logWrap{
      position: absolute;
      right: 60px;
      top: 0;
      height: 78px;
      line-height: 78px;
      color: #fff;
      cursor: pointer;
    }
    /* .nav ul li a {
        text-decoration: none;
        color: #fff;
        padding-bottom: 8px;
    } */
  .actived {
      border-bottom: 3px solid #EE5C42;
  }
  .footer{
    background:#673AB7;
    color: #fff;
    /* min-height: 400px; */
    padding: 30px 0;
    overflow: hidden;
  }
  .footer_contain{
    width: 80%;
    margin:0 auto;
    /* height: 200px; */
  }
  .footer_left{
    /* width: 240px; */
    margin-right: 20px;
    padding: 20px 0;
    float: left;
  }
  .footer_middlle{
    float: left;
    padding: 20px 0;
  }
  .footer_middlle>ul>li{
    float: left;
    padding: 0 28px;
  }
  .footer_middlle>ul>li>h3{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  .footer_middlle>ul>li>p{
    font-size: 14px;
    text-align: left;
    margin-top: 10px;
    max-width: 165px;
  }
   .footer_middlle>ul>li>p>a{
     color: #fff;
   }
  .flink>a{
    display: block;
    float: left;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  .footer_right{
    float: left;
    border-left: 1px solid #fff;
    padding:20px 0px;
    overflow: hidden;
  }
   .footer_right>ul{
     /* margin-right: 30px; */
     float: left;
     padding: 0 30px;
   }
  /* .footer_right>ul,.footer_right>div{
    display: inline-block;
  } */
  .footer_right>div{
    float: left;
    margin-left: 80px;
  }
  .footer_right>div>p{
    padding-top:10px;
  }
   .tel{
     margin-bottom:15px;
   }
   .footer_right>ul>li>div>h3{
    font-size: 16px;
    font-weight: 600;
   }
  .footer_right>ul>li>div>img{
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
  .footer_right>ul>li>div>span{
   font-size: 12px;
   padding-left: 5px;
   color:#eee;
   cursor: pointer;
  }
  @media only screen and (max-width: 1500px){
    .footer_right {
       float: left;
       border-left:none;
       padding:0;
       overflow: hidden;
       margin-left: 160px;
      }
  }
  @media only screen and (max-width: 1000px){
    .footer_right {
       float: left;
       border-left:none;
       padding:0;
       overflow: hidden;
       margin-left: 0;
      }
  }
  @media only screen and (max-width: 878px) {
      .nav img {
          display: inline;
      }
      .nav ul {
          position: absolute;
          right: 0;
          text-align: right;
          top: 78px;
          display: none;
          z-index: 99;
          width: 100%;
          background: rgb(255, 255, 255);
      }
      .nav ul li {
          display: block;
          border: 1px solid #dadada;
          height: 58px;
          line-height: 58px;
          /* width: 98px; */
          color: #333;
          width: 100%;
      }
      .actived {
          border-bottom: none;
          color: #673AB7!important;
      }
      .nav ul li :hover {
          background-color:  #673AB7;
      }
      .contain{
        position: relative;
      }
      .nav{
        position:static;
      }
      .footer_middlle>ul>li{
            padding: 0 8px;
            margin-bottom: 20px;
      }
      .footer_middlle>ul>li>p{
        margin-bottom: 10px;
        margin-top:0;
      }
    .footer_right {
       float: left;
       border-left:none;
       padding:0;
       overflow: hidden;
       margin-left: 170px;
      }
      .footer_right>ul {
        margin-right: 0;
        float: left;
        padding:0;
      }
      .footer_right>div {
          float: right;
          margin-left: 60px;
      }
      .footer_right>div>p{
        font-size:12px;
      }
       .footer_right>div>img{
         width: 80px;
         height: 80px;
       }
    }
    @media only screen and (max-width: 800px){
    .footer_right {
       float: left;
       border-left:none;
       padding:0;
       overflow: hidden;
       margin-left: 0;
      }
    @media only screen and (max-width: 380px){
        .footer_right>div {
        margin-left: 33px;
         }
       }
    }
           
 
</style>
