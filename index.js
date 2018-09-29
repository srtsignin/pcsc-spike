const pcsc = require('pcsclite')();

console.log(pcsc);

pcsc.on('reader', function(reader) {
    // console.log('Reader ' + reader.name + ' found');
    console.log(reader.SCARD_STATE_PRESENT);

    reader.on('error', function(err) {
        console.log(err.message)
    });

    reader.on('status', function(status) {
        console.log(status)
    });


});