function hasCollided(lbullet, lwall) {
    var bulletRightEdge = lbullet.x+(lbullet.width/2)
    var wallLeftEdge = lwall.x-lwall.width/2
    if (bulletRightEdge >= wallLeftEdge) {
        return true
    } else {
        return false
    }
}