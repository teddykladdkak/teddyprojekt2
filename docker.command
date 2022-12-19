#!/bin/bash

docker run -d --name="TeDDy-Projekt" --restart unless-stopped --volume="$PWD:/srv/jekyll" --publish 4000:4000 jekyll/jekyll jekyll serve