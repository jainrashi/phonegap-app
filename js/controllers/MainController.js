app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'This Month\'s Bestsellers';
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
        {
            name: 'First News Heading',
            content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis',
            cover: 'img/img1.jpg',
            likes: 0
        },
        {
            name: 'Second News Heading',
            content: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.',
            cover: 'img/img2.jpg',
            likes: 0
        },
        {
            name: 'Third News Heading',
            content: 'The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators.',
            cover: 'img/img3.jpg',
            likes: 0
        },
        {
            name: 'Fourth News Heading',
            content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere.',
            cover: 'img/img4.jpg',
            likes: 0
        }
    ];
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
}]);
