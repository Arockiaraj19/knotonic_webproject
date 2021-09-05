let activeIndex = 0;
let limit = 0;
let disabled = false;
let $stage;
let $controls;
let canvas = false;

const SPIN_FORWARD_CLASS = "js-spin-fwd";
const SPIN_BACKWARD_CLASS = "js-spin-bwd";
const DISABLE_TRANSITIONS_CLASS = "js-transitions-disabled";
const SPIN_DUR = 4000;

const appendControls = () => {
  for (let i = 0; i < limit; i++) {
    $(".carousel__control").append(`<a href="#" data-index="${i}"></a>`);
  }
  let height = $(".carousel__control").children().last().outerHeight();

  $(".carousel__control").css("height", 30 + limit * height);
  $controls = $(".carousel__control").children();
  $controls.eq(activeIndex).addClass("active");
};

const setIndexes = () => {
  $(".spinner")
    .children()
    .each((i, el) => {
      $(el).attr("data-index", i);
      limit++;
    });
};

const duplicateSpinner = () => {
  const $el = $(".spinner").parent();
  const html = $(".spinner").parent().html();
  $el.append(html);
  $(".spinner").last().addClass("spinner--right");
  $(".spinner--right").removeClass("spinner--left");
};

const paintFaces = () => {
  $(".spinner__face").each((i, el) => {
    const $el = $(el);
    let color = $(el).attr("data-bg");
    $el
      .children()
      .css("backgroundImage", `url(${getBase64PixelByColor(color)})`);
  });
};

const getBase64PixelByColor = (hex) => {
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.height = 1;
    canvas.width = 1;
  }
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, 1, 1);
    return canvas.toDataURL();
  }
  return false;
};

const prepareDom = () => {
  setIndexes();
  paintFaces();
  duplicateSpinner();
  appendControls();
};

const spin = (inc = 1) => {
  if (disabled) return;
  if (!inc) return;
  activeIndex += inc;
  disabled = true;

  if (activeIndex >= limit) {
    activeIndex = 0;
  }

  if (activeIndex < 0) {
    activeIndex = limit - 1;
  }

  const $activeEls = $(".spinner__face.js-active");
  const $nextEls = $(`.spinner__face[data-index=${activeIndex}]`);
  $nextEls.addClass("js-next");

  if (inc > 0) {
    $stage.addClass(SPIN_FORWARD_CLASS);
  } else {
    $stage.addClass(SPIN_BACKWARD_CLASS);
  }

  $controls.removeClass("active");
  $controls.eq(activeIndex).addClass("active");

  setTimeout(
    () => {
      spinCallback(inc);
    },
    SPIN_DUR,
    inc
  );
};

const spinCallback = (inc) => {
  $(".js-active").removeClass("js-active");
  $(".js-next").removeClass("js-next").addClass("js-active");
  $stage
    .addClass(DISABLE_TRANSITIONS_CLASS)
    .removeClass(SPIN_FORWARD_CLASS)
    .removeClass(SPIN_BACKWARD_CLASS);

  $(".js-active").each((i, el) => {
    const $el = $(el);
    $el.prependTo($el.parent());
  });
  setTimeout(() => {
    $stage.removeClass(DISABLE_TRANSITIONS_CLASS);
    disabled = false;
  }, 100);
};

const attachListeners = () => {


  $controls.on("click", (e) => {
    e.preventDefault();
    if (disabled) return;
    const $el = $(e.target);
    const toIndex = parseInt($el.attr("data-index"), 10);
    spin(toIndex - activeIndex);
    automaticslider();
  });
};

var sliderindex = 0;


const automaticslider = () => {
  if (disabled) return;

  const toIndex = parseInt(sliderindex, 10);
  spin(toIndex - activeIndex);
  if (sliderindex >= limit) { sliderindex = 0 }
  sliderindex++;

  setTimeout(automaticslider, 5000);
}

const assignEls = () => {
  $stage = $(".carousel__stage");
};

const init = () => {
  assignEls();
  prepareDom();
  attachListeners();
  automaticslider();
};

$(() => {
  init();
});


function handleVisibilityChange() {
  if (document.hidden) {
    document.title = "Hey Come Back ! | knotonic | Software product development company";

  } else {
    document.title = "knotonic | Software product development company";

    location.reload();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);




// toggleswitch

function filterme(value) {
  value = parseInt(value, 10); // Convert to an integer
  if (value === 1) {
    $('#custom-toggle').removeClass('tgl-off', 'tgl-def').addClass('tgl-on');
   console.log("light");
   document.documentElement.style.setProperty("--primary-color","#F8C591");
   document.documentElement.style.setProperty("--secondary-color", "#B9D2D2");
   document.documentElement.style.setProperty("--bodyfont-color", "#343434");


   document.documentElement.style.setProperty("--card-color-first","#89B0AE");
   document.documentElement.style.setProperty("--card-color-second","#FFB6B6");
   document.documentElement.style.setProperty("--card-color-third","#B8B5FF");
   document.documentElement.style.setProperty("--card-color-four","#B8B5FF");

  } else if (value === 2) {
    $('#custom-toggle').removeClass('tgl-on, tgl-off').addClass('tgl-def');
    console.log("normal");
     
    document.documentElement.style.setProperty("--primary-color","#F56E67");
    document.documentElement.style.setProperty("--secondary-color", "#3b3b3b");
    document.documentElement.style.setProperty("--bodyfont-color", "#fff");


    //    // card colors
       document.documentElement.style.setProperty("--card-color-first","#3caea3");
       document.documentElement.style.setProperty("--card-color-second","#F6D55C");
       document.documentElement.style.setProperty("--card-color-third","#20639B");
       document.documentElement.style.setProperty("--card-color-four","#99BF72");
  } else if (value === 3) {
    $('#custom-toggle').removeClass('tgl-def', 'tgl-on').addClass('tgl-off');
    document.documentElement.style.setProperty("--primary-color","#7C9473");
    document.documentElement.style.setProperty("--secondary-color", "#343434");
    document.documentElement.style.setProperty("--bodyfont-color", "#FFFFFF");


    //    // card colors
       document.documentElement.style.setProperty("--card-color-first","#F2A365");
       document.documentElement.style.setProperty("--card-color-second","#5089C6");
       document.documentElement.style.setProperty("--card-color-third","#F67E7D");
       document.documentElement.style.setProperty("--card-color-four","#F67E7D");
     
  }
}