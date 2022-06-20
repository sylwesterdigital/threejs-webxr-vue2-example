#!/bin/sh
me="$(basename "$(test -L "$0" && readlink "$0" || echo "$0")")"


echo $0
echo "arguments: "$#
folder_path="$(pwd)"

if [ -z "$1" ]
  then
    echo "Provide exactly 1 argument, i.e.: "$me" dist/1" 
    exit 1
fi


P="$(pwd)"

#echo ${P}'/dist/'

echo 'destination: '${P}'/'$1

dest=${P}'/'$1

rsync\
 -av --rsh='ssh -p18021'\
  --exclude='.DS_Store'\
   --exclude='*-assets'\
    --exclude='*.psd'\
     --exclude='*.gif'\
      --exclude='*-assets' $dest root@helena.social:/var/www/helena.social