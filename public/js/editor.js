!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){e.exports=n("pNZs")},pNZs:function(e,t){function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=blockPatternBuilder.labels,u=(wp.i18n.__,wp.blocks.serialize),l=wp.components,i=l.Button,a=l.Modal,c=l.TextControl,s=wp.data,f=s.useSelect,p=s.useDispatch,d=wp.editPost.PluginBlockSettingsMenuItem,b=wp.element.useState;(0,wp.plugins.registerPlugin)("block-pattern-builder",{render:function(){var e=n(b(!1),2),t=e[0],r=e[1],l=n(b(!1),2),s=l[0],m=l[1],y=n(b(""),2),g=y[0],v=y[1],S=f((function(e){var t=e("core/block-editor"),n=t.getSelectedBlockCount,r=t.getSelectedBlock,o=t.getMultiSelectedBlocks,l=1===n()?r():o();return u(l)}),[]),h=p("core/notices").createSuccessNotice;return React.createElement(React.Fragment,null,React.createElement(d,{label:o.menuItem,icon:"none",onClick:function(){return r(!0)}}),t&&React.createElement(a,{title:o.modalTitle,onRequestClose:function(){return r(!1)}},React.createElement(c,{label:o.modalTextControl,value:g,onChange:v}),React.createElement(i,{isPrimary:!0,isPressed:s,isBusy:s,onClick:function(){m(!0),wp.apiRequest({path:"wp/v2/bpb_pattern",method:"POST",data:{title:g,content:S,status:"publish"}}).then((function(e){m(!1),r(!1),v(""),h(o.createSuccessNotice,{type:"snackbar"})}))}},o.modalButton)))}})}});