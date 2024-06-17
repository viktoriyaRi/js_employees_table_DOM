document.addEventListener("DOMContentLoaded",function(){var e=function(e,n){a.className="notification ".concat(n),a.innerText=e,setTimeout(function(){a.className="",a.innerText=""},5e3)},n=document.querySelector("table"),t=n.querySelectorAll("th"),a=document.createElement("div");a.setAttribute("data-qa","notification"),document.body.appendChild(a);var r=1,o=document.createElement("form");o.classList.add("new-employee-form"),o.innerHTML='\n    <label>\n      Name:\n      <input type="text" name="newName" data-qa="name" required>\n    </label>\n    <label>\n      Position:\n      <input type="text" name="newPosition" data-qa="position" required>\n    </label>\n    <label>\n      Office:\n      <select name="newOffice" data-qa="office" required>\n        <option value="Tokyo">Tokyo</option>\n        <option value="Singapore">Singapore</option>\n        <option value="London">London</option>\n        <option value="New York">New York</option>\n        <option value="Edinburgh">Edinburgh</option>\n        <option value="San Francisco">San Francisco</option>\n      </select>\n    </label>\n    <label>\n      Age:\n      <input type="number" name="newAge" data-qa="age" required>\n    </label>\n    <label>\n      Salary:\n      <input type="number" name="newSalary" data-qa="salary" required>\n    </label>\n    <button type="submit">Save to table</button>\n  ',document.body.appendChild(o),t.forEach(function(e,t){e.addEventListener("click",function(){var e=Array.from(n.querySelectorAll("tbody tr"));e.sort(function(e,n){var a=e.children[t].innerText,o=n.children[t].innerText;return a.localeCompare(o,void 0,{numeric:!0})*r}),r*=-1,e.forEach(function(e){return n.querySelector("tbody").appendChild(e)})})}),n.querySelectorAll("tbody tr").forEach(function(e){e.addEventListener("click",function(){n.querySelectorAll("tr").forEach(function(e){return e.classList.remove("active")}),e.classList.add("active")})}),o.addEventListener("submit",function(t){t.preventDefault();var a=o.querySelector("[name='newName']").value.trim(),r=o.querySelector("[name='newPosition']").value.trim(),i=o.querySelector("[name='newOffice']").value.trim(),l=o.querySelector("[name='newAge']").value.trim(),c=o.querySelector("[name='newSalary']").value.trim();if(a.length<4){e("Name must have at least 4 characters","error");return}if(r.length<1){e("Position is required","error");return}if(l<18||l>90){e("Age must be between 18 and 90","error");return}var u=document.createElement("tr");u.innerHTML="\n      <td>".concat(a,"</td>\n      <td>").concat(r,"</td>\n      <td>").concat(i,"</td>\n      <td>").concat(l,"</td>\n      <td>").concat("$"+Number(c).toLocaleString(),"</td>\n    "),n.querySelector("tbody").appendChild(u),o.reset(),e("Employee added successfully","success"),u.addEventListener("click",function(){n.querySelectorAll("tr").forEach(function(e){return e.classList.remove("active")}),u.classList.add("active")})}),n.addEventListener("dblclick",function(e){if("TD"===e.target.tagName){var n=e.target,t=document.createElement("input");t.value=n.innerText,t.className="cell-input",n.innerHTML="",n.appendChild(t),t.addEventListener("blur",function(){n.innerText=t.value}),t.addEventListener("keypress",function(e){"Enter"===e.key&&(n.innerText=t.value)})}})});
//# sourceMappingURL=index.b5e5ab5b.js.map
