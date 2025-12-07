namespace info {
    //%block
    export function countUp(): void {
        info.startCountdown(1)
        forever(function() {
            info.changeCountdownBy(1)
        })
    }
}
