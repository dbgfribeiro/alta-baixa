var acc = document.getElementsByClassName("article");

function myFunction(x) {
  if (x.matches) {
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var allPanels = document.querySelectorAll('.panel');

        if(panel == allPanels[0]) {
          allPanels[1].style.maxWidth = null;
          allPanels[1].previousElementSibling.classList.remove("active");
        }
        else if(panel == allPanels[1]) {
          allPanels[0].style.maxWidth = null;
          allPanels[0].previousElementSibling.classList.remove("active");
        }
        
        if (panel.style.maxWidth) {
          this.classList.remove("active");
          panel.style.maxWidth = null;
        } else {
          this.classList.add("active");
          panel.style.maxWidth = "100%";
          panel.querySelector('.article-text').style.opacity = 1;
        }
      });
    }
  }
  else{
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        var panel = this.nextElementSibling;
        var allPanels = document.querySelectorAll('.panel');

        if(panel == allPanels[0]) {
          allPanels[1].style.maxHeight = null;
          allPanels[1].previousElementSibling.classList.remove("active");
        }
        else if(panel == allPanels[1]) {
          allPanels[0].style.maxHeight = null;
          allPanels[0].previousElementSibling.classList.remove("active");
        }
        
        if (panel.style.maxHeight) {
          this.classList.remove("active");
          panel.style.maxHeight = null;
        } else {
          this.classList.add("active");
          panel.style.maxHeight = "100%";
          panel.querySelector('.article-text').style.opacity = 1;
        }
      });
    }
  }
}

var x = window.matchMedia("(min-width: 1024px)")
myFunction(x)
x.addListener(myFunction)