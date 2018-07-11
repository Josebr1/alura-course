//var _count = 1;
/*function createSprite(selector) {
    return {
        nextFrame: function() {
            if (_count <= 9){
                $(selector).removeClass('frame'+ (_count - 1)).addClass('frame'+_count);
            }
            _count++;
        }
    };
}*/
function createSprite(selector) {
    const $el = $(selector);
    let current = 0;
    const frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];
    const last = frames.length - 1;

    const hasNext = () => current + 1 <= last;
    
    function reset() {
        $el.removeClass(frames[current]);
        current = 0;
    }

    const isFinished = () => !hasNext();

    return {
        nextFrame: () => {
            if (hasNext()) $el.removeClass(frames[current]).addClass(frames[++current]);
        },
        reset,
        isFinished
    };
}