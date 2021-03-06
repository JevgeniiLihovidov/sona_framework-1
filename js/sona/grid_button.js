/*! Kizzy - a cross-browser LocalStorage API
  * Copyright: Dustin Diaz 2011
  * https://github.com/ded/kizzy
  * License: MIT
  */
!function(a,b,c,d){function F(a){return new E(a)}function E(a){this.ns=a,this._=JSON.parse(o(a)||"{}")}function D(){this._={}}function C(){while(l.firstChild)l.removeChild(l.firstChild);j.save(d)}function B(a){y(a)&&l.removeChild(node),j.save(d)}function A(a,b){var c=y(a);c?c.setAttribute("value",b):(c=k.createNode(1,"item",""),c.setAttribute("key",a),c.setAttribute("value",b),l.appendChild(c)),j.save(d);return b}function z(a){var b=y(a),c=null;b&&(c=b.getAttribute("value"));return c}function y(a){var b=l.childNodes,c,d=null;for(var e=0,f=b.length;e<f;e++){c=b.item(e);if(c.getAttribute("key")==a){d=c;break}}return d}function x(){c.clear()}function w(a){delete c[a]}function v(a,b){c[a]=b;return b}function u(a){return c[a]}function t(a){return typeof a=="number"&&isFinite(a)}function s(a,b){a._[b]&&a._[b].e&&a._[b].e<r()&&a.remove(b)}function r(){return+(new Date)}function e(){}var f,g=0,h=function(){return 1};try{f=!!c||!!globalStorage,c=c||globalStorage[d],g=1}catch(i){g=0;try{if(b.documentElement.addBehavior){g=0,f=1;var j=b.documentElement;j.addBehavior("#default#userData"),j.load(d);var k=j.xmlDocument,l=k.documentElement}}catch(m){f=!1}}var n=e,o=e,p=e,q=e;f&&(n=g?v:A,o=g?u:z,p=g?w:B,q=g?x:C,h=function(a){try{n(a.ns,JSON.stringify(a._));return 1}catch(b){return 0}}),D.prototype={set:function(a,b,c){this._[a]={value:b,e:t(c)?r()+c:0},h(this)||this.remove(a);return b},get:function(a){s(this,a);return this._[a]?this._[a].value:undefined},remove:function(a){delete this._[a],h(this)},clear:function(){this._={},h(this)}},E.prototype=D.prototype,F.remove=p,F.clear=q,a.kizzy=F,typeof module!="undefined"&&module.exports&&(module.exports.cache=F)}(this,document,localStorage,document.domain)
var cache = kizzy('grid');

(function(){
    $(document).ready(function() {
      // Create, show and hide the grid
      $('body').append('<div id="grid-overlay"></div>')
               .append('<a href="#" class="toggle-grid" style="-moz-transition-property: color; -webkit-transition-property: color; -o-transition-property: color;transition-property: color;-moz-transition-duration: 0.5s;-webkit-transition-duration: 0.5s;-o-transition-duration: 0.5s;transition-duration: 0.5s;position: absolute;top: 10px;right: 10px;color: white;display: block;font-size: 12px;line-height: 16px;padding-right: 22px;text-decoration: none;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAARElEQVQ4jWNgwAL+//9PlBgDAwMDC0weTZyRWDEmrMaSAAbeAEZcgUMq+I+MoYYSFGNgGAxhMBqIg8EAWG5kxCJHlBgAXYwy8AqHNR8AAAAASUVORK5CYII=) no-repeat right 50%;"><span class="show">Show Grid</span><span class="hide">Hide Grid</span></a>');
      $('.toggle-grid .hide').hide();

      var show = function() {
        $('#grid-overlay').show();
        $('.toggle-grid .hide').show();
        $('.toggle-grid .show').hide();
        cache.set('show_grid', true);
      }, hide = function() {
        $('#grid-overlay').hide();
        $('.toggle-grid .hide').hide();
        $('.toggle-grid .show').show();
        cache.set('show_grid', false);
      }, toggle = function(){
          if (cache.get('show_grid')){
              hide();
          }else{
              show();
          }
      }
      
      $('a.toggle-grid').toggle(show, hide);
      if (cache.get('show_grid')) {
        show();        
      }

      $(document).keydown(function(e){
        if (e.keyCode == 191) { 
          toggle()
          return false;
        }
      });

    });    
})()
