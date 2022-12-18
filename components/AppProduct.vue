<template>
  <article class="card-item">
            <a href=""><img src="https://via.placeholder.com/302x302/4e4d4da2/fff.gif&text=image" alt=" ">
              <h3>Kingston SSDNow A400 480GB 2.5" SATAIII 3D V-NAND (SA400S37/480G)</h3>
            </a>
            <div class="price">234324 $</div>
            <form class="buy">
              <span class="qty">
                <button type="button" onclick="this.nextElementSibling.stepDown()">-</button>
                <input type="number" min="1" max="100" value="1" name="qty">
                <button type="button" onclick="this.previousElementSibling.stepUp()">+</button>
              </span>
              <button class="btn-buy">
                <span class="icon-basket">+</span>
              </button>
            </form>
          </article>
</template>
