/*
 * Copyright (C) 2021 Aleksei Batiuta
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const SCRIPT_NAME = 'shopify-inteo';
const SCRIPT_TAG_NAME = 'script';
const SERVER_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd91wQ49vVgqxps07pXayOlXjwJMPo29mynT1RNrgXauFaxlg/formResponse';
const SERVER_ARG_FIRST = 'entry.1363469278';
const PARAMETER_UID_NAME = 'uid';

const UID = (function () {
    const currentScript = document.currentScript || (function () {
        let scripts = document.getElementsByTagName(SCRIPT_TAG_NAME);
        for (let i = 0; i < scripts.length; i++) {
            let item = scripts[i];
            if (item.src.includes(SCRIPT_NAME)) {
                return item;
            }
        }
        return null;
    })();
    if (currentScript) {
        const url = new URL(currentScript.src);
        return url.searchParams.get(PARAMETER_UID_NAME)
    }
    return null;
})();

function loadDoc() {
    try {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("POST", SERVER_URL, true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send(SERVER_ARG_FIRST + '=' + Date.now());
    } catch (e) {
        // console(e);
    }
}
