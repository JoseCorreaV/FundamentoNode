const sharp = require('sharp')


sharp('image.jpg') 
.resize(80, 80) // reduce la imagen a 80x80
.toFile('image_80x80.jpg'); // lo guardara en una imagen mas pequeña sin eliminr la original.