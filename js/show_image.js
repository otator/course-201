'use strict';
var programmingLanguages = ['C++', 'C#', 'JavaScript', 'Java', 'Python'];
for(var i=0; i<programmingLanguages.length;i++){
  document.write('<table> <tr> <td> <img src ="img/img-' + (i+1) + '.png" alt =" ' + programmingLanguages[i] + 
  'logo" width="200px"/></td><td style="font-size:22px; font-weight:bold">' + programmingLanguages[i] +'</td></tr></table>');
}
