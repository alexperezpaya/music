var parse = require(__dirname + '/echarsparser');
var id3 = require('id3-writer');
var writer = new id3.Writer();

var file = new id3.File(__dirname + '/your.mp3');
var meta = new id3.Meta({
    artist: parse('Tiësto'),
    title: parse('Tieêsto'),
    album: parse('Tiéstoç')
});

writer.setFile(file).write(meta, function(err) {

    if (err) {
        console.log(err);
    }

    // Done
});