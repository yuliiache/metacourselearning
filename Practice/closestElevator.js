function elevator(left, right, call){
    let distanceFromLeft = Math.abs(call - left);
    let distanceFromRight = Math.abs(call - right);
    let result = "";

    if (distanceFromRight <= distanceFromLeft) {
        result = "right"
    } else if (distanceFromLeft < distanceFromRight) {
        result = "left"
    }
    return result;
}