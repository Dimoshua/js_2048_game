var e=document.querySelector(".button"),r=document.querySelector(".message-start"),t=document.querySelector(".message-lose"),n=document.querySelector(".message-win"),o=document.querySelector(".game-score"),a=document.querySelectorAll(".field-cell"),c=0,s=Array.from({length:4},function(){return[,,,,].fill(0)});function i(){var e;c=0,o.textContent=c,r.classList.remove("hidden"),t.classList.add("hidden"),n.classList.add("hidden"),e=[],s.forEach(function(r,t){r.forEach(function(r,n){e.push({row:t,col:n})})}),e.forEach(function(e){var r=e.row,t=e.col;s[r][t]=0})}function f(){var e=[];if(s.forEach(function(r,t){r.forEach(function(r,n){0===r&&e.push({row:t,col:n})})}),e.length>0){var r=e[Math.floor(Math.random()*e.length)],t=r.row,n=r.col;s[t][n]=.9>Math.random()?2:4,u()}}function u(){s.forEach(function(e,r){e.forEach(function(e,t){var n=a[4*r+t];n.textContent=e>0?e:"",n.className="field-cell field-cell--".concat(e)})})}function l(e){var r=!1;function a(){s=s[0].map(function(e,r){return s.map(function(e){return e[r]})}).reverse()}function i(e){for(var r=e.filter(function(e){return 0!==e}),t=[],n=0;n<r.length;n++)if(n<r.length-1&&r[n]===r[n+1]){var o=2*r[n];t.push(o),c+=o,n++}else t.push(r[n]);for(;t.length<e.length;)t.push(0);return t}switch(e){case"up":a();for(var l=0;l<4;l++){var h=i(s[l]);r||d(h,s[l])||(r=!0),s[l]=h}a(),a(),a();break;case"down":a(),a(),a();for(var v=0;v<4;v++){var m=i(s[v]);r||d(m,s[v])||(r=!0),s[v]=m}a();break;case"left":for(var g=0;g<4;g++){var w=i(s[g]);r||d(w,s[g])||(r=!0),s[g]=w}break;case"right":a(),a();for(var L=0;L<4;L++){var p=i(s[L]);r||d(p,s[L])||(r=!0),s[L]=p}a(),a()}r&&(u(),o.textContent=c,f(),!function(){for(var e=0;e<4;e++)for(var r=0;r<4;r++)if(0===s[e][r]||e<3&&s[e][r]===s[e+1][r]||r<3&&s[e][r]===s[e][r+1])return!0;return!1}()&&t.classList.remove("hidden"),s.flat().includes(2048)&&n.classList.remove("hidden"))}function d(e,r){if(e.length!==r.length)return!1;for(var t=0;t<e.length;t++)if(e[t]!==r[t])return!1;return!0}document.addEventListener("keydown",function(e){if(e.preventDefault(),r.classList.contains("hidden"))switch(e.key){case"ArrowUp":l("up");break;case"ArrowDown":l("down");break;case"ArrowLeft":l("left");break;case"ArrowRight":l("right")}}),e.addEventListener("click",function(){i(),e.classList.remove("start"),e.classList.add("restart"),e.textContent="Restart",r.classList.add("hidden"),f(),f()}),i();
//# sourceMappingURL=index.8aa74613.js.map
