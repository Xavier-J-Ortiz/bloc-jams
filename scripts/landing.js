var revealPoint = function(thePoint) {
    thePoint.style.opacity = 1;
    thePoint.style.transform = "scaleX(1) translateY(0)";
    thePoint.style.msTransform = "scaleX(1) translateY(0)";
    thePoint.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var pointsArray = document.getElementsByClassName('point');
var animatePoints = function() {forEach(pointsArray, revealPoint)};

window.onload = function() {
    
    if (window.innerHeight > 950) {
         animatePoints();
     }
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance)
        {
            animatePoints();
        }
    });
}