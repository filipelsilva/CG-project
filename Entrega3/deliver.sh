#/bin/env bash
shopt -s extglob

mv js/main.js js/main.bak.js
cat js/!(three.js|VRButton.js) > js/main.js

rm -f G40-Alameda.zip
zip -r G40-Alameda.zip Entrega3.pdf index.html js/three.js js/main.js js/VRButton.js media/pause_menu.png media/origami.jpg

mv js/main.bak.js js/main.js
