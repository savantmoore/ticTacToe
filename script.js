function getClickedElement(e) {
               if (e.path) { // chrome
                   return e.path[0];
               }
               if (e.explicitOriginalTarget) { // firefox
                   return e.explicitOriginalTarget;
               }
               if (e.target) { // edge, internet explorer
                   return e.target;
               }
               console.error("can't find element!");
           }
           var x = "x", o = "o";
           var current = x;
           board.onclick = function(e) {
               var td = getClickedElement(e);
               if (td && !td.clicked) {
                   td.clicked = true;
                   td.innerText = current;
                   current = current==x?o:x;
               }
           };
