function openFullscreen() {
    let doe = document.getElementById('body')
    if (doe.requestFullscreen) {
        doe.requestFullscreen();
    } else if (doe.webkitRequestFullscreen) {
        /* Safari */
        doe.webkitRequestFullscreen();
    } else if (doe.msRequestFullscreen) {
        /* IE11 */
        doe.msRequestFullscreen();
    }
}






function e3() {
    document.getElementById('dd1').innerHTML = ''
    document.getElementById('body').addEventListener('touchmove', (ev) => {
        var e = parseInt(ev.touches[0].clientY);
        var e1 = parseInt(ev.touches[0].clientX);
        var b3 = document.querySelectorAll('c');
        for (let i3 = 0; i3 < b3.length; i3++) {
            var d3 = parseInt(window.getComputedStyle(b3[i3], null).getPropertyValue('left'));
            var dd3 = parseInt(window.getComputedStyle(b3[i3], null).getPropertyValue('top'));
            let f3 = e1 - d3;
            let f4 = e - dd3;
            if (f3 > 10 && f4 > 10) {
                    if (i3 > 1) {
                        if (window.getComputedStyle(b3[i3 - 1], null).getPropertyValue('background-color') === 'rgb(24, 26, 27)') {
                            b3[i3].style.backgroundColor = 'white';
                            b3[i3].style.color = 'white'
                        } else {
                            return false
                        }
                    } else {
                        b3[i3].style.backgroundColor = 'white';
                        b3[i3].style.color = 'white'
                    }
            }
        }
    })
}

/*function aall(){
    document.getElementById('body').addEventListener('touchmove',(ev)=>{
        var e1 = parseInt(ev.touches[0].clientX) ;
        
   
    }})}*/
ok();