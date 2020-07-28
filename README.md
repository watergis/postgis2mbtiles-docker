# postgis2mbtiles-docker
![GitHub](https://img.shields.io/github/license/watergis/postgis2mbtiles-docker)
![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/watergis/postgis2mbtiles-docker)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/watergis/postgis2mbtiles-docker)

This is postgis2mbtiles for Docker

## Configuration
All the settings are in `config.js`, so please make sure your own settings on this file before producing vector tile.

Please put environment variable for database settings.
```
db_user=$db_user
db_password=$db_password
db_host=host.docker.internal
db_post=5432
```

## Usage (Docker)

```
db_user=your user db_password=your password docker-compose up
```

Your mbtiles will be generated under `data` directory.

## Usage (Nodejs)

### Requirements

This module uses [`tippecanoe`](https://github.com/mapbox/tippecanoe) to convert geojson files to mbtiles. Please make sure to install it before running.

for MacOS
```
$ brew install tippecanoe
```

for Ubuntu
```
$ git clone https://github.com/mapbox/tippecanoe.git
$ cd tippecanoe
$ make -j
$ make install
```

Then,

```
$ npm install

$ db_user=$db_user \
  db_password=$db_password \
  db_host=localhost \
  db_port=5432 \
  npm run build
```
