<template>
  <div class="amap-page-container">
     <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
    <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
       <!-- <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
       <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker> -->
       <!-- <el-amap-ground-image v-for="(groundimage,index) in groundimages" :key="index" :url="groundimage.url" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image> -->
        <!-- <el-amap-circle v-for="(circle,index) in circles" :key="index" :center="circle.center" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events" :fillColor="circle.fillColor" :strokeColor="circle.strokeColor"></el-amap-circle> -->
      <!-- <el-amap-text v-for="(text ,index) in texts" :key="index"  :text="text.text" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text> -->
      <!-- <el-amap-circle-marker v-for="(marker,index) in markers" :key="index" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events"></el-amap-circle-marker> -->
      <!-- <el-amap-info-window
          :position="currentWindow.position"
          :content="currentWindow.content"
          :visible="currentWindow.visible"
          :events="currentWindow.events">
      </el-amap-info-window> -->
      <!-- <el-amap-marker v-for="(marker,index) in markers" :key="index" :position="marker" ></el-amap-marker> -->
    </el-amap>
    <!-- <button @click="switchWindow(0)">Show First Window</button> -->
    <!-- <button @click="switchWindow(1)">Show Second Window</button> -->
     <div class="toolbar">
        position: [{{ lng }}, {{ lat }}] address: {{ address }}
      </div>
    <!-- <div class="toolbar">
      <button @click="getMap()">get map</button>
    </div> -->
     <!-- <div class="toolbar">
        <button type="button" name="button" v-on:click="toggleVisible">toggle first marker</button>
        <button type="button" name="button" v-on:click="changePosition">change position</button>
        <button type="button" name="button" v-on:click="chnageDraggle">change draggle</button>
        <button type="button" name="button" v-on:click="addMarker">add marker</button>
        <button type="button" name="button" v-on:click="removeMarker">remove marker</button>
     </div> -->
  </div>
</template>

<style>
  .amap-page-container{
    height: 500px;
    width: 800px;
    margin:0 auto;
    margin-bottom: 500px;
  }
  .amap-demo {
    height: 500px;
    width: 800px;
  }
  .search-box {
      position: absolute;
      top: 25px;
      left: 20px;
    }
  .amap-page-container {
      position: relative;
    }
</style>

