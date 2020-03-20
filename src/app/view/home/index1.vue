<template>
  <div>
    <div class="banner-container">
      <div class="top-nav">
        <!-- <img src="/logo.png" alt="" />
            <el-menu
              :default-active="activeIndex"
              background-color="transparent"
              class="beaf-el-menu"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item index="1">首页</el-menu-item>
              <el-menu-item index="2">生活服务</el-menu-item>
              <el-menu-item index="3">工作空间</el-menu-item>
            </el-menu>
            <el-button type="text">博客</el-button> -->
      </div>
      <div class="banner-title">
        <h1><span>Coding</span>,<br />Be a front-end</h1>
      </div>
      <div id="particles-js"></div>
    </div>
    <div class="content-section basic-content">
      <h2 class="content-title">基本信息</h2>
      <img src="/images/avatar.png" alt=" " class="img-avatar" />
      <div class="top-contact">
        <a href="https://github.com/kerrypf" target="_blank"
          ><i class="iconfont beaf-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/%E5%9F%B9%E8%8A%B3-%E6%9D%A8-b74328154/"
          target="_blank"
          ><i class="iconfont beaf-linkedin0"></i
        ></a>
        <el-popover placement="bottom" title="微信" width="200" trigger="click">
          <img src="/images/wechat.jpg" alt="" width="100%" />
          <i class="iconfont beaf-wechat" slot="reference"></i>
        </el-popover>
        <el-popover placement="bottom" title="QQ" width="200" trigger="click">
          <img src="/images/qq.jpg" alt="" width="100%" />
          <i class="iconfont beaf-qq" slot="reference"></i>
        </el-popover>
        <!-- <i class="iconfont beaf-wechat"></i>
        <i class="iconfont beaf-qq"></i> -->
      </div>
      <div class="wthree_tab_content">
        <ul class="info">
          <li><span class="title">姓名: </span>杨培芳</li>
          <li><span class="title">性别: </span>女</li>
          <li><span class="title">生日: </span>1993.01.01</li>
          <li><span class="title">政治面貌: </span>中共党员</li>
          <li><span class="title">毕业院校: </span>苏州大学</li>
          <li><span class="title">毕业时间: </span>2017.06</li>
          <li><span class="title">学历: </span>硕士</li>
          <li><span class="title">专业: </span>物理专业</li>
          <li><span class="title">婚姻状况: </span>已婚</li>
          <li><span class="title">联系电话: </span>18351037935</li>
          <li>
            <span class="title">电子邮箱: </span
            ><a href="mailto:kerrypf@foxmail.com">kerrypf@foxmail.com</a>
          </li>
          <li><span class="title">通讯地址: </span>江苏省苏州市苏州工业园区</li>
        </ul>
      </div>
    </div>
    <div class="content-section detail-content">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <h3>对Web充满热情</h3>
          <p class="comments">
            前端开发工程师,
            3年前端开发经验。主要从事PC端web页面开发，能够独立创建中小型web前端应用项目。喜欢逛github，学习优秀开源项目。学习前端前沿技术，优化现有技术栈。开发效率，代码复用性、可读性和可维护性，一直是我在前端开发过程中坚持的原则。注重代码规范，追求代码的高内聚低耦合。
          </p>
          <p class="comments">
            具有较强学习能力，善于专研，做事细致，有耐心，毅力强。曾获得过校一等奖学金，湖南省物理竞赛二等奖，校海报比赛二等奖等。
          </p>
          <ul class="detail-list">
            <li class="points">
              <i class="el-icon-success"></i
              >熟练掌握原生javascript的前端开发，使用 javascript 高级语法
              es6+进行开发，减少使用第三方工具库。熟练运用jquery进行前端开发，掌握数据可视化
              d3.js 图表库、handlerbars.js模板引擎开发，
            </li>
            <li class="points">
              <i class="el-icon-success"></i
              >vue前端开发框架的重度使用者，熟练运用vue、vuex、vue-router等开发web页面。熟练掌握axios工具向后端发起请求，并对请求进行拦截，中断，超时，及响应预处理。了解react，运用react开发过个人微小型项目
            </li>
            <li class="points">
              <i class="el-icon-success"></i>掌握div+css
              布局响应式页面，掌握flexbox弹性盒子模型进行布局
            </li>
            <li class="points">
              <i class="el-icon-success"></i
              >深度使用element-ui开发web页面，了解bootstrap、antd
            </li>
            <li class="points">
              <i class="el-icon-success"></i
              >熟悉gulp,webpack,rollup前端构建工具的使用
            </li>
            <li class="points">
              <i class="el-icon-success"></i
              >了解node.js相关的前端构建知识，会使用node.js(express)创建 Web
              应用
            </li>
            <li class="points">
              <i class="el-icon-success"></i
              >熟练掌握photoshop相关技术，有一定的设计和审美力
            </li>
          </ul>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="barWrapper">
            <p class="progressText">
              Javascript <label>es6</label><label>vue</label><label>react</label
              ><label>jquery</label>
            </p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="90"
            ></el-progress>
          </div>

          <div class="barWrapper">
            <p class="progressText">
              CSS <label>css3</label><label>sass</label><label>less</label>
            </p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="80"
            ></el-progress>
          </div>

          <div class="barWrapper">
            <p class="progressText">
              Html <label>html5</label><label>hbs</label>
            </p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="70"
            ></el-progress>
          </div>
          <div class="barWrapper">
            <p class="progressText">
              Build <label>webpack</label><label>rollup</label
              ><label>gulp</label>
            </p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="85"
            ></el-progress>
          </div>
          <div class="barWrapper">
            <p class="progressText">SVG <label>d3</label></p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="70"
            ></el-progress>
          </div>
          <div class="barWrapper">
            <p class="progressText">NodeJs</p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="60"
            ></el-progress>
          </div>
          <div class="barWrapper">
            <p class="progressText">
              UI DESIGN <label>elment-ui</label><label>bootstrap</label
              ><label>antd</label>
            </p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="50"
            ></el-progress>
          </div>
          <div class="barWrapper">
            <p class="progressText">Photoshop</p>
            <el-progress
              color="#21AEC0"
              :showText="false"
              :stroke-width="12"
              :percentage="80"
            ></el-progress>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content-section experience-content">
      <h2 class="content-title">工作经验</h2>
      <div class="qa-message-list" id="wallmessages">
        <div class="message-item" id="m16">
          <div class="message-inner">
            <div class="message-head clearfix">
              <div class="user-detail">
                <h5 class="handle">苏州思必驰信息科技有限公司</h5>
                <div class="post-meta">
                  <div class="asker-meta">
                    <span class="qa-message-what"></span>
                    <span class="qa-message-when">
                      <span class="qa-message-when-data">2017.05 ~ 至今</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="qa-message-content">
              <div class="qa-message-item">
                <span>工作岗位：</span>
                <div class="qa-info">
                  前端开发工程师
                </div>
              </div>
              <div class="qa-message-item">
                <span>工作描述：</span>
                <div class="qa-info">
                  1.开发PC端单页面应用；负责公司现DUI开发者平台系统的开发；<br />
                  2.制定前端编程规范，完善前端框架；制定公司内部分支及版本管理规范；<br />
                  3.开发前端自动化脚手架，公司内部ui组件库开发的发起人；负责公司内部组件库开发，全局功能开发，开发公共工具库；封装Axios对后端接口做异常处理和数据处理，及相关业务处理；<br />
                  4.建立公司npm私有仓库<br />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="message-item" id="m9">
          <div class="message-inner">
            <div class="message-head clearfix">
              <div class="user-detail">
                <h5 class="handle">苏州优圣美智能系统有限公司</h5>
                <div class="post-meta">
                  <div class="asker-meta">
                    <span class="qa-message-what"></span>
                    <span class="qa-message-when">
                      <span class="qa-message-when-data"
                        >2016.07 ~ 2017.04</span
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="qa-message-content">
              <div class="qa-message-item">
                <span>工作岗位：</span>
                <div class="qa-info">
                  前端开发工程师
                </div>
              </div>
              <div class="qa-message-item">
                <span>工作描述：</span>
                <div class="qa-info">
                  1.
                  按照需求设计独立完成页面；负责公司机器学习系统的前端修改调试和开发工作；<br />
                  2.
                  利用D3.js开发公司各种可视化页面，开发自定义图表（图表可配置），如：树状图，柱状图，折线图，饼图，力导向图，环形图，思维导图等；<br />
                  3. 利用模板引擎handlebars.js开发，实现组件化开发模式<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section project-content">
      <div class="project-mask"></div>
      <h2 class="content-title">项目经验</h2>
      <div class="project-container">
        <div
          class="project-item"
          v-for="(item, i) in projectList"
          :key="i"
          @mouseenter="projectIndex = i"
        >
          <div class="project-item-box" :class="item.label">
            <img src="/images/pro_item.png" alt="" />
            <div class="item-text">
              <h2>
                {{ item.system }} <span>{{ item.name }}</span>
              </h2>
              <p>{{ item.des }}</p>
            </div>
          </div>
          <!-- <div class="item-mask"></div> -->
        </div>
      </div>
      <div class="project-tab">
        <span @click="projectIndex = 0" :class="{ active: projectIndex === 0 }"
          >开发者平台</span
        >
        <span @click="projectIndex = 1" :class="{ active: projectIndex === 1 }"
          >权限系统</span
        >
        <span @click="projectIndex = 2" :class="{ active: projectIndex === 2 }"
          >个人网站</span
        >
        <span @click="projectIndex = 3" :class="{ active: projectIndex === 3 }"
          >工具库</span
        >
        <div class="cover" :style="{ left: getCoverLeft() }">
          <div class="cover-top"></div>
          <div class="cover-bottom">
            <div class="left-cover">
              <div class="cover-up"></div>
              <div class="cover-down"></div>
            </div>
            <div class="right-cover">
              <div class="cover-up"></div>
              <div class="cover-down"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section project-detail">
      <div class="project-detail-content">
        <div
          v-for="(item, i) in projectList[projectIndex].detail"
          :key="i"
          class="project-detail-item"
        >
          <span class="detail-title"
            >{{ item.type }}：<a
              v-if="item.name"
              :href="item.data[1].addr"
              style="color:#fe9300"
              >{{ item.name }}</a
            >
          </span>
          <div class="detail-info">
            <template v-if="item.info">
              <p v-for="(info, i) in item.info.split('\n')" :key="i">
                {{ info }}
              </p>
            </template>
            <a v-else :href="item.addr" class="detail-info">{{ item.addr }}</a>
          </div>
          <template v-if="item.data">
            <div v-for="(d, i) in item.data" :key="i" class="sub-item">
              <span class="detail-title">{{ d.type }}：</span>
              <div class="detail-info">
                <template v-if="d.list">
                  <p v-for="(l, i) in d.list.split('\n')" :key="i">
                    {{ l }}
                  </p>
                </template>
                <a v-else :href="d.addr" class="detail-info">{{ d.addr }}</a>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="footer-nav">
      <div class="copyright">
        <img src="/logo.png" alt="" />
        <p>
          BEAF.LIFE 最后更新于2019年6月10日<br />
          简历模板由 Kerry 设计开发 (使用本模板时请注明)
        </p>
      </div>
      <div class="nav-contact">
        <a href="https://github.com/kerrypf" target="_blank"
          ><i class="iconfont beaf-github"></i
        ></a>
        <a
          href="https://www.linkedin.com/in/%E5%9F%B9%E8%8A%B3-%E6%9D%A8-b74328154/"
          target="_blank"
          ><i class="iconfont beaf-linkedin0"></i
        ></a>
        <el-popover placement="bottom" title="微信" width="200" trigger="click">
          <img src="/images/wechat.jpg" alt="" width="100%" />
          <i class="iconfont beaf-wechat" slot="reference"></i>
        </el-popover>
        <el-popover placement="bottom" title="QQ" width="200" trigger="click">
          <img src="/images/qq.jpg" alt="" width="100%" />
          <i class="iconfont beaf-qq" slot="reference"></i>
        </el-popover>
      </div>
    </div>

    <!-- <div id="userList"> 
      <ul class="contextmenu">
        <li class="enabled">
          <span><a>color1</a></span>
          
        </li>
        <li>
          <span><a>color2</a></span>
          
        </li>
      </ul>
