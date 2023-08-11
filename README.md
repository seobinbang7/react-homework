# 리액트 1차 과제


- [figma 링크](https://www.figma.com/file/gXMZpQ0drs6EafGBHlhTMh/Untitled?type=design&node-id=0-1&mode=design&t=UIzBIMYcRpTOlupy-0)
*toggle 애니메이션 적용했습니다 privew에서 확인 가능합니다


-------

```
const [isOn, setIsOn] = useState(false); 
```
isOn과 setIsOn의 초기값을 false로 설정했습니다


```
const toggleEvent = () => {
    setIsOn(state => !state);
  };
```
click 이벤트가 발생하면 isOn의 값인 false가 true로 업데이트되게 했습니다(setIsOn)

```
return (
    <>
      <div
        className={`toggle-btn ${isOn ? 'on' : 'off'}`}
      >
        <div className="circle" onClick={toggleEvent}></div>
      </div>
    </>
  );
```
isOn의 값이 true이면 'on' class로, false이면 'off' class로 설정하게 했습니다.
그리고 class가 circle인 div를 클릭하면 click 이벤트가 발생되게 했습니다.
