"use strict";(self.webpackChunkinvoicebox_minapp_aeroexpress=self.webpackChunkinvoicebox_minapp_aeroexpress||[]).push([[807],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/@storybook/addon-actions/node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/DateField/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/DateField/index.tsx"),_helpers_StoryOneFieldForm__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/_helpers/StoryOneFieldForm/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"components/DateField",component:___WEBPACK_IMPORTED_MODULE_1__.v,tags:["autodocs"]},Default={args:{label:"Label"},render:props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_helpers_StoryOneFieldForm__WEBPACK_IMPORTED_MODULE_2__.y,{initialValue:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.v,{...props,name:_helpers_StoryOneFieldForm__WEBPACK_IMPORTED_MODULE_2__.V})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Label'\n  },\n  render: props => <StoryOneFieldForm initialValue={null}>\n            <DateField {...props} name={FIELD_NAME} />\n        </StoryOneFieldForm>\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/components/DateField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>DateField});var _invoicebox_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@invoicebox/ui/dist/index.js"),react_final_form__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./node_modules/react-calendar/dist/Calendar.css"),__webpack_require__("./node_modules/@invoicebox/ui/dist/components/common/Calendar/index.css"),__webpack_require__("./node_modules/react/jsx-runtime.js"));const DateField=_ref=>{let{name,...controlProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_final_form__WEBPACK_IMPORTED_MODULE_2__.D0,{name,children:_ref2=>{let{input,meta:{invalid,touched}}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_invoicebox_ui__WEBPACK_IMPORTED_MODULE_0__.J3,{...controlProps,value:input.value,onChange:input.onChange,hasError:touched&&invalid,name:input.name,onBlur:input.onBlur,onFocus:input.onFocus})}})};DateField.__docgenInfo={description:"",methods:[],displayName:"DateField"}},"./src/components/_helpers/StoryOneFieldForm/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>FIELD_NAME,y:()=>StoryOneFieldForm});__webpack_require__("./node_modules/react/index.js");var react_final_form__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-final-form/dist/react-final-form.es.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_invoicebox_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@invoicebox/ui/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const FIELD_NAME="field",StoryOneFieldForm=_ref=>{let{children,initialValue}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_final_form__WEBPACK_IMPORTED_MODULE_1__.lV,{onSubmit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("submit"),initialValues:{[FIELD_NAME]:initialValue},children:_ref2=>{let{handleSubmit}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("form",{onSubmit:handleSubmit,children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{marginTop:20},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_invoicebox_ui__WEBPACK_IMPORTED_MODULE_3__.tA,{element:"button",type:"submit",children:"Done"})})]})}})};StoryOneFieldForm.__docgenInfo={description:"",methods:[],displayName:"StoryOneFieldForm",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},initialValue:{required:!0,tsType:{name:"any"},description:""}}}},"./node_modules/@invoicebox/ui/dist/components/common/Calendar/index.css":()=>{},"./node_modules/react-calendar/dist/Calendar.css":()=>{}}]);