$(document).ready(function() {

    const projects = [
        {
            "name": "Dinner Time",
            "url": "https://strinh747.github.io/Project1/",
            "imgSource": "shayda-torabi-3iexvMShGfQ-unsplash.jpg"
        },
        {
            "name": "Day Planner",
            "url": "https://strinh747.github.io/homework5/",
            "imgSource": "emma-matthews-digital-content-production-8K62atzbulQ-unsplash.jpg"
        },
        {
            "name": "Code Quiz",
            "url": "https://strinh747.github.io/homework4/",
            "imgSource": "jon-tyson-hhq1Lxtuwd8-unsplash.jpg"
        },

        {
            "name": "Weather Dashboard",
            "url": "https://strinh747.github.io/homework6/",
            "imgSource": "daniel-ramirez-q4TfWtnz_xw-unsplash.jpg"
        },

        {
            "name": "Password Generator",
            "url": "https://strinh747.github.io/homework3/",
            "imgSource": "jason-dent-3wPJxh-piRw-unsplash.jpg"
        }
    ]
    
    projects.forEach(project => {
        let gridItem = $('<div class="grid-item">');
        let a  = $('<a>');
        a.attr("href", project.url);
        let img = $('<img>');
        img.attr("src", project.imgSource);
        let caption = $('<div class="caption">');
        let h4 = $('<h4>').text(project.name);
        caption.append(h4);
        a.append(img,caption);
        gridItem.append(a);
        $('.grid').append(gridItem);
    })

    // init Masonry
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });  
  

    })

