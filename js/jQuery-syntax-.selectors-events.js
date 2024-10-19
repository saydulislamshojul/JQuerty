$(document).ready(function () {
  // JQuery Selectors (simple selectors)
  let a = $(".test-box1").html(); // select by class
  console.log(a);
  console.log(
    "The $ sign is nothing but an identifier of jQuery() function. Instead of writing jQuery we simply write $ which is the same as jQuery()."
  );
  let b = $(".test-box2").html();
  console.log(b);
  console.log(
    `All selectors in jQuery start with the dollar sign and parentheses: $().`
  );

  $("#defination").css({ color: "green", "font-weight": "bold" }); // select by id

  $("h1").css("text-align", "center"); // select by tag name

  // Advance selecotrs
  $("#list li:first").css("color", "red");
  $("#list li:last").css("color", "pink");
  $("#list li:eq(2)").css("color", "purple");
  $("#list li:gt(3)").css("color", "green");
  $("#list li:lt(2)").css("color", "red");

  // Mouse Events
  $(".test-box1").click(function () {
    $(this).css("background-color", "red");
  });
  $(".test-box1").dblclick(function () {
    $(this).css("background-color", "green");
  });
  $(".test-box1").contextmenu(function () {
    $(this).css("background-color", "yellow");
  });
  $(".test-box1").mouseenter(function () {
    $(this).css("background-color", "pink");
  });
  $(".test-box1").mouseleave(function () {
    $(this).css("background-color", "orange");
  });

  console.log("In JQuery all works written into the function.");

  // Keyboard Events.
  $("body").keypress(function () {
    $(".test-box2").css("background-color", "yellow");
  });
  $("body").keyup(function () {
    $(".test-box2").css("background-color", "pink");
  });

  // Form Events
  $("#name, #city, #country").focus(function () {
    $(this).css("background-color", "orange");
  });
  $("#name, #city, #country").blur(function () {
    $(this).css("background-color", "");
  });
  $("#country").change(function () {
    $(this).css("background-color", "aqua");
    let a = $("#country").val();
    $(".demo").html(a);
  });
  $("#name, #city, #country").select(function () {
    $(this).css("background-color", "red");
  });
  $("#form").submit(function () {
    // alert("Your form has been submitted.");
  });

  // Window Events
  $(window).scroll(() => {
    console.log("Your are scrolling window.");
  });
  $("#div").scroll(() => {
    console.log("Your are scrolling paragraph.");
  });
  $(window).resize(() => {
    console.log("Your are resizing window.");
  });

  // Get methods
  let myHtml = $("#list").html();
  console.log(myHtml);

  let myText = $("#list").text();
  console.log(myText);

  let attr = $("#defination").attr("class");
  console.log(attr);

  $("#form").submit(() => {
    let name = $("#name").val();
    let city = $("#city").val();
    let country = $("#country").val();
    alert(`Name : ${name}, City : ${city}, Country : ${country}`);
    // i can see for get method using a variable always.
  });

  // Set Methods
  $("#set-method").click(() => {
    $(".test-box2 h2").text("This is text set method");
    $(".test-box2 p").html("This is <b>html set method</b>");
    $(".test-box2 h2").attr("class", "blueviolet");
    $("#name").val("saydul");
    $("#city").val("dhaka");
  });

  // css class methods
  $("#add-class").click(() => {
    $(".test-box3").addClass("first second"); // It will add classes
  });
  $("#remove-class").click(() => {
    $(".test-box3").removeClass("second"); // It will remove classes
  });
  $("#toggle-class").click(() => {
    $(".test-box3").toggleClass("second"); // It will add class if the class not added if added then it will remove.
  });

  // CSS Method (Use it in all previous code.)
  $("#style-btn").click(() => {
    // $('.test-box3').css("font-size", '20px')
    $(".test-box3").css({
      "font-size": "20px",
      "background-color": "lightblue",
      border: "5px dotted yellow",
    });
  });

  // On() Off() Methods for create multiple events
  // sigle event with On method.
  $(".test-box3").on("dblclick", function () {
    $(this).css("background-color", "lightskyblue");
  });
  // Multiple event with on method.
  $(".test-box3").on({
    click: function () {
      $(this).css("background-color", "aqua");
    },
    mouseenter: function () {
      $(this).css("background-color", "pink");
    },
    mouseout: function () {
      $(this).css("background-color", "green");
    },
  });

  // Off method for remove events.
  $("#remove-event").click(() => {
    $(".test-box3").off("mouseenter mouseout");
  });

  // Append & Prepend method
  $(".append").click(() => {
    $(".test-box4").append("Hello this is append <br/>");
  });
  $(".prepend").click(() => {
    $(".test-box4").prepend("Hello this is prepend <br/>");
  });

  // After & Before method.
  $(".after").click(() => {
    $(".test-box4").after("<h3>After: This is After method.</h3>");
  });
  $(".before").click(() => {
    $(".test-box4").before("<h3>Before: This is Before method.</h3>");
  });

  // Empty and Remove method.
  $(".empty").click(() => {
    $(".test-box4").empty();
  });
  $(".remove").click(() => {
    $(".test-box4").remove();
  });

  // Append-to and prepend to method. same as append & prepend method just deference is first set value then set selector.
  $(".append-to").click(() => {
    $("<h3>Append to start from bottom</h3>").appendTo(".test-box4");
  });
  $(".prepend-to").click(() => {
    $("<h3>Prepend to start from top</h3>").prependTo(".test-box4");
  });

  // Clone method for clone object.
  $(".clone-btn").click(function () {
    $(".test-box5 h2").clone().prependTo(".test-box6");
  });

  $(".clone-btn").click(function () {
    $(".test-box5 p").clone().appendTo(".test-box6");
  });

  // ReplaceWith & ReplaceAll method.
  $(".replace-with").click(function () {
    $(".test-box7 p:first").replaceWith(
      "<h3>This method is replaceWith method.</h3>"
    );
    $(".test-box7 p:nth-child(3)").replaceWith(
      "This method is replaceWith method."
    );
  });
  $(".replace-all").click(function () {
    $("<h3>This method is replaceAll method.</h3>").replaceAll(".test-box7 p");
    // For replaceAll method first we have to give value then selector.
  });

  // Wrap and unwrap method. wrap will add a parent tag on tergated tag and unwrap will remove it.
  $(".wrap").click(function () {
    $(".test-box7 p:first").wrap('<h1 id="div"></h1>');
  });
  $(".unwrap").click(function () {
    $(".test-box7 p:first").unwrap();
  });

  // WrapAll and WrapInner method.
  $(".wrapAll").click(function () {
    $(".test-box7 p").wrapAll('<div id="div"></div>');
  });
  $(".wrapInner").click(function () {
    $(".test-box7 h2").wrapInner('<span class="lightblue"></span>');
  });

  // Width & Height method.
  $(".width").click(function () {
    $(".test-box8").width("50%");
    console.clear();
    console.log("Width: " + $(".test-box8").width());
    console.log("Inner-Width: " + $(".test-box8").innerWidth());
    console.log("Outer-Width: " + $(".test-box8").outerWidth());
    console.log("Outer-Width(true): " + $(".test-box8").outerWidth(true));
  });
  $(".height").click(function () {
    // $('.test-box8').height('100%');
    console.clear();
    console.log("Height: " + $(".test-box8").height());
    console.log("Inner-Height: " + $(".test-box8").innerHeight());
    console.log("Outer-Height: " + $(".test-box8").outerHeight());
    console.log("Outer-Height(true): " + $(".test-box8").outerHeight(true));
  });

  // Position & Offset method.
  $(".position").click(function () {
    // console.log($('.test-box8').position());
    let position = $(".test-box8 h2").position();
    console.log(
      `Position-Top: ${position.top} and Position-Left: ${position.left} `
    );
  });

  $(".offset").click(function () {
    // console.log($('.test-box8').offset());
    let offSet = $(".test-box8 h2").offset();
    console.log(`Offset-Top: ${offSet.top} and Offset-Left: ${offSet.left} `);
  });

  // ScroolTop & ScroolLeft method.
  console.log($(window).scrollTop());
  console.log($(window).scrollLeft());
  $(window).scroll(function () {
    $(".fixed").text("");
    $(".fixed").append("Top: " + $(window).scrollTop());
    $(".fixed").append(" </br> left: " + $(window).scrollLeft());
  });
  $(".scrollTop").click(function () {
    $(window).scrollTop(200);
  });
  $(".scrollLeft").click(function () {
    $(window).scrollLeft(20);
  });

  // hasClass method. It will detact that elment has the class or not.
  $(".hasClass").click(function () {
    console.log($(".test-box8").hasClass("test-box"));
    console.log($(".test-box8").hasClass("test"));
  });

  // Hide, Show & Toggle method.
  $(".hide").click(function () {
    // $('.test-box9').hide();
    // $('.test-box9').hide('slow');
    // $('.test-box9').hide('farst');
    $(".test-box9").hide(3000, function () {
      // this is callback function. it will work after hide the div.
      console.log("This is div is hide");
    });
  });
  $(".show").click(function () {
    // $('.test-box9').show();
    // $('.test-box9').show('slow');
    // $('.test-box9').show('farst');
    $(".test-box9").show(3000, function () {
      console.log("This is div is show");
    });
  });
  $(".toggle").click(function () {
    // $('.test-box9').toggle();
    // $('.test-box9').toggle('slow');
    // $('.test-box9').toggle('farst');
    $(".test-box9").toggle(3000, function () {
      console.log("This is div is toggle");
    });
  });

  // fadeIn, fadeOut, fadeToggle, fadeTo method. It's like hide & show just deference between them is an effect, fade effect.
  $(".fadeOut").click(function () {
    $(".test-box9").fadeOut(3000, function () {
      console.log("This is fadeOut");
    });
  });
  $(".fadeIn").click(function () {
    $(".test-box9").fadeIn(3000, function () {
      console.log("This is fadeIn");
    });
  });
  $(".fadeToggle").click(function () {
    $(".test-box9").fadeToggle(3000, function () {
      console.log("This is fadeToggle");
    });
  });
  $(".fadeTo").click(function () {
    $(".test-box9").fadeTo(3000, 0.1, function () {
      console.log("This is fadeTo");
    });
  });

  // slideUp, slideDown, slideToggle method. It's like hide & show just deference between them is an effect, slide effect.

  $(".slideUp").click(function () {
    $(".test-box9").slideUp(2000, function () {
      console.log("This is slideUp.");
    });
  });
  $(".slideDown").click(function () {
    $(".test-box9").slideDown(2000, function () {
      console.log("This is slideDown.");
    });
  });
  $(".slideToggle").click(function () {
    $(".test-box9").slideToggle(2000, function () {
      console.log("This is slideToggle.");
    });
  });

  // Animate method for create animation. For animate any element must to be the element's position without static.
  $(".animate").click(function () {
    $(".div").animate({ left: "500px", fontSize: "20px" }, 2000, function () {
      console.log("This div is animate left to right");
    });
  });
  $(".animate").click(function () {
    $(".div").animate({ top: "500px" }, 2000, function () {
      console.log("This div is animate top to down");
    });
  });
  $(".animate").click(function () {
    $(".div").animate({ left: "0px" }, 2000, function () {
      console.log("This div is animate right to left");
    });
  });
  $(".animate").click(function () {
    $(".div").animate({ top: "0px" }, 2000, function () {
      console.log("This div is animate down to top");
    });
  });

  // Stop method for stop animation.
  $(".stopAnimate").click(function () {
    // $(".div").stop(); // It will stop just one animation.

    $(".div").stop(true); // It will stop just all animation.

    // $(".div").stop(true, true); // It will stop animation at the end point without animate.
  });

  // Method Chaining
  $(".methodChaining").click(function () {
    $(".div")
      .css({ width: 500, backgroundColor: "tan" })
      .slideUp(3000)
      .slideDown(3000);
  });

  // Ancestor traversing method. It's use to select elment's parents.
  $(".a").parent().css("background-color", "tan");
  // $('.a').parents().css('background-color', 'lightgreen');
  $(".a").parents(".outer").css("background-color", "lightgreen");
  $(".a").parentsUntil(".outer").css("background-color", "yellow");
  $(".a").offsetParent().css("background-color", "red"); // It will target the element who has any position without static. body tag has default relative position.
  $(".a").closest("div").css("background-color", "green");

  // Descendants traversing method(find & children). It's use to select elment's childs.
  $(".inner").children().css("background-color", "tan"); // It will select only the children not grand child.
  $(".inner").children(".c").css("background-color", "seagreen");

  $(".mainOuter").find(".d").css("background-color", "salmon"); // It will find all over the document.

  // Siblings method to select the siblings of targeted element.
  $(".c").siblings().css("background-color", "aqua");
  $(".a").next().css("background-color", "tomato");
  $(".b").nextAll().css("background-color", "blueviolet");
  $(".a").nextUntil(".d").css("background-color", "lightyellow");
  $(".b").prev().css("background-color", "lightgreen");
  $(".c").prevAll().css("background-color", "lightblue");
  $(".d").prevUntil(".b").css("background-color", "red");

  // Filtering methods
  $(".div1 p").first().css("background-color", "yellowgreen");
  $(".div2 p").last().css("background-color", "yellowgreen");
  $(".ul li").eq(2).css("background-color", "yellowgreen"); // eq work base on index.
  $(".ul li").eq(-1).css("background-color", "aqua");
  $(".div2 p").filter(".pera").css("background-color", "crimson");
  $(".div2 p").not(".pera").css("background-color", "yellow"); // that's mean without pera class.
  $(".ul li").slice(0, 2).css("background-color", "yellow");

  // Has & Is method.
  $("p, li").has("b, span").css("background-color", "lime");

  $(".pera").click(function () {
    if ($("p").parent().is("div")) {
      alert($("p").parent().is("div"));
      // is method mainly use for conditional statements.
    }
  });

  // Each method. It's use to start a loop like js.
  $(".ul li").each(function () {
    // console.log($(this).text());
    $(this).text("Hello World");
  });

  // Event property & method.
  // pageX and pageY property.
  $(document).mousemove(function (event) {
    $(".show").text("X-axis: " + event.pageX + " Y-axis: " + event.pageY);

    let x = event.pageX;
    let y = event.pageY;
    $(".dot").offset({ top: y, left: x });
  });

  // Event type property for see the event type.
  $(".show").on(
    "click dblclick mouseover mouseout contextmenu",
    function (event) {
      $(".div").html("Event: " + event.type);
    }
  );

  // Event which property.

  $(".show").on(
    "click dblclick mouseover mouseout mousedown",
    function (event) {
      $(".div3").html(event.type + ":" + event.which);
    }
  );

  // Event target property.
  $(".test-box10").on("click", function (event) {
    $(".div3").html("Target Element: " + event.target.nodeName);
    $(".div3").html("Target Element: " + event.target.innerText);
  });

  // PreventDefault method to stop elements value.
  $(".prevent").click(function (event) {
    event.preventDefault();
    $(".div3").html(event.isDefaultPrevented());
  });

  // stopPropagation method is used to stop event bubling.
  $(".test-box11").click(function (event) {
    alert("You just click the div element");
  });
  $(".test-box11 h2").click(function (event) {
    event.stopPropagation();
    alert("You just click the H2 element ");
  });
  $(".test-box11 p").click(function (event) {
    event.stopPropagation();
    alert("You just click the P element ");
  });
  $(".test-box11 a").click(function (event) {
    event.stopPropagation();
    alert("You just click the A element " + event.isPropagationStopped());
  });
  $(".test-box11 button").click(function (event) {
    // event.stopPropagation();
    alert("You just click the button element " + event.isPropagationStopped());
  });



});
