(this["webpackJsonpneighborhood-map-touristy-things"]=this["webpackJsonpneighborhood-map-touristy-things"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/heart-inactive-v3.0e0abb7f.svg"},24:function(e,t,a){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",infoWin:"SideDrawer_infoWin__37ouY",iwPlaceName:"SideDrawer_iwPlaceName__2Jb7O",iwHeart:"SideDrawer_iwHeart__2r6fW"}},28:function(e,t,a){e.exports={PlacesBG:"PlacesBG_PlacesBG__1hTJ3",iwPlaceName:"PlacesBG_iwPlaceName__1gJop",iwHeart:"PlacesBG_iwHeart__1-sCM"}},32:function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",faves:"Toolbar_faves__2nh5F"}},36:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK",closeBtn:"Backdrop_closeBtn__g47Hu"}},37:function(e,t,a){e.exports={Faves:"Faves_Faves__1Pbd-",favesList:"Faves_favesList__1sZTe"}},50:function(e,t,a){e.exports={DrawerButton:"DrawerButton_DrawerButton__OU7KX"}},51:function(e,t,a){e.exports=a.p+"static/media/heart-inactive-v2.0e1f1f09.svg"},53:function(e,t,a){e.exports=a.p+"static/media/close-24px.777b93c6.svg"},54:function(e,t,a){e.exports={Auth:"Auth_Auth__1Zul_"}},55:function(e,t,a){e.exports={Search:"Search_Search__2SQmI",touched:"Search_touched__3LI-p"}},56:function(e,t,a){e.exports=a(94)},65:function(e,t,a){},8:function(e,t,a){e.exports=a.p+"static/media/heart-active-v2.be2c63a1.svg"},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),c=a.n(r),l=a(14),i=a(4),s=a(21),u=a(5),m=a(48);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g={map:null,mapRef:null,mapLoaded:!1,mapCenter:{lat:34.1020231,lng:-118.3409712},mapPlaces:[],mapMarkers:[],mapTextLinks:[],infoWindow:null,searchText:"e.g. '90004' or 'Los Angeles, CA'",searchboxClicked:!1,showLogin:!0,showLogout:!1,showAuth:!1,userId:"",userToken:null,userFirebaseData:null,userFaves:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETCENTER":return p({},e,{searchText:t.payload.target.value});case"SEARCHCLICKED":return p({},e,{searchText:"",searchboxClicked:!0});case"UPDATEMAP":var a={lat:t.payload.data.results[0].geometry.location.lat,lng:t.payload.data.results[0].geometry.location.lng};return p({},e,{mapPlaces:[],mapCenter:p({},e.mapCenter,{},a)});case"MAPLOADED":return p({},e,{map:t.payload.map,mapRef:t.payload.mapRef});case"PLACESLOADED":var n=Object(u.a)(e.mapPlaces).concat(t.payload),o=n.filter((function(e,t,a){return null!==e})).filter((function(e,t){return n.indexOf(e)===t}));return p({},e,{mapPlaces:o});case"UPDATEINFOWINDOW":return p({},e,{infoWindow:t.payload});case"UPDATEPLACEITEM":return e.mapPlaces[t.payload[0]].isFav=t.payload[1],p({},e,{mapPlaces:[].concat(Object(u.a)(e.mapPlaces),[e.mapPlaces[t.payload[0]]])});case"SHOWAUTH":return p({},e,{showAuth:t.payload});case"SHOWLOGIN":return p({},e,{showLogin:t.payload});case"SHOWLOGOUT":return p({},e,{showLogout:t.payload});case"FIREBASEAUTHENTICATE":return p({},e,{userId:t.userId,userToken:t.token});case"CLEARUSERTOKEN":return p({},e,{mapPlaces:[],userId:"",userToken:null,showLogin:!0,showLogout:!1,showAuth:!1,userFirebaseData:null,userFaves:[]});case"LOADUSERDATA":var r=t.payload.email,c=t.payload["first-name"],l=t.payload["last-name"];return p({},e,{userFirebaseData:{email:r,firstName:c,lastName:l}});case"LOADUSERFAVES":var i=null;return t.payload["faves-list"]&&(i=Object.keys(t.payload["faves-list"]).map((function(e,a){return t.payload["faves-list"][e]}))),p({},e,{userFaves:i});case"ADDTOFAVES":var s=t.payload.placeId,m=[];return e.userFaves.forEach((function(e,t){e.placeId!==s&&m.push(e)})),p({},e,{userFaves:[].concat(m,[t.payload])});case"DELETEFROMFAVES":var d=e.userFaves.filter((function(a,n){return e.userFaves[n].placeId!==t.payload}));return p({},e,{userFaves:d});default:return e}},h=(a(65),a(17)),v=a(22),E=a(32),y=a.n(E),w=a(8),S=a.n(w),b=Object(h.g)(Object(i.b)((function(e){return{showLogin:e.mapReduce.showLogin,showLogout:e.mapReduce.showLogout}}),(function(e){return{onToggleShowLogin:function(){},onShowAuth:function(t){e({type:"SHOWAUTH",payload:t})},onShowLogin:function(t){e({type:"SHOWLOGIN",payload:t})},onClostAuth:function(){e({type:"CLOSEAUTH"})}}}))((function(e){var t,a=Object(n.useState)(),r=Object(v.a)(a,2)[1],c=function(){r({})};return t=window.location.hash.includes("auth")?"":o.a.createElement("li",{onClick:c},e.showLogin?o.a.createElement(l.b,{to:{pathname:"/auth",showLogin:e.showLogin,showAuth:e.showAuth,buttonName:"login"}},"Login"):o.a.createElement(l.b,{to:{pathname:"/auth",showLogin:e.showLogin,showAuth:e.showAuth,buttonName:"logout"}},"Logout")),o.a.createElement(n.Fragment,null,o.a.createElement("ul",{className:y.a.Toolbar},o.a.createElement("li",{className:y.a.faves},o.a.createElement(l.b,{to:"/faves"},o.a.createElement("img",{src:S.a,alt:"favorites link"}))),t,o.a.createElement("li",null,o.a.createElement(l.b,{to:"/register"},"Register"))))}))),O=a(50),A=a.n(O),I=a(51),L=a.n(I),F=a(13),k=a.n(F),C=Object(i.b)((function(e){return{places:e.mapReduce.mapPlaces}}))((function(e){var t=e.places.filter((function(e,t,a){return null!==e})).map((function(e){return e.name})).filter((function(e,t,a){return a.indexOf(e)===t})),a=e.places.map((function(a,n){if(null!==a&&t.indexOf(a.name)>=0){var r=t.indexOf(a.name),c=a.isFav?o.a.createElement("img",{src:S.a,alt:"is a favorite: ".concat(a.isFav),onClick:function(t){e.heartClick(t,a,n),!0===!!document.getElementsByClassName("heart-img2")[0]&&(document.getElementsByClassName("heart-img2")[0].src=a.isFav?S.a:k.a),!0===!!document.getElementsByClassName("heart-img")[0]&&(document.getElementsByClassName("heart-img")[0].src=a.isFav?S.a:k.a)}}):o.a.createElement("img",{src:L.a,alt:"is a favorite: ".concat(a.isFav),onClick:function(t){e.heartClick(t,a,n),!0===!!document.getElementsByClassName("heart-img2")[0]&&(document.getElementsByClassName("heart-img2")[0].src=a.isFav?S.a:k.a),!0===!!document.getElementsByClassName("heart-img")[0]&&(document.getElementsByClassName("heart-img")[0].src=a.isFav?S.a:k.a)}});return t.splice(r,1),o.a.createElement("li",{key:n,onClick:function(t){return e.click(t,a,n)}},a.name,c)}return!1}));return o.a.createElement("ul",{className:A.a.DrawerButton},a)})),D=a(23),T=a.n(D),P=a(35),_=a.n(P),j={apiKey:"".concat("AIzaSyCtSSwotgEK4IStqnmcQtWmJElFRSGuOjU"),authDomain:"".concat("scavenger-hunt-c-1573007989671",".firebaseapp.com"),databaseURL:"https://".concat("scavenger-hunt-c-1573007989671",".firebaseio.com"),projectId:"".concat("scavenger-hunt-c-1573007989671"),storageBucket:"".concat("scavenger-hunt-c-1573007989671",".appspot.com"),messagingSenderId:"135767068485",appId:"1:135767068485:web:b91617e71e563c02c9f82c"};_.a.initializeApp(j);var U=_.a,N=T.a.create({baseURL:"https://maps.googleapis.com/maps/api"}),R=T.a.create({baseURL:"https://".concat("scavenger-hunt-c-1573007989671",".firebaseio.com")}),x=T.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat("AIzaSyCtSSwotgEK4IStqnmcQtWmJElFRSGuOjU")}),W=(T.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=".concat("AIzaSyCtSSwotgEK4IStqnmcQtWmJElFRSGuOjU")}),a(24)),B=a.n(W),M=Object(i.b)((function(e){return{map:e.mapReduce.map,places:e.mapReduce.mapPlaces,infowin:e.mapReduce.infoWindow}}),(function(e){return{onUpdateInfoWindow:function(t){e({type:"UPDATEINFOWINDOW",payload:t})},onUpdatePlaceItem:function(t,a){e({type:"UPDATEPLACEITEM",payload:[t,a]})},onAddToFaves:function(t){e({type:"ADDTOFAVES",payload:t})},onDeleteFromFaves:function(t){e({type:"DELETEFROMFAVES",payload:t})}}}))((function(e){var t=null,a=function(t,a,n){if(t.preventDefault(),t.stopPropagation(),a.isFav=!a.isFav,!0===a.isFav&&R.patch("/users/"+localStorage.getItem("userId")+"/faves-list/".concat(a.place_id,".json"),{name:a.name,address:a.vicinity,placeId:a.place_id}).then((function(t){e.onAddToFaves(t.data)})),!1===a.isFav){var o=a.place_id;R.delete("/users/"+localStorage.getItem("userId")+"/faves-list/".concat(a.place_id,".json")).then((function(t){e.onDeleteFromFaves(o)}))}e.onUpdatePlaceItem(n,a.isFav)};return o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:B.a.SideDrawer},o.a.createElement(C,{mapPlaces:e.places,click:function(n,o,r){var c=e.map,l=new window.google.maps.Marker({position:{lat:o.geometry.location.lat(),lng:o.geometry.location.lng()},map:e.map,title:o.name});t&&t.close(),e.infowin&&e.infowin.close();var i=e.infowin,s={name:o.name,image:o.photos?o.photos[0].getUrl():null},m=o.isFav?S.a:k.a;i.setContent("<div class=".concat(B.a.infoWin,">\n        <div>\n          <div class=").concat(B.a.iwPlaceName,">").concat(s.name,'</div>\n          <div class="').concat(B.a.iwHeart,'">\n            <img src="').concat(m,'" class="heart-img2">\n          </div>\n        </div>')+(null!==s.image?'<img src="'.concat(s.image,'">'):"")+"</div>"),i.open(c,l),t=i;var d=i.addListener("domready",(function(){window.google.maps.event.removeListener(d);var e=document.querySelectorAll(".gm-style-iw img");Object(u.a)(e).forEach((function(e){e.style.width="100%"})),document.getElementsByClassName("heart-img2")[0].addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),a(e,o,r),e.target.src=o.isFav?S.a:k.a}));var t=document.querySelectorAll(".gm-style-iw button[title=Close]");Object(u.a)(t).forEach((function(e){e.style.right="1px"}));var n=document.querySelectorAll(".gm-style-iw-d");Object(u.a)(n).forEach((function(e){e.style.overflow="unset",e.style.overflowY="hidden"}));var c=document.querySelectorAll(".gm-style-iw-c");Object(u.a)(c).forEach((function(e){e.style.padding="12px",e.style.height="auto",e.style.boxSizing="content-box"}))}),void 0)},heartClick:a})))})),H=function(e){return o.a.createElement(n.Fragment,null,o.a.createElement(b,null),o.a.createElement(M,null),e.children)},q=a(36),z=a.n(q),G=a(53),K=a.n(G),V=function(e){return e.show?o.a.createElement("div",{className:z.a.Backdrop,onClick:e.closeModal},o.a.createElement(l.b,{to:"/",className:z.a.closeBtn},o.a.createElement("img",{src:K.a,alt:"close modal button"}))):null},J=a(37),Q=a.n(J),X=Object(i.b)((function(e){return{userData:e.mapReduce.userFirebaseData,faves:e.mapReduce.userFaves,userToken:e.mapReduce.userToken}}),(function(e){return{}}))((function(e){var t=e.faves.map((function(t,a){return o.a.createElement("li",{key:a},o.a.createElement("div",null,e.faves[a].name),o.a.createElement("div",null,e.faves[a].address))}));return o.a.createElement("div",{className:Q.a.Faves},o.a.createElement("div",{className:Q.a.favesList},o.a.createElement("h2",null,"Faves"),o.a.createElement("ul",null,t),null===e.userToken?o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{onClick:function(){e.history.push("/auth")}},"LOGIN")," ",o.a.createElement("span",null,"to load/save your favorites")):null),o.a.createElement(V,{show:!0}))})),Z=a(54),Y=a.n(Z),$=Object(i.b)((function(e){return{faves:e.mapReduce.userFaves}}),(function(e){return{onShowAuth:function(t){e({type:"SHOWAUTH",payload:t})},onShowLogin:function(t){e({type:"SHOWLOGIN",payload:t})},onShowLogout:function(t){e({type:"SHOWLOGOUT",payload:t})},onFirebaseAuthenticate:function(t,a){e({type:"FIREBASEAUTHENTICATE",payload:{token:t,userId:a}})},onClearUserToken:function(){U.auth().signOut(),e({type:"CLEARUSERTOKEN"})},onLoadUserData:function(t){e({type:"LOADUSERDATA",payload:t})},onLoadUserFaves:function(t){e({type:"LOADUSERFAVES",payload:t})}}}))((function(e){"logout"===e.location.buttonName&&(e.onShowAuth(!1),e.onShowLogin(!0),e.onShowLogout(!1),localStorage.removeItem("token"),localStorage.removeItem("expiresInDate"),localStorage.removeItem("userId"),localStorage.removeItem("email"),e.onClearUserToken(),e.history.push("/"));var t=Object(n.useState)(""),a=Object(v.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(""),i=Object(v.a)(l,2),s=i[0],m=i[1],d=function(t,a){t.preventDefault(),"login"===a&&x.post("",{email:r,password:s,returnSecureToken:!0}).then((function(t){var a=new Date((new Date).getTime()+1e3*t.data.expiresIn);localStorage.setItem("token",t.data.idToken),localStorage.setItem("expiresInDate",a),localStorage.setItem("userId",t.data.localId),localStorage.setItem("email",t.data.email),e.onFirebaseAuthenticate(t.data.idToken,t.data.localId),e.onShowLogin(!1),e.onShowLogout(!0),e.history.push("/")})).then((function(){return R.get("/users/"+localStorage.getItem("userId")+".json")})).then((function(t){e.onLoadUserData(t.data);var a=null,n={};return t.data["faves-list"]?(a=Object.keys(t.data["faves-list"]).map((function(e,a){return t.data["faves-list"][e]})).concat(Object(u.a)(e.faves))).filter((function(e,t){return a.indexOf(e)===t})):a=Object(u.a)(e.faves),a.forEach((function(e,t,a){var o=e.placeId;n[o]=e})),R.patch("/users/"+localStorage.getItem("userId")+".json",{"faves-list":n})})).then((function(t){e.onLoadUserFaves(t.data)})).catch((function(e){console.log(e)})),"logout"===a&&(localStorage.removeItem("token"),localStorage.removeItem("expiresInDate"),localStorage.removeItem("userId"),localStorage.removeItem("email"),e.onClearUserToken(),e.onShowLogin(!0),e.onShowLogout(!1),e.history.push("/"))},p=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{type:"text",id:"email",name:"email",placeholder:"Email",value:r,required:!0,onChange:function(e){c(e.target.value)}}))),o.a.createElement("div",null,o.a.createElement("label",null,o.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Password",value:s,required:!0,onChange:function(e){m(e.target.value)}}))),o.a.createElement("button",{type:"submit",onClick:function(e){return d(e,"login")}},"Submit"));return!0===!!localStorage.getItem("token")&&(e.onShowLogout(!0),p=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("h2",null,"Already logged in with ",localStorage.getItem("email"),". Need to login as a different user? Logout out first:")),o.a.createElement("button",{type:"submit",onClick:function(e){return d(e,"logout")}},"Logout"))),o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{className:Y.a.Auth},p),o.a.createElement(V,{show:!0,closeModal:function(){e.onShowAuth(!1),!0===!!localStorage.getItem("token")?(e.onShowLogin(!1),e.onShowLogout(!0)):(e.onShowLogin(!0),e.onShowLogout(!1))}})," ")})),ee=function(e){return o.a.createElement("div",null,"Register")},te=a(55),ae=a.n(te),ne=Object(i.b)((function(e){return{center:e.mapReduce.searchText,searchClicked:e.mapReduce.searchboxClicked}}),(function(e){return{onSetCenter:function(t){e({type:"SETCENTER",payload:t})},onSearchClicked:function(t){e({type:"SEARCHCLICKED"})},onCheckEntered:function(t,a){if("Enter"===t.key||"ENTER"===t.key){var n="/geocode/json?address="+a+"&key=AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA";N.get(n).then((function(t){e({type:"UPDATEMAP",payload:t})})).catch((function(t){e({type:"UPDATEMAPFAILED"})}))}}}}))((function(e){return o.a.createElement("div",{className:ae.a.Search},o.a.createElement("input",{type:"text",onChange:e.onSetCenter,onKeyPress:function(t){return e.onCheckEntered(t,e.center)},onClick:function(){e.searchClicked||e.onSearchClicked()},value:e.center}))})),oe=a(28),re=a.n(oe),ce=Object(i.b)((function(e){return{map:e.mapReduce.map,places:e.mapReduce.mapPlaces,infowin:e.mapReduce.infoWindow}}),(function(e){return{onUpdateInfoWindow:function(t){e({type:"UPDATEINFOWINDOW",payload:t})}}}))((function(e){var t=null;return Object(n.useEffect)((function(){e.places.forEach((function(a,n){if(null!==a){var o={url:"https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png",size:new window.google.maps.Size(23,36.8),scaledSize:new window.google.maps.Size(23,36.8)},r=new window.google.maps.Marker({position:{lat:a.geometry.location.lat(),lng:a.geometry.location.lng()},icon:o,map:e.map,title:a.name});window.google.maps.event.addListener(r,"click",(function(){t&&t.close(),e.infowin&&e.infowin.close();var o=a.isFav?S.a:k.a,c=e.infowin,l={name:a.name,image:a.photos?a.photos[0].getUrl():null};c.setContent("<div class=".concat(re.a.PlacesBG,">\n              <div>\n                <div class=").concat(re.a.iwPlaceName,">").concat(l.name,'</div>\n                <div class="').concat(re.a.iwHeart,'">\n                  <img src="').concat(o,'" class="heart-img">\n                </div>\n              </div>')+(null!==l.image?'<div class="iw-place-img"><img src="'.concat(l.image,'"></div>'):"")+"</div>"),c.open(e.map,r),t=c;var i=c.addListener("domready",(function(){window.google.maps.event.removeListener(i);var t=document.querySelectorAll(".gm-style-iw img");Object(u.a)(t).forEach((function(e){e.style.width="100%"})),document.getElementsByClassName("heart-img")[0].addEventListener("click",(function(t){e.heartClick(t,a,n),t.target.src=a.isFav?S.a:k.a}));var o=document.querySelectorAll(".gm-style-iw button[title=Close]");Object(u.a)(o).forEach((function(e){e.style.right="1px"}));var r=document.querySelectorAll(".gm-style-iw-d");Object(u.a)(r).forEach((function(e){e.style.overflow="unset",e.style.overflowY="hidden"}));var c=document.querySelectorAll(".gm-style-iw-c");Object(u.a)(c).forEach((function(e){e.style.padding="12px",e.style.height="auto",e.style.boxSizing="content-box"}))}),this)}))}}))})),o.a.createElement("p",null,"Some places.")})),le=Object(i.b)((function(e){return{center:e.mapReduce.mapCenter}}),(function(e){return{onMapLoaded:function(t,a,n){e({type:"MAPLOADED",payload:{map:t,mapRef:a}});var o=new window.google.maps.LatLng(n);["amusement_park","art_gallery","bar","book_store","cafe","museum","tourist_attraction"].forEach((function(a){var n={location:o,radius:"500",type:""};n.type=a,n.type,new window.google.maps.places.PlacesService(t).nearbySearch(n,(function(t){e({type:"PLACESLOADED",payload:t})}))}))},onUpdateInfoWindow:function(t){e({type:"UPDATEINFOWINDOW",payload:t})},onUpdatePlaceItem:function(t,a){e({type:"UPDATEPLACEITEM",payload:[t,a]})},onAddToFaves:function(t){e({type:"ADDTOFAVES",payload:t})},onDeleteFromFaves:function(t){e({type:"DELETEFROMFAVES",payload:t})}}}))((function(e){var t={ref:Object(n.useRef)(),className:e.className},a=function(){var a=new window.google.maps.Map(t.ref.current,{center:e.center,zoom:17}),n=new window.google.maps.InfoWindow({maxWidth:300});e.onMount&&e.onMount(a),e.onMapLoaded(a,t.ref,e.center),e.onUpdateInfoWindow(n)};return Object(n.useEffect)((function(){if(!window.google){var e=document.createElement("script");e.type="text/javascript",e.src="https://maps.google.com/maps/api/js?key=".concat("AIzaSyBSqWAWnXdkeCMI9gUZihf5WLVWQz-3UMA","&libraries=places");var t=document.getElementsByTagName("script")[0];return t.parentNode.insertBefore(e,t),e.addEventListener("load",a),function(){return e.removeEventListener("load",a)}}a()})),o.a.createElement(n.Fragment,null,o.a.createElement("div",Object.assign({},t,{style:{height:"calc(100vh - 60px)"}})),o.a.createElement(ce,{heartClick:function(t,a,n){if(t.preventDefault(),t.stopPropagation(),a.isFav=!a.isFav,!0===a.isFav&&R.patch("/users/"+localStorage.getItem("userId")+"/faves-list/".concat(a.place_id,".json"),{name:a.name,address:a.vicinity,placeId:a.place_id}).then((function(t){e.onAddToFaves(t.data)})),!1===a.isFav){var o=a.place_id;R.delete("/users/"+localStorage.getItem("userId")+"/faves-list/".concat(a.place_id,".json")).then((function(t){e.onDeleteFromFaves(o)}))}e.onUpdatePlaceItem(n,a.isFav)}}))})),ie=(a(93),Object(i.b)(null,(function(e){return{onClearUserToken:function(){U.auth().signOut(),e({type:"CLEARUSERTOKEN"})}}}))((function(e){!1===!!U.auth().currentUser&&(localStorage.removeItem("token"),localStorage.removeItem("expiresInDate"),localStorage.removeItem("userId"),localStorage.removeItem("email"),e.onClearUserToken());var t=o.a.createElement(h.d,null,o.a.createElement(h.b,{path:"/faves",component:X}),o.a.createElement(h.b,{path:"/auth",component:$}),o.a.createElement(h.b,{path:"/register",component:ee}),o.a.createElement(h.b,{path:"/",exact:!0,render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ne,null),o.a.createElement(le,null))}}),o.a.createElement(h.a,{to:"/"}));return o.a.createElement("div",null,o.a.createElement(H,null,t))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=Object(s.b)({mapReduce:f}),ue=Object(s.c)(se);c.a.render(o.a.createElement(i.a,{store:ue},o.a.createElement(l.a,{basename:"/neighborhood-map-touristy-things/#"},o.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[56,1,2]]]);
//# sourceMappingURL=main.1aa0249e.chunk.js.map