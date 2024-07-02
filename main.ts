input.onButtonPressed(Button.A, function () {
    haloDisplay.rotate(1)
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
basic.showString(kitronik_halo_hd.readTime())
basic.showString("" + (kitronik_halo_hd.readTimeForZip(TimeParameter.Hours)))
basic.showString("" + (kitronik_halo_hd.readTimeForZip(TimeParameter.Minutes)))
basic.showString("" + (kitronik_halo_hd.readTimeForZip(TimeParameter.Seconds)))
