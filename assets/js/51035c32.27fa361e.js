(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[329],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(v,o(o({ref:t},l),{},{components:n})):i.createElement(v,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58372:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return l}});var i=n(74034),a=n(79973),r=(n(67294),n(3905)),o={id:"with-navigation",title:"withNavigation",sidebar_label:"withNavigation"},c={unversionedId:"with-navigation",id:"version-4.x/with-navigation",isDocsHomePage:!1,title:"withNavigation",description:"withNavigation is a higher order component which passes the navigation prop into a wrapped component. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.",source:"@site/versioned_docs/version-4.x/with-navigation.md",sourceDirName:".",slug:"/with-navigation",permalink:"/docs/4.x/with-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/with-navigation.md",version:"4.x",sidebar_label:"withNavigation",frontMatter:{id:"with-navigation",title:"withNavigation",sidebar_label:"withNavigation"},sidebar:"version-4.x-docs",previous:{title:"DrawerActions reference",permalink:"/docs/4.x/drawer-actions"},next:{title:"withNavigationFocus",permalink:"/docs/4.x/with-navigation-focus"}},p=[{value:"Example",id:"example",children:[]},{value:"Notes",id:"notes",children:[]}],s={toc:p};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"withNavigation")," is a higher order component which passes the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop into a wrapped component. It's useful when you cannot pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"navigation")," prop into the component directly, or don't want to pass it in case of a deeply nested child."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withNavigation(Component)")," returns a Component.")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { Button } from 'react-native';\nimport { withNavigation } from 'react-navigation';\n\nclass MyBackButton extends React.Component {\n  render() {\n    return (\n      <Button\n        title=\"Back\"\n        onPress={() => {\n          this.props.navigation.goBack();\n        }}\n      />\n    );\n  }\n}\n\n// withNavigation returns a component that wraps MyBackButton and passes in the\n// navigation prop\nexport default withNavigation(MyBackButton);\n")),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you wish to use the ",(0,r.kt)("inlineCode",{parentName:"li"},"ref")," prop on the wrapped component, you must pass the ",(0,r.kt)("inlineCode",{parentName:"li"},"onRef")," prop instead. For example,")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// MyBackButton.ts\nexport default withNavigation(MyBackButton);\n\n// MyNavBar.ts\n<MyBackButton onRef={elem => (this.backButton = elem)} />;\n")))}l.isMDXComponent=!0}}]);