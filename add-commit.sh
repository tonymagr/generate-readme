#! /bin/bash

echo "Run git add and status"
echo "-------------"
git add .
git status
echo " "
echo "Run git commit"
echo "--------------"
git commit -m "challenge 09- demo $(date)"
echo " "
echo "Run git push"
echo "------------"
git push