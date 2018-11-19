<template>
  <div class="home">
<!--     <div class="header">
      <div class="headerWrap">
        <div class="headerContain">
            <ul class="topbar-left">
                <li>
                  <img src="../assets/images/tel.png">
                  <span>全国咨询热线：</span>
                  <em>400-123-456</em>
                </li>
            </ul>
            <ul class="topbar-right">
              <li>
                <img src="../assets/images/xin.png">
                <span>一流的服务</span>
              </li>
              <li>
                <img src="../assets/images/money.png">
                <span>透明的价格</span>
              </li>
              <li>
                <img src="../assets/images/pai.png">
                <span>重信守誉</span>
              </li>
              <li>
                <img src="../assets/images/you.png">
                <span>优质的苗圃</span>
              </li>
            </ul>
        </div>
    </div>
    <div class="navWaper">
        <div class="navContain">
          <div class="logWrap" >
             <img src="../assets/images/logo.png" >
          </div>
          <div id="menu-box">
               <div id="menu">
                   <input type="checkbox" id="menu-form">
                   <label for="menu-form" class="menu-spin">
                    <div class="line diagonal line-1"></div>
                    <div class="line horizontal"></div>
                    <div class="line diagonal line-2"></div>
                  </label>
                </div>
            </div>
          <ul class="navRight">
            <li><a href="">网站首页</a></li>
            <li>
              <a href="">关于我们
                <span class="caret"> </span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="">公司简介</a></li>
                <li><a href="">在线留言</a></li>
              </ul>
             </li>
            <li>
              <a href="">产品中心
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="">果树苗</a></li>
                <li><a href="">绿化苗</a></li>
                <li><a href="">松柏苗</a></li>
                <li><a href="">灌木苗</a></li>
              </ul>
            </li>
            <li>
              <a href="">基地展示<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="">樱桃种植基地</a></li>
                <li><a href="">猕猴桃种植基地</a></li>
                <li><a href="">苹果种植基地</a></li>
              </ul>
            </li>
            <li><a href="">资质荣誉</a></li>
            <li>
              <a href="">新闻中心<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="">技术要领</a></li>
                <li><a href="">行业资讯</a></li>
              </ul>
            </li>
            <li><a href="">联系我们</a></li>
          </ul>
        </div>
    </div>
    </div>
    <div class="banner" >
      <el-carousel height="525px" >
            <el-carousel-item v-for="item in banners" :key="item">
              <img :src="item" class="bannerImg"  ref="img">
            </el-carousel-item>
      </el-carousel>
     </div> -->
    <!-- 热门推荐 -->
<!--     <div class="hotwrap">
      <div id="hot">
        <div class="title">
          <h2>热门推荐</h2>
          <div class="home-line"></div>
          <p class="dec">我们用心为您做的更好</p>
        </div>
        <div class="container">
          
        </div>
     </div>
    </div> -->
  
 <!--   <div class="animated bounceOutLeft">23点3豆腐</div> -->


    <div class="header " id="header" :class="{fixed: isFixed}">
         <div class=" fixed-width clearfix">
            <div class="header-title fl">我是顶部   
              <router-link tag="li" to="/index" class="link">
                  跳转
              </router-link></div>
            <div class="header-buy fr"  >我也是顶部</div>
         </div>
    </div>
    <div class="content">
      <div class="banner animate" data-ani="slideInRight"></div>
      <div class="animate-box slide">
        <h2 class="animate text-h2" data-ani="fadeInUpBig">LuckLin520 Written in Chengdu</h2>
        <p class="animate text-p" data-ani="rollIn" data-delay="1000">Thank you for reading and I will continue to work hard! —————2018/08/08</p>
      </div>
      <div class="animate-box bounce">
        <div class="animate yellow" data-ani="bounceInLeft"></div>
        <div class="animate red" data-ani="bounceInRight"></div>
        <div class="animate green" data-ani="bounceInLeft"></div>
        <div class="animate blue" data-ani="bounceInRight"></div>
      </div>
      <div class="animate-box slide">
        <h2 class="animate text-h2" data-ani="fadeInUpBig">做真实的自己，一切都会好起来的</h2>
        <p class="animate text-p" data-ani="slideInRight" data-delay="1000">Be true to yourself and everything will be fine</p>
      </div>
      <div class="animate-box zoom">
        <div class="animate one" data-ani="bounceInLeft"></div>
        <div class="animate two" data-ani="bounceInRight"></div>
        <div class="animate three" data-ani="bounceInLeft"></div>
        <div class="animate four" data-ani="bounceInRight"></div>
      </div>
       <div class="animate-box slide">
        <h2 class="animate text-h2" data-ani="fadeInUpBig">陆艺进行动画测试</h2>
        <p class="animate text-p" data-ani="slideInRight" data-delay="1000">Be true to yourself and everything will be fine</p>
      </div>
       <div class="animate-box zoom">
        <div class="animate one" data-ani="fadeInLeftBig"></div>
        <div class="animate two" data-ani="fadeInRightBig"></div>
        <div class="animate three" data-ani="fadeInLeftBig"></div>
        <div class="animate four" data-ani="fadeInRightBig"></div>
      </div>
    </div>

  </div>
