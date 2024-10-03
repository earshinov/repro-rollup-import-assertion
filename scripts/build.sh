#!/bin/bash

yarn run rollup -c --configPlugin='typescript2={tsconfig: "tsconfig.dev.json", clean: true, verbosity: 3}'
