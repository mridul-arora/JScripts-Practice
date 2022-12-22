const parentDiv = document.querySelector(
    "#mount_0_0_t4 > div > div > div > div:nth-child(4) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div._aano > div:nth-child(1) > div"
);

const scroll = document.querySelector(
    "#mount_0_0_t4 > div > div > div > div:nth-child(4) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div.x7r02ix.xf1ldfh.x131esax.xdajt7p.xxfnqb6.xb88tzc.xw2csxc.x1odjw0f.x5fp0pe > div > div > div._aano"
);
//copy-paste-1

let usersDiv = parentDiv.children;
let index = 0;
let total = 0;

//copy-paste-1

function printMyFollowing(startFrom, endAt) {

    if (startFrom) index = startFrom;
    if (endAt) total = endAt;

    let currentUser;
    currentUser = usersDiv[index];


    if (index >= usersDiv.length) {
        scroll.scrollTo(0, index * 60);
        setTimeout(() => {
            console.log("Scrolling..");
            printMyFollowing();
        }, 5000);
    } else {
        let userName;
        try {
            userName = currentUser.children[1].children[0].innerText;
        } catch (e) {
            userName = "unknown";
        }
        console.log(index + ". " + userName);
        if (total - 1 > index) {
            setTimeout(() => {
                index++;
                printMyFollowing();
            }, 500);
        } else {
            console.log("completed");
        }
    }
}