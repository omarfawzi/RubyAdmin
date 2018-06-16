document.addEventListener("DOMContentLoaded", function (e) {
    var t, n, a, i, o, m, l, d, t = new JustGage({
        id: "g1",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Custom Width",
        label: "miles traveled",
        gaugeWidthScale: .2
    }), n = new JustGage({
        id: "g2",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Custom Shadow",
        label: "",
        shadowOpacity: 1,
        shadowSize: 10,
        shadowVerticalOffset: 5
    }), a = new JustGage({
        id: "g3",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Custom Colors",
        label: "",
        levelColors: ["#00fff6", "#ff00fc", "#1200ff"]
    }), i = new JustGage({
        id: "g4",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Hide Labels",
        hideMinMax: !0
    }), o = new JustGage({
        id: "g5",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Animation Type",
        label: "",
        startAnimationTime: 2e3,
        startAnimationType: ">",
        refreshAnimationTime: 1e3,
        refreshAnimationType: "bounce"
    }), m = new JustGage({
        id: "g6",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Minimal",
        label: "",
        hideMinMax: !0,
        gaugeColor: "#fff",
        levelColors: ["#000"],
        hideInnerShadow: !0,
        startAnimationTime: 1,
        startAnimationType: "linear",
        refreshAnimationTime: 1,
        refreshAnimationType: "linear"
    }), l = new JustGage({
        id: "g7",
        value: 72,
        min: 0,
        max: 100,
        donut: !0,
        gaugeWidthScale: .6,
        counter: !0,
        hideInnerShadow: !0
    }), d = new JustGage({
        id: "g8",
        value: 72.15,
        min: 0,
        max: 100,
        decimals: 2,
        gaugeWidthScale: .6,
        customSectors: [{color: "#00ff00", lo: 0, hi: 50}, {color: "#ff0000", lo: 50, hi: 100}],
        counter: !0
    });
    document.getElementById("g8_refresh").addEventListener("click", function () {
        d.refresh(getRandomInt(0, 100))
    }), setInterval(function () {
        t.refresh(getRandomInt(0, 100)), n.refresh(getRandomInt(0, 100)), a.refresh(getRandomInt(0, 100)), i.refresh(getRandomInt(0, 100)), o.refresh(getRandomInt(0, 100)), m.refresh(getRandomInt(0, 100)), l.refresh(getRandomInt(0, 100))
    }, 2500)
});
