const boxesRef = useRef(null);
useEffect(() => {
  const boxes = boxesRef.current.querySelectorAll(".box");
  let activeIndex = 1;
  let isTransitioning = false;

  function updateCurrentImg() {
    isTransitioning = true;

    boxes.forEach((box, index) => {
      const isActive = index === activeIndex;
      box.classList.toggle("expanded", isActive);
      box.classList.toggle("closed", !isActive);
    });

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  function handleBoxClick(index) {
    if (isTransitioning) {
      return;
    }

    if (index === activeIndex && boxes[index].classList.contains("expanded")) {
      boxes.forEach((box) => box.classList.remove("closed", "expanded"));
      activeIndex = 0;
    } else {
      activeIndex = index;
      updateCurrentImg();
    }
  }

  updateCurrentImg();

  boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleBoxClick(index));
  });
}, []);
<div class="box-container">
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
  <div class="box">
    <div class="overlay"></div>
  </div>
</div>;

/* Css For Slider - 2 */

:root {
  --bg1: url("https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source");
  --bg2: url("https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --bg3: url("https://images.unsplash.com/photo-1584148721201-b6432e0d5106?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY1OTA1NDY2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source");
  --bg4: url("https://images.unsplash.com/photo-1607585011081-241d2bacb7de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  --bg5: url("https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
}

.box-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  max-width: 1100px;
  height: 90vh;
  max-height: 900px;
  padding: 1rem;
  margin: 0 auto;
}

.box {
  width: 25%;
  height: 340px;
  border-radius: 25px;
  cursor: pointer;
  transition: width 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
}

.box:nth-child(1) {
  background: var(--bg1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 200%;
}

.box:nth-child(2) {
  background: var(--bg2);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 200%;
}

.box:nth-child(3) {
  background: var(--bg3);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 200%;
}

.box:nth-child(4) {
  background: var(--bg4);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 200%;
}

.box:nth-child(5) {
  background: var(--bg5);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 200%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transition: 0.5s ease;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.box.closed {
  width: 5%;
}

.box.closed .overlay {
  opacity: 1;
}

.box.expanded {
  width: 85%;
}

