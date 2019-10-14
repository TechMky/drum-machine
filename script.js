$('.drum-pad').click(function (e) { 
    e.preventDefault();
    $('#display').text($(this).data("name"))
    $(this).find('.clip')[0].play()
});
$('body').keyup(function (e) { 
    e.preventDefault()
    let key = e.key.toUpperCase();
    if(isCorrectKey(key)){
        $('#display').text($(`#${key}-pad`).data("name"))
        $(`#${key}`)[0].play()
    }
    
});
function isCorrectKey(key) {
    return key === 'Q' || key === 'W' || key === 'E' || key === 'A' || key === 'S' || key === 'D' || key === 'Z' || key === 'X' || key === 'C'
}