22222
    </div> -->
    <!-- <div class="testbox">
      <span
        >Access-Control-Allow-Origin爱摄房价各方阿尔冯引入鹅服鳄鱼肉Access-Control-Allow-OriginAccess-Control-Allow-OriginAccess-Control-Allow-OriginAccess-Control-Allow-Origin合肥人</span
      >
    </div> -->
    <!-- <el-button @click="getEvent">getqq</el-button>
    <el-button @click="deleteEvent">delete</el-button>
    <el-button @click="postEvent">post</el-button>
    <el-button @click="testStatusCode">test</el-button> -->
  </div>
</template>
<script>
import service from "../../service";
console.log(service.common.get, "service");
import particles from "../../assets/particles.json";
export default {
  data() {
    return {
      activeIndex: "1",
      projectIndex: 0,
      coverLeft: ["95px", "395px", "695px", "995px"],
      projectList: [
        {
          img: "/images/pro_item.png",
          system: "DUI系统",
          name: "开发者平台",
          label: "product",
          des: "DUI开发者平台系统，基于vue开发。全链路开发智能语音交互产品...",
          detail: [
            {
              type: "项目描述",
              info:
                "项目由六人前端开发完成。开发者平台，即全链路智能对话开放平台，用以实现复杂的语音交互功能，如满足用户导航，听音乐，查天气，看电影等方方面面的需求。开发者可以根据适用场景的需求来定制配置不同识别引擎和功能的产品。项目使用vue+webpack构建的单页面应用,采用了vuex、vue-router、element-ui、axios以及ES6+语法，采用组件化思想搭建整个项目，从而使组件高度复用。"
            },
            {
              type: "岗位职责",
              info:
                "公司内部ui组件库的发起人和负责人。主要负责项目架构设计，页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调。主要负责平台的产品与技能的开发，独立完成产品列表，产品版本创建以及版本开发到版本发布等相关业务的页面开发；独立完成技能列表，技能创建以及技能开发到技能发布、上架、分享等相关业务的页面开发。"
            },
            {
              type: "项目架构",
              info: `1.使用vue+webpack构建项目环境，以及vuex、vue-router构建单页面应用；\n 
                  2.使用axios向后台发起请求，基于axios封装处理接口返回异常，数据结构处理，请求中断，请求超时；\n 
                  3.使用element-ui作为项目开发ui组件库，并基于element-ui开发满足公司业务的公共通用组件；\n 
                  4.使用node作为中间件，代理前端静态资源（js,css,image等），处理Token验证； \n 
                  5.使用lodash工具库，实现业务数据的逻辑处理；使用阿里矢量图标库。`
            },
            {
              type: "开发技术",
              info: `1.node搭建前端本地开发服务，利用谷歌插件(Modify Header Value)、配合axios、node服务，实现项目同时代理到多环境，同一项目代理到不同域，提高本地开发效率，本地还原线上环境，快速定位bug等开发模式； \n
                  2.使用Yapi作为后端接口管理，为前端提供mock数据；使用lanhuapp管理和共享文档和设计图，为开发者提供可视化样式数据； \n
                  3.利用vue的directive、mixins、model，实现复杂业务开发；\n
                  4.在开发模式下，开启vuex的严格模式，在不是有mutation函数引起的状态变更，严格规定使用双向绑定的计算属性来变更状态；\n
                  5.利用vue-router的路由钩子函数处理路由变化的相关业务处理；路由完成前获取数据，保证数据请求完成渲染页面。`
            }
          ]
        },
        {
          system: "DUI系统",
          name: "权限管理",
          label: "permission",
          des:
            "DUI平台产品接入系统，基于vue开发。全链路开发智能语音交互产品...",
          detail: [
            {
              type: "项目描述",
              info:
                "项目由我一个人独立完成。该项目是一个权限管理系统，针对DUI开发者平台的用户角色及类型设置权限"
            },
            {
              type: "岗位职责",
              info:
                "主要负责项目架构设计，页面的布局和数据渲染，完成与后端的接口对接，配合后端的对接联调。主要开发了权限系统创建，权限系统列表，开发者类型与角色对应关系，权限设置页面，及权限查询页面。"
            },
            {
              type: "项目架构",
              info: `1.使用vue+webpack构建项目环境，以及vuex、vue-router构建单页面应用；\n 
                  2.使用axios向后台发起请求，基于axios封装处理接口返回异常，数据结构处理，请求中断，请求超时；\n 
                  3.使用element-ui作为项目开发ui组件库，开发公共通用组件；\n 
                  4.使用lodash工具库，实现业务数据的逻辑处理；使用阿里矢量图标库。`
            },
            {
              type: "开发技术",
              info: `1.项目是一个通过命令自动快速生成的项目，是由自己开发的一个自动化脚手架（create-aife-app, 公司前端内部脚手架）完成； \n
                  2.webpack+webpack-dev-server搭建前端本地开发服务； \n
                  3.使用Yapi作为后端接口管理，为前端提供mock数据；\n  
                  4.node搭建前端本地开发服务，利用谷歌插件（Modify Header Value）、配合axios、node服务，实现项目同时代理到多环境，同一项目代理到不同域，提高本地开发效率，本地还原线上环境，快速定位bug等开发模式； \n
                  5.使用lanhuapp管理和共享文档和设计图，为开发者提供可视化样式数据； \n
                  6.利用vue的directive、mixins、model，实现复杂业务开发；\n
                  7.在开发模式下，开启vuex的严格模式，在不是有mutation函数引起的状态变更，严格规定使用双向绑定的计算属性来变更状态；\n
                  8.利用vue-router的路由钩子函数处理路由变化的相关业务处理；路由完成前获取数据，保证数据请求完成渲染页面。`
            }
          ]
        },
        {
          system: "BEAF",
          name: "个人网站",
          label: "product",
          des: "是一个关于个人信息及技术心得分享的网站...",
          detail: [
            {
              type: "项目描述",
              info:
                "本项目是一个关于个人信息及技术心得分享的网站，使用vue+webpack构建的单页面应用，项目采用了vuex、vue-router以及ES6语法，采用组件化思想搭建整个项目。目前只完成了个人首页，其他页面正在开发中。"
            },
            {
              type: "项目架构",
              info: `1.使用vue+webpack构建项目环境，以及vuex、vue-router构建单页面应用；\n 
                  2.引入了自己开发的ui组件库beaf-ui,实行个性化的ui组件；\n 
                  3.使用element-ui作为项目开发ui组件库，开发公共通用组件；\n 
                  4.使用阿里矢量图标库。`
            },
            {
              type: "开发技术",
              info: `1.项目是一个通过命令自动快速生成的项目，是由自己开发的一个自动化脚手架(create-beaf-app)完成
                  2.webpack+webpack-dev-server搭建前端本地开发服务`
            },
            {
              type: "git地址",
              addr: `https://github.com/kerrypf/beaf-station`
            },
            {
              type: "网站地址",
              addr: `https://station.beaf.tech`
            }
          ]
        },
        {
          system: "BEAF",
          name: "工具库",
          label: "product",
          des: "实现前端开发的规范化，模块化，自动化，工程化",
          detail: [
            {
              type: "前端架手架",
              name: "create-beaf-app",
              info:
                "是一个基于CRA库修改的前端脚手架工具库，实现快速创建前端项目的工具，webpack零配置。版本一（create-aife-app）正在被公司内部项目使用。版本二基于版本一进行大版本的升级，从webpack3到webpack4的升级。",
              data: [
                {
                  type: "开发技术",
                  list: `1.webpack+webpack-dev-server搭建前端本地开发服务；\n
                      2.本地服务配合谷歌插件(Modify Header Value)、axios，实现项目同时代理到多环境，同一项目代理到不同域的功能。`
                },
                {
                  type: "git地址",
                  addr: "https://github.com/kerrypf/create-beaf-app"
                }
              ]
            },
            {
              type: "ui组件库",
              name: "beaf-ui",
              info:
                "本项目是一个前端ui组件库，用于开发各类ui组件，提供相应的使用说明文档，实现了组件开发的实时调试",
              data: [
                {
                  type: "开发技术",
                  list: `1.集成了ui组件库使用说明文档，用express+webpack构建文档服务，用于组件开发过程的调试；\n
                      2.集成了element-ui, 可基于element-ui进行组件二次开发；\n
                      3.使用rollup打包组件`
                },
                {
                  type: "git地址",
                  addr: "https://github.com/kerrypf/beaf-ui"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    testStatusCode() {
      service.common.test_status_code.get().then(res => {
        console.log("service.common.");
      });
    },

    deleteEvent() {
      service.common
        .delete(
          "skill_delete",
          {
            skillId: 1231
          },
          {
            body: "ypf"
          }
        )
        .then(res => {
          console.log(res, "delete");
        });
    },
    getEvent() {
      service.common.get("user_info_get").then(res => {
        console.log(res, "get");
      });
    },
    postEvent() {
      service.common
        .post("skill_create", {
          id: 1231
        })
        .then(res => {
          console.log(res, "delete");
        });
    },
    handleSelect() {},
    getCoverLeft() {
      const n = this.projectIndex + 1;
      const e = 1 / 4;
      const m = 1 / 8;

      const left = (n * (1 / 4) - 1 / 8) * 100;
      console.log(left, "nnnnnnnn");
      return left + "%";
    }
  },
  mounted() {
    particlesJS("particles-js", particles, function() {
      console.log("callback - particles.js config loaded");
    });
  }
};
</script>
<style lang="scss" scoped>
.testbox {
  width: 500px;
  position: relative;
  line-height: 1.4em;
  /* 3 times the line-height to show 3 lines */
  height: 4.2em;
  overflow: hidden;
  word-break: break-all;
  &::after {
    content: "...";
    font-weight: bold;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0 20px 1px 45px;
    background-color: #fff;
  }
}
#userList {
  height: 500px;
}
#userList .contextmenu {
  position: sticky;
  top: 50px;
}
#userList .contextmenu li.enabled a {
  color: red;
}
div#userList ul.contextmenu li span a {
  color: blue;
}
.banner-container {
  position: relative;
  // height: 680px;
  background: #2a2e31;
  .top-nav {
    position: relative;
    z-index: 101;
    height: 60px;
    padding: 0 30px;
    > img {
      float: left;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      width: 97.95px;
    }
    .el-button {
      border: 1px solid #fefefe;
      color: #fefefe;
      padding: 10px 20px;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      &:hover {
        transition: background-color 0.3s ease;
        background-color: #fefefe;
        color: #2a2e31;
      }
    }
  }
  .banner-title {
    margin-top: 100px;
    > h1 {
      color: #fefefe;
      font-family: Heroes, Proxima Nova, Helvetica, Roboto, sans-serif;
      // font-size: 4.5rem;
      // line-height: 1.35;
      opacity: 1;
      text-align: center;
      text-shadow: 0 0 40px hsla(0, 0%, 100%, 0.75);
      // line-height: 120px;
      > span {
        // font-size: 6.5rem;
        font-family: Heroes, Proxima Nova, Helvetica, Roboto, sans-serif;
      }
    }
  }
  .beaf-el-menu {
    border-bottom: none;
    display: flex;
    justify-content: center;
    .el-menu-item {
      font-size: 16px;
      font-family: Tahoma, Geneva, Verdana, sans-serif;
      color: hsla(0, 0%, 100%, 0.75);
      cursor: pointer;
      transition: none;
      &:hover {
        color: #fefefe;
        transition: color 0.3s ease;
        background-color: unset !important;
      }
      &.is-active {
        border-bottom: none;
        color: #fefefe;
      }
    }
  }
}
.content-section {
  padding: 30px;
  padding-left: calc(50% - 40%);
  padding-right: calc(50% - 40%);
  .content-title {
    text-align: center;
    margin: 20px 0;
  }
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
