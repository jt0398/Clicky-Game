(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"images/aragorn.jpg","clicked":false},{"id":2,"image":"images/arwen.jpg","clicked":false},{"id":3,"image":"images/frodo.png","clicked":false},{"id":4,"image":"images/gandalf.jpg","clicked":false},{"id":5,"image":"images/gimli.png","clicked":false},{"id":6,"image":"images/gollum.jpg","clicked":false},{"id":7,"image":"images/legolas.png","clicked":false},{"id":8,"image":"images/merry.jpg","clicked":false},{"id":9,"image":"images/pippin.jpg","clicked":false},{"id":10,"image":"images/samwise.jpg","clicked":false},{"id":11,"image":"images/sauron.jpg","clicked":false},{"id":12,"image":"images/witchking.png","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),i=t(3),n=t.n(i),s=t(4),l=t(5),o=t(7),m=t(6),g=t(8);t(14);var d=function(e){return r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item px-5"},e.message?"You guessed "+e.message:"Click an image to begin"),r.a.createElement("li",{className:"nav-item"},"Score: ",e.score),r.a.createElement("li",{className:"nav-item"},"|"),r.a.createElement("li",{className:"nav-item"},"Top Score ",e.topScore))};t(15);var u=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Clicky Game"),r.a.createElement(d,{message:e.message,score:e.score,topScore:e.topScore})))},p={columnCount:"4"};function f(e){var a=e.children;return r.a.createElement("div",{className:"card-columns",style:p},a)}function h(e){var a=e.children;return r.a.createElement("div",{className:"container my-5"},a)}t(16);var k=function(e){return r.a.createElement("div",{className:"card shadow-sm","data-id":e.id,onClick:e.onClick},r.a.createElement("img",{src:e.image,alt:"...",className:"img-thumbnail"}))},v=t(1),E=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,message:"",sortedCharacters:[]},t.handleCharClick=function(e){if(v[e-1].clicked){var a=t.state.topScore;t.state.score>a&&(a=t.state.score),t.setState({message:"incorrectly",score:0,topScore:a})}else v[e-1].clicked=!0,t.setState((function(e,a){return{score:e.score+1,message:"correctly"}}));t.loadCharacters()},t.loadCharacters=function(){for(var e=[],a=[],c=0;c<12;c++)0===t.state.score&&(v[c].clicked=!1),e.push(c);for(;e.length>0;){var r=Math.floor(Math.random()*e.length),i=e.splice(r,1);a.push(v[i])}t.setState({sortedCharacters:a})},t}return Object(g.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadCharacters()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u,{message:this.state.message,score:this.state.score,topScore:this.state.topScore}),r.a.createElement(h,null,r.a.createElement(f,null,this.state.sortedCharacters.map((function(a){return r.a.createElement(k,{key:a.id,id:a.id,image:a.image,onClick:function(){return e.handleCharClick(a.id)}})})))))}}]),a}(r.a.Component);n.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.90914d36.chunk.js.map