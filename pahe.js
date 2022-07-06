const mapAds = ["https://new.pahe.my.id/country.js", "/analytic.js", "https://new.pahe.my.id/anti-adblock.js", "https://new.pahe.my.id/disable-costom-button-back.js", "https://new.pahe.my.id/banner.js"];
var hostUri = "ads.pahe.my.id";
const randomNumberHash = (n) => {
    for (var r = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], e = n, t = new Array, a = 0; a <= e - 1; a++) {
        t[a] = r[parseInt(Math.random() * r.length)];
        t = t;
    }
    return t.join("");
};
const initMapAds = async (config) => {
    const uriLoc = document.location;
    const hostLoc = uriLoc.hostname;
    for (let data of mapAds) {
        const el = document.createElement("script");
        if (data.indexOf("/country.js") >= 0) {
            el.setAttribute("src", "https://" + hostUri + data + "?hash=" + randomNumberHash(12));
        } else {
            el.setAttribute("src", "https://" + hostUri + data);
        };
        await document.querySelector("body").append(el);
    };
};
initMapAds(mapAds);
