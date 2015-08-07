function parseHashBangArgs(aURL) {
    aURL = aURL || window.location.href;

    var vars = {};
    var hashes = aURL.slice(aURL.indexOf('#') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
        var hash = hashes[i].split('=');

        if(hash.length > 1) {
            vars[hash[0]] = hash[1];
        } else {
            vars[hash[0]] = null;
        }      
    }

    return vars;
}

function treeview(selector, content, querySelector) {
    
    var parser = new DOMParser();
    var doc = parser.parseFromString(content, "text/html");
    
    function matchesSelector(selector, element) { 
        var nodeList = doc.querySelectorAll(selector);
        
        for ( var i=0 ; i < nodeList.length; i++ ) {
            if (nodeList[i] == element) {
                return true;
            }; 
        }
        
        return false; 
    }

    var tree_content = "";
    
    var parseElement = function(elem, parent){
        
        if (querySelector) {
            
            if (matchesSelector(querySelector, elem)) {
                tree_content+='<a href="#" class="selected"> &lt;'+elem.tagName+'&gt;</a>'
            } else {
                tree_content+='<a href="#"> &lt;'+elem.tagName+'&gt;</a>'
            }
            
        } else {
            tree_content+='<a href="#"> &lt;'+elem.tagName+'&gt;</a>'
        }
    }
    
    var parseChildren = function(elem, parent){
        var enfants = elem.children;
        
        
        if (!enfants) {
            tree_content+='<li>';
            parseElement(elem, parent);            
            tree_content+='</li>';
            
        } else {
            
            tree_content+='<li>';
                parseElement(elem, parent);
                
                if (enfants.length > 0) {
                    tree_content+='<ul>';

                    for (var i = 0; i < enfants.length; i++) {
                        parseChildren(enfants[i], elem);  
                    }

                    tree_content+='</ul>';
                }
                    
            tree_content+='</li>';
            
        }
        
    }
    
    
    parseChildren(doc.documentElement, undefined);
    
    $(selector).html("<ul>"+tree_content+"</ul>");

}
