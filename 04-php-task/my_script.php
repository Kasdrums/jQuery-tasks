<!-- php
напиши функцию, которая будет подсчитывать количество элементов в многомерном массиве по значению. -->

<?php
function countElements($array, $value) {
    $count = 0;
    
    foreach ($array as $element) {
        if (is_array($element)) {
            $count += countElements($element, $value);
        } else {
            if ($element === $value) {
                $count++;
            }
        }
    }
    
    return $count;
}
$myFruitsArray = array(
    array('apple', 'banana', 'cherry'),
    array('apple', 'banana', 'orange'),
    array('apple', 'grape', 'kiwi')
);

$valueToCount = 'apple';

$count = countElements($myFruitsArray, $valueToCount);
echo "Колличество '$valueToCount' в массиве: $count";
?>