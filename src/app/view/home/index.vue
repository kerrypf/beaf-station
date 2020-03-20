<template>
<div>
  <div class="page page1">
    <span class="cvHeader">
      <div class="leftTitle">
        <p class="mainTitle">个人简历</p>
        <p>VITAE</p>
      </div>
      <div class="rightContact">
        <p>杨培芳</p>
        <div class="contactBox">
          <div v-for="(item, i) in contactInfo" :key="i">
            <i class="iconfont" :class="[item.icon]"></i>
            <span class="contactDetail">
              <label>{{item.label}}:<br/></label>{{item.value}}
            </span>
          </div>
        </div>
      </div>
      <div class="imageBox">
        <img src="../../assets/images/vator.jpg" >
      </div>
    </span>
    <div class="leftContent">
      <div>
        <p class="moduleTitle">基本信息</p>
        <div class="detailForm">
          <div v-for="(item, i) in basicInfo" :key="i">
            <label>{{item.label}}: </label><span>{{item.value}}</span>
          </div>
        </div>
      </div>
      <div>
        <p class="moduleTitle">求职意向</p>
        <div class="detailForm">
          <div v-for="(item, i) in jobIntension" :key="i">
            <label>{{item.label}}: </label><span>{{item.value}}</span>
          </div>
        </div>
      </div>
      <div>
        <p class="moduleTitle">教育背景</p>
        <div class="detailForm">
          <div v-for="(item, i) in eduBackground" :key="i">
            <label>{{item.label}}: </label><span>{{item.value}}</span>
          </div>
        </div>
      </div>
      <div>
        <p class="moduleTitle">自我评价</p>
        <div class="detailForm">具有较强学习能力，善于专研，做事细致，有耐心，毅力强，有较强的抗压能力；善于沟通，对项目开发有较深的理解；讲求效率，坚持做对的事情。能把事情既快有好的完成。</div>
      </div>
    </div>
    <div class="rightContent">
      <div>
        <p class="moduleTtitle">工作技能</p>
        <div class="moduleContent">
          <span class="subContent">主要从事PC端web页面开发，能够独立架构和开发中小型高质量及可维护的前端项目。深刻理解数据驱动视图，懂得如何将数据与视图分离。追求高质量代码, 不断优化现有技术栈。曾获得过校一等奖学金，湖南省物理竞赛二等奖，校海报比赛二等奖等。</span>
          <div class="mainContent">
            <p v-for="(item, index) in skills" :key="index">{{index+1}}. {{item}}</p>
          </div>
        </div>
      </div>
      <div>
        <p class="moduleTtitle">工作经验</p>
        <div v-for="(item, i) in workExperience" :key="i" class="moduleDetail">
          <label>{{item.name}}<span>{{item.rangTime}}</span></label>
          <div>
            <span>工作描述：</span><span class="post">{{item.post}}</span>
            <div>
              <p v-for="(li, index) in item.des" :key="index">{{index+1}}. {{li}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div  class="page page2">
    <div class="pageContent">
      <p class="moduleTtitle">项目经验</p>
      <div v-for="(item, i) in projectExperience" :key="i">
        <label>{{item.github?'github':''}}项目：{{item.project || item.github}}<span class="addr">{{item.addr}}</span></label>
        <p v-if="item.duty">职责：{{item.duty}}</p>
        <span>技术：</span>
        <div class="techDetail">
          <p v-for="(li, index) in item.tech" :key="index">{{index+1}}. {{li}}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      basicInfo: [{
        label: '姓名',
        value: '杨培芳'
      },{
        label: '性别',
        value: '女'
      },{
        label: '生日',
        value: '1993.01.01'
      },{
        label: '婚姻状况',
        value: '已婚'
      },{
        label: '政治面貌',
        value: '中共党员'
      },{
        label: '工作经验',
        value: '3年'
      }],
      jobIntension: [{
        label: '岗位',
        value: '前端开发工程师'
      },{
        label: '工作地点',
        value: '苏州'
      },{
        label: '期望薪资',
        value: '20k~24k'
      }],
      eduBackground: [{
        label: '学历',
        value: '硕士'
      },{
        label: '毕业院校',
        value: '苏州大学'
      },{
        label: '毕业时间',
        value: '2017.06'
      }],
      contactInfo: [{
        label: '邮箱',
        value: 'kerrypf@foxmail.com',
        icon: 'beaf-youxiang'
      },{
        label: '电话',
        value: '18896727597',
        icon: 'beaf-dianhua'
      },{
        label: '住址',
        value: '苏州虎丘区',
        icon: 'beaf-dizhi'
      }],
      skills: [
        '熟练掌握原生javascript的前端开发，应用 javascript 高级语法（ es6+）逐步减少工具类库的使用',
        'vue开发框架的重度使用者，熟练运用vue、vuex、vue-router等开发web页面',
        '深度使用element-ui开发web页面, 掌握flex、div+css布局响应式页面',
        '熟悉webpack, rollup, gulp前端构建工具的使用',
        '使用 node.js（express）创建 Web 应用;熟练掌握photoshop相关技术，有 一定的设计和审美力'
      ],
      workExperience:[{
        name: '中移（苏州）软件技术有限公司',
        post: '助理软件开发工程师',
        des: [
          '负责5G网管产品故障系统的维护和开发，主要将故障系统告警监控流水窗的重新开发及性能优化',
          '物联网中台项目开发，动态表单组件开发提取，实现高度模块化开发',
          'npm私有仓库建立，公司内部ui组件库架构及公共组件开发',
          '优化项目架构，根据公司代码规范，配置eslint, 代码提交前检测并风格化代码；实现postcss替代less、sass以减少项目依赖'
        ],
        rangTime: '2019.09 ~至今'
      },{
        name: '苏州思必驰信息科技有限公司',
        post: '前端开发工程师',
        des: [
          '作为前端项目开发leader，理解迭代需求，分配任务；在公司内部制定前端编程规范，完善前端框架；制定公司内部分支及版本管理规站',
          '开发PC端单页面应用；负责公司DUI开发者平台系统的开发，主要开发 了产品系统和技能系统',
          '与设计团队、后端开发团队紧密配合，与设计团队共同制定页面样式规范,与后端开发团队商讨api返回数据结构；与运维团队配合，实施前端项目部署',
          'npm私有仓库建立，公司内部ui组件库架构，负责公司内部组件库开发，全局功能开发；封装Axios对请求响应做异常处理和数据处理，及相关业务处理'
        ],
        rangTime: '2017.05 ~2019.08'
      },{
        name: '苏州优圣美智能系统有限公司',
        post: '前端开发工程师',
        des: [
          '按照需求设计独立完成页面；负责公司现有项目和新项目的前端修改调试和开发工作；利用模板引擎handlebars.js开发，实现组件化开发模式',
          '利用D3.js，原生js，及jquery开发公司各种可视化页面，开发自定义图表 （图表可配置），如：树状图，柱状图，折线图，饼图，力导向图，环形图，思维导图等'
        ],
        rangTime: '2016.06 ~2017.04'
      }],
      projectExperience:[{
        project: '5G网管产品',
        duty: '通用ui组件和公共业务组件的开发，故障系统的维护与开发，主要重新开发告警实时监控流水窗，动态表单、动态表格、动态标签页的公共业务组件开发；项目架构的优化',
        tech: [
          'vue-cli创建的多页面应用，基于iview组件开发业务',
          '基于Axios封装公共工具，处理请求响应异常，数据结构处理，请求中断，请求超时',
          'postcss实现less、sass功能，减少项目依赖包',
          '基于element-ui开发通用公共组件和业务组件，逐步替换iview'
        ]
      },{
        project: 'DUI开发者平台',
        addr: 'https://www.dui.ai/console/product/index.html',
        duty: '通用ui组件和公共业务组件的开发，独主完成产品系统和技能系统的开发，主要包括产品版本创建以及版本开发到版本发布等相关业务的页面开发；技能创建以及技能开发到技能发布、上架 、分享等相关业务的页面开发',
        tech:[
          '使用定制化脚手架工具（@aife/aife-scripts）,快速创建应用项目',
          'vue+webpack+vuex+vue-router构建单页面应用',
          '使用element-ui作为项目开发ui组件库, 公司内部业务ui公共通用组件库（@aife/aife-ui）',
          '使用Axios发起请求，基于Axios封装公共工具，处理请求响应异常，数据结构处理，请求中断，请求超时',
          'node搭建前端本地开发服务，利用谷歌插件（Modify Header Value）、配合axios、node服务，实现本地开发代理，同时代理不同环境进行调试'
        ]
      },{
        project: '前端自动化脚手架，ui组件库',
        addr: 'http://10.154.5.152:4873（公司内部服务，外网不可访问）',
        tech: [
          'webpack+webpack-dev-server建前端本地开发服务，实现现脚手架，项目自动集成ui组件，通用工具，达到开箱即用，一步到位的效果',
          '用rollup完成ui组件库打包，集成element并基于element进行二次开发'
        ]
      }]
    }
  }
}
</script>
<style lang="scss">
.page{
  font-size: 14px;
  height: 1120px;
  width: 793px;
  background-color: #c3c3c3;
  padding: 30px 46px;
}
  .page1{
    display: flex;
    // padding: 71.12px 53.48px;
    
    position: relative;
    .cvHeader{
      padding: 5px 20px 15px;
      background-color: #f1f1f1;
      display: flex;
      border: 2px solid #303030;
      width: calc(100% - 105px);
      position: absolute;
      margin-top: 15px;
      border-radius: 2px;
      &::before{
        content: '';
        width: 0;
        height: 0;
        border: 55px solid transparent;
        border-right: 109px solid #303030;
        position: absolute;
        transform: rotate(-61deg);
        left: -74px;
        top: 103px;
      }
      &::after{
        content: '';
        width: 0;
        height: 0;
        border: 85px solid transparent;
        border-right: 160px solid #c3c3c3;
        border-left: 60px solid transparent;
        position: absolute;
        transform: rotate(-61deg);
        left: -92px;
        top: 113px;
      }
      .imageBox{
        position: absolute;
        z-index: 1;
        top: 65px;
        left: 15px;
        >img{
          width: 110px;
          border: 2px solid #303030;
          border-radius: 100%;
        }
      }
      .leftTitle{
        width: 25%;
        text-align: right;
        // line-height:40px;
        .mainTitle{
          font-size:30px;
        }
      }
      .rightContact{
        margin-top: 15px;
        margin-left: 20px;
        width: 100%;
        >p{
          font-size: 24px;
          opacity: 0;
        }
        .contactBox{
          display: flex;
          padding-top: 10px;
          align-items: center;
          border-top: 1px solid #4646468e;
          // padding-right: 80px;
          justify-content: flex-end;
          font-size: 12px;
          >div{
            margin-left:30px;
          }
          i {
            font-size: 20px;
            border-bottom: 1px solid #4646468e;
            padding-bottom: 5px;
          }
          .contactDetail{
            display: inline-block;
            position: relative;
            top: 8px;
          }
        }
      }
    }
    .leftContent{
      padding: 200px 15px 10px 0;
      width: 200px;
      position: relative;
      >div{
        &:not(:first-child){
          border-top: 1px solid #9e9e9e;
          margin-top: 20px;
          padding-top: 20px;
        }
        .detailForm{
          color: #565656;
          line-height: 25px;
          padding-left: 5px;
          >label{
            color: #565656
          }
        }
      }
      .moduleTitle{
        color:#464343;
        font-size: 20px;
        line-height: 40px;
      }
      
    }
    .rightContent{
      width: 100%;
      padding: 0 10px;
      background-color: #f1f1f1;
      padding-top: 140px;
      .moduleTtitle{
        font-size: 18px;
        margin-bottom: 8px;
        margin-top: 15px;
      }
      .moduleDetail{
        &:not(:last-child){
          margin-bottom:10px;
        }
        >label{
          display: inline-block;
          width: 100%;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 10px;
          font-weight: 500;
          color: #333;
          >span{
            float: right;
          }
        }
        >div{
          color: #2a2a2a;
          >span{
            color: #464646;
          }
          .post{
            font-size: 12px;
            float: right;
            position: relative;
            top: -10px;
          }
          >div{
            line-height: 22px;
            padding-left: 5px;
          }
        }
      }
      .moduleContent{
        .subContent{
          color: #464646;
          font-size: 13px;
          line-height: 20px;
        }
        .mainContent{
          color: #2a2a2a;
          line-height: 24px;
          margin-left: 5px;
        }
      }
    }
  }
  .page2 {
    .pageContent{
      background-color: #f1f1f1;
      width: 100%;
      height: 100%;
      padding: 20px 15px;
      >div{
        &:not(:last-child){
          margin-bottom:10px;
        }
        >label{
          display: inline-block;
          width: 100%;
          border-bottom: 1px solid #ccc;
          padding-bottom: 5px;
          margin-bottom: 10px;
          font-weight: 500;
          color: #333;
          >span{
            float: right;
          } 
        }
        >p{
          color: #464646;
          font-size: 13px;
          line-height: 20px;
          margin-bottom: 10px;
        }
      }
      .moduleTtitle{
        font-size: 18px;
        margin-bottom: 8px;
        margin-top: 15px;
      }
      .techDetail{
        margin-left:5px;
        color: #2a2a2a;
        line-height: 24px;
      }
    }
  }
</style>