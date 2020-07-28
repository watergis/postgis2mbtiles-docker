const {postgis2mbtiles} = require('@watergis/postgis2mbtiles');
const config = require('./config');

const generate = async () =>{
    console.time('postgis2mbtiles');
    const pg2mbtiles = new postgis2mbtiles(config);
    const file = await pg2mbtiles.run()
    console.log(`mbtiles was generated: ${file}`);
    console.timeEnd('postgis2mbtiles');
};

module.exports = generate();