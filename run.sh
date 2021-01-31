max=300
for i in `seq 2 $max`
do
  eval  "node examples/index.js &"
done