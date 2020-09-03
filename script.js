document.querySelector('.arrowL').addEventListener('mouseover',function(event) {
    if(event.target.className=='arrowL') {
        event.target.style.backgroundColor='#1175b7'
        document.querySelector('.arrowLeft').style.borderLeft='1px solid white'
        document.querySelector('.arrowLeft').style.borderTop='1px solid white'
    }
})

document.querySelector('.arrowL').addEventListener('mouseleave',function(event) {
    if(event.target.className=='arrowL') {
        event.target.style.backgroundColor='white'
        document.querySelector('.arrowLeft').style.borderLeft='1px solid #1175b7'
        document.querySelector('.arrowLeft').style.borderTop='1px solid #1175b7'
    }
})
let posStart=0;
function fix() {
    document.querySelectorAll('.q').forEach((v)=>{
        v.style.backgroundColor='white'
        document.querySelectorAll('.content2')[posStart].style.color='gray'
    })
}
document.querySelector('.arrowL').addEventListener('click',function(event) {
    if(event.target.className=='arrowLeft') {
        fix()
        if(posStart!=0) {
            posStart-=1
            document.querySelectorAll('.q')[posStart].style.backgroundColor='#1175b7'
            document.querySelectorAll('.content2')[posStart].style.color='white'
        }
      else{
          posStart=2
        document.querySelectorAll('.q')[2].style.backgroundColor='#1175b7'
        document.querySelectorAll('.content2')[2].style.color='white'
      }
    }
})

document.querySelector('.arrowR').addEventListener('click',function(event) {
    if(event.target.className=='arrowRight') {
        fix()
        if(posStart!=2) {
            posStart+=1
            document.querySelectorAll('.q')[posStart].style.backgroundColor='#1175b7'
            document.querySelectorAll('.content2')[posStart].style.color='white'
        }
      else{
          posStart=0
        document.querySelectorAll('.q')[0].style.backgroundColor='#1175b7'
        document.querySelectorAll('.content2')[0].style.color='white'
      }
    }
})


document.querySelector('.arrowR').addEventListener('mouseover',function(event) {
    if(event.target.className=='arrowR') {
        event.target.style.backgroundColor='#1175b7'
        document.querySelector('.arrowRight').style.borderRight='1px solid white'
        document.querySelector('.arrowRight').style.borderTop='1px solid white'
    }
})

document.querySelector('.arrowR').addEventListener('mouseleave',function(event) {
    if(event.target.className=='arrowR') {
        event.target.style.backgroundColor='white'
        document.querySelector('.arrowRight').style.borderRight='1px solid #1175b7'
        document.querySelector('.arrowRight').style.borderTop='1px solid #1175b7'
    }
})


document.querySelector('.arrowR').addEventListener('click',function(event) {
    if(event.target.className=='arrowR') {
      
    }
})

let g2ps=0;
let items=['file:///C:/html/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B03/img/coment1.png',
'file:///C:/html/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B03/img/coment2.png',
'file:///C:/html/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B03/img/coment3.png']
document.querySelector('.l').addEventListener("click",function(event) {
        if(g2ps!=0) {
            g2ps-=1
            if(g2ps==0) {
                document.querySelectorAll('.imgs')[g2ps].src=items[g2ps]
                document.querySelectorAll('.imgs')[g2ps+1].src=items[g2ps+1]
                return 
            }
            document.querySelectorAll('.imgs')[g2ps].src=items[g2ps-1]
            document.querySelectorAll('.imgs')[g2ps+1].src=items[g2ps+1]
        } else {
            g2ps=2
            for(let i=0;i<3;i++){
                if(i!=2)
                document.querySelectorAll('.imgs')[i].src=items[i+1]
                else
                document.querySelectorAll('.imgs')[2].src=items[0]
            }
        }
    })

    document.querySelector('.r').addEventListener("click",function(event) {
    if(g2ps!=2) {
        g2ps+=1
        if(g2ps==2) {
            document.querySelectorAll('.imgs')[2].src=items[0]
            document.querySelectorAll('.imgs')[g2ps-1].src=items[g2ps]
            return
        }
        document.querySelectorAll('.imgs')[g2ps-1].src=items[g2ps]
        document.querySelectorAll('.imgs')[g2ps].src=items[g2ps-1]
    } else {
        g2ps=0
        for(let i=0;i<3;i++){
            if(i!=2) {
            document.querySelectorAll('.imgs')[i].src=items[i]
            }
            else
            document.querySelectorAll('.imgs')[2].src=items[2]
        }
    }})

