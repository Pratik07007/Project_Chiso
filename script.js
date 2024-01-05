const tl = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        trigger: ".hero-2",
        start: "0% 94%",
        end: "60% 50%",
    },
})
tl.to("#fanta", {
    top: "120%",
    left: "64%"
}, "one")
tl.to("#lem-fanta", {
    top: "160%",
    left: "84%"
}, "one")
tl.to("#coke", {
    top: "120%",
    left: "8%"
}, "one")
tl.to("#lem-coke", {
    top: "160%",
    left: "-1%"
}, "one")
tl.to('#pepsi', {
    top: "112%"
}, "one")
tl.to("#lem-pepsi", {
    top: "160%",
    left: "41.6%"
}, "one")