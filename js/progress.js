const countDownDate = new Date("2022-12-25T00:00:00.000");
const originDate = new Date("2022-12-20T00:00:00.000");

// Calculate milliseconds in a year
const pSecond = 1000;
const pMinute = pSecond * 60;
const pHour = pMinute * 60;
const pDay = pHour * 24;

const cTitle1Text = "INITIATING CHRISTMAS";
const cTitle2text = "PLEASE STAND BY";

async function connect() {
    aconnect.play();
    document.getElementById('connect').remove();
    //try { document.getElementById('ERROR').remove(); } catch{}

    astartup.play();

    let cursor = document.getElementById('cursor');
    cursor.style.display = 'inline-block';

    let cTitle1 = document.getElementById('cTitle1Text');
    for (let i = 0; i < cTitle1Text.length; i++) {
        cTitle1.innerHTML += cTitle1Text[i];
        await sleep(50);
    }
    await sleep(200);

    document.getElementById('cTitle2').appendChild(cursor);
    let cTitle2 = document.getElementById('cTitle2Text');    
    for (let i = 0; i < cTitle2text.length; i++) {
        cTitle2.innerHTML += cTitle2text[i];
        await sleep(50);
    }

    cursor.style.animation = 'blink 0.9s infinite';

    await sleep(1200);
    let progressbar = document.getElementById('fullProgressBar');
    progressbar.style.border = 'solid var(--foreground01) 2pt';
    progressbar.style.width = '100%';

    await sleep(300);
    let percentage = document.getElementById('percentage');
    percentage.style.display = 'inline-block';   
    aupdate.play();

    await sleep(200);
    let ETRLabel = document.getElementById('ETRLabel');
    ETRLabel.style.opacity = 1;
    await sleep(30);
    ETRLabel.style.backgroundColor = 'var(--background01)';
    ETRLabel.style.boxShadow = 'none';

    await sleep(100);
    let ETRValue = document.getElementById('ETRValue');
    ETRValue.style.opacity = 1;
    await sleep(100);
    ETRValue.style.backgroundColor = 'var(--background01)';
    ETRValue.style.boxShadow = 'none';

    startCountDown();
}


async function startCountDown() {
    abg.play();

    let lastPercentage = "0%";

    let x = setInterval(async () => {
        let now = new Date().getTime();

        // Find the difference between now and the count down date
        let remaining = countDownDate - now;

        if (remaining < 0) {
            clearInterval(x);

            aend.play();
            document.getElementById('cTitle1Text').innerHTML = 'SANTA DISPATCHED';
            document.getElementById('cTitle2Text').innerHTML = 'MERRY CHRISTMAS, CAPTAIN!';

            document.getElementById("percentage").innerText = '100%';
            document.getElementById("pFill").style.width = '100%';

            document.getElementById("ETRValue").innerText = `0 DAYS 0 HOURS 0 MINUTES 0 SECONDS`;

            /*await sleep(2000);
            aupdate.play();*/
            /*document.getElementById("info").style.display = 'inline-block';*/
        }
        else {
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(remaining / pDay);
            let hours = Math.floor((remaining % (pDay)) / (pHour));
            let minutes = Math.floor((remaining % (pHour)) / (pMinute));
            let seconds = Math.floor((remaining % (pMinute)) / pSecond);

            // Display the result in the element with id="demo"
            document.getElementById("ETRValue").innerText = `${days} DAYS ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`;

            let percentage = (Math.floor((100 - (countDownDate - now) / (countDownDate - originDate) * 100) * 100) / 100) + '%';

            if (percentage != lastPercentage) {
                aupdate.play();
                lastPercentage = percentage;
                let perc1 = document.getElementById("percentage");
                perc1.innerText = percentage;
                document.getElementById("pFill").style.width = percentage;
            }
        }
    }, 1000);
}


function showInfo() {
    ashow.play();
    document.getElementById("infopanel").style.display = 'inline-block';
}
function closeInfo() {
    aclose.play();
    document.getElementById("infopanel").style.display = 'none';
}

async function sleep(ms) {
    await new Promise(r => setTimeout(r, ms));
}