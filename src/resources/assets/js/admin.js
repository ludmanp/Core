/**
 * jQuery
 */
window.$ = window.jQuery = require('jquery');

/**
 * Bootstrap
 */
require('bootstrap');

/**
 * Dropzone
 */
window.Dropzone = require('dropzone');

/**
 * Vue
 */
import Vue from 'vue';
window.Vue = Vue;
import { DraggableTree } from 'vue-draggable-nested-tree';
window.DraggableTree = DraggableTree;
import SlVueTree from 'sl-vue-tree';
window.SlVueTree = SlVueTree;

import ItemList from './components/ItemList.js';
if (document.getElementById('itemList')) {
    new Vue(ItemList);
}

/**
 * Alertify
 */
window.alertify = require('alertify.js');

/**
 * Selectize
 */
require('selectize');

/**
 * All files in /reources/assets/js/admin
 */
var req = require.context('../../../resources/assets/js/admin', true, /^(.*\.(js$))[^.]*$/im);
req.keys().forEach(function(key) {
    req(key);
});
