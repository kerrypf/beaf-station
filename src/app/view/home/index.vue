<template>
  <div>
    <div class="banner-container">
      <div class="top-nav">
        <img src="/logo.png" alt="" />
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
        <el-button type="text">博客</el-button>
      </div>
      <div class="banner-title">
        <h1><span>Coding</span>,<br />Be a front-end</h1>
      </div>
      <div id="particles-js"></div>
    </div>
    <div class="content-section basic-content">
      <h2 class="content-title">基本信息</h2>
      <img src="/images/avatar.png" alt=" " class="img-avatar" />
      <div class="wthree_tab_content">
        <ul class="info">
          <li><span class="title">姓名: </span>杨培芳</li>
          <li><span class="title">性别: </span>女</li>
          <li><span class="title">年龄: </span>26</li>
          <li><span class="title">学历: </span>硕士</li>
          <li><span class="title">毕业院校: </span>苏州大学</li>
          <li><span class="title">专业: </span>物理专业</li>
          <li><span class="title">政治面貌: </span>中共党员</li>
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
        <el-col :span="12">
          <h3>对Web充满热情</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
            ipsum gravida tortor orci ipsum gravida tortor. Lorem ipsum dolor
            sit amet, tortor orci ipsum gravida tortor. Lorem ipsum dolor sit
            amet, conseconsectetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur Morbi sagittis, sem quisci
            ipsum gravida tortor orci ipsum gravida tortor.
          </p>
          <ul class="detail-list">
            <li class="points">
              <i class="el-icon-success"></i>Consectetur Morbi sagittis, sem
              quisci ipsum gravida tortor
            </li>
            <li class="points">
              <i class="el-icon-success"></i>Morbi sagittis, sem quis lacinia
              faucibus, orci ipsum gravida
            </li>
            <li class="points">
              <i class="el-icon-success"></i>Lorem ipsum dolor sit amet,
              consectetur Morbi sagittis, sem quisci gravida
            </li>
            <li class="points">
              <i class="el-icon-success"></i>Sagittis, sem quis lacinia
              faucibus, orci ipsum gravida
            </li>
            <li class="points">
              <i class="el-icon-success"></i>Ipsum dolor sit amet, consectetur
              Morbi sagittis, sem quisci
            </li>
          </ul>
        </el-col>
        <el-col :span="12">
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
            <div class="qa-message-content">Yo!</div>
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
              Nice theme . Excellent one .
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section project-content">
      <div class="project-mask"></div>
      <h2 class="content-title">项目经验</h2>
      <div class="project-container">
        <div class="project-item product">
          <div class="item-mask"></div>
          <h2>DUI平台 <span>产品接入</span></h2>
          <p>DUI平台产品接入系统，基于vue开发。全链路开发智能语音交互产品...</p>
        </div>
        <div class="project-item skill">
          <div class="item-mask"></div>
          <h2>DUI平台 <span>技能定制</span></h2>
          <p>
            DUI平台技能定制系统，基于vue开发。技能类似于一个APP，通过语音对话完成一个或者多个特定功能...
          </p>
        </div>
        <div class="project-item permission">
          <div class="item-mask"></div>
          <h2>DUI平台 <span>权限管理</span></h2>
          <p>
            DUI平台权限管理后台系统，基于vue开发。用于管理用户权限，根据平台开发者类型，对不同角色配置相应权限...
          </p>
        </div>
        <div class="project-item product">
          <div class="item-mask"></div>
          <h2>DUI平台 <span>个人项目</span></h2>
          <p>个人网站及ui组件库</p>
        </div>
        <!-- <div class="project-item skill">
                    <div class="item-mask"></div>
                    <h2>DUI平台 <span>技能定制</span></h2>
                    <p>DUI平台产品接入系统，基于vue开发。</p>
                </div>
                <div class="project-item permission">
                    <div class="item-mask"></div>
                    <h2>DUI平台 <span>权限管理后台</span></h2>
                    <p>DUI平台产品接入系统，基于vue开发。</p>
                </div> -->
      </div>
      <div class="project-detail"></div>
    </div>
    <div class="content-section footer-content">
      <div class="footer-detail"></div>
    </div>
    <div class="footer-nav">
      <div class="copyright">
        <img src="/logo.png" alt="" />
        <p>
          BEAF.LIFE 最后更新于2019年2月12日<br />
          简历模板由 Kerry 设计开发 (使用本模板时请注明)
        </p>
      </div>
      <div class="nav-contact">
        <i class="iconfont beaf-github"></i>
        <i class="iconfont beaf-linkedin0"></i>
        <i class="iconfont beaf-wechat"></i>
        <i class="iconfont beaf-qq"></i>
      </div>
    </div>
    <!-- <span @click="getUser">test Axios</span> -->
  </div>
</template>
<script>
import service from "../../service";
import particles from "../../assets/particles.json";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    getUser() {
      service.common.get("user_info_get", {
        id: 1231
      });
    },
    handleSelect() {}
  },
  mounted() {
    console.log(particles);
    particlesJS("particles-js", particles, function() {
      console.log("callback - particles.js config loaded");
    });
  }
};
</script>
<style lang="scss" scoped>
.banner-container {
  position: relative;
  height: 680px;
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
      font-size: 4.5rem;
      line-height: 1.35;
      opacity: 1;
      text-align: center;
      text-shadow: 0 0 40px hsla(0, 0%, 100%, 0.75);
      line-height: 120px;
      > span {
        font-size: 6.5rem;
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
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  .content-title {
    // color:#fff;
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
