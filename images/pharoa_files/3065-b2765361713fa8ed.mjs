"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([["3065"],{891096:function(e,l,o){var n,s,i,t,a;o.r(l),o.d(l,{default:()=>c});let r={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"FollowersControllerQuery",selections:[{alias:null,args:s=[{kind:"Variable",name:"user",variableName:"userId"}],concreteType:null,kind:"LinkedField",name:"v3GetUserHandlerQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"data",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null}],storageKey:null}],type:"V3GetUserHandler",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"FollowersControllerQuery",selections:[{alias:null,args:s,concreteType:null,kind:"LinkedField",name:"v3GetUserHandlerQuery",plural:!1,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"data",plural:!1,selections:[t,a,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"V3GetUserHandler",abstractKey:null}],storageKey:null}]},params:{id:"134b0b580aa92245148296845cace9afb35dc06c14786cdd346a49001d84a14b",metadata:{},name:"FollowersControllerQuery",operationKind:"query",text:null}};r.hash="3f98e2610960d7656d4ab516c46bd7af";let c=r;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(r.default||r)},488661:function(e,l,o){o.d(l,{HW:()=>t,YW:()=>_,i3:()=>u,o2:()=>d});var n=o(667294),s=o(213491),i=o(785893);let t=660,a={educationId:null,paddingRight:0,zIndex:660};function r(e,l){switch(l.type){case"FOOTER_SET_EDUCATION_ID":let{educationId:o}=l.payload;return{...e,educationId:o};case"FOOTER_SET_PADDING_RIGHT":let{paddingRight:n}=l.payload;return{...e,paddingRight:n};case"FOOTER_SET_Z_INDEX":let{zIndex:s}=l.payload;return{...e,zIndex:s};default:return e}}let{Provider:c,Consumer:d,useHook:_}=(0,s.Z)("footerContext");function u({children:e}){let[l,o]=(0,n.useReducer)(r,a),s=(0,n.useCallback)(e=>o({type:"FOOTER_SET_PADDING_RIGHT",payload:{paddingRight:e}}),[]),t=(0,n.useCallback)(e=>o({type:"FOOTER_SET_EDUCATION_ID",payload:{educationId:e}}),[]),d=(0,n.useCallback)(e=>o({type:"FOOTER_SET_Z_INDEX",payload:{zIndex:e}}),[]),_=(0,n.useMemo)(()=>({...l,setEducationId:t,setPaddingRight:s,setZIndex:d}),[l,t,s,d]);return(0,i.jsx)(c,{value:_,children:e})}},691198:function(e,l,o){o.d(l,{Z:()=>c});var n=o(883119),s=o(507006),i=o(138596),t=o(216975),a=o(462867),r=o(785893);function c({count:e,onClick:l,variant:o,size:c="300"}){let d=(0,i.ZP)(),{isAuth:_}=(0,a.Z)(),u=e<=0,h={followers:(0,t.nk)(d.ngettext('{{count}} follower', '{{count}} followers', e, 'label for n followers', 'label for n followers'),{count:(0,r.jsx)(s.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:e||0},"following-count")}),following:(0,t.nk)(d.ngettext('{{count}} following', '{{count}} following', e, 'label for n following users', 'label for n following users'),{count:(0,r.jsx)(s.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:e||0},"follower-count")})};return _?(0,r.jsx)(n.xu,{"data-test-id":`profile-${o}-count`,display:"inlineBlock",children:(0,r.jsx)(n.iP,{disabled:u,onTap:()=>l(o),children:(0,r.jsx)(n.xv,{inline:!0,size:c,weight:u?"normal":"bold",children:h[o]})})}):(0,r.jsx)(n.xv,{inline:!0,children:h[o]})}},293618:function(e,l,o){o.d(l,{Z:()=>i});var n=o(883119),s=o(785893);function i({accessibilityLabel:e,color:l="default",icon:o,info:i}){return(0,s.jsxs)(n.kC,{gap:{row:7,column:0},children:[(0,s.jsx)(n.JO,{accessibilityLabel:e,color:l,icon:o,size:20}),i]})}},791349:function(e,l,o){o.d(l,{Z:()=>d});var n=o(667294),s=o(883119),i=o(583875),t=o(138596),a=o(920343),r=o(151308),c=o(785893);let d=(0,n.forwardRef)(({onTouch:e,size:l="xl",user:o,viewer:n},d)=>{let _=(0,t.ZP)(),{image_xlarge_url:u,username:h,avatar_color_index:p}=o??{},g=(0,r.Z)(o),m=(0,a.Z)({viewer:n,user:o})||n.isAuth&&n.isEmployee,x=(0,c.jsx)(i.qE,{color:p,name:h||"",outline:g,size:l,src:u??void 0});return m?(0,c.jsx)(s.iP,{ref:d,accessibilityLabel:_._('Click to open pincode and share profile', 'AvatarWithPincode.pincodeEnabled.accessibilityLabel', 'Accessibility label for clicking on profile picture to open pincode for sharing'),fullWidth:!1,onTap:e,rounding:"circle",children:x}):x})},698681:function(e,l,o){o.d(l,{Eo:()=>n,I_:()=>a,Rf:()=>d,TL:()=>u,V1:()=>t,X9:()=>i,cO:()=>s,fk:()=>c,g:()=>_,wc:()=>r});let n=80,s=360,i=640,t=1244,a=488,r=275,c=488,d=80,_=211,u=64},819005:function(e,l,o){o.d(l,{Z:()=>k});var n,s=o(167912),i=o(883119),t=o(249459),a=o(470205),r=o(138596),c=o(661376),d=o(825605),_=o(462867),u=o(667294),h=o(230201),p=o(774838),g=o(385114),m=o(739405),x=o(691198),f=o(293618),b=o(151308),w=o(938359),y=o(194442),j=o(785893);let v=(0,y.Z)(()=>Promise.all([o.e("69464"),o.e("6332")]).then(o.bind(o,113229)),void 0,"app-www-followersAuthDesktop-FollowersModalContainer"),C=(0,y.Z)(()=>Promise.all([o.e("25418"),o.e("56595"),o.e("94898")]).then(o.bind(o,159583)),void 0,"app-www-ProfileFollowers-ProfileFollowersModalGraphQL");function P({followersTotalCount:e,followingResource:l,followingTotalCount:o,isAboutDrawerVariant:n,isViewingOwnProfile:s,size:t="300",user:a}){let c=(0,r.ZP)(),d=new URL(window.location.href),_=(()=>{let{isAuthenticated:e}=(0,p.B)(),l=(0,m.HG)();return e&&l})(),{logContextEvent:y}=(0,h.v)(),P=/_(followers|following)\/$/,z=d.pathname.match(P),A=_&&z?.[1]||null,[k,I]=(0,u.useState)(A),S=()=>{I(null),A&&window.history.pushState({},"",d.pathname.replace(P,""))},T=e=>{I(e),s&&y({event_type:101,view_type:4,view_parameter:3106,component:13056,element:"followers"===e?42:41})},E=(0,b.Z)(a);return(0,j.jsxs)(u.Fragment,{children:[n?(0,j.jsxs)(i.kC,{direction:"column",gap:{row:0,column:6},children:[!!e&&e>=0&&(0,j.jsx)(f.Z,{accessibilityLabel:c._('Followers icon', 'profileHeader.followersIcon', 'Icon next to user\'s follower count'),icon:"person-add",info:(0,j.jsx)(g.Z,{items:[(0,j.jsx)(x.Z,{count:e,onClick:()=>T("followers"),size:t,variant:"followers"},"followersDisplay"),E?(0,j.jsx)(w.default,{user:a}):null]})}),o>=0&&(0,j.jsx)(f.Z,{accessibilityLabel:c._('Following icon', 'profileHeader.followingIcon', 'Icon next to user\'s following count'),icon:"people",info:(0,j.jsx)(x.Z,{count:o,onClick:()=>T("following"),size:t,variant:"following"})})]}):(0,j.jsx)(g.Z,{items:[e&&e>=0?(0,j.jsx)(x.Z,{count:e,onClick:()=>T("followers"),size:t,variant:"followers"}):null,o>=0?(0,j.jsx)(x.Z,{count:o,onClick:()=>T("following"),size:t,variant:"following"}):null]}),"followers"===k&&(0,j.jsx)(C,{onDismiss:S,totalFollowersCount:e}),"following"===k&&(0,j.jsx)(v,{followersResource:l,onDismiss:S,totalFollowersCount:o,user:a,variant:k})]})}var z=o(920343);function A({isAboutDrawerVariant:e=!1,size:l="300",user:i}){let a=(0,_.Z)(),{id:r}=i,d=void 0!==n?n:n=o(891096),u=(0,s.useLazyLoadQuery)(d,{userId:r}),{following_count:h=0,interest_following_count:p=0}=i,g=u.v3GetUserHandlerQuery?.__typename==="V3GetUserHandler"?u.v3GetUserHandlerQuery.data:null,{followerCount:m,username:x}=g||{},f=(0,z.Z)({user:i,viewer:a}),b=(0,c.Z)({name:"UserFollowingResource",options:{exclude_not_explictly_followed:!!f||void 0,page_size:t.ZP.MAX_FETCH_NUM_FOLLOWERS_PER_PAGE,explicit_following:f,username:x}});return g?(0,j.jsx)(P,{followersTotalCount:m,followingResource:b,followingTotalCount:h-(p??0),isAboutDrawerVariant:e,isViewingOwnProfile:f,size:l,user:i}):null}function k(e){let l=(0,r.ZP)();return(0,j.jsx)(a.Z,{name:"SafeSuspense_ProfileHeader_FollowersController",children:(0,j.jsx)(d.Z,{fallback:(0,j.jsx)(i.xu,{padding:5,children:(0,j.jsx)(i.$j,{accessibilityLabel:l._('Loading follower counts', 'profile.header.followerController', 'accessibility label for follower counts spinner'),show:!0})}),children:(0,j.jsx)(A,{...e})})})}},52258:function(e,l,o){o.d(l,{Z:()=>v});var n=o(667294),s=o(883119),i=o(27399),t=o(496769),a=o(230201),r=o(138596),c=o(758714),d=o(216975),_=o(488661),u=o(386385),h=o(767415),p=o(785893);let g=new s.H3([new s.Ry(_.HW),new s.Ry(u.fe)]),m="/settings/account-settings/",x=({text:e})=>{let l=(0,n.useRef)(null),[o,i]=(0,n.useState)(!1);return o&&(0,h.nP)("client.profile.inspirational_badge_controls.info_tool_tip.rendered",{sampleRate:1}),(0,p.jsxs)(n.Fragment,{children:[o&&(0,p.jsx)(s.J2,{_deprecatedShowCaret:!0,anchor:l.current,color:"deprecatedBlue",idealDirection:"up",onDismiss:()=>i(!1),positionRelativeToAnchor:!1,size:"sm",children:(0,p.jsx)(s.xu,{padding:3,children:(0,p.jsx)(s.xv,{align:"center",color:"inverse",size:"200",children:e})})}),(0,p.jsx)(s.xu,{height:32,width:32,children:(0,p.jsx)(s.iP,{ref:l,fullHeight:!0,fullWidth:!0,onFocus:()=>i(!0),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:(0,p.jsx)(s.hU,{accessibilityLabel:e,icon:"info-circle",iconColor:"gray",size:"sm"})})})]})},f=({badgeLabel:e,disabled:l,eligible:o,isChecked:n,setSelectedBadge:i})=>{let a=(0,p.jsx)(s.xu,{display:"inlineBlock",children:(0,p.jsx)(s.__,{htmlFor:`inspirational-badge-${e.id}`,children:(0,p.jsx)(s.xv,{overflow:"noWrap",children:(0,p.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:t.QP["0"],color:o?"black":"gray"}},display:"inlineBlock",marginEnd:1,marginStart:1,paddingX:2,paddingY:1,rounding:1,children:e.label})})})});return(0,p.jsxs)(s.kC,{alignItems:"start",direction:"row",children:[(0,p.jsx)(s.xu,{display:"inlineBlock",marginBottom:2,marginEnd:2,children:(0,p.jsx)(s.XZ,{checked:n,disabled:l,id:`inspirational-badge-${e.id}`,name:"badges",onChange:({checked:l})=>i(e.id,l)},e.id)}),e.controlsTooltip?(0,p.jsx)(s.u,{idealDirection:"right",text:e.controlsTooltip,children:a}):a]},e.id)};function b({inspirationalSignal:e,onDismiss:l,onSubmit:o}){let{logContextEvent:i}=(0,a.v)(),_=(0,r.ZP)(),u=_._('Learn more', 'InspoBadges.learnMore', 'Link to article to learn more'),b=_._('Contact us', 'InspoBadgeControls.contactUs', 'Contact us link'),w=_._('Brand values', 'InspoBadgeControls.brandValuesLegend', 'Legend text used to describe brand values'),y=_._('Your brand\'s website indicates that your business is aligned with the values listed below', 'InspoBadges.brandValuesTooltip', 'Tooltip describing brand values'),j=_._('Communities', 'InspoBadgeControls.communitiesLegend', 'Legend text used to describe communities'),v=_._('Your brand\'s owner self-identified as a member of these groups. This information is only associated with your business account and isn\'t used to target ads. ', 'InspoBadges.communityTooltip', 'Tooltip describing communities'),C=_._('default color', 'InspoBadgeControls.defaultColor', 'Annotation describing the selected color as the default color'),P=(0,t.eT)(e),z=(0,t.hm)(e),A=(0,t.I)(_,P,e.badge_details),k=(0,t.I)(_,z,e.badge_details),I=A.filter(e=>t.yQ.includes(e.id)),S=A.filter(e=>t.Dm.includes(e.id)),T=A.map(e=>e.id),E=k.map(e=>e.id),L=e.inspirational_badge_selection?.badgeColor||t.QP["0"],[Z,B]=(0,n.useState)(E),[F,D]=(0,n.useState)(!1),[R,H]=(0,n.useState)(L),M=(0,n.useRef)(null),O=!!(0,c.oo)(R),U=O?R.toUpperCase():t.QP["0"],Q=U===t.QP["0"]?`${U} (${C})`:U,N=T.filter(e=>!Z.includes(e)),W=E.length!==Z.length||!Z.every(e=>E.includes(e))||R!==L,$=(e,l)=>{B(l?[...Z,e]:Z.filter(l=>l!==e)),i({event_type:l?9675:9676,component:13911})};return(0,h.nP)("client.profile.inspirational_badge_controls.rendered",{sampleRate:1}),(0,p.jsx)(s.mh,{zIndex:g,children:(0,p.jsx)(s.To,{accessibilityDismissButtonLabel:_._('Close Inspirational Badges sheet', 'InspoBadgeControls.accessibilityDismissButtonLabel', 'Accessibility text for dismissing inspirational badges sheet'),accessibilityLabel:_._('Inspirational Badges customization for business profile', 'InspoBadgeControls.accessibilitySheetLabel', 'Accessibility text for opening inspirational badges sheet'),footer:({onDismissStart:e})=>(0,p.jsxs)(s.kC,{direction:"row",justifyContent:"between",children:[(0,p.jsxs)(s.xu,{children:[(0,p.jsx)(s.xv,{color:"subtle",inline:!0,size:"200",children:_._('Have questions about brand values?', 'InspoBadgeControls.haveQuestions', 'Question preceding a contact us link')}),(0,p.jsx)("br",{}),(0,p.jsx)(s.xv,{color:"subtle",inline:!0,size:"200",weight:"bold",children:(0,p.jsx)(s.rU,{accessibilityLabel:b,display:"inlineBlock",href:"https://help.pinterest.com/en/contact",target:"blank",underline:"hover",children:b})})]}),(0,p.jsx)(s.xu,{children:(0,p.jsxs)(s.hE,{children:[(0,p.jsx)(s.zx,{color:"gray",onClick:e,text:_._('Cancel', 'InspoBadgeControls.cancel', 'Cancel editing Inspirational badges')}),(0,p.jsx)(s.zx,{color:"red",disabled:!W,onClick:()=>o({badgeColor:R,badgeOptOut:N}),text:_._('Save', 'InspoBadgeControls.save', 'Save Inspirational badges')})]})})]}),heading:_._('Edit merchant details', 'InspoBadgeControls.title', 'Title for Inspirational Badges customization sheet'),onDismiss:l,size:"sm",children:(0,p.jsx)(s.kC,{direction:"column",gap:{row:0,column:12},children:(0,p.jsxs)(s.kC,{direction:"column",gap:{row:0,column:4},children:[(0,p.jsxs)(s.xu,{children:[(0,p.jsxs)(s.xv,{inline:!0,children:[_._('Pinterest is committed to connecting shoppers and merchants with compatible values.', 'InspoBadgeControls.description', 'Description text for Inspirational Badges customization sheet'),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),_._('Feature up to three brand values and/or communities on your profile to let people on Pinterest know what your business represents.', 'InspoBadgeControls.description2', 'Description text for Inspirational Badges customization sheet')]})," ",(0,p.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,p.jsx)(s.rU,{accessibilityLabel:u,display:"inlineBlock",href:t._f,onClick:()=>{i({event_type:9677,component:13911})},target:"blank",underline:"hover",children:u})})]}),(0,p.jsxs)(s.kC,{direction:"column",children:[(0,p.jsxs)(s.kC,{alignItems:"center",children:[(0,p.jsx)(s.xv,{inline:!0,overflow:"noWrap",size:"200",children:w}),(0,p.jsx)(x,{text:y})]}),(0,p.jsx)(s.xu,{paddingY:1,children:(0,p.jsx)(s.pg,{legend:w,legendDisplay:"hidden",children:(0,p.jsx)(s.kC,{direction:"column",gap:{row:0,column:3},children:I.map(e=>{let l=Z.includes(e.id),o=Z.length>=t.S4&&!l;return(0,p.jsx)(f,{badgeLabel:e,disabled:o,eligible:!0,isChecked:l,setSelectedBadge:$},e.id)})})})})]}),S.length>0&&(0,p.jsxs)(s.kC,{direction:"column",children:[(0,p.jsxs)(s.kC,{alignItems:"center",children:[(0,p.jsx)(s.xv,{inline:!0,overflow:"noWrap",size:"200",children:j}),(0,p.jsx)(x,{text:v})]}),(0,p.jsx)(s.xu,{paddingY:1,children:(0,p.jsx)(s.pg,{legend:j,legendDisplay:"hidden",children:(0,p.jsx)(s.kC,{direction:"column",gap:{row:0,column:3},children:S.map(e=>{let l=Z.includes(e.id),o=Z.length>=t.S4&&!l;return(0,p.jsx)(f,{badgeLabel:e,disabled:o,eligible:!0,isChecked:l,setSelectedBadge:$},e.id)})})})}),(0,p.jsx)(s.xv,{color:"subtle",inline:!0,size:"200",children:(0,d.nk)(_._('To change communities info, visit {{ accountSettingsLink }}', 'InspoBadgeControls.changeCommunities', 'Tell users when they can reapply'),{accountSettingsLink:(0,p.jsx)(s.rU,{display:"inlineBlock",href:m,underline:"hover",children:(0,p.jsx)(s.xv,{color:"subtle",inline:!0,size:"200",weight:"bold",children:_._('account settings', 'InspoBadgeControls.accountSettingsLink', 'Link to account settings')})},m)})})]}),(0,p.jsxs)(s.kC,{direction:"column",children:[(0,p.jsxs)(s.xu,{children:[(0,p.jsx)(s.xu,{marginBottom:4,marginTop:4,children:(0,p.jsx)(s.__,{htmlFor:"color-menu",children:(0,p.jsx)(s.xv,{size:"200",children:_._('Choose your label color', 'InspoBadgeControls.labelColor', 'Label color title')})})}),(0,p.jsx)(s.zx,{accessibilityControls:"color-menu",accessibilityExpanded:F,accessibilityHaspopup:!0,iconEnd:"arrow-down",onClick:()=>{i({event_type:9674,component:13911}),D(!0)},selected:F,size:"lg",text:Q})]}),(0,p.jsx)(s.xu,{ref:M}),F&&(0,p.jsx)(s.mh,{children:(0,p.jsx)(s.J2,{anchor:M.current,idealDirection:"down",onDismiss:()=>D(!1),positionRelativeToAnchor:!1,role:"listbox",shouldFocus:!0,size:"flexible",children:(0,p.jsxs)(s.xu,{borderStyle:"shadow",id:"color-menu",padding:4,rounding:2,width:"100%",children:[(0,p.jsx)(s.kC,{alignItems:"start",gap:{row:4,column:0},children:t.QP.map(e=>(0,p.jsx)(s.xu,{borderStyle:"lg",dangerouslySetInlineStyle:{__style:{borderColor:R===e?"black":e,backgroundColor:e}},height:48,marginBottom:4,rounding:"circle",width:48,children:(0,p.jsx)(s.iP,{fullHeight:!0,fullWidth:!0,onTap:()=>H(e),rounding:4})},e))}),(0,p.jsxs)(s.kC,{alignItems:"start",gap:{row:4,column:0},children:[(0,p.jsx)(s.xu,{borderStyle:"lg",dangerouslySetInlineStyle:{__style:{borderColor:O&&!t.QP.includes(R.toUpperCase())?"black":void 0,backgroundColor:U}},height:48,rounding:"circle",width:48}),(0,p.jsx)(s.nv,{id:"selected-color",onChange:({value:e})=>H(e.slice(0,7)),size:"lg",value:R})]})]})})})]})]})})})})}var w=o(661376),y=o(171039);let j=new s.Ry(10);function v(e){let{isOwnProfile:l,marginEnd:o=1,marginStart:c=1,userId:d,rounding:_=1,size:u="200"}=e,{logContextEvent:g}=(0,a.v)(),m=(0,r.ZP)(),x=m._('Learn more', 'InspoBadges.learnMore', 'Link to article to learn more'),f=m._('New!', 'InspoBadges.newText', 'New! descriptor calling out a New feature'),v=m._('Show shoppers your brand values and which communities you\'re a part of', 'InspoBadges.editTooltipText', 'Edit your badges callout'),C=m._('Add merchant details', 'InspoBadges.toggleEditBadges', 'CTA to add merchant details if a merchant does not have any'),P=function(){let e=(0,y.Z)(),l=e.data?.id;return(0,w.Z)({name:"VerifiedMerchantResource",options:{userId:l}})}(),z=P.data||{},A=(0,t.Bu)({verifiedMerchant:z}),k=(0,n.useRef)(null),[I,S]=(0,n.useState)(t.Xe),[T,E]=(0,n.useState)(!1),[L,Z]=(0,n.useState)(!0),B=A?(0,t.hm)(I):[],F=(0,t.I)(m,B,I.badge_details),D=I.inspirational_badge_selection?.badgeColor||t.QP["0"];(0,n.useEffect)(()=>{S(z.inspirational_signal||t.Xe)},[z.inspirational_signal]),(0,n.useEffect)(()=>{B&&B.length&&g({event_type:9667,view_type:4,component:13910})});let R=()=>{E(!0),Z(!1),g({event_type:9671,component:13911})},H=()=>{g({event_type:9668,component:13910})},M=()=>{g({event_type:9670,component:13910})};return A&&(0,h.nP)("client.profile.inspirational_badges.rendered",{sampleRate:1,tags:{is_own_profile:l,num_badges:F.length,badge_color:D,user_id:z.id}}),A?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsxs)(s.kC,{alignItems:"center",children:[F.map(e=>(0,p.jsx)(s.u,{link:(0,p.jsx)(s.xu,{"data-test-id":"inspirational-badge-tooltip-learn-more",children:(0,p.jsx)(s.rU,{accessibilityLabel:x,href:t.NG,onClick:M,target:"blank",children:(0,p.jsx)(s.xv,{color:"inverse",size:"100",weight:"bold",children:x})})}),text:e.description,zIndex:j,children:(0,p.jsx)(s.xv,{overflow:"noWrap",size:u,children:(0,p.jsx)(s.iP,{onMouseEnter:H,children:(0,p.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:(0,t.ym)(D)},"data-test-id":"inspirational-badge",display:"inlineBlock",marginEnd:o,marginStart:c,paddingX:2,paddingY:1,rounding:_,children:e.label})})})},e.label)),l&&(0,p.jsxs)(n.Fragment,{children:[L&&(0,p.jsx)(s.mh,{zIndex:j,children:(0,p.jsx)(s.J2,{_deprecatedShowCaret:!0,anchor:k.current,color:"deprecatedBlue",idealDirection:"up",onDismiss:()=>{Z(!1),g({event_type:9673,component:13911})},positionRelativeToAnchor:!1,size:"xs",children:(0,p.jsx)(s.xu,{padding:3,children:(0,p.jsxs)(s.xv,{align:"center",color:"inverse",inline:!0,size:"200",children:[(0,p.jsx)(s.xv,{inline:!0,weight:"bold",children:f})," ",v]})})})}),0===F.length&&(0,p.jsx)(s.xu,{display:"inlineBlock",children:(0,p.jsx)(s.iP,{fullWidth:!0,onTap:R,children:(0,p.jsx)(s.xv,{color:"subtle",children:C})})}),(0,p.jsx)(s.hU,{ref:k,accessibilityLabel:C,icon:"edit",iconColor:"gray",onClick:R,size:"sm"})]})]}),T&&(0,p.jsx)(b,{inspirationalSignal:I,onDismiss:()=>E(!1),onSubmit:({badgeColor:e,badgeOptOut:l})=>{E(!1),i.Z.create("VerifiedMerchantResource",{userId:d,inspirational_badge_selection:{badgeColor:e,badgeOptOut:l}}).callUpdate().then(()=>P.refresh()),S({...I,inspirational_badge_selection:{badgeColor:e,badgeOptOut:l}}),g({event_type:9672,component:13911})}})]}):(0,p.jsx)(n.Fragment,{})}},304264:function(e,l,o){o.d(l,{Z:()=>v});var n=o(470205),s=o(462867),i=o(667294),t=o(883119),a=o(230201),r=o(59355),c=o(138596),d=o(216975),_=o(582641),u=o(27399),h=o(271875),p=o(94950),g=o(785893);function m({children:e,flyoutDirection:l,setShowMessageFlyout:o,showMessageFlyout:n,userId:s}){let{logContextEvent:r}=(0,a.v)(),[c,d]=(0,i.useState)(""),_=(0,i.useRef)(null),{conversationCreate:m,conversationOpen:x}=(0,h.Z)(),f=async()=>{d(""),o(!1),r({event_type:101,element:103,component:13946,view_type:4,view_parameter:3107});let e=u.Z.create("ConversationsResource",{user_ids:[s],text:c}),l=await e.callCreate(),n=l?.resource_response.data;m(n),x(n.id)};return(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(t.xu,{ref:_,children:e({toggleSendMessageFlyout:()=>{o(!n)}})}),n&&(0,g.jsx)(p.Z,{anchor:_.current,idealDirection:l,message:c,onDismiss:()=>o(!1),onMessageChange:d,onMessageSubmit:f})]})}var x=o(962875);let f=()=>Promise.all([o.e("47497"),o.e("42638")]).then(o.bind(o,713375));function b({isOwnProfile:e,setShowMessageFlyout:l,size:o="lg",showMessageFlyout:n,user:s}){let{logContextEvent:u}=(0,a.v)(),h=(0,c.ZP)(),p=(0,i.useRef)(null),[b,w]=(0,i.useState)(!1),[y,j]=(0,i.useState)(),v=(0,_.V)(e,s?.partner?.profile_place||{},h._('Address copied', 'profileHeader.contactButton.toastText', 'Text on toast to show that an address has been copied')),C=()=>{w(!1)},{id:P,partner:z}=s??{},{contact_email:A="",contact_phone:k="",contact_phone_country:I="",enable_profile_address:S,enable_profile_message:T,profile_place:E={}}=z??{},L=k?y?.(k,{defaultCallingCode:I&&"0"!==I.phone_code?I.phone_code:null}):null;(0,r.Q)({component:13673,element:11953,object_id_str:P,view_type:4,view_parameter:3107});let Z=async()=>{if(w(e=>!e),k&&!y){let e=await f();j(()=>e.parsePhoneNumberFromString)}u({event_type:101,component:13673,element:11953,object_id_str:P,view_type:4,view_parameter:3107})},B=e=>{u({event_type:101,component:13674,element:e,object_id_str:P,view_type:48,view_parameter:3107})},F=A||k,D={contact:h._('Contact', 'profileHeader.contactButton', 'Button on a business profile to contact that business'),sectionTitle:h._('Contact options', 'profileHeader.contactButton.contactOptions', 'Button on a business profile to contact that business'),message:h._('Message', 'profileHeader.contactMenu.message', 'Menu option to message the user'),email:(0,d.nk)(h._('Email {{ contactEmail }}', 'profileHeader.contactMenu.email', 'contactEmail: Menu option to send an email to the user'),{contactEmail:A}),call:h._('Call', 'profileHeader.contactMenu.phoneNumber', 'Menu option to call the user')};if(!F&&!T)return null;let R=(0,_.T)(E||{});return(0,g.jsx)(m,{flyoutDirection:"up",setShowMessageFlyout:l,showMessageFlyout:n,userId:P,children:({toggleSendMessageFlyout:e})=>(0,g.jsxs)(i.Fragment,{children:[(0,g.jsx)(t.xu,{ref:p,children:(0,g.jsx)(t.zx,{onClick:()=>{F?Z():e()},selected:b,size:o,text:D.contact})}),b&&(0,g.jsxs)(t.Lt,{anchor:p.current,disableMobileUI:!0,id:"profileHeader_contactMenu",idealDirection:"up",onDismiss:C,zIndex:new t.H3([x.Zu]),children:[(0,g.jsxs)(t.Lt.Section,{label:D.sectionTitle,children:[T&&(0,g.jsx)(t.Lt.Item,{onSelect:()=>{e(),B(11956),C()},option:{label:D.message,value:D.message}}),A&&(0,g.jsx)(t.Lt.Link,{href:`mailto:${A}`,iconEnd:"visit",onClick:()=>{B(11954),C()},option:{label:D.email.join(""),value:D.email.join("")}}),L||k?(0,g.jsx)(t.Lt.Link,{href:`tel:${L?L.getURI():k}`,iconEnd:"visit",onClick:({dangerouslyDisableOnNavigation:e})=>{B(11955),e(),C()},option:{label:D.call,value:D.call}}):null]}),S&&(0,g.jsx)(t.Lt.Section,{label:h._('Address', 'profileHeader.contactButton.address', 'Address category for contact options drawer'),children:(0,g.jsx)(t.Lt.Item,{onSelect:v,option:{label:R,value:R}})})]})]})})}var w=o(548983),y=o(920343),j=o(151308);function v(e){let{setShowMessageFlyout:l,size:o,showMessageFlyout:i,user:t}=e,a=(0,s.Z)(),r=(0,j.Z)(t),c=(0,y.Z)({user:t,viewer:a}),{blocked_by_me:d,id:_,partner:u={},should_show_messaging:h}=t,{should_show_messaging:p}=a,{contact_email:x="",contact_phone:f="",enable_profile_message:v}=u||{},C=!d&&!!h&&!!p;return C&&(x||f)?(0,g.jsx)(n.Z,{name:"ContactMenuButton",children:(0,g.jsx)(b,{isOwnProfile:c,setShowMessageFlyout:l,showMessageFlyout:i,size:o,user:t})}):C&&(v||!r)?(0,g.jsx)(m,{flyoutDirection:"up",setShowMessageFlyout:l,showMessageFlyout:i,userId:_,children:({toggleSendMessageFlyout:e})=>(0,g.jsx)(w.Z,{onClick:e,size:o,userId:_})}):null}},938359:function(e,l,o){o.r(l),o.d(l,{default:()=>u});var n=o(667294),s=o(883119),i=o(521367),t=o(507006),a=o(138596),r=o(216975),c=o(462867),d=o(920343),_=o(785893);function u({color:e="default",user:l,inline:o=!1,size:u}){let h=(0,a.ZP)(),p=(0,n.useRef)(null),g=(0,c.Z)(),m=new s.Ry(2);if(l?.profile_views===-1)return null;let x=l?.profile_views??0,f=x>=1e7?h._('10m+ monthly views', 'viewerCount.overTenMillion', 'Shortform string indicating that a partner profile has over 10,000,000 monthly views'):(0,r.nk)(h._('{{ count }} {{ label }}', 'viewerCount.templateString', 'Template string for a count of the monthly viewers of a partner profile'),{count:(0,_.jsx)(t.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:x||0},"pretty_number"),label:h._('monthly views', 'viewerCount.monthlyViewsLabel', 'Label for count of monthly views of a partner profile')});return(0,_.jsx)(s.xu,{ref:p,children:(0,_.jsxs)(s.xv,{color:e,inline:o,size:u,weight:"normal",children:[f,(0,d.Z)({user:l,viewer:g})&&(0,_.jsx)(i.Qp,{anchor:p.current,customWrapper:({children:e})=>(0,_.jsx)(s.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,zIndex:m,children:e}),experienceIds:[502925],flyoutSize:"md",idealDirection:"down",onClickComplete:()=>window.open("https://www.pinterest.com/_/_/help/business/article/review-new-and-updated-reporting-metrics#section-15861","_blank"),placementId:19,showCaret:!0,textAlign:"center"})]})})}},582641:function(e,l,o){o.d(l,{T:()=>a,V:()=>r});var n=o(230201),s=o(924591),i=o(577356),t=o(785893);function a(e){let{street:l,extra_street:o,locality:n,region:s,postal_code:i,country:t}=e,a=l||"",r=o||"",c=n||"";return`${a}${r}${(a||r)&&","} ${c}${c&&","} ${s||""} ${i||""} ${t||""}`.trim()}function r(e,l,o){let{logContextEvent:r}=(0,n.v)(),{showToast:c}=(0,i.F9)();return()=>{r({event_type:101,element:12799,view_type:548,view_parameter:e?3106:3107}),navigator.clipboard.writeText(a(l)),c(({hideToast:e})=>(0,t.jsx)(s.Z,{onHide:e,text:o}))}}},38581:function(e,l,o){o.d(l,{Z:()=>h});var n=o(667294),s=o(883119),i=o(104999),t=o(138596),a=o(462867),r=o(938967),c=o(271875),d=o(920343),_=o(500499),u=o(785893);function h(e){let{bgColor:l,dataTestId:o="share-profile-auth",iconColor:h,useGestaltButton:p,user:g}=e,m=(0,t.ZP)(),[x,f]=(0,n.useState)(!1),b=(0,a.Z)(),w=(0,d.Z)({user:g,viewer:b}),y=(0,i.Z)(),j=w&&b.isPrivateProfile,{conversations:{showConversationsDropdown:v},dropdownOpen:C,setObjectAttachment:P}=(0,c.Z)(),z=m._('Send Profile', 'Accessible label for button to send this profile', 'Accessible label to send this profile button');return(0,u.jsx)(_.Z,{flyoutDisplayOptions:{shownWithinProfileHeader:!0},isFlyoutOpen:x,loggingOptions:{component:13675,element:12631,viewType:4},onFlyoutDismiss:()=>f(!1),onToggleFlyout:()=>{y({event_type:101,component:13675,element:1079,object_id_str:g?.id,view_type:4,view_parameter:w?3106:3107}),j?!v&&g?.id&&(P({type:"follow_invite",id:g.id}),C()):f(!x)},sendObject:{type:"user",description:"",name:g?.full_name,imageUrl:g?.image_large_url??"",url:`/${g?.username??""}/`,id:g?.id??""},children:({handleSendShareFlyoutButtonClick:e})=>(0,u.jsx)(s.xu,{"data-test-id":o,children:p?(0,u.jsx)(s.zx,{accessibilityLabel:z,onClick:()=>e(),selected:x,size:"lg",text:m._('Share', 'sendProfileButton.button', 'Button to share user profile')}):(0,u.jsx)(r.Z,{accessibilityLabel:z,bgColor:l,icon:"share",iconColor:h,onClick:()=>e(),selected:x})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/3065-b2765361713fa8ed.mjs.map