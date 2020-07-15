// [1] ScrollMagic 컨트롤러 생성
// [2] Animation 오브젝트 생성
// [3] Scene 오브젝트 생성
// [4] Animation 오브젝트(2번)를 Scene 오브젝트(3번)에 추가
// [5] Scene Object(3번)를 ScrollMaig 컨트롤러(1번)에 추가

import React, { Component } from 'react'
import "./scrollmagic.scss"
import { TweenMax } from 'gsap'
export default class ScrollMagic extends Component {
  function(){
    
    var controller = new ScrollMagic.Controller();
    
    var tween1 = TweenMax.to('#animate1', 0.5, {
        backgroundColor: "#333333",
        scale: 2.5,
        rotation: 360,
        x: 130
    });
    
    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: "100%"
    })
    .setTween(tween1)
    .addTo(controller)
    .addIndicators({
        name: "1"
    }) 
  }

  render() {
    return (
      <div>
        <div class="wrap">
    <div class="top">
        <h1>ScrollMagic Demo</h1>
        {/* <p>스크롤매직 라이브러리 데모입니다.<br/><a href="http://scrollmagic.io/examples/" target="_blank">여기</a>에서 더 많은 예시를 확인할 수 있습니다.</p> */}
    </div>
    <div class="main">
        <h2>What a wonderful!</h2>
        <div class="textWrap">
            <p class="text">Dolore occaecat cupidatat nostrud voluptate officia anim culpa minim in eiusmod eiusmod in. Esse magna excepteur est eiusmod excepteur laborum amet esse sint sit velit cupidatat excepteur. Aliquip magna dolore quis in tempor ipsum. Ad nostrud cupidatat ut do exercitation nulla ipsum culpa. Dolor laboris sunt voluptate nostrud. Cupidatat non sint est proident pariatur nulla. Aliqua reprehenderit ad do in ut deserunt sit.</p>
<p class="text">Amet aliquip incididunt exercitation et consequat sint laborum nulla. Excepteur qui ut cillum eu quis irure elit proident deserunt eiusmod consectetur. Amet occaecat et ex in dolore velit esse occaecat fugiat id et.</p>
        </div>
        <div class="spacer"></div>
        <div class="trigger" id="trigger1">Trigger!</div>
        <div class="spacer"></div>
        <div id="animate1" class="icon">Hello</div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <div class="spacer"></div>
    </div>
    <div class="footer"><a href="https://nykim.work">nykim.work</a></div>
</div>
      </div>
    )
  }
}