</template>
<script>

$(function () {  
 
 }); 

export default {
  data() {
    return {
      banners:[require("../assets/images/bg01.jpg"),
             require("../assets/images/bg02.jpg")],
      show:false,
     isFixed:0,
    };
  },
  watch: {
   
    },
 mounted () {
  
    // window.onresize = () => {
    //   return (() => {
    //   var imgHeight = this.$refs.img[0].height + 'px';
    //   this.$refs.imgWrap.height =imgHeight;
    //   })()
    //   }
    this.$nextTick(() => {
        this.handleAnimate()//初始化第一次加载时在视口内就执行动画
        addEventListener('scroll', this.handleScroll);
        addEventListener('scroll', this.handleAnimate);
      })
  },
  destroyed() {
      removeEventListener('scroll', this.handleScroll);//避免影响其他页面
      removeEventListener('scroll', this.handleAnimate);
  },

  methods: {
    handleScroll() {
        let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if(top > 250){
          this.isFixed = 1;
        }else if(top < 200){
          this.isFixed = 0;
        }
      },
      handleAnimate() {
        let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let vh = document.documentElement.clientHeight;
        let dom = document.querySelectorAll(".animate");
        [].slice.call(dom).forEach(v => {
          if(top + vh > v.offsetTop){
            var delay = v.dataset.delay;
            if(delay){
              setTimeout(() => {
                v.style.opacity = 1;
                v.classList.add(v.dataset.ani)
              }, delay)
            }else{
              v.style.opacity = 1;
              v.classList.add(v.dataset.ani)
            }
          }else{
            v.classList.remove(v.dataset.ani)
            v.style.opacity = 0;
          }
        })
      }
  },
  created() {
  },
  computed: {

  },

};
</script>
<style type="text/css" scoped>
 /* @import url("./css/home.css")*/
.header{
    background: green;
    height: 50px;
  }
  .fixed{
        position: fixed;
        top: 0px;
        z-index: 4;
        width: 100%;
        animation: slideInDown .5s;
    }
    .content{
      height: 2000px;
      background: pink;
      overflow: hidden;
    }
    .banner{
      width: 80%;
      height: 400px;
      background:orange;
      margin: 80px auto;
      }
      .slide{
        font-size: initial;
        height: 100px;
      }
      .bounce{
        width: 80%;
        margin:0 auto 80px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .bounce>div{
          height: 120px;
          float: left;
          width: 45%;
        }
        .yellow{
          background:yellow;
          margin-bottom: 40px;
        }
        .red{
          background:red;
        }
        .green{
          background:green;
        }
        .blue{
          background:blue;
        }
      
  .zoom{
        width: 80%;
        margin:0 auto 80px;
        display: flex;
        justify-content: space-between;
      }
   .zoom>div{
          width: 23%;
          height: 263px;
        }
  .one{
        background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img1.jpg) no-repeat center/100%;
      }
   .two{
        background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img2.jpg) no-repeat center/100%;
      }
   .three{
        background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img3.jpg) no-repeat center/100%;
      }
    .four{
        background:url(http://www.codingke.com/themes/codingnew-1/img/study/python/python_block1_img4.jpg) no-repeat center/100%;
      }
      
 .animate{
  opacity: 0;
 }
 .fadeInUpBig{
  animation: fadeInUpBig 1s;
 }
 .rollIn{
  animation: rollIn 1s;
 }
 .slideInRight{
  animation: slideInRight 1s;
 }
 .bounceInLeft{
  animation: bounceInLeft 2s ease-in;
 }
 .bounceInRight{
  animation: bounceInRight 2s ease-in;
 }

.fadeInLeftBig{
   animation: fadeInLeftBig 2s ease-in;
}
.fadeInRightBig{
   animation: fadeInRightBig 2s ease-in;
}

.link{
width: 100px;
height: 40px;
float: right;
margin-right: 40px;
background-color: purple;
color: #fff;
font-size:16px;
}


</style>
