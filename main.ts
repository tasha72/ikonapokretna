basic.forever(function () {
    for (let index = 0; index <= 10; index++) {
        images.createImage(`
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            . . . . .
            `).showImage(index - 5, 200)
    }
})
