(window.webpackJsonp=window.webpackJsonp||[]).push([[1539],{1603:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2196),r=a(2197),b=(a(0),a(2198)),c={slug:"2019-02-28-taro-h5-optimize",title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",author:"Littly",author_url:"https://github.com/Littly",author_image_url:"https://avatars0.githubusercontent.com/u/5780093?s=460&u=f92cbac202f03815a041541ff06397d5d0130232&v=4"},i={permalink:"/taro/blog/2019-02-28-taro-h5-optimize",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2019-02-28-taro-h5-optimize.md",source:"@site/blog/2019-02-28-taro-h5-optimize.md",description:"image",date:"2019-02-28T00:00:00.000Z",tags:[],title:"\u51b3\u6218\u6027\u80fd\u4e4b\u5dc5 - Taro H5 \u8f6c\u6362\u4e0e\u4f18\u5316\u5347\u7ea7",readingTime:2.855,truncated:!0,prevItem:{title:"\u5c0f\u7a0b\u5e8f\u6846\u67b6\u5168\u9762\u6d4b\u8bc4",permalink:"/taro/blog/2019-03-12-mini-program-framework-full-review"},nextItem:{title:"Taro UI 2.0 \u53d1\u5e03\uff1a\u65b0\u589e\u81ea\u5b9a\u4e49\u4e3b\u9898\u529f\u80fd\uff0c\u9002\u914d\u66f4\u591a\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2019-02-25-taro-ui-2.0"}},o=[{value:"\u6548\u679c",id:"\u6548\u679c",children:[]},{value:"\u4f60\u9700\u8981\u505a\u4ec0\u4e48",id:"\u4f60\u9700\u8981\u505a\u4ec0\u4e48",children:[]},{value:"\u539f\u7406",id:"\u539f\u7406",children:[{value:"\u7ad9\u5728\u5de8\u4eba\u7684\u80a9\u8180\u4e0a",id:"\u7ad9\u5728\u5de8\u4eba\u7684\u80a9\u8180\u4e0a",children:[]},{value:"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u6a21\u5757",id:"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u6a21\u5757",children:[]},{value:"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u4ee3\u7801",id:"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u4ee3\u7801",children:[]}]},{value:"Taro \u505a\u4e86\u4ec0\u4e48",id:"taro-\u505a\u4e86\u4ec0\u4e48",children:[{value:"\u7ec4\u4ef6\u7684 ES \u6a21\u5757\u5316",id:"\u7ec4\u4ef6\u7684-es-\u6a21\u5757\u5316",children:[]},{value:"Api \u7684 ES \u6a21\u5757\u5316",id:"api-\u7684-es-\u6a21\u5757\u5316",children:[]}]},{value:"\u6700\u540e",id:"\u6700\u540e",children:[]}],p={rightToc:o};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://img10.360buyimg.com/img/jfs/t1/21860/12/8740/42390/5c790470E1d0bbce9/9f9bb78d01f7564b.png",alt:"image"}))),Object(b.b)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u591a\u7aef\u5f00\u53d1\u6846\u67b6\uff0cTaro \u4ece\u9879\u76ee\u53d1\u8d77\u65f6\u5c31\u5df2\u7ecf\u652f\u6301\u7f16\u8bd1\u5230 H5 \u7aef\u3002\u968f\u7740 Taro \u591a\u7aef\u80fd\u529b\u7684\u4e0d\u65ad\u6210\u719f\uff0c\u6211\u4eec\u5bf9 Taro H5 \u7aef\u5e94\u7528\u7684\u8981\u6c42\u4e5f\u4e0d\u65ad\u63d0\u5347\u3002\u6211\u4eec\u5df2\u7ecf\u4e0d\u518d\u6ee1\u8db3\u4e8e\u201c\u80fd\u8dd1\u201d\uff0c\u66f4\u5e0c\u671b Taro \u80fd\u8dd1\u5f97\u5feb\u3002"),Object(b.b)("p",null,"\u6211\u4eec\u7ecf\u5e38\u6536\u5230\u7528\u6237\u53cd\u9988\uff1a\u4e3a\u4ec0\u4e48\u4f7f\u7528 Taro \u811a\u624b\u67b6\u521b\u5efa\u7684\u7a7a\u9879\u76ee\uff0c\u6253\u5305\u540e\u4ee3\u7801\u4f53\u79ef\u5374\u6709 400KB+\uff1b\u4e5f\u6709\u7528\u6237\u5728 Issue \u4e2d\u63d0\u5230\uff0cTaro \u7684\u90e8\u5206 Api \u5360\u7528\u7a7a\u95f4\u5de8\u5927\uff0c\u4e8b\u5b9e\u4e0a\u529f\u80fd\u5374\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u7b49\u7b49\u3002\u4f5c\u4e3a\u4e00\u4e2a\u5f00\u6e90\u9879\u76ee\uff0c\u6211\u4eec\u975e\u5e38\u91cd\u89c6\u793e\u533a\u5f00\u53d1\u8005\u4eec\u7684\u610f\u89c1\u3002\u6240\u4ee5\u5728\u6700\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u5bf9 Taro H5 \u7aef\u7684\u6027\u80fd\u8868\u73b0\u8fdb\u884c\u4e86\u4f18\u5316\u3002"),Object(b.b)("p",null,"\u4f5c\u4e3a\u8fd0\u884c\u65f6\u7684\u57fa\u7840\uff0c\u6bcf\u4e00\u4e2a Taro \u7684 H5 \u7aef\u5e94\u7528\u90fd\u9700\u8981\u5f15\u5165 @tarojs/components \u548c @tarojs/taro-h5 \u7b49\u57fa\u7840\u4f9d\u8d56\u5305\u3002\u5728\u7f16\u8bd1\u3001\u6253\u5305\u4e4b\u540e\uff0c\u8fd9\u4e9b\u4f9d\u8d56\u5305\u5927\u7ea6\u4f1a\u5728\u9996\u5c4f\u5360\u7528 400KB \u4ee5\u4e0a\u7684\u7a7a\u95f4\u3002\u5982\u679c\u5f00\u53d1\u8005\u8fd8\u4f7f\u7528\u4e86 UI \u5e93\uff0c\u4f8b\u5982 Taro-UI\uff0c\u57fa\u7840\u4f53\u79ef\u8fd8\u4f1a\u66f4\u5927\uff0c\u8fd9\u4e25\u91cd\u9650\u5236\u4e86 Taro H5 \u7aef\u5e94\u7528\u7684\u6027\u80fd\u4f18\u5316\u7a7a\u95f4\u3002"),Object(b.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u5728 H5 \u7aef\u5e94\u7528\u4e2d\u5e76\u4e0d\u4f1a\u4f7f\u7528\u5230\u5168\u90e8\u7684 Taro \u7ec4\u4ef6\u548c Api\u3002\u5c06\u8fd9\u4e9b\u4f9d\u8d56\u5305\u5168\u90e8\u6253\u5305\u8fdb\u5e94\u7528\u662f\u6ca1\u6709\u5fc5\u8981\uff0c\u4e5f\u662f\u4e0d\u5408\u7406\u7684\u3002\u8fdb\u884c\u6b7b\u7801\u5220\u9664\uff08Dead code elimination\uff09\uff0c\u8fdb\u4e00\u6b65\u7f29\u51cf\u4ee3\u7801\u4f53\u79ef\uff0c\u5c31\u662f\u6211\u4eec\u7684\u4f18\u5316\u65b9\u5411\u4e4b\u4e00\u3002"),Object(b.b)("h2",{id:"\u6548\u679c"},"\u6548\u679c"),Object(b.b)("p",null,"\u5728\u4ecb\u7ecd\u5177\u4f53\u7ec6\u8282\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u770b\u4e00\u770b\u4f18\u5316\u7684\u6548\u679c\uff0c\u56e0\u4e3a\u8fd9\u53ef\u80fd\u4f1a\u8ba9\u4f60\u66f4\u6709\u5174\u8da3\u4e86\u89e3\u540e\u9762\u7684\u5185\u5bb9\u3002\u7528\u4e00\u53e5\u8bdd\u6765\u8bf4\uff0c\u6548\u679c\u975e\u5e38\u663e\u8457\u3002"),Object(b.b)("p",null,"\u6211\u4eec\u5efa\u7acb\u4e86\u4e00\u4e2a\u7a7a\u9879\u76ee\uff0c\u5728\u9879\u76ee\u914d\u7f6e\u4e2d\u52a0\u5165\u4e86",Object(b.b)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer"),"\u63d2\u4ef6\u4ee5\u67e5\u770b\u7f16\u8bd1\u5206\u6790\u3002\u4e0b\u56fe\u662f\u4f18\u5316\u524d\u7684\u6253\u5305\u6587\u4ef6\u5206\u6790\u7ed3\u679c\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://img11.360buyimg.com/img/jfs/t1/19501/21/8687/76054/5c77fb63E5d040dc5/12bcea35b5b780fb.png",alt:"before"}))),Object(b.b)("p",null,"\u800c\u5728\u4f18\u5316\u540e\uff0c\u5bf9\u6bd4\u975e\u5e38\u660e\u663e\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://img12.360buyimg.com/img/jfs/t1/24494/22/8574/92373/5c77fb63E4402b50f/2312218a7dccedf7.png",alt:"after"}))),Object(b.b)("p",null,"\u4f18\u5316\u524d\u751f\u6210\u7684\u4ee3\u7801\u603b\u5927\u5c0f\u4e3a 455KB\uff0c\u800c\u5728\u4f18\u5316\u540e\u4ec5\u5269\u7ea6 96KB\uff0c\u4ec5\u662f\u539f\u6765\u7684 1/5 \u5de6\u53f3\u3002"),Object(b.b)("h2",{id:"\u4f60\u9700\u8981\u505a\u4ec0\u4e48"},"\u4f60\u9700\u8981\u505a\u4ec0\u4e48"),Object(b.b)("p",null,"\u5f88\u7b80\u5355\uff0c\u4f5c\u4e3a\u4f7f\u7528\u8005\uff0c\u4f60\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u4ee3\u7801\u4e0a\u7684\u6539\u52a8\uff0c\u53ea\u9700\u8981\u5c06 Taro \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u5373\u53ef\u3002\u4f46\u5728\u770b\u4e0d\u89c1\u7684\u5730\u65b9\uff0cTaro \u5374\u9ed8\u9ed8\u5730\u505a\u4e86\u8bb8\u591a\u5de5\u4f5c\u3002\u4e0b\u9762\u4f1a\u4ece\u539f\u7406\u51fa\u53d1\uff0c\u8be6\u7ec6\u4ecb\u7ecd Taro \u7684\u5de5\u4f5c\u3002"),Object(b.b)("h2",{id:"\u539f\u7406"},"\u539f\u7406"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Dead_code_elimination"}),"\u6b7b\u7801\u5220\u9664\uff08Dead code elimination\uff09"),"\u662f\u4e00\u79cd\u4ee3\u7801\u4f18\u5316\u6280\u672f\uff0c\u53ef\u4ee5\u5220\u9664\u5bf9\u5e94\u7528\u7a0b\u5e8f\u6267\u884c\u7ed3\u679c\u6ca1\u6709\u5f71\u54cd\u7684\u4ee3\u7801\u3002Web Fundamentals \u7684\u4e00\u7bc7\u6587\u7ae0\u6709\u63d0\u5230\uff0ctreeshaking \u662f\u7531 Rollup \u63d0\u51fa\u7684\u4e00\u79cd\u6b7b\u7801\u5220\u9664\u7684\u5f62\u5f0f\u3002"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Tree shaking is a form of dead code elimination. The term was popularized by Rollup, but the concept of dead code elimination has existed for some time. "),Object(b.b)("p",{parentName:"blockquote"},"-- ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/"}),"Reduce JavaScript Payloads with Tree Shaking"),", Jeremy Wagner")),Object(b.b)("p",null,"\u901a\u8fc7\u5728\u6784\u5efa\u65f6\u8fdb\u884c\u9759\u6001\u5206\u6790\uff0c\u7f16\u8bd1\u5de5\u5177\u53ef\u4ee5\u5206\u6790\u51fa\u6211\u4eec\u4ee3\u7801\u4e2d\u771f\u6b63\u7684\u4f9d\u8d56\u5173\u7cfb\u3002treeshaking \u628a\u6211\u4eec\u7684\u4ee3\u7801\u60f3\u8c61\u6210\u4e00\u68f5\u6811\uff0c\u4ee3\u7801\u7684\u6bcf\u4e2a\u4f9d\u8d56\u9879\u770b\u4f5c\u6811\u4e0a\u7684\u8282\u70b9\u3002\u5c06\u672a\u4f7f\u7528\u8fc7\u7684\u4f9d\u8d56\u9879\u4ece\u6784\u5efa\u7ed3\u679c\u4e2d\u79fb\u9664\uff0c\u8fd9\u5c31\u662f treeshaking \u7684\u57fa\u672c\u601d\u60f3\u3002"),Object(b.b)("p",null,"\u90a3\u4e48\uff0c\u5047\u8bbe\u6211\u4eec\u624b\u5934\u6709\u4e00\u6bb5\u4ee3\u7801\uff0c\u6211\u4eec\u8981\u600e\u6837\u8fa8\u522b\u5176\u4e2d\u53ef\u4ee5\u5220\u9664\u7684\u90e8\u5206\u5462\uff1f\u7b54\u6848\u662f\uff0c\u901a\u8fc7\u5206\u6790\u526f\u4f5c\u7528\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// add.js\nexport default function add\uff08a, b\uff09{ return a + b; }\n\n// add2.js\nconsole.log('\u8fd9\u662f\u4e00\u4e2alog')\nexport default function add2\uff08a, b\uff09{ return a + b; }\n\n// index.js\nimport add from './add.js' // \u6ca1\u6709\u526f\u4f5c\u7528\uff0c\u53ef\u4ee5\u5220\u9664\nimport add2 from './add2.js' // \u6709\u526f\u4f5c\u7528\uff0c\u4e0d\u80fd\u76f4\u63a5\u5220\u9664\n\n// EOF\n")),Object(b.b)("p",null,"\u526f\u4f5c\u7528\u8fd9\u4e2a\u540d\u8bcd\u5bf9\u4e8e\u4e86\u89e3\u51fd\u6570\u5f0f\u7f16\u7a0b\u7684\u540c\u5b66\u80af\u5b9a\u4e0d\u964c\u751f\u3002\u4fee\u6539\u5916\u90e8\u72b6\u6001\uff0c\u6216\u8005\u662f\u4ea7\u751f\u8f93\u51fa\u7b49\u7b49\uff0c\u90fd\u662f\u526f\u4f5c\u7528\uff1b\u800c\u5b58\u5728\u526f\u4f5c\u7528\u7684\u4ee3\u7801\uff0c\u662f\u4e0d\u80fd\u88ab\u76f4\u63a5\u79fb\u9664\u7684\u3002\u7c7b\u4f3c\u4e0a\u9762\u8fd9\u4e2a\u4ee3\u7801\u793a\u610f\uff0cadd2 \u6a21\u5757\u5c31\u662f\u5b58\u5728\u526f\u4f5c\u7528\u7684\u3002"),Object(b.b)("h3",{id:"\u7ad9\u5728\u5de8\u4eba\u7684\u80a9\u8180\u4e0a"},"\u7ad9\u5728\u5de8\u4eba\u7684\u80a9\u8180\u4e0a"),Object(b.b)("p",null,"\u9664\u4e86 Rollup \u4e4b\u5916\uff0c\u652f\u6301 treeshaking \u7684\u5de5\u5177/\u63d2\u4ef6\u8fd8\u6709\u5f88\u591a\uff0c\u6bd4\u5982 babel-plugin-transform-dead-code-elimination\u3001uglify\u3001terser\u7b49\u3002 webpack \u5728 v2 \u4e4b\u540e\u5c31\u5185\u7f6e\u4e86\u5bf9 treeshaking \u7684\u652f\u6301\uff0c\u5e76\u5728 webpack@4 \u4e2d\u5bf9 treeshaking \u529f\u80fd\u8fdb\u884c\u4e86\u6269\u5c55\u3002"),Object(b.b)("p",null,"Taro H5 \u7aef\u5728\u6784\u5efa\u8fc7\u7a0b\u4e2d\uff0c\u4f7f\u7528 webpack \u4f5c\u4e3a\u6784\u5efa\u7684\u6838\u5fc3\u3002\u5728 webpack \u4e2d\u4f7f\u7528 treeshaking \u529f\u80fd\u6709\u51e0\u4e2a\u9700\u8981\u6ce8\u610f\u7684\u5730\u65b9\uff1a"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\u5982\u679c\u662f npm \u6a21\u5757\uff0c\u9700\u8981",Object(b.b)("inlineCode",{parentName:"li"},"package.json"),"\u4e2d\u5b58\u5728",Object(b.b)("inlineCode",{parentName:"li"},"sideEffects"),"\u5b57\u6bb5\uff0c\u5e76\u4e14\u51c6\u786e\u914d\u7f6e\u4e86\u5b58\u5728\u526f\u4f5c\u7528\u7684\u6e90\u4ee3\u7801\u3002"),Object(b.b)("li",{parentName:"ol"},"\u5fc5\u987b\u4f7f\u7528 ES6 \u6a21\u5757\u8bed\u6cd5\u3002\u7531\u4e8e\u8bf8\u5982",Object(b.b)("inlineCode",{parentName:"li"},"babel-preset-env"),"\u4e4b\u7c7b\u7684 babel \u9884\u914d\u7f6e\u5305\u9ed8\u8ba4\u4f1a\u5bf9\u4ee3\u7801\u7684\u6a21\u5757\u673a\u5236\u8fdb\u884c\u6539\u5199\uff0c\u8fd8\u9700\u8981\u5c06",Object(b.b)("inlineCode",{parentName:"li"},"modules"),"\u8bbe\u7f6e\u4e3a",Object(b.b)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5c06\u6a21\u5757\u89e3\u6790\u7684\u5de5\u4f5c\u76f4\u63a5\u4ea4\u7ed9 webpack\u3002"),Object(b.b)("li",{parentName:"ol"},"\u9700\u8981\u5de5\u4f5c\u5728 webpack \u7684",Object(b.b)("inlineCode",{parentName:"li"},"production"),"\u6a21\u5f0f\u4e0b\u3002")),Object(b.b)("p",null,"webpack \u7684 treeshaking \u5de5\u4f5c\u4e3b\u8981\u5206\u4e3a\u4e24\u6b65\u3002\u7b2c\u4e00\u6b65\u662f\u5728\u6a21\u5757\u7ea7\u522b\u79fb\u9664\u672a\u4f7f\u7528\u4e14\u65e0\u526f\u4f5c\u7528\u7684\u6a21\u5757\uff0c\u8fd9\u4e00\u6b65\u7531 webpack \u7684\u5185\u7f6e\u63d2\u4ef6\u5b8c\u6210\uff1b\u7b2c\u4e8c\u6b65\u662f\u5728\u6587\u4ef6\u7ea7\u522b\u79fb\u9664\u672a\u4f7f\u7528\u7684\u4ee3\u7801\uff0c\u8fd9\u4e00\u6b65\u7531\u4ee3\u7801\u538b\u7f29\u5de5\u5177 Terser \u5b8c\u6210\u7684\u3002"),Object(b.b)("h3",{id:"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u6a21\u5757"},"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u6a21\u5757"),Object(b.b)("p",null,"\u524d\u9762\u6211\u4eec\u63d0\u5230\uff0c\u9700\u8981\u5728",Object(b.b)("inlineCode",{parentName:"p"},"package.json"),"\u4e2d\u914d\u7f6e",Object(b.b)("inlineCode",{parentName:"p"},"sideEffects"),"\u5b57\u6bb5\u3002"),Object(b.b)("p",null,"\u5728 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free"}),"webpack \u6587\u6863")," \u4e2d\u6709\u63d0\u5230\uff0c\u8fd9\u4e00\u4e3e\u52a8\u6b63\u662f\u4e3a\u4e86\u8ba9 webpack \u6b63\u786e\u5730\u8bc6\u522b\u5230\u6ca1\u6709\u526f\u4f5c\u7528\u7684\u4ee3\u7801\u6a21\u5757\u3002"),Object(b.b)("p",null,"\u5728 webpack \u4e2d\uff0c\u6a21\u5757\u4f9d\u8d56\u5206\u6790\u662f\u7531\u5185\u7f6e\u63d2\u4ef6 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://sourcegraph.com/github.com/webpack/webpack/-/blob/lib/optimize/SideEffectsFlagPlugin.js"}),"SideEffectsFlagPlugin")," \u8fdb\u884c\u7684\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/14100/24/8582/236551/5c77fbb1Ef1ec35cc/751d4324349728b8.png",alt:"image-20190225220418363"}))),Object(b.b)("p",null,"\u7ecf\u8fc7 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://sourcegraph.com/github.com/webpack/webpack/-/blob/lib/optimize/SideEffectsFlagPlugin.js"}),"SideEffectsFlagPlugin"),"\u5904\u7406\u540e\uff0c\u6ca1\u6709\u4f7f\u7528\u8fc7\u5e76\u4e14\u6ca1\u6709\u526f\u4f5c\u7528\u7684\u6a21\u5757\u90fd\u4f1a\u88ab\u6253\u4e0a",Object(b.b)("inlineCode",{parentName:"p"},"sideEffectFree"),"\u6807\u8bb0\u3002"),Object(b.b)("p",null,"\u5728 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://sourcegraph.com/github.com/webpack/webpack/-/blob/lib/optimize/ModuleConcatenationPlugin.js"}),"ModuleConcatenationPlugin")," \u4e2d\uff0c\u5e26\u7740",Object(b.b)("inlineCode",{parentName:"p"},"sideEffectFree"),"\u6807\u8bb0\u7684\u6a21\u5757\u5c06\u4e0d\u4f1a\u88ab\u6253\u5305\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/16074/5/8686/211783/5c77fbacE50bc5fe1/681ba09abcf55c11.png",alt:"image-20190222111301698"}))),Object(b.b)("p",null,"\u6765\u5230\u8fd9\u91cc\uff0cwebpack \u5b8c\u6210\u4e86\u5728\u6a21\u5757\u7ea7\u522b\u5bf9\u672a\u4f7f\u7528\u6a21\u5757\u7684\u6392\u9664\u3002\u63a5\u4e0b\u6765\uff0c\u4f9d\u9760 Terser\uff0cwebpack \u53ef\u4ee5\u5728\u6587\u4ef6\u7ea7\u522b\uff0c\u5bf9\u672a\u4f7f\u7528\u3001\u65e0\u526f\u4f5c\u7528\u7684\u4ee3\u7801\u8fdb\u884c\u79fb\u9664\u3002"),Object(b.b)("h3",{id:"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u4ee3\u7801"},"\u79fb\u9664\u672a\u4f7f\u7528\u7684\u4ee3\u7801"),Object(b.b)("p",null,"\u5728 CommonJS \u89c4\u8303\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"require"),"\u51fd\u6570\u6765\u5f15\u5165\u6a21\u5757\uff0c\u901a\u8fc7",Object(b.b)("inlineCode",{parentName:"p"},"module.exports"),"\u8fdb\u884c\u5bfc\u51fa\u3002\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u7684\u4efb\u4f55\u5730\u65b9\u7528\u4efb\u4f55\u65b9\u5f0f\u5f15\u5165\u548c\u5bfc\u51fa\u6a21\u5757\uff1a\u53ef\u4ee5\u662f\u5728\u67d0\u4e2a\u9700\u8981\u7b49\u5f85\u7528\u6237\u8f93\u5165\u7684\u56de\u8c03\u51fd\u6570\u4e2d\uff0c\u6216\u8005\u662f\u5728\u7b26\u5408\u67d0\u4e2a\u6761\u4ef6\u624d\u8fdb\u884c\u5f15\u5165\u7b49\u7b49\u3002\u6240\u4ee5\u5728\u4f7f\u7528 ES6 \u7684\u6a21\u5757\u7cfb\u7edf\u4e4b\u524d\uff0c\u5bf9 Javascript \u505a\u7f16\u8bd1\u65f6\u7684\u4f9d\u8d56\u5173\u7cfb\u5206\u6790\u662f\u8fd1\u4e4e\u4e0d\u53ef\u80fd\u7684\uff08\u5e76\u4e0d\u662f\u5b8c\u5168\u4e0d\u53ef\u80fd\u3002prepack \u901a\u8fc7\u5b9e\u73b0\u4e00\u4e2a JS \u89e3\u91ca\u5668\uff0c\u751a\u81f3\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u63d0\u524d\u8fdb\u884c\u9759\u6001\u8ba1\u7b97\uff09\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// utils.js\nmodule.exports.add = function (a, b) { return a + b };\nmodule.exports.minus = function (a, b) { return a - b };\n\n// index.js;\nvar utils = require('./utils.js');\n\nutils.add(1, 2);\n")),Object(b.b)("p",null,"\u50cf\u4e0a\u9762\u8fd9\u6bb5\u4ee3\u7801\uff0c\u867d\u7136\u6211\u4eec\u6700\u7ec8\u53ea\u4f7f\u7528\u4e86",Object(b.b)("inlineCode",{parentName:"p"},"add"),"\u51fd\u6570\uff0c\u4f46",Object(b.b)("inlineCode",{parentName:"p"},"minus"),"\u51fd\u6570\u4e5f\u4f1a\u5728\u6700\u7ec8\u7684\u6253\u5305\u4ee3\u7801\u4e2d\u51fa\u73b0\uff0c\u56e0\u4e3a\u5728\u7f16\u8bd1\u65f6\u65e0\u6cd5\u5feb\u901f\u5f97\u77e5\u662f\u5426\u4f7f\u7528\u4e86",Object(b.b)("inlineCode",{parentName:"p"},"minus"),"\u51fd\u6570\u3002"),Object(b.b)("p",null,"\u5728 ES6 \u7684\u6a21\u5757\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"import"),"/",Object(b.b)("inlineCode",{parentName:"p"},"export"),"\u8bed\u6cd5\u6765\u8fdb\u884c\u6a21\u5757\u7684\u5f15\u5165\u548c\u5bfc\u51fa\u3002\u4e0e CommonJS \u89c4\u8303\u4e0d\u540c\u7684\u662f\uff0c\u8fd9\u5957\u65b0\u7684\u6a21\u5757\u7cfb\u7edf\u5b58\u5728\u4e00\u4e9b\u9650\u5236\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"import"),"/",Object(b.b)("inlineCode",{parentName:"p"},"export"),"\u884c\u4e3a\u53ea\u80fd\u5728\u4ee3\u7801\u7684\u9876\u5c42\u3001\u9ed8\u8ba4\u4f7f\u7528\u4e25\u683c\u6a21\u5f0f\u7b49\u7b49\u3002\u8fd9\u4e9b\u9650\u5236\u4f7f\u4ee3\u7801\u6a21\u5757\u7684\u5bfc\u5165\u4e0e\u5bfc\u51fa\u53d8\u5f97\u9759\u6001\u5316\uff0c\u6a21\u5757\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u5728\u5f00\u53d1\u65f6\u5df2\u7ecf\u786e\u5b9a\uff0c\u7f16\u8bd1\u5668\u4e5f\u66f4\u5bb9\u6613\u89e3\u6790\u6211\u4eec\u7684\u4ee3\u7801\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// utils.js\nexport function add (a, b) { return a + b };\nexport function minus (a, b) { return a - b };\n\n// index.js;\nimport { add } from './utils.js';\nadd(1, 2);\n")),Object(b.b)("p",null,"\u5728\u4f7f\u7528 ES6 \u6a21\u5757\u7cfb\u7edf\u6539\u9020\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u5230\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"minus"),"\u51fd\u6570\u786e\u5b9e\u6ca1\u6709\u88ab\u4f7f\u7528\u8fc7\uff0c\u6240\u4ee5\u53ef\u4ee5\u5b89\u5168\u5730\u5c06\u5176\u4ece\u6700\u7ec8\u6253\u5305\u4ee3\u7801\u4e2d\u79fb\u9664\u3002"),Object(b.b)("p",null,"\u5f53\u7136\uff0c\u5177\u4f53\u7684\u5206\u6790\u8fc7\u7a0b\u975e\u5e38\u590d\u6742\u3002\u53d8\u91cf\u63d0\u5347\u3001object \u53d6\u503c\u64cd\u4f5c\u3001",Object(b.b)("inlineCode",{parentName:"p"},"for(var i in list)")," \u8bed\u53e5\u3001\u81ea\u6267\u884c\u51fd\u6570\u3001\u51fd\u6570\u4f20\u53c2\uff08",Object(b.b)("inlineCode",{parentName:"p"},"onClick(function a () {\u2026})"),"\uff09\u7b49\u7b49\uff0c\u90fd\u6709\u53ef\u80fd\u5bfc\u81f4\u610f\u6599\u4e4b\u5916\u7684\u60c5\u51b5\uff0c\u4ece\u800c\u5bfc\u81f4 treeshaking \u5931\u6548\u3002\u5982\u679c\u60f3\u4e86\u89e3 Terser \u7684\u5177\u4f53\u5904\u7406\u8fc7\u7a0b\uff0c\u767e\u5ea6/Google \u4f1a\u662f\u6700\u597d\u7684\u8001\u5e08\u3002"),Object(b.b)("h2",{id:"taro-\u505a\u4e86\u4ec0\u4e48"},"Taro \u505a\u4e86\u4ec0\u4e48"),Object(b.b)("p",null,"Taro \u9700\u8981\u5bf9\u4f9d\u8d56\u5305\u505a\u4e00\u4e9b\u4fee\u6539\u3002"),Object(b.b)("h3",{id:"\u7ec4\u4ef6\u7684-es-\u6a21\u5757\u5316"},"\u7ec4\u4ef6\u7684 ES \u6a21\u5757\u5316"),Object(b.b)("p",null,"\u5728\u8fdb\u884c\u7ec4\u4ef6\u5e93\u7684 ES \u6a21\u5757\u5316\u6539\u9020\u4e4b\u524d\uff0c\u5982\u679c\u8981\u53d1\u5e03 @tarojs/components \u5305\uff0cTaro \u4f1a\u6267\u884c\u547d\u4ee4 ",Object(b.b)("inlineCode",{parentName:"p"},"yarn build"),"\uff0c\u4f7f\u7528 webpack \u5bf9\u6e90\u4ee3\u7801\u8fdb\u884c\u6253\u5305\uff0c\u8f93\u51fa\u4e3a",Object(b.b)("inlineCode",{parentName:"p"},"dist/index.js"),"\u6587\u4ef6\u3002\u7531\u4e8e webpack \u5e76\u4e0d\u652f\u6301\u8f93\u51fa\u4e3a ES \u6a21\u5757\uff0c\u6240\u4ee5\u8fd9\u662f\u4e2a UMD \u6a21\u5757\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/22354/16/8646/21917/5c77fbacEdee5c349/e6af50961d434f09.png",alt:"image-20190225154632128"}))),Object(b.b)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u5360\u636e\u4e86 462KB \u7684\u7a7a\u95f4\uff0c\u5e76\u4e14\u7531\u4e8e\u6a21\u5757\u89c4\u8303\u7b49\u95ee\u9898\uff0c\u65e0\u6cd5\u8fdb\u884c treeshaking\u3002\u6240\u4ee5\u5c31\u7b97\u5f00\u53d1\u8005\u5728 Taro \u7684\u9879\u76ee\u4e2d\u53ea\u5f15\u5165\u4e86\u4e24\u4e2a\u7ec4\u4ef6\uff0c\u6700\u7ec8\u7684\u6253\u5305\u7ed3\u679c\u4e5f\u4f1a\u5305\u542b\u6240\u6709\u7684\u5185\u7f6e\u7ec4\u4ef6\u3002"),Object(b.b)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c@tarojs/components \u7684\u6e90\u7801\u672c\u8eab\u662f\u4f7f\u7528 ESM \u89c4\u8303\u7684\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/14453/5/8776/198331/5c77fbacE24aec263/74ceb998fe9f5059.png",alt:"image-20190225160508956"}))),Object(b.b)("p",null,"\u6240\u4ee5\u53ea\u8981\u8ba9 webpack \u76f4\u63a5\u89e3\u6790\u7ec4\u4ef6\u5e93\u7684\u6e90\u7801\uff0c\u6211\u4eec\u7acb\u5373\u5c31\u53ef\u4ee5\u4eab\u53d7\u5230 webpack \u81ea\u5e26 treeshaking \u5e26\u6765\u7684\u597d\u5904\u4e86\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/21781/18/8661/46118/5c77fbacE28c35efd/ba6ed6939fa041ba.png",alt:"image-20190225162018328"}))),Object(b.b)("p",null,"\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u5728",Object(b.b)("inlineCode",{parentName:"p"},"sideEffects"),"\u5c5e\u6027\u4e2d\u5bf9\u6837\u5f0f\u6587\u4ef6\u505a\u4e86\u6807\u8bb0\uff0c\u5e2e\u52a9 webpack \u5bf9\u6837\u5f0f\u4ee3\u7801\u7684\u526f\u4f5c\u7528\u8fdb\u884c\u8bc6\u522b\uff0c\u5728\u9879\u76ee\u7f16\u8bd1\u7684\u4ee3\u7801\u4e2d\u4fdd\u7559\u6837\u5f0f\u4ee3\u7801\u3002"),Object(b.b)("h3",{id:"api-\u7684-es-\u6a21\u5757\u5316"},"Api \u7684 ES \u6a21\u5757\u5316"),Object(b.b)("p",null,"\u540c\u6837\uff0c\u4ee5\u524d\u5728\u53d1\u5e03 @tarojs/taro-h5 \u4e4b\u524d\uff0cTaro \u4e5f\u9700\u8981\u6267\u884c\u547d\u4ee4 ",Object(b.b)("inlineCode",{parentName:"p"},"yarn build"),"\uff0c\u4f7f\u7528 Rollup \u5bf9\u6e90\u4ee3\u7801\u8fdb\u884c\u6253\u5305\uff0c\u8f93\u51fa\u4e3a",Object(b.b)("inlineCode",{parentName:"p"},"dist/index.js"),"\u6587\u4ef6\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/29124/32/8757/41440/5c77fbacEa1b2206c/fba8b10d73136327.png",alt:"image-20190225162654885"}))),Object(b.b)("p",null,"\u8fd9\u4e2a\u6587\u4ef6\u5360\u636e\u4e86 262KB \u7684\u7a7a\u95f4\u3002\u540c\u6837\uff0c\u53ea\u8981\u662f\u4e2a Taro \u7684 H5 \u7aef\u5e94\u7528\uff0c\u751f\u6210\u7684\u4ee3\u7801\u90fd\u4f1a\u5168\u91cf\u5f15\u5165\u8fd9\u4e2a\u6587\u4ef6\u3002"),Object(b.b)("p",null,"\u6211\u4eec\u5bf9 @tarojs/taro-h5 \u8fdb\u884c\u6a21\u5757\u5316\u6539\u9020\u7684\u601d\u8def\u4e0e @tarojs/components \u76f8\u540c\u3002\u6211\u4eec\u5e0c\u671b @tarojs/taro-h5 \u6a21\u5757\u672c\u8eab\u9075\u5b88 ESM \u6a21\u5757\u89c4\u8303\uff0c\u90a3\u5c31\u53ea\u9700\u8981\u6807\u8bb0\u4e00\u4e0b",Object(b.b)("inlineCode",{parentName:"p"},"sideEffects"),"\uff0c\u518d\u4fee\u6539\u4e00\u4e0b\u6a21\u5757\u5165\u53e3\u5c31\u597d\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/16633/12/8583/53807/5c77fbacE239aa77a/0d515de24217f5b5.png",alt:"image-20190225165957461"}))),Object(b.b)("p",null,"\u7c97\u7565\u4e00\u770b\uff0c@tarojs/taro-h5 \u8fd8\u633a \u201cESM\u201d \u7684\uff0c\u4f46\u8fd9\u8fd8\u4e0d\u591f\u3002\u6211\u4eec\u8fd8\u9700\u8981\u5c06\u8fd9\u4e9b Api \u4ee5 namedExports \u7684\u5f62\u5f0f\u5bfc\u51fa\uff0c\u5f00\u53d1\u8005\u4f7f\u7528",Object(b.b)("inlineCode",{parentName:"p"},"import { XXX } from '@tarojs/taro-h5'"),"\u5bfc\u5165 Api \u5373\u53ef\u3002"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/14351/23/8588/28303/5c77fbacEf0ec647b/0b8652e5a5bb49a7.png",alt:"image-20190225172609369"}))),Object(b.b)("p",null,"\u90a3\u4e48\u95ee\u9898\u6765\u4e86\u3002\u5728 Taro \u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u4e00\u76f4\u4f7f\u7528\u7684\u662f defaultImport\uff0c\u5e76\u4e0d\u4f1a\u4f7f\u7528 Api \u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"namedExports")," \u5f62\u5f0f\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"import Taro from '@tarojs/taro-h5'\n\nTaro.navigateTo()\nTaro.getSystemInfo()\n// Taro.xxx ...\n")),Object(b.b)("p",null,"\u53ea\u8981 Api \u662f\u901a\u8fc7\u5bf9",Object(b.b)("inlineCode",{parentName:"p"},"Taro"),"\u53d8\u91cf\u53d6\u5c5e\u6027\u83b7\u53d6\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"Taro"),"\u53d8\u91cf\u5c31\u9700\u8981\u5177\u5907\u6240\u6709\u7684 Api\uff0ctreeshaking \u4e5f\u5c31\u65e0\u4ece\u8c08\u8d77\u3002"),Object(b.b)("p",null,"\u6709\u6ca1\u6709\u529e\u6cd5\u628a defaultImport \u4fee\u6539\u4e3a namedImports \u5462\uff1f\u7b54\u6848\u662f\u80af\u5b9a\u7684\u3002\u6211\u4eec\u5199\u4e86\u4e00\u4e2a babel \u63d2\u4ef6 babel-plugin-transform-taroapi\uff0c\u5c06\u6307\u5b9a\u7684 Api \u8c03\u7528\u66ff\u6362\u4e3a namedImports\uff0c\u672a\u6307\u5b9a\u7684\u53d8\u91cf\u5219\u4fdd\u7559\u5c5e\u6027\u53d6\u503c\u7684\u5f62\u5f0f\u3002\u5177\u4f53\u6e90\u7801\u53ef\u4ee5\u5728",Object(b.b)("strong",{parentName:"p"},"\u8fd9\u91cc"),"\u67e5\u770b\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// const apis = new Set(['navigateTo', 'navigateBack', ...])\n{\n  babel: {\n    preset: ['babel-preset-env'],\n    plugins: [\n      // ...,\n      ['babel-plugin-transform-taroapi', {\n        packageName: '@tarojs/taro-h5',\n        apis\n      }]\n    ]\n  }\n}\n")),Object(b.b)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u63a5\u53d7\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u914d\u7f6e\u53c2\u6570\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"packageName"),"\u5c5e\u6027\u6307\u5b9a\u9700\u8981\u8fdb\u884c\u66ff\u6362\u7684\u6a21\u5757\u540d\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"apis"),"\u63a5\u53d7\u4e00\u4e2a Set \u5bf9\u8c61\uff0c\u4e5f\u5c31\u662f\u6240\u6709 Api \u7684\u5217\u8868\u3002"),Object(b.b)("p",null,"\u4e3a\u4e86\u907f\u514d\u540e\u671f\u624b\u52a8\u7ef4\u62a4 Api \u5217\u8868\u7684\u60c5\u51b5\uff0c\u6211\u4eec\u7ed9 @tarojs/taro-h5 \u6a21\u5757\u52a0\u4e86\u4e00\u4e2a\u7f16\u8bd1\u4efb\u52a1\uff0c\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684Rollup \u63d2\u4ef6\uff0c\u5728\u6267\u884c",Object(b.b)("inlineCode",{parentName:"p"},"yarn build"),"\u547d\u4ee4\u65f6\u751f\u6210\u4e00\u4efd Api \u5217\u8868\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"https://m.360buyimg.com/img/jfs/t1/11020/15/9616/262595/5c77fbadE6f554c3f/c4d4bc42d65508cd.png",alt:"image-20190225210238592"}))),Object(b.b)("p",null,"\u4e0b\u9762\u662f\u7f16\u8bd1\u524d\u540e\u7684\u4ee3\u7801\u5bf9\u6bd4\u3002\u53ef\u4ee5\u770b\u5230\uff0c\u5728\u7f16\u8bd1\u540e",Object(b.b)("inlineCode",{parentName:"p"},"setStorage"),"\u3001",Object(b.b)("inlineCode",{parentName:"p"},"getStorage"),"\u7684\u8c03\u7528\u90fd\u88ab\u66ff\u6362\u4e3a namedImports\u3002"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"// \u7f16\u8bd1\u524d\nimport Taro from '@tarojs/taro-h5';\nTaro.initPxTransform({});\nTaro.setStorage()\nTaro['getStorage']()\n\n// \u7f16\u8bd1\u540e\nimport Taro, { setStorage as _setStorage, getStorage as _getStorage } from '@tarojs/taro-h5';\nTaro.initPxTransform({});\n_setStorage();\n_getStorage();\n")),Object(b.b)("p",null,"\u5230\u8fd9\u91cc\uff0c\u867d\u7136\u8fc7\u7a0b\u6bd4\u8f83\u8270\u8f9b\uff0c\u4f46\u6211\u4eec\u5bf9 @tarojs/taro-h5 \u7684\u6a21\u5757\u5316\u6539\u9020\u7ec8\u4e8e\u5b8c\u6210\u4e86\u3002"),Object(b.b)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),Object(b.b)("p",null,"\u622a\u81f3\u76ee\u524d\uff0cTaro \u5728 H5 \u7aef\u7684\u5b8c\u6210\u5ea6\u5df2\u7ecf\u5f88\u9ad8\uff0c\u4f46\u662f\u5e76\u4e0d\u5b8c\u7f8e\u3002\u672a\u6765\uff0c\u5728\u5bf9\u5df2\u6709\u95ee\u9898\u8fdb\u884c\u4fee\u590d\u7684\u540c\u65f6\uff0c\u6211\u4eec\u8fd8\u5c06\u7ee7\u7eed\u4e3a Taro H5 \u7aef\u5e26\u6765\u66f4\u591a\u65b0\u7684\u7279\u6027\uff0c\u6bd4\u5982\u5bf9\u793e\u533a\u4e2d\u547c\u58f0\u76f8\u5f53\u9ad8\u7684",Object(b.b)("inlineCode",{parentName:"p"},"switchTab"),"\u3001\u9875\u9762\u6eda\u52a8\u76d1\u542c",Object(b.b)("inlineCode",{parentName:"p"},"onPageScroll"),"\u3001\u4e0b\u62c9\u5237\u65b0",Object(b.b)("inlineCode",{parentName:"p"},"onPullDownRefresh"),"\u7b49 Api \u7684\u652f\u6301\uff0c\u66f4\u52a0\u7edf\u4e00\u7684\u9875\u9762\u5207\u6362\u52a8\u753b\uff0c\u4ee5\u53ca\u66f4\u52a0\u7a33\u5b9a\u7684\u591a\u9875\u9762\u6a21\u5f0f\u7b49\u7b49\u3002"),Object(b.b)("p",null,"Taro \u53d1\u5c55\u5230\u73b0\u5728\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u7684\u652f\u6301\u3002\u975e\u5e38\u611f\u8c22\u5728 github\u3001\u5fae\u4fe1\u7fa4\u4e2d\u8e0a\u8dc3\u53cd\u9988\u7684\u5f00\u53d1\u8005\u4eec\u3002\u5982\u679c\u4f60\u5bf9Taro\u6709\u4ec0\u4e48\u60f3\u6cd5\u6216\u5efa\u8bae\uff0cTaro \u975e\u5e38\u6b22\u8fce\u4f60\u6765\u5410\u69fd\u6216\u89c2\u5149\uff1a"),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro"}),"https://github.com/NervJS/taro")))}l.isMDXComponent=!0},2196:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},2197:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},2198:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(a),s=n,j=m["".concat(c,".").concat(s)]||m[s]||u[s]||b;return a?r.a.createElement(j,i(i({ref:t},p),{},{components:a})):r.a.createElement(j,i({ref:t},p))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<b;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);