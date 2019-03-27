


let WxParse = require("../../wxParse/wxParse.js");
const app=getApp();
Page({
data:{

},

onLoad: function (options) {
 
    var that = this;
  //  wx.request({
     // url: Aurl + "?A=" + A,
    //  header: {
        //'content-type': 'application/json' // 默认值
    //  },
     // success: function (res) {
       const fgf='<div class="Artdetails"><div class="Artdetails_main"><h1>\
       行稳致远·未来丨2019美豫集团金樽年会胜利召开</h1><div class="ht">\
      <span id="hits" class="ar">访问量：132</span></div>\
       <div id="art"><span>1月20日，主题为“行稳致远·未来”2019美豫集团金樽年会在上海雅居乐万豪酒店盛大举行。</span><br><br></div>\
       <br><div><span style="font-size: 0.266667rem;">中国民生投资集团董事局总裁吕本献先生、原银国际董事长郝晓晖先生、中欧国际工商学院金融与会计学教授、中坤集团金融学教席教授芮萌先生、上海鼎锋资产管理有限公司总裁李霖君先生、中南置地上海战区及安徽战区总经理罗小华先生、同策房产咨询股份有限公司副总裁赵钢先生、美豫投资集团董事长王东先生、美豫银东合伙人陈雯妮女士、美豫投资集团总裁吴道学先生、美豫投资集团顾问梁英杰先生、美豫投资集团联合创始人徐卫林先生、哇呀合伙人&amp;联合ceo杜康先生、美豫投资集团首席品牌运营官魏攀先生、 美豫投资集团首席人力官郅涛先生、美豫银东营销副总裁何贝娜女士与美豫投资集团200多位同仁齐聚一堂，同时吸引了来自全国各地数百位高净值客户莅临现场倾情参与，共同开启这场年度盛宴。</span><br>\
&nbsp;</div>\
<div style="text-align: center;"><span style="font-size: 0.266667rem;"><strong><span style="font-size: 0.3rem;">行稳致远 赢未来</span></strong></span></div>\
<div>&nbsp;</div>\
<div><span style="font-size: 0.266667rem;">年会伊始，美豫投资集团董事长王东先生上台发表了致辞，王东先生表示，2018年是不平凡的一年，国内国际形势变化多端，在如此波折的时期，美豫未雨绸缪，在2017年初就已预判市场风险，并进行了一系列应对举措，不作无谓的扩张，稳健前行。美豫始终坚持适度紧缩、稳健发展战略。于此同时，美豫一直在融合各位股东和长期战略合作伙伴的优势资源，不断创新进取、力求在细分领域提供最专业的服务，让美豫迸发出强大的能量。</span><br>\
&nbsp;</div>\
<div style="text-align: center;"><span style="font-size: 0.266667rem;"><img alt="" src="../../images/20190122044407119.jpg" style="width: 5.09rem; height: auto;"></span></div>\
<div style="text-align: center;"><span style="color:#696969;"><span style="font-size: 0.2rem;">美豫投资集团董事长王东先生</span></span><br>\
&nbsp;</div>\
<div><span style="font-size: 0.266667rem;">随后中国民生投资集团董事局总裁吕本献先生以及原银国际董事长郝晓晖先生，先后上台发表致辞，预祝美豫在新的一年开创新局面、更上一层楼！</span><br>\
&nbsp;</div>\
<div style="text-align: center;"><span style="color:#696969;"><span style="font-size: 0.2rem;"><img alt="" src="../../images/20190122044423543.jpg" style="width: 5.09rem; height: auto;"><br>\
中国民生投资集团董事局总裁吕本献先生<br>\
<br>\
<img alt="" src="../../images/20190122044438621.jpg" style="width: 5.09rem; height: auto;"></span></span></div>\
       '
        let artilesA=[{content:fgf}];
 
        for(let i =0 ; i< artilesA.length ; i++){
 
          WxParse.wxParse('content'+i, 'html', artilesA[i]['content'], that, 5);
 
          if (i === artilesA.length - 1){
          
                  WxParse.wxParseTemArray("artileList", 'content', artilesA.length, that)
          }
        }   
        that.setData({
 
                  artiles:artilesA
           });
     // }
 
   // })
   
 
  }

})