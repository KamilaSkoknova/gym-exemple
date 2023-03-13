// scrollying setup
const scroller = scrollama();

scroller.setup({
    step: '.step', //these are my steps
    // debug: true,     where is the line to trigger
    offset: 0.45   //where the line should be from top
})
.onStepEnter((response) => {
    console.log(response)
    response.element.classList.remove('inactive');
    response.element.classList.add('active');
})
.onStepExit((response) => {
    console.log(response)
    response.element.classList.remove('active');
    response.element.classList.add('inactive');

});

window.addEventListener('resize', scroller.resize);