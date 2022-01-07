#!/bin/sh

BASE_DIR=`dirname $0`

PLUGIN_DIR="$BASE_DIR/plugins"
FIG_PLUGIN="fig-plugin"

FAILED=0

for plugin in $(ls $PLUGIN_DIR); do
    RESULT="$($FIG_PLUGIN verify-toml $PLUGIN_DIR/$plugin)"
    if [ $? -ne 0 ]; then
        echo "Plugin $plugin failed validation"
        echo "$RESULT"
        FAILED=1
    fi
done

if [ $FAILED -eq 0 ]; then
    echo "All plugins passed validation"
fi

if [ $FAILED -ne 0 ]; then
    exit 1
fi
