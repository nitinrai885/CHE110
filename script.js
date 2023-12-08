let pledgeCount = 0;

function takePledge() {
    pledgeCount++;
    updatePledgeCount();
}

function updatePledgeCount() {
    const countElement = document.getElementById("count");
    countElement.textContent = pledgeCount;
}
