/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
Copyright 2012 Mozilla Foundation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* globals chrome */

'use strict';

function isPdfDownloadable(details) {
  return details.url.indexOf('pdfjs.action=download') >= 0;
}

function insertPDFJSForTab(tabId, url) {
  chrome.tabs.executeScript(tabId, {
    file: 'insertviewer.js',
    allFrames: true,
    runAt: 'document_start'
  }, function() {
    chrome.tabs.sendMessage(tabId, {
      type: 'showPDFViewer',
      url: url
    });
  });
}
function activatePDFJSForTab(tabId, url) {
      insertPDFJSForTab(tabId, url);
      //chrome.tabs.onUpdated.removeListener(listener);
	  /*
  chrome.tabs.onUpdated.addListener(function listener(_tabId) {
    if (tabId === _tabId) {
      insertPDFJSForTab(tabId, url);
      chrome.tabs.onUpdated.removeListener(listener);
    }
  });
  */
}
chrome.browserAction.onClicked.addListener(function(tab){
	//activatePDFJSForTab(tab.id, tab.url);
	var isPDF = function(){
		return document.querySelector('embed[type="application/pdf"]')
	}
	chrome.tabs.executeScript(null, {code : 'var a =' + isPDF.toString() + "();a"}, function(result){
		if (result && result[0]){
			activatePDFJSForTab(tab.id, tab.url);
		}else{
			chrome.tabs.executeScript(null, {file: "js/test.js"});
		}
	});
});
