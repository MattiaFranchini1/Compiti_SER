path = require('path');

module.exports = function (cartella, estensione, callback) {
    var fs = require('fs');
    
    fs.readdir(cartella, function(err, data) {
        if(err) return callback(err, data);
        
        var file = new Array();
        for(var i = 0; i < data.length; i++) {
            if("." + estensione == path.extname(data[i])) {
                file.push(path.basename(data[i]));
            }
        }
        
        callback(null, file);
    });
}
