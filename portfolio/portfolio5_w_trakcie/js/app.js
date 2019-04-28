$('.about-icons-section').one('mouseover', () => {
    fliping();
})
const fliping = () => {
    new Flip({
        node: document.getElementById('flip1'),
        from: 0,
        to: 7533,
        duration: 7 
      });
      new Flip({
        node: document.getElementById('flip2'),
        from: 0,
        to: 4222,
        duration: 7
      });
      new Flip({
        node: document.getElementById('flip3'),
        from: 0,
        to: 6980,
        duration: 7
      });
      new Flip({
        node: document.getElementById('flip4'),
        from: 0,
        to: 100,
        duration: 5
      });
}
