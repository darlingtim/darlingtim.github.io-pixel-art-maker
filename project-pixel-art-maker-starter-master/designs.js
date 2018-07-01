$(() => {
    var pixelColor, gridHeight, gridWidth;

    $('#sizePicker').on('input', '#inputHeight', '#inputWidth', function selectSizeInput() {
        // Select design canvas size input
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWidth').val();
        
    })
    

    //assign submit eventListener to design canvas size submit button
    $('#sizePicker').submit((event) => {
        event.preventDefault();
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWidth').val();
        //call makeGrid() to overide default Grid
        makeGrid(gridHeight, gridWidth);

    });
    //assign click eventListener for creating extra table
    $('#createExtraTable').click(function(){
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWidth').val();
        createExtraTable(gridHeight, gridWidth);
    })

    // Default Grid size when page is loaded
    for (var row = 1; row <= 9; row++) {

        $('#pixelCanvas').append('<tr class=row' + row + '></tr>');

        for (var column = 1; column <= 27; column++) {

            $('.row' + row).append('<td class=row' + row + 'column' + column + '></td>');

        }

    }


    //function to overide default grid

    function makeGrid(height, width) {
        $('#pixelCanvas').empty();
        for (var row = 1; row <= height; row++) {
            $('#pixelCanvas').append('<tr class= row' + row +'></tr>');

            for (var column = 1; column <= width; column++) {

                $('#pixelCanvas tr.row'+[row]).append('<td class=row' + row +'column'+column+'></td>');

            }

        }
        $('td').click(function design(event) {

            pixelColor = $('#colorPicker').val();

            if ($(this).attr('style')) {

                $(this).removeAttr('style')

            } else {

                $(this).attr('style', 'background-color:' + pixelColor);

            }


        })


    }

    //function to create an extra table
    function createExtraTable(height, width) {
        $('#drawingBoard').append('<table></table>')
        for (var row = 1; row <= height; row++) {

            $('#drawingBoard table:last-of-type').append('<tr class= row' + row + '></tr>');

            for (var column = 1; column <= width; column++) {

                $('#drawingBoard table:last-of-type').find('tr.row' + row).append('<td class=row' + row + 'column' + column + '></td>');

            }

        }
        $('td').click(function design(event) {

            pixelColor = $('#colorPicker').val();

            if ($(this).attr('style')) {

                $(this).removeAttr('style')

            } else {

                $(this).attr('style', 'background-color:' + pixelColor);

            }


        })

    }

    //call the design function anytime a 'td' markup(table cell) is clicked
    
    $('td').click(function design(event) {
    
        pixelColor = $('#colorPicker').val();

        if ($(this).attr('style')) {

            $(this).removeAttr('style')

        } else {

            $(this).attr('style', 'background-color:' + pixelColor);

        }
        

    })



    // Your code goes here!



});