<script>
 const exampleComponents = {
      props: ['text'],
      template: `<div>text from  parent: {{text}}</div>`
    }
  // NPM 方式
  import { AMapManager } from 'vue-amap';
  export default {
    data() {
       let self = this;
      return {
        amapManager:new AMapManager(),

        zoom: 12,
        /**
         *    数据一
         *    报错
         */
        // testData1:new AMap.LngLat(114.360664, 30.528582),
        center: [121.59996, 31.197646],
        address: '',
        groundimages: [
            {
              url: '../assets/images/case_category_pic1.png',
              bounds: [[121.5273285, 31.21515044], [122.9273285, 32.31515044]],
              events: {
                click() {
                  alert('click groundimage');
                }
              }
            }
        ],
        circles: [
            {
              center: [121.5273285, 31.21515044],
              radius: 200,
              fillOpacity: 0.5,
              fillColor:'#ff0000',
              strokeColor:'#ff0000',
              events: {
                click: () => {
                  alert('click');
                }
              }
            }
          ],
        texts: [
            {
              position: [121.5273285, 31.21515044],
              text: 'hello world',
              offset: [0, 0],
              events: {
                click: () => {
                  alert('click text');
                }
              }
            }
          ],
        markers: [
            {
              center: [121.5273285, 31.21515044],
              radius: 20,
              fillOpacity: 1,
              fillColor: 'rgba(0,0,255,1)',
              events: {
                click: () => {
                  alert('click');
                }
              }
            },
            [121.59996, 31.197646],
            [121.40018, 31.197622],
            [121.69991, 31.207649]
        ],
        searchOption: {
            city: '上海',
            citylimit: true
          },
        mapCenter: [121.59996, 31.197646],
        windows: [
            {
              position: [121.5273285, 31.21515044],
              content: 'Hi! I am here!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow1');
                }
              }
            }, 
            {
              position: [121.5375285, 31.21515044],
              content: 'Hi! I am here too!',
              visible: true,
              events: {
                close() {
                  console.log('close infowindow2');
                }
              }
            }
          ],
        slotWindow: {
          position: [121.5163285, 31.21515044]
        },
        currentWindow: {
          position: [0, 0],
          content: '',
          events: {},
          visible: false
        },
        count: 1,
        slotStyle: {
          padding: '2px 8px',
          background: '#eee',
          color: '#333',
          border: '1px solid #aaa'
        },
        // markers: [
        //   {
        //     position: [121.5273285, 31.21515044],
        //     events: {
        //       click: () => {
        //         alert('click marker');
        //       },
        //       dragend: (e) => {
        //         console.log('---event---: dragend')
        //         this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
        //       }
        //     },
        //     visible: true,
        //     draggable: false,
        //     template: '<span>1</span>',
        //   }
        // ],
        renderMarker: {
          position: [121.5273285, 31.21715058],
          contentRender: (h, instance) => {
            // if use jsx you can write in this
            // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
            return h(
              'div',
              {
                style: {background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'},
                on: {
                  click: () => {
                    const position = this.renderMarker.position;
                    this.renderMarker.position = [position[0] + 0.002, position[1] - 0.002];
                  }
                }
              },
              ['marker inner text']
            )
          }
        },
        componentMarker: {
          position: [121.5273285, 31.21315058],
          contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: 'father is here'}}, ['xxxxxxx'])
        },
        slotMarker: {
          position: [121.5073285, 31.21715058]
        },
        events: {
          init: (o) => {
            console.log(o.getCenter());
            console.log(this.$refs.map.$$getInstance());
            o.getCity(result => {
              console.log(result)
            });
            console.log(this);
            /**
             * 数据二
             * 不报错
             */
              // let testData2 =  new AMap.LngLat(114.360664, 30.528582);
            console.log(this);
          },
          'moveend': () => {
          },
          'zoomchange': () => {
          },
          'click': (e) => {
            console.log(e);
            let { lng, lat } = e.lnglat;
              self.lng = lng;
              self.lat = lat;
              // 这里通过高德 SDK 完成。
              var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
              });        
              geocoder.getAddress([lng ,lat], function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.regeocode) {
                    self.address = result.regeocode.formattedAddress;
                    self.$nextTick();
                  }
                }
              });        
            let testData3 =  new AMap.LngLat(114.360664, 30.528582);
          }
        },
        lng: 0,
        lat: 0,
        plugin: ['ToolBar', {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(o) {
              console.log(o);
            }
          }
        }]
      };
    },
    mounted() {
        this.currentWindow = this.windows[0];
      },
    methods: {
      switchWindow(tab) {
          this.currentWindow.visible = false;
          this.$nextTick(() => {
            this.currentWindow = this.windows[tab];
            this.currentWindow.visible = true;
          });
        },
      getMap() {
        // amap vue component
        console.log(this.amapManager._componentMap);
        /**
         * 数据四
         * 不报错
         * @type {toLngLat|a}
         */
        // let testData4 =  new AMap.LngLat(114.360664, 30.528582);
      },
      onClick() {
        this.count += 1;
      },
      changePosition() {
        let position = this.markers[0].position;
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002];
      },
      chnageDraggle() {
        let draggable = this.markers[0].draggable;
        this.markers[0].draggable = !draggable;
      },
      toggleVisible() {
        let visableVar = this.markers[0].visible;
        this.markers[0].visible = !visableVar;
      },
      // addMarker() {
      //   let marker = {
      //     position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
      //   };
      //   this.markers.push(marker);
      // },
      addMarker: function() {
          let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
          let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
          this.markers.push([lng, lat]);
        },
        onSearchResult(pois) {
          let latSum = 0;
          let lngSum = 0;
          if (pois.length > 0) {
            pois.forEach(poi => {
              let {lng, lat} = poi;
              lngSum += lng;
              latSum += lat;
              this.markers.push([poi.lng, poi.lat]);
            });
            let center = {
              lng: lngSum / pois.length,
              lat: latSum / pois.length
            };
            this.mapCenter = [center.lng, center.lat];
          }
        },
      removeMarker() {
        if (!this.markers.length) return;
        this.markers.splice(this.markers.length - 1, 1);
      }
    }
  };
</script>