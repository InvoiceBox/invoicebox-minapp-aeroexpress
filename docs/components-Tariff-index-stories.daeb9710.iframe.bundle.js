"use strict";(self.webpackChunkinvoicebox_minapp_aeroexpress=self.webpackChunkinvoicebox_minapp_aeroexpress||[]).push([[997],{"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}__webpack_require__.d(__webpack_exports__,{A:()=>_taggedTemplateLiteral})},"./src/components/Tariff/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"components/Tariff",component:__webpack_require__("./src/components/Tariff/index.tsx").d,tags:["autodocs"]},Default={args:{title:"Title",sum:1e3,descripion:"Descripion"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: 'Title',\n    sum: 1000,\n    descripion: 'Descripion'\n  }\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/Tariff/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Tariff});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),dist=__webpack_require__("./node_modules/@invoicebox/ui/dist/index.js"),build=__webpack_require__("./node_modules/hex-to-rgba/build/index.js"),build_default=__webpack_require__.n(build),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Wrapper=styled_components_browser_esm.default.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    padding-left: 24px;\n    position: relative;\n\n    :before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 4px;\n        height: 24px;\n        background-color: #df1931;\n    }\n\n    @media "," {\n        padding-left: 22px;\n    }\n"])),dist.fi.sm),TitleWrapper=styled_components_browser_esm.default.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n    display: flex;\n    align-items: center;\n    gap: 14px;\n    padding-bottom: 14px;\n"]))),Title=(0,styled_components_browser_esm.default)(dist.o5)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.A)(["\n    color: ",";\n"])),dist.VN.primary),Sum=(0,styled_components_browser_esm.default)(dist.o5)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.A)(["\n    color: ",";\n"])),dist.VN.primary),Description=(0,styled_components_browser_esm.default)(dist.o5)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.A)(["\n    color: ",";\n"])),build_default()(dist.VN.primary,.5));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Tariff=_ref=>{let{title,sum,descripion}=_ref;return(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(TitleWrapper,{children:[(0,jsx_runtime.jsx)(Title,{variant:"headline3",children:title}),(0,jsx_runtime.jsxs)(Sum,{variant:"headline6",children:[sum," ₽"]})]}),(0,jsx_runtime.jsx)(Description,{variant:"bodyMRegular",dangerouslySetInnerHTML:{__html:descripion}})]})};Tariff.__docgenInfo={description:"",methods:[],displayName:"Tariff",props:{title:{required:!0,tsType:{name:"string"},description:""},sum:{required:!0,tsType:{name:"number"},description:""},descripion:{required:!0,tsType:{name:"string"},description:""}}}}}]);